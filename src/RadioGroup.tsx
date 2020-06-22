import React from "react";
import classNames from "classnames";
import RadioGroupContext from "./RadioGroupContext";
import Radio from "./Radio";

export interface RenderProps<T = any> {
	value: T | undefined;
	onChange: (value: T) => void;
}

export interface RadioOption<T = any> {
	value: T;
	label: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
	disabled?: boolean;
	readOnly?: boolean;
	onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps<T = any>
	extends Omit<
		React.HTMLAttributes<HTMLDivElement>,
		"defaultValue" | "onChange" | "defaultChecked"
	> {
	prefixCls?: string;
	name?: string;
	defaultValue?: T;
	value?: T;
	disabled?: boolean;
	readOnly?: boolean;
	options?: T extends string | number ? (string | number)[] : RadioOption<T>[];
	render?: (props: RenderProps<T>) => React.ReactNode;
	onChange?: (checkedValue: T) => void;
}

export interface RadioGroupState<T = any> {
	value: T | undefined;
}

export class RadioGroup<T = any> extends React.Component<RadioGroupProps<T>, RadioGroupState<T>> {
	static defaultProps = {
		prefixCls: "rw-radio",
	};

	static getDerivedStateFromProps(nextProps: RadioGroupProps, state: RadioGroupState) {
		return {
			value: nextProps.value === undefined ? state.value : nextProps.value,
		};
	}

	state = {
		value: this.props.defaultValue,
	};

	getGroupContext() {
		return {
			toggleChange: this.toggleChange,
			value: this.state.value,
			name: this.props.name,
			disabled: !!this.props.disabled,
			readOnly: !!this.props.readOnly,
		};
	}

	getOptions() {
		const options: any[] = this.props.options || [];
		return options.map(
			(option): RadioOption => {
				if (typeof option === "string" || typeof option === "number") {
					return {
						label: option,
						value: option,
					};
				}
				return option;
			}
		);
	}

	toggleChange = (option: RadioOption<T>) => {
		const checkedValue = this.state.value;

		if (checkedValue === option.value) return;

		this.handleChange(option.value);
	};

	handleChange = (value: T) => {
		if (this.props.value === undefined) {
			this.setState({ value });
		}

		this.props.onChange?.(value);
	};

	render() {
		let {
			prefixCls,
			className,
			children,
			value,
			defaultValue,
			onChange,
			disabled,
			readOnly,
			options,
			render,
			...restProps
		} = this.props;
		const state = this.state;

		if (options && options.length > 0) {
			children = this.getOptions().map((option) => (
				<Radio
					prefixCls={prefixCls}
					key={option.value}
					disabled={option.disabled === undefined ? disabled : option.disabled}
					readOnly={option.readOnly === undefined ? readOnly : option.readOnly}
					value={option.value}
					checked={option.value === state.value}
					onChange={option.onChange}
					className={option.className}
					style={option.style}
				>
					{option.label}
				</Radio>
			));
		}

		const cls = classNames(`${prefixCls}-group`, className);

		return (
			<RadioGroupContext.Provider value={this.getGroupContext()}>
				{render ? (
					render({
						value: state.value,
						onChange: this.handleChange,
					})
				) : (
					<div {...restProps} className={cls}>
						{children}
					</div>
				)}
			</RadioGroupContext.Provider>
		);
	}
}

export default RadioGroup;

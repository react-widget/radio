import React from "react";
import classNames from "classnames";

export interface RWRadioProps extends React.HTMLAttributes<HTMLInputElement> {
	prefixCls?: string;
	className?: string;
	name?: string;
	defaultChecked?: boolean;
	checked?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	inputRef?: React.RefObject<HTMLInputElement>;
}

export interface RWRadioState {
	checked: boolean;
}

export class RWRadio extends React.Component<RWRadioProps, RWRadioState> {
	static defaultProps: RWRadioProps = {
		prefixCls: "rw-radio",
		defaultChecked: false,
	};

	static getDerivedStateFromProps(props: RWRadioProps, state: RWRadioState) {
		return {
			checked: props.checked === undefined ? state.checked : props.checked,
		};
	}

	state = {
		checked: !!this.props.defaultChecked,
	};

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const props = this.props;

		if (props.disabled) {
			return;
		}

		if (props.checked === undefined) {
			this.setState({
				checked: e.target.checked,
			});
		}

		props.onChange?.(e);
	};

	render() {
		let {
			prefixCls,
			className,
			style,
			name,
			disabled,
			readOnly,
			inputRef,
			defaultChecked,
			...restProps
		} = this.props;
		let { checked } = this.state;

		const cls = classNames(prefixCls, className, {
			[`${prefixCls}-checked`]: checked,
			[`${prefixCls}-disabled`]: disabled,
		});
		const inputCls = classNames({
			[`${prefixCls}-input`]: true,
		});

		return (
			<span className={cls} style={style}>
				<input
					{...restProps}
					ref={inputRef}
					className={inputCls}
					name={name}
					type="radio"
					readOnly={readOnly}
					disabled={disabled}
					checked={!!checked}
					onChange={this.handleChange}
				/>
				<span className={`${prefixCls}-inner`} />
			</span>
		);
	}
}
export default RWRadio;

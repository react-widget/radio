import React from "react";
import classNames from "classnames";
import RadioGroupContext, { RadioGroupContextValue } from "./RadioGroupContext";
import { RWRadio, RWRadioProps } from "./RWRadio";
import { RadioGroup } from "./RadioGroup";

export interface RadioProps
	extends Omit<RWRadioProps, "onChange" | "onMouseEnter" | "onMouseLeave" | "type"> {
	name?: string;
	value?: any;
	onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
	onMouseEnter?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
	onMouseLeave?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}

export const Radio: React.FC<RadioProps> & { Group: typeof RadioGroup } = function ({
	prefixCls,
	className,
	name,
	value,
	style,
	checked,
	disabled,
	readOnly,
	onChange,
	onMouseEnter,
	onMouseLeave,
	children,
	...restProps
}) {
	const context = React.useContext<RadioGroupContextValue | null>(RadioGroupContext);

	if (context) {
		name = context.name;
		checked = context.value === value;
		disabled = disabled || context.disabled;
		readOnly = readOnly || context.readOnly;
	}

	const cls = classNames(className, {
		[`${prefixCls}-wrapper`]: true,
		[`${prefixCls}-wrapper-checked`]: checked,
		[`${prefixCls}-wrapper-disabled`]: disabled,
		[`${prefixCls}-wrapper-readonly`]: readOnly,
	});

	const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e.target.checked, e);
		}
		if (context) {
			context.toggleChange({
				value,
				label: children,
			});
		}
	}, []);

	return (
		<label
			className={cls}
			style={style}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<RWRadio
				{...restProps}
				name={name}
				checked={checked}
				onChange={handleChange}
				prefixCls={prefixCls}
				disabled={disabled}
				readOnly={readOnly}
			/>
			{children !== undefined ? (
				<span className={`${prefixCls}-label`}>{children}</span>
			) : null}
		</label>
	);
};

Radio.displayName = "Radio";
Radio.defaultProps = {
	prefixCls: "rw-radio",
};
Radio.Group = RadioGroup;

export default Radio;

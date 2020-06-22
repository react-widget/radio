import React from "react";
import classNames from "classnames";
import RadioGroupContext from "./RadioGroupContext";
import { RWRadio } from "./RWRadio";
import { RadioGroup } from "./RadioGroup";
export const Radio = function ({ prefixCls, className, name, value, style, checked, disabled, readOnly, onChange, onMouseEnter, onMouseLeave, children, ...restProps }) {
    const context = React.useContext(RadioGroupContext);
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
    const handleChange = React.useCallback((e) => {
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
    return (React.createElement("label", { className: cls, style: style, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        React.createElement(RWRadio, Object.assign({}, restProps, { name: name, checked: checked, onChange: handleChange, prefixCls: prefixCls, disabled: disabled, readOnly: readOnly })),
        children !== undefined ? (React.createElement("span", { className: `${prefixCls}-label` }, children)) : null));
};
Radio.displayName = "Radio";
Radio.defaultProps = {
    prefixCls: "rw-radio",
};
Radio.Group = RadioGroup;
export default Radio;

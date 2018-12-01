import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import Radio from './Radio';

function getCheckedValue(children) {
    let value = null;
    let matched = false;
    React.Children.forEach(children, (radio) => {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });
    return matched ? { value } : undefined;
}

export default class RadioGroup extends React.Component {
    static defaultProps = {
        options: [],
        prefixCls: 'rw-radio',
    };

    static propTypes = {
        defaultValue: PropTypes.any,
        value: PropTypes.any,
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func,
        name: PropTypes.string,
    };

    static childContextTypes = {
        radioGroup: PropTypes.any,
    };

    static getDerivedStateFromProps(props, state) {
        const newState = {};

        if ('value' in props) {
            newState.value = props.value;
        }

        return newState;
    }


    constructor(props) {
        super(props);
        let value;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            const checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        this.state = {
            value,
        };
    }

    getChildContext() {
        return {
            radioGroup: {
                onChange: this.onRadioChange,
                value: this.state.value,
                disabled: this.props.disabled,
                name: this.props.name,
            },
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState);
    }
    getOptions() {
        const { options } = this.props;
        return options.map(option => {
            if (typeof option === 'string') {
                return {
                    label: option,
                    value: option,
                };
            }
            return option;
        });
    }
    onRadioChange = (e) => {
        const lastValue = this.state.value;
        const { value } = e.target;

        if (!('value' in this.props)) {
            this.setState({ value });
        }
        const onChange = this.props.onChange;
        if (onChange && value !== lastValue) {
            onChange(e);
        }
    }
    render() {
        const { props, state } = this;
        const { prefixCls, className, options, style = {} } = props;
        let children = props.children;
        if (options && options.length > 0) {
            children = this.getOptions().map(option => (
                <Radio
                    key={option.key || option.value}
                    prefixCls={prefixCls}
                    disabled={'disabled' in option ? option.disabled : props.disabled}
                    value={option.value}
                    onChange={this.onRadioChange}
                    checked={state.value === option.value}
                >
                    {option.label}
                </Radio>
            ));
        }

        const classString = classNames({
            [`${prefixCls}-group`]: true,
            [className]: className
        });

        return (
            <div
                className={classString}
                style={style}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                {children}
            </div>
        );
    }
}
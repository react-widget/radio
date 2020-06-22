# Radio

Radio组件

## 安装

```
npm install --save react-widget-radio
```


## 使用

[![Edit react-widget-radio](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/keen-morning-kgrgi?fontsize=14&hidenavigation=1&theme=dark)

```js
import {Radio} from 'react-widget-radio';
import 'react-widget-radio/style';

<Radio>Radio</Radio>

```



### Interfaces

```ts
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
export declare class RWRadio extends React.Component<RWRadioProps, RWRadioState> {
    static defaultProps: RWRadioProps;
    static getDerivedStateFromProps(props: RWRadioProps, state: RWRadioState): {
        checked: boolean;
    };
    state: {
        checked: boolean;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}

export interface RadioProps extends Omit<RWRadioProps, "onChange" | "onMouseEnter" | "onMouseLeave" | "type"> {
    name?: string;
    value?: any;
    onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}
export declare const Radio: React.FC<RadioProps> & {
    Group: typeof RadioGroup;
};

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
export interface RadioGroupProps<T = any> extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange" | "defaultChecked"> {
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
export declare class RadioGroup<T = any> extends React.Component<RadioGroupProps<T>, RadioGroupState<T>> {
    static defaultProps: {
        prefixCls: string;
    };
    static getDerivedStateFromProps(nextProps: RadioGroupProps, state: RadioGroupState): {
        value: any;
    };
    state: {
        value: T | undefined;
    };
    getGroupContext(): {
        toggleChange: (option: RadioOption<T>) => void;
        value: T | undefined;
        name: string | undefined;
        disabled: boolean;
        readOnly: boolean;
    };
    getOptions(): RadioOption<any>[];
    toggleChange: (option: RadioOption<T>) => void;
    handleChange: (value: T) => void;
    render(): JSX.Element;
}

export interface RadioGroupContextValue {
    toggleChange: (option: {
        value: any;
        label: React.ReactNode;
    }) => void;
    value: any;
    name: string | undefined;
    disabled: boolean;
    readOnly: boolean;
}

```


### 基础样式

```css
/* RWRadio 基础样式 */
.rw-radio {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	outline: none;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	flex: none;
}

.rw-radio-input {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	cursor: pointer;
	opacity: 0;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

.rw-radio-inner {
	position: relative;
	top: 0;
	left: 0;
	display: block;
	width: 16px;
	height: 16px;
	border: 1px solid #d9d9d9;
	border-radius: 50%;
	box-sizing: border-box;
}

.rw-radio-input:focus + .rw-radio-inner,
.rw-radio:hover .rw-radio-inner {
	border-color: #1890ff;
}

.rw-radio-disabled .rw-radio-input,
.rw-radio-disabled {
	cursor: not-allowed;
}

.rw-radio-disabled:hover .rw-radio-inner,
.rw-radio-disabled:active .rw-radio-inner,
.rw-radio-disabled .rw-radio-inner {
	background-color: #f5f5f5 !important;
	border-color: #d9d9d9 !important;
}

/* RWRadio 选中样式 */
.rw-radio-checked .rw-radio-inner {
	/* background: #1890ff; */
	border-color: #1890ff;
}

.rw-radio-inner:after {
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	display: table;
	background: #1890ff;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	transform: scale(0) translate(-4px, -4px);
	opacity: 0;
	content: " ";
}

.rw-radio-checked .rw-radio-inner:after {
	opacity: 1;
	transform: scale(1) translate(-4px, -4px);
}

.rw-radio-disabled .rw-radio-inner:after {
	background-color: #d9d9d9;
}

/* Radio */
.rw-radio-wrapper {
	display: inline-flex;
	cursor: pointer;
	vertical-align: middle;
	outline: none;
	align-items: center;
	flex: 1;
}

.rw-radio-wrapper:hover .rw-radio-inner {
	border-color: #1890ff;
}

.rw-radio-label {
	flex: 1;
	padding: 0 8px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.rw-radio-wrapper-disabled .rw-radio-label {
	color: rgba(0, 0, 0, 0.25);
	cursor: not-allowed;
}

/* RadioGroup */
.rw-radio-group {
	display: inline-flex;
}


```

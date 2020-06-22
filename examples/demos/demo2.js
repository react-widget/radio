import React from "react";
import { Radio } from "../../src";

const RadioGroup = Radio.Group;

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

export default class Demo2 extends React.Component {
	state = {
		checkedList: defaultCheckedList,
		indeterminate: true,
		checkAll: false,
	};

	onChange = (checkedList) => {
		this.setState({
			checkedList,
			indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
			checkAll: checkedList.length === plainOptions.length,
		});
	};

	onCheckAllChange = (checked, e) => {
		this.setState({
			checkedList: checked ? plainOptions : [],
			indeterminate: false,
			checkAll: checked,
		});
	};

	render() {
		return (
			<div>
				<RadioGroup options={plainOptions} />
			</div>
		);
	}
}

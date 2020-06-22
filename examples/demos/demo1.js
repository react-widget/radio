import React, { Component } from "react";
import { RWRadio } from "../../src/RWRadio";
import { Radio } from "../../src/Radio";
import { RadioGroup } from "../../src/RadioGroup";

export default class DEMO extends Component {
	render() {
		return (
			<div>
				<input type="radio" />
				<RWRadio onChange={(e) => console.log(e.target.checked)} /> <RWRadio checked />{" "}
				<RWRadio disabled checked /> <RWRadio /> <RWRadio disabled />{" "}
				<Radio style={{ width: 100 }} defaultChecked>
					CheckobzCheckobzCheckobz
				</Radio>
				<Radio style={{ width: 100 }} checked>
					CheckobzCheckobzCheckobz
				</Radio>
				<Radio checked disabled>
					radio disabled
				</Radio>
				<RadioGroup defaultValue={"A"} onChange={(v) => console.log("group changed:", v)}>
					<Radio value="A">A</Radio>
					<Radio value="B">B</Radio>
					<Radio value="C">C</Radio>
					<Radio value="D">D</Radio>
					<Radio value="E">E</Radio>
				</RadioGroup>
				<RadioGroup
					defaultValue={["A", "D"]}
					options={["A", "B", "C", "D", "E", "F"]}
				></RadioGroup>
			</div>
		);
	}
}

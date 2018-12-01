import React, { Component } from 'react';
import InnerCheckbox from '../../src/InnerRadio';
import Checkbox from '../../src/index';

const CheckboxGroup = Checkbox.Group;


export default class DEMO extends Component {

    state = {
        checked: true,
        disabled: false,
    };


    toggleChecked = () => {
        this.setState({ checked: !this.state.checked });
    }
    toggleDisable = () => {
        this.setState({ disabled: !this.state.disabled });
    }
    onChange = (e) => {
        console.log('checked = ', e.target.checked);
        this.setState({
            checked: e.target.checked,
        });
    }

    render() {
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
        return (
            <div>
                <p style={{ marginBottom: '20px' }}>

                    &nbsp;
                    <InnerCheckbox
                        checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChange}
                    />
                    &nbsp;
                    <InnerCheckbox />
                </p>
                <p>
                    <Checkbox>test1</Checkbox>
                    <Checkbox disabled>测试A</Checkbox>
                    <Checkbox readOnly>测试B</Checkbox>
                    <Checkbox checked>测试C</Checkbox>
                    <Checkbox defaultChecked>测试D</Checkbox>
                    <Checkbox onChange={this.onChange} checked={this.state.checked}>测试D</Checkbox>
                </p>
                <p>
                    <CheckboxGroup disabled>
                        <Checkbox >测试A</Checkbox>
                        <Checkbox >测试B</Checkbox>
                        <Checkbox >测试C</Checkbox>
                        <Checkbox >测试D</Checkbox>
                        <Checkbox >测试D</Checkbox>
                    </CheckboxGroup>
                </p>
                <p>
                    <CheckboxGroup value="C">
                        <Checkbox value="A">测试A</Checkbox>
                        <Checkbox value="B">测试B</Checkbox>
                        <Checkbox value="C">测试C</Checkbox>
                        <Checkbox value="D">测试D</Checkbox>
                        <Checkbox value="E">测试E</Checkbox>
                    </CheckboxGroup>
                </p>
                <p>
                    <CheckboxGroup defaultValue="C">
                        <Checkbox value="A">测试A</Checkbox>
                        <Checkbox value="B">测试B</Checkbox>
                        <Checkbox value="C" disabled>测试C</Checkbox>
                        <Checkbox value="D">测试D</Checkbox>
                        <Checkbox value="E">测试E</Checkbox>
                    </CheckboxGroup>
                </p>
                <p>
                    <CheckboxGroup >
                        <Checkbox value="A">测试A</Checkbox>
                        <Checkbox value="B">测试B</Checkbox>
                        <Checkbox value="C" checked>测试C</Checkbox>
                        <Checkbox value="D">测试D</Checkbox>
                        <Checkbox value="E">测试E</Checkbox>
                    </CheckboxGroup>
                </p>
                <p>
                    <CheckboxGroup
                        options={[
                            'A', 'B', 'C', 'D', 'E'
                        ]}
                        value="C"
                    />
                </p>
                <p>
                    <CheckboxGroup
                        onChange={(v) => console.log(v)}
                        options={[
                            {
                                label: '测试A',
                                value: "A"
                            },
                            {
                                label: '测试B',
                                value: "B"
                            },
                            {
                                label: '测试C',
                                value: "C"
                            },
                            {
                                label: '测试D',
                                value: "D"
                            },
                            {
                                label: '测试E',
                                value: "E"
                            }
                        ]}

                    />
                </p>
                <p>
                    <button
                        onClick={this.toggleChecked}
                    >
                        {!this.state.checked ? 'Check' : 'Uncheck'}
                    </button>
                    <button
                        style={{ marginLeft: '10px' }}
                        onClick={this.toggleDisable}
                    >
                        {!this.state.disabled ? 'Disable' : 'Enable'}
                    </button>
                </p>
            </div >
        );
    }

}

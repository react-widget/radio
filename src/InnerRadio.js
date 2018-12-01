import React from 'react';
import PropTypes from 'prop-types';
import InnerCheckbox from 'react-widget-checkbox/lib/InnerCheckbox';

export default class InnerRadio extends React.Component {
    static propTypes = {
        prefixCls: PropTypes.string
    };

    static defaultProps = {
        prefixCls: 'rw-radio',
    };

    render() {
        return <InnerCheckbox {...this.props} type="radio" indeterminate={false} />;
    }
}
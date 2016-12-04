import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Validation from 'react-validation';

export default class MaterialRaisedButton extends Validation.components.Button {
    static contextTypes = {
        errors: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    };

    render() {
        const isDisabled = !!Object.keys(this.context.errors).length;

        return (
            <RaisedButton
              disabled={isDisabled}
              {...this.props}
            />
        );
    }
}

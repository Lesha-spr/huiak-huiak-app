import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Validation from 'react-validation';

export default class MaterialInput extends Validation.components.Input {
    static propTypes = {
        validations: PropTypes.arrayOf(PropTypes.string).isRequired,
        errorClassName: PropTypes.string,
        containerClassName: PropTypes.string,
        errorContainerClassName: PropTypes.string
    };

    static contextTypes = {
        register: PropTypes.func.isRequired,
        unregister: PropTypes.func.isRequired,
        validateState: PropTypes.func.isRequired,
        components: PropTypes.objectOf(PropTypes.any),
        errors: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    };

    render() {
        const {
            /* eslint-disable */
            validations,
            ...rest
            /* eslint-enable */
        } = this.props;
        // TODO: Refactor conditions
        const isInvalid = this.state.isUsed
            && this.state.isChanged
            && !!this.context.errors[this.props.name];
        const value = this.state.isCheckbox ? this.props.value : this.state.value;
        const error = isInvalid
            ? Validation.rules[this.context.errors[this.props.name][0]]
            .hint(this.state.value, this.context.components)
            : null;

        return (
            <TextField
              {...rest}
              errorText={isInvalid && error}
              value={value}
              onChange={this.onChange}
              onBlur={this.onBlur}
            />
        );
    }
}

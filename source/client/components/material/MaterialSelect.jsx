import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import Validation from 'react-validation';
import { noop } from 'lodash';

export default class MaterialSelect extends Validation.components.Select {
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

    onChange = (event, index, value) => {
        event.persist();

        this.setState({
            isChanged: true,
            value
        }, () => {
            this.context.validateState(this.props.name);

            (this.props.onChange || noop)(event);
        });
    };

    render() {
        const {
            /* eslint-disable */
            validations,
            /* eslint-enable */
            ...rest
        } = this.props;
        // TODO: Refactor conditions
        const isInvalid = this.state.isUsed
            && this.state.isChanged
            && !!this.context.errors[this.props.name];
        const error = isInvalid
            ? Validation.rules[this.context.errors[this.props.name][0]]
            .hint(this.state.value, this.context.components)
            : null;

        return (
            <SelectField
              {...rest}
              errorText={isInvalid && error}
              value={this.state.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
            >
                {this.props.children}
            </SelectField>
        );
    }
}

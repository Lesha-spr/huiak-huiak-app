import React from 'react';
import Validation from 'react-validation';

Object.assign(Validation.rules, {
    required: {
        rule: value => value && value.toString().trim(),
        hint: () => <span>required</span>
    }
});

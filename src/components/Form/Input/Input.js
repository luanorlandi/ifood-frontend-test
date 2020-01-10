import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const Input = ({ formik, field, type }) => {
  const min = get(field, 'validation.min');
  const max = get(field, 'validation.max');

  return (
    <div className="field">
      <label htmlFor={field.id}>{field.name}</label>
      <input
        className="input"
        id={field.id}
        type={type} // TODO handle input type number (useful for mobile keyboard)
        onChange={formik.handleChange}
        value={formik.values[field.id]}
        min={min}
        max={max}
      />
    </div>
  );
};

Input.propTypes = {
  formik: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;

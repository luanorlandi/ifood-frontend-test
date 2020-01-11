import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classNames from 'classnames';

import './Input.scss';

const Input = ({
  formik,
  field,
  type,
  placeholder,
  styleType,
}) => {
  const min = get(field, 'validation.min');
  const max = get(field, 'validation.max');

  return (
    <div className="field">
      <label htmlFor={field.id}>{field.name}</label>
      <input
        className={classNames('input', {
          'input--is-white': styleType === 'white',
        })}
        id={field.id}
        type={type} // TODO handle input type number (useful for mobile keyboard)
        placeholder={placeholder}
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
  placeholder: PropTypes.string,
  styleType: PropTypes.oneOf(['dark', 'white']),
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  styleType: 'dark',
};

export default Input;

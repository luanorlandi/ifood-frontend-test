import React from 'react';
import PropTypes from 'prop-types';

import './SelectInput.scss';

const SelectInput = ({ formik, field }) => (
  <div className="select-input field">
    <label htmlFor={field.id}>{field.name}</label>
    <div className="select">
      <select id={field.id} onChange={formik.handleChange}>
        <option value=""> </option>
        {field.values.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  </div>
);

SelectInput.propTypes = {
  formik: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
};

export default SelectInput;

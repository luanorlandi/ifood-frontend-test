import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './Datepicker.scss';

const Datepicker = ({ formik, field }) => (
  <div className="datepicker field">
    <label htmlFor={field.id}>{field.name}</label>
    <DatePicker // TODO ajustar para mobile usar type nativo de calendario
      selected={formik.values[field.id]}
      onChange={(date) => formik.setFieldValue(field.id, date)}
      showTimeSelect
      timeIntervals={60}
      timeCaption="Horário"
      locale="pt-BR"
      timeFormat="p"
      dateFormat="Pp"
      className="input"
    />
  </div>
);

Datepicker.propTypes = {
  formik: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
};

export default Datepicker;

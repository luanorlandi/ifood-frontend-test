import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './Datepicker.scss';
import useDevice from '../../../hooks/useDevice';

const Datepicker = ({ formik, field }) => {
  const { isTouch } = useDevice();

  return (
    <div className="datepicker field">
      <label htmlFor={field.id}>{field.name}</label>
      {!isTouch && (
        <DatePicker
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
      )}
      {isTouch && (
        <input
          id={field.id}
          className="input"
          type="datetime-local"
          onChange={(event) => {
            const { value } = event.target;
            const dateValue = new Date(value).toISOString();
            formik.setFieldValue(field.id, dateValue);
          }}
        />
      )}
    </div>
  );
};

Datepicker.propTypes = {
  formik: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
};

export default Datepicker;

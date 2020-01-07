import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import Input from '../Form/Input/Input';
import SelectInput from '../Form/SelectInput/SelectInput';
import Datepicker from '../Form/Datepicker/Datepicker';
import './Filters.scss';

const parseInitialValues = (filters) => (
  filters.reduce((accumulator, filter) => (
    {
      ...accumulator,
      [filter.id]: '', // TODO handle types of filter
    }
  ), {})
);

const Filters = ({ filters }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      ...parseInitialValues(filters),
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const renderFilter = (filter) => {
    if (filter.values) {
      return <SelectInput formik={formik} field={filter} key={filter.id} />;
    }

    if (filter.validation && filter.validation.entityType === 'DATE_TIME') {
      return <Datepicker formik={formik} field={filter} key={filter.id} />;
    }

    if (filter.validation && filter.validation.primitiveType === 'INTEGER') {
      return <Input type="number" formik={formik} field={filter} key={filter.id} />;
    }

    throw new Error(`Unknow filter type '${filter.id}'`);
  };

  return (
    <form className="filters" onSubmit={formik.handleSubmit}>
      <Input formik={formik} field={{ name: 'Nome da música', id: 'name' }} />
      {filters.map((filter) => (
        renderFilter(filter)
      ))}
      <button className="button is-primary" type="submit">Buscar</button>
      {/* <pre>{JSON.stringify(formik, null, 2)}</pre> */}
    </form>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default Filters;

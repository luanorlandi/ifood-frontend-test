import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import SearchContext from '../../contexts/SearchContext';
import Input from '../Form/Input/Input';
import SelectInput from '../Form/SelectInput/SelectInput';
import Datepicker from '../Form/Datepicker/Datepicker';
import './Filters.scss';

// TODO implementar testes de logica nessas funcoes
const parseInitialValues = (filters) => (
  filters.reduce((accumulator, filter) => (
    {
      ...accumulator,
      [filter.id]: '', // TODO handle types of filter
    }
  ), {})
);

const parseEmptyValues = (values) => {
  const entries = Object.entries(values);

  return entries.reduce((accumulator, [key, value]) => {
    if (value === '') {
      return accumulator;
    }

    return { ...accumulator, [key]: value };
  }, {});
};

const Filters = ({ filters }) => {
  const { setSearch } = useContext(SearchContext);
  const formik = useFormik({
    initialValues: {
      name: '',
      ...parseInitialValues(filters),
    },
    onSubmit: (values) => {
      const parsedValues = parseEmptyValues(values);
      setSearch(parsedValues);
      // TODO fazer a busca no componente do form,
      // salvar resultado no context e usar isSubmitting para loading
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

    throw new Error(`Unknow filter type in '${filter.id}'`);
  };

  return (
    <form className="filters" onSubmit={formik.handleSubmit}>
      <Input formik={formik} field={{ name: 'Nome da música', id: 'name' }} />
      {filters.map((filter) => (
        renderFilter(filter)
      ))}
      {/* TODO fazer sem botão submit */}
      <button className="button is-primary" type="submit">Buscar</button>
    </form>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default Filters;

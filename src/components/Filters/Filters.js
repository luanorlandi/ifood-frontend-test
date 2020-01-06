import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

const parseInitialValues = (filters) => (
  filters.reduce((accumulator, filter) => (
    {
      ...accumulator,
      [filter.id]: '', // TODO handle types of filter
    }
  ), {})
);

const isSelectInput = (filter) => {
  if (filter.values) {
    return true;
  }

  return false;
};

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {filters.map((filter) => (
        isSelectInput(filter) ? (
          <div key={filter.id}>
            <label htmlFor={filter.id}>{filter.name}</label>
            <input
              id={filter.id}
              name={filter.id}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
        ) : (
          <div key={filter.id}>
            <label htmlFor={filter.id}>{filter.name}</label>
            <input
              id={filter.id}
              name={filter.id}
              type="text" // TODO handle input type number (useful for mobile keyboard)
              onChange={formik.handleChange}
              value={formik.values[filter.id]}
            />
          </div>
        )
      ))}
      <button type="submit">Submit</button>
      <pre>{JSON.stringify(formik, null, 2)}</pre>
    </form>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default Filters;

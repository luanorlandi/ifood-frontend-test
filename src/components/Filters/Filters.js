import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import classNames from 'classnames';

import PlaylistsContext from '../../contexts/PlaylistsContext';
import Input from '../Form/Input/Input';
import SelectInput from '../Form/SelectInput/SelectInput';
import Datepicker from '../Form/Datepicker/Datepicker';
import getFeaturedPlaylists from '../../api/getFeaturedPlaylists';
import constants from '../../constants';
import './Filters.scss';

const { REFRESH_INTERVAL } = constants;

// TODO implementar testes de logica nessas funcoes
const parseInitialValues = (filters) => (
  filters.reduce((accumulator, filter) => (
    {
      ...accumulator,
      [filter.id]: '',
    }
  ), {})
);

const Filters = ({ filters }) => {
  const { setPlaylists } = useContext(PlaylistsContext);
  const intervalId = useRef(null);
  const formik = useFormik({
    initialValues: {
      ...parseInitialValues(filters),
    },
    onSubmit: (values, { setSubmitting }) => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }

      getFeaturedPlaylists(values)
        .then((newPlaylists) => {
          setPlaylists(newPlaylists);
          intervalId.current = setInterval(() => {
            getFeaturedPlaylists(values);
          }, REFRESH_INTERVAL);
        })
        .finally(() => setSubmitting(false));
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
      // TODO lidar com numero inteiro, impedir float
      return <Input type="number" formik={formik} field={filter} key={filter.id} />;
    }

    throw new Error(`Unknow filter type in '${filter.id}'`);
  };

  return (
    <form className="filters" onSubmit={formik.handleSubmit}>
      {filters.map((filter) => (
        renderFilter(filter)
      ))}
      <button
        type="submit"
        className={classNames('button is-primary', {
          'is-loading': formik.isSubmitting,
        })}
      >
        Buscar
      </button>
    </form>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default Filters;

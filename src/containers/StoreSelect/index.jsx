import React from 'react';
import PropTypes from 'prop-types';

import { navigate, useStaticQuery, graphql } from 'gatsby';

import Select from '@components/Select';

const handleSelectItem = (value) => navigate(`/stores/${value}`);

function StoreSelect(props) {
  const data = useStaticQuery(graphql`
    {
      allStore {
        nodes {
          name
          value
        }
      }
    }
  `);

  const items = data.allStore.nodes.map((store) => ({
    text: store.name,
    value: store.value,
  }));

  return (
    <Select
      selectedValue={props.selectedValue}
      items={items}
      onChange={handleSelectItem}
    />
  );
}

StoreSelect.propTypes = {
  selectedValue: PropTypes.string.isRequired,
};
StoreSelect.defaultProps = {};

export default StoreSelect;

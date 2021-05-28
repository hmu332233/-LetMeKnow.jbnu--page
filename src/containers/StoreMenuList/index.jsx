import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useQuery } from 'react-query';

import MemuApi from '@api/MenuApi';

import DayTabHeader from '@components/DayTabHeader';
import MenuList from '@components/MenuList';
import LoadAnimation from '@components/LoadAnimation';

const DAY_OF_WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const now = new Date();

function StoreMenuList({ value }) {
  const { isLoading, data: allMenus } = useQuery(
    ['menu', value],
    () => MemuApi.listMenus({ store: value }),
    {
      initialData: {},
    }
  );

  const [selectedDay, setSelectedDay] = useState(DAY_OF_WEEK[now.getDay()]);
  const handleClickTabItem = (value) => {
    setSelectedDay(value);
  };

  const menus = allMenus[selectedDay] || [];

  return (
    <>
      <DayTabHeader
        selectedValue={selectedDay}
        onItemClick={handleClickTabItem}
      />
      <LoadAnimation loading={isLoading}>
        <MenuList menus={menus} />
      </LoadAnimation>
    </>
  );
}

StoreMenuList.propTypes = {
  value: PropTypes.string.isRequired,
};
StoreMenuList.defaultProps = {};

export default StoreMenuList;

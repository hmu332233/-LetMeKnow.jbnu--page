import React from 'react';
import PropTypes from 'prop-types';

import DayTabHeader from '@containers/DayTabHeader';
import MenuList from '@components/MenuList';

class StoreMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMenus: [],
      menus: [],
      selectedDay: 'mon',
    };

    this.handleClickTabItem = this.handleClickTabItem.bind(this);
  }

  handleClickTabItem(value) {
    this.setState({ selectedDay: value });
  }

  render() {
    return (
      <>
        <DayTabHeader
          selectedValue={this.state.selectedDay}
          onItemClick={this.handleClickTabItem}
        />
        <MenuList />
      </>
    );
  }
}

StoreMenuList.propTypes = {};
StoreMenuList.defaultProps = {};

export default StoreMenuList;

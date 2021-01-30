import React from 'react';
import PropTypes from 'prop-types';

import TabHeader from '@components/TabHeader';
import MenuList from '@components/MenuList';

class StoreMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMenus: [],
      menus: [],
    };
  }

  render() {
    return (
      <>
        <TabHeader />
        <MenuList />
      </>
    );
  }
}

StoreMenuList.propTypes = {};
StoreMenuList.defaultProps = {};

export default StoreMenuList;

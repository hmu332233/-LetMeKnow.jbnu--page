import React from 'react';
import PropTypes from 'prop-types';

import MemuApi from '@api/MenuApi';

import DayTabHeader from '@containers/DayTabHeader';
import MenuList from '@components/MenuList';

import _mapValues from 'lodash/mapValues';
class StoreMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMenus: {},
      menus: [],
      selectedDay: 'mon',
    };

    this.handleClickTabItem = this.handleClickTabItem.bind(this);
    this.fetchMenus = this.fetchMenus.bind(this);
  }

  componentDidMount() {
    this.fetchMenus();
  }

  handleClickTabItem(value) {
    this.setState((prevState) => ({
      selectedDay: value,
      menus: prevState.allMenus[value] || [],
    }));
  }

  fetchMenus() {
    MemuApi.listMenus({ store: this.props.value }).then((res) => {
      const allMenus = _mapValues(res.data, (menus) => {
        return menus.map((menu) => ({
          subTitle: menu.place,
          title: menu.category ? `${menu.time} (${menu.category})` : menu.time,
          menu: menu.menus.split(' ').join('\n'),
        }));
      });
      this.setState({
        allMenus,
        menus: allMenus[this.state.selectedDay] || [],
      });
    });
  }

  render() {
    return (
      <>
        <DayTabHeader
          selectedValue={this.state.selectedDay}
          onItemClick={this.handleClickTabItem}
        />
        <MenuList menus={this.state.menus} />
      </>
    );
  }
}

StoreMenuList.propTypes = {
  value: PropTypes.string.isRequired,
};
StoreMenuList.defaultProps = {};

export default StoreMenuList;

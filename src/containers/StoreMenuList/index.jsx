import React from 'react';
import PropTypes from 'prop-types';

import MemuApi from '@api/MenuApi';

import DayTabHeader from '@containers/DayTabHeader';
import MenuList from '@components/MenuList';
import LoadAnimation from '@components/LoadAnimation';

import _mapValues from 'lodash/mapValues';

const DAY_OF_WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

class StoreMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMenus: {},
      menus: [],
      selectedDay: DAY_OF_WEEK[new Date().getDay()],
      isLoading: true,
    };

    this.handleClickTabItem = this.handleClickTabItem.bind(this);
    this.fetchMenus = this.fetchMenus.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        selectedDay: DAY_OF_WEEK[new Date().getDay()],
      },
      this.fetchMenus
    );
  }

  handleClickTabItem(value) {
    this.setState(
      {
        selectedDay: value,
        isLoading: true,
      },
      () => {
        setTimeout(() => {
          this.setState((prevState) => ({
            menus: prevState.allMenus[value] || [],
            isLoading: false,
          }));
        }, 300);
      }
    );
  }

  fetchMenus() {
    this.setState({ isLoading: true });

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
        isLoading: false,
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
        <LoadAnimation loading={this.state.isLoading}>
          <MenuList menus={this.state.menus} />
        </LoadAnimation>
      </>
    );
  }
}

StoreMenuList.propTypes = {
  value: PropTypes.string.isRequired,
};
StoreMenuList.defaultProps = {};

export default StoreMenuList;

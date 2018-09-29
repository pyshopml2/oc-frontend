/**
 *
 * CatalogPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { notification, Button, Tabs, Select } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCatalogPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BasicLayout from '../BasicLayout/Loadable';
import PositionsTable from '../../components/PositionsTable/Loadable';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

/* eslint-disable react/prefer-stateless-function */
export class CatalogPage extends React.Component {
  state = {
    tabPosition: 'top',
  };

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };

  render() {
    return (
      <BasicLayout>
        <div>
          <Tabs tabPosition={this.state.tabPosition}>
            <TabPane tab="Должности" key="1">
              <PositionsTable />
            </TabPane>
            <TabPane tab="Роды деятельности" key="2">
              Роды деятельности
            </TabPane>
            <TabPane tab="Типы событий" key="3">
              Типы событий
            </TabPane>
            <TabPane tab="Откуда клиент" key="4">
              Откуда клиент
            </TabPane>
            <TabPane tab="Месторасположения" key="5">
              Месторасположения
            </TabPane>
            <TabPane tab="Товары" key="6">
              Товары
            </TabPane>
          </Tabs>
        </div>
      </BasicLayout>
    );
  }
}

CatalogPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogpage: makeSelectCatalogPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CatalogPage);

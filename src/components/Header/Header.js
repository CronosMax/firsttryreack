/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import {Grid, Row} from 'react-bootstrap';
import Link from '../Link';
import Navigation from '../Navigation';

var Header = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false
    };
  },

  handleNavShow: function(stateNavValue) {
    this.setState({
      isVisible: stateNavValue
    })
  },

  render: function(){
    let displayLayout = s.header + ' ' + ((this.state.isVisible) ? s.menu_act : '');
    return (
      <Grid fluid className={displayLayout}>
        <Row>
          <img className={s.header__img} src={require('./img/bg.jpg')} alt="header_img" />
        </Row>
        <Grid bsStyle className={s.header__container}>
          <Navigation navShow={this.handleNavShow} showed={this.state.isVisible} />
        </Grid>
        <Grid bsStyle className={s.header__bottom_h}>
          <div className={s.header__bottom_h__title}>
            <h1 className={s.header__h1}>ParkDrive</h1>
            <p className={s.header__bottom_h__p}>Всеукраинская сеть автомобилей с пробегом</p>
          </div>
          <Link to="/project/parkdrive" className={s.header__bottom_h__button}>Посмотреть</Link>
        </Grid>
      </Grid>
    );
  }
});

export default withStyles(s)(Header);

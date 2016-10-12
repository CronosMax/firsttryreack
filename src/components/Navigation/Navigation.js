/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

var Navigation = React.createClass({

  handleClick: function() {
    if(this.props.showed){
      this.props.navShow(false);
    } else {
      this.props.navShow(true);
    }
  },

  render: function() {
    let display = this.props.showed ? '' : 'hidden';
    let blockNav = s.block_nav +' '+ display;
    return (
      <div className="nav">
        <div className="row">
          <Link className="logo pull-left" to="/">
            <img className={s.img_logo} src={require('./img/logo.svg')}/>
          </Link>
          <div className={s.menu_block}>
            <Link className="menu" to="#" onClick={this.handleClick}>
              <img src={require('./img/menu_icon.png')}/>
            </Link>
            <div className={blockNav}>
              <ul>
                <li className={s.listItem}>
                  <Link to="/">Главная</Link>
                </li>
                <li className={s.listItem}>
                  <Link to="/projects/">Проекты</Link>
                </li>
                <li className={s.listItem}>
                  <Link to="#contact_us">Заказать проект</Link>
                </li>
              </ul>
              <br />
              <br />
              <p className={s.navText}>
                <i>Думать - вот самая тяжёлая<br />работа и поэтому мало кто за<br /> неё берётся.<br /></i>
                <span>&mdash; Генри Форд</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(s)(Navigation);

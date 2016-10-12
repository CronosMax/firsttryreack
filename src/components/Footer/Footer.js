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
import s from './Footer.css';
import {Grid, Row} from 'react-bootstrap';

function Footer() {
  return (
    <div className={s.footer}>
      <Grid bsStyle>
        <Row>
          © 2012-2016 Impulset
        </Row>
      </Grid>
    </div>
  );
}

export default withStyles(s)(Footer);

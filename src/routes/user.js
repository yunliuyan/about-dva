import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import UserComponent from '../components/user';
import Header from '../components/MainLayout/MainLayout'

function user({ location }) {
  return (
  <Header location={ location }>
    <div className={styles.normal}>
               <div><UserComponent /></div>
    </div>
    </Header>
  );
}

export default connect()(user);

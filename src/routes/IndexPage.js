import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
// 首页
function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>欢迎进入E洁家政后台服务中心</h1>
      <div className={styles.welcome} />
      
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

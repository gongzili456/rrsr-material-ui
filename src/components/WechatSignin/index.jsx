import React, {Component, PropTypes} from 'react'
import styles from './styles.scss'

class WechatSignin extends Component {
  render() {
    return (
      <div>
        <div className={styles.wxbox}>
          <div className={styles.wxcontainer}>
            <div className={styles.wxcode}>
              <img src='https://open.weixin.qq.com/connect/qrcode/021lP8vatMd8tuRe'/>
            </div>
            <div className={styles.info}>
              <span>请使用微信扫描二维码登录</span>
              <span>XXX服务</span>
            </div>
            <div className='signinway'>
              或&nbsp;<a href='#'>使用邮箱登录</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

WechatSignin.propTypes = {}

export default WechatSignin

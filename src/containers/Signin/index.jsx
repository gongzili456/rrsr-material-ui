import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { StandardSignin, WechatSignin } from '../../components'
import * as AuthActions from '../../actions/auth'
import styles from './styles.scss'

import Paper from 'material-ui/Paper'

class SignupContainer extends Component {
  static fetchData({store, params, location}) {
    console.log('fetch ---> ', store, params, location)
    return store.dispatch(AuthActions.fetch())
  }

  render() {
    const {auth, authActions} = this.props

    return (
      <div className='signBox'>
        <Paper className='wrapper'>
          <div>
            <div className='header'>
              header
            </div>
            <div className='body'>
              <StandardSignin />
            </div>
            <div className='footer'>
              <div className='terms'>
                <span>点击注册表示您已阅读并同意《<a href='#'>XX服务条款</a>》</span>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

SignupContainer.propTypes = {
  auth: PropTypes.array.isRequired,
  authActions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)

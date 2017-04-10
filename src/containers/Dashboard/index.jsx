import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AuthActions from '../../actions/auth'
import { Appbar } from '../../components'
import styles from './styles.scss'

class Dashboard extends Component {
  static fetchData({store, params, location}) {
    console.log('fetch ---> ', store, params, location)
    return store.dispatch(AuthActions.fetch())
  }

  render() {
    return (
      <div className='container'>
        <Appbar />
        Dashboard
      </div>
    )
  }
}

Dashboard.propTypes = {
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

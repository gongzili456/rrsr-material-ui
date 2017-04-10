import React, {Component, PropTypes} from 'react'
import styles from './styles.scss'
import AppBar from 'material-ui/AppBar'

class Dashboard extends Component {
  render() {
    return (
      <AppBar
        title='subao.ai'
      />
    )
  }
}

Dashboard.propTypes = {
}

export default Dashboard

import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

class StandardSignup extends Component {
  render() {
    return (
      <div>
        <div>
          <TextField
            fullWidth
            hintText='姓名'
            floatingLabelText='姓名'
          />
        </div>
        <div>
          <TextField
            fullWidth
            hintText='邮箱'
            floatingLabelText='邮箱'
          />
        </div>
        <div>
          <TextField
            fullWidth
            hintText='密码'
            floatingLabelText='密码'
            type='password'
          />
        </div>
        <div className='btns'>
          <RaisedButton
            fullWidth
            label='注册'
            primary
            className='submitBtn'
             />
          <div className='wxsigninBtn'>
            <FlatButton
              fullWidth
              label='微信登录'
            />
          </div>
        </div>
        <div className='signinway'>
          <span>
            已有账号? <a href='#'>直接登录</a>
          </span>
        </div>
      </div>
    )
  }
}

StandardSignup.propTypes = {}

export default StandardSignup

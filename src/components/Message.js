import React, {PureComponent} from 'react'


class Message extends PureComponent {

  constructor(props) {
    super(props);
    this.props = {
      type: '',
      message: ''
    }
  }

  render () {
    var {type, message} = this.props;
    return (
      <div>
        <div className={type}>
          <p>{message}</p>
        </div>
      </div>
    )
  }
}

export default Message;
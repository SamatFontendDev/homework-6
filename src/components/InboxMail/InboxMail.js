import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail/Mail';

class InboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    const mail = data.inbox.find(mail => mail.id === id);
    console.log(this.props);
    console.log(data)
    return <Mail {...mail} />;
  }
}

export default withData(InboxMail);
import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Payment } from '../../api';

export class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false
    }
    this.submit = this.submit.bind(this);
  }

  async submit(event) {
    event.preventDefault();
    let chargeToken = await this.props.stripe.createToken({name: "name"})
    let charge = {
      token: chargeToken.token.id
    }

    let response = await Payment.create({charge: charge});
    let json = await response.json();
    if (response.ok) {
      this.setState({
        complete: true
      })
    } 
    console.log(json);

  }


  render() {
    return(
        <div className="form-container">
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button onClick={this.submit}>Send</button>
        </div>
    )
  }

}

export default injectStripe(PaymentForm);
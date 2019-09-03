import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Payment } from '../../api';

import image1 from '../../img/free-plan.jpg';
import image2 from '../../img/gold-plan.png';

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
      this.props.history.push('/')
    } 


  }


  render() {
    return(
        <div className="payments-main-container">
          <h3 className="payments-heading">Why buy Gold ?</h3>
          <div className="plans-difference-container">
            <div className="free-plan-container">
              <h4 className="plan-heading free">Free Plan</h4>
              <div className="plan-image-container">
                <img src={image1} className="plan-image"/>
              </div>
              <ul className="plan-benefits-list">
                <li className="plan-benefit">Only 20 memes a day</li>
                <li className="plan-benefit">No special status</li>
              </ul>
            </div>
            <div className="gold-plan-container">
              <h4 className="plan-heading gold">Gold Plan</h4>
              <div className="plan-image-container">
                <img src={image2} className="plan-image"/>
              </div>
              <ul className="plan-benefits-list">
                <li className="plan-benefit">Unlimited memes = Unlimited happiness</li>
                <li className="plan-benefit">A gold user badge</li>
                <li className="plan-benefit">Early access memes <span><smaller>(what does that even mean)</smaller></span></li>
              </ul>
            </div>
          </div>
          <div className="payment-form-container">
            <form className="payment-form"></form>
              <p>Would you like to complete the purchase?</p>
              <CardElement />
              <button className="btn btn-primary" onClick={this.submit}>Pay</button>
          </div>
        </div>
    )
  }

}

export default injectStripe(PaymentForm);
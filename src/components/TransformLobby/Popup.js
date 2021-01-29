import React from 'react';  
import './styles.css';  
import Web3 from 'web3'
import TokenFarm from '../../assets/TokenFarm.json'
let web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/' + '885661b2ff2f4167b4c6570a07306408'));

class Popup extends React.Component {  
  web3;

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tokenFarm: '',
      account:''
    };

    this.handleChange = this.handleChange.bind(this);
    const web3 = window.web3
    const tokenFarm = new web3.eth.Contract(TokenFarm, '0x14227a7Be27826a54a402791f96dada8A5b1DCf9')
    this.setState({ tokenFarm })
  }
  
enterDay = (value) =>{


  

    this.state.tokenFarm.methods.xfLobbyEnter(this.props.account).send({ from: this.props.account, value: value})
  
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {  

    let test = ''
return (  
<div className='popup'>  
<div className='popup_open'>  
<button onClick={this.props.closePopup}>X</button>  
<h1 class="h1_popup">Amount to Enter for Day</h1>  
<form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.fun(amount)
                
              }}>
                                <input
                  type="text"
                  ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                   <button type="submit" className="btn btn-primary btn-block btn-lg">Submit</button>

</form>

</div>  
</div>  
);  
}  
}  
export default Popup;
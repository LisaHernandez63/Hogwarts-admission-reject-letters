import React, {Component} from 'react';
import FormAndButtons from './FormAndButtons';
import LetterHead from './LetterHead';
import AcceptOrRejectLetter from './AcceptOrRejectLetter'

class LetterInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accept: true,
      addressee: "Addressee"

    }
    this.handleRejectButton = this.handleRejectButton.bind(this);
    this.handleAcceptButton = this.handleAcceptButton.bind(this);
    this.handleAddresseeForm = this.handleAddresseeForm.bind(this);
  }

  handleRejectButton(event) {
    this.setState({
      accept: false});
  }

  handleAcceptButton(event) {
    this.setState({
      accept: true});
  }
  handleAddresseeForm(event) {
    this.setState({
      addressee: event.target.value});
  }


  render() {
    return(
      <div>
      <FormAndButtons handleRejectButton = {this.handleRejectButton}
                   handleAcceptButton = {this.handleAcceptButton}
                   handleAddresseeForm = {this.handleAddresseeForm}/>
      <LetterHead person = {this.state.addressee}/>
      <AcceptOrRejectLetter letter = {this.state.accept}/>
      </div>
    );
  }
}

export default LetterInput;

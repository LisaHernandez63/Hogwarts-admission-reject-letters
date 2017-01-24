import React from 'react';

const FormAndButtons = props => {
  return (
    <form>
      <input type="button" name="button" value="Reject" onClick={props.handleRejectButton}/>
      <input type="button" name="button" value="Accept" onClick={props.handleAcceptButton}/>
      <br/>
      Addressee: <input type="text" name="addressee" onChange={props.handleAddresseeForm}/>
    </form>
  )
}

export default FormAndButtons;

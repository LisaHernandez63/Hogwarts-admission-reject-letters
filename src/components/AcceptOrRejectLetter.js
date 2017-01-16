import React from 'React'

const AcceptOrRejectLetter = props => {

    if (props.letter) {
      return (
      <h1> You are IN !! </h1>
    )
    }
    else {
      return (
        <div>
        <h1> REJECTED </h1>
        </div>
   )
   }
}
export default AcceptOrRejectLetter

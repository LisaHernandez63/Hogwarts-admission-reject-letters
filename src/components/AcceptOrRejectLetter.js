import React from 'React'

const AcceptOrRejectLetter = props => {

    if (props.letter) {
      return (
      <div>
      <br/>
        <p>We are pleased to inform you that you have a place at</p>
        <p>Hogwarts School of Witchcraft and Wizardry. Please find</p>
        <p>attached a list of all necessary books and equipment.</p>
        <br/>
        <p>Term begins on 1 September  We await your email reply by</p>
        <p>no later than 31 July.</p><br/>
        <br/>
        <p>Yours Sincerely,</p>
        <p><b>Minerva Mcgonagall</b></p>
        <p><b>Deputy Headmistress</b></p>
    </div>
    )
    }
    else {
      return (
        <div>
        <br/>
        <p>We regret to inform you that we are unable to offer you a place at Hogwarts</p>
        <p>School of Witchcraft and Wizardry. After reviewing your application and</p>
        <p>Github profile, we recognize that you are indeed a "coding wizard".</p>
        <p>Unfortunately, we have concluded that you do not have actual magical</p>
        <p>abilities, which you must have to be admitted into Hogwarts.</p>
        <br/>
        <p>Yours Sincerely,</p>
        <p><b>Minerva Mcgonagall</b></p>
        <p><b>Deputy Headmistress</b></p>        
        </div>
   )
   }
}
export default AcceptOrRejectLetter

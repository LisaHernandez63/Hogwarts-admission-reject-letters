# Hogwarts-admission-reject-letters
An app that sends out admission and rejection letters to applicants depending on user input
### Introduction

The Hogwarts School of Witchcraft and Wizardry is
switching over from owl delivery to e-mails when sending their admission
letters. This React application facilitates writing
these letters.


1.  When the initial application loads, your application should default to
    displaying an acceptance letter. The content of an acceptance letter is as
    follows:

    HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY

    Headmaster: Albus Dumbledore
    (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
    International Confed. of Wizards)

    Dear Addressee,

    We are pleased to inform you that you have a place at Hogwarts School of
    Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
    equipment.

    Term begins on 1 September. We await your owl by no later than 31 July.

    Your sincerely,

    Minerva McGonagall
    Deputy Headmistress
 

2.  Clicking on the Rejected button should show the rejection letter with the
    following template:

    HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY

    Headmaster: Albus Dumbledore
    (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
    International Confed. of Wizards)

    Dear Addressee,

    We regret to inform you that we are unable to offer you a place at Hogwarts
    School of Witchcraft and Wizardry. After reviewing your application and
    Github profile, we recognize that you are indeed a "coding wizard".
    Unfortunately, we have concluded that you do not have actual magical
    abilities, which you must have to be admitted into Hogwarts.

    Your sincerely,

    Minerva McGonagall
    Deputy Headmistress
  
3.  Clicking on the Accepted button should display the acceptance letter.
4.  If the Addressee text input field is blank, then the letter should contain
    "Dear Addressee". However, if the text input field is filled out then the
    letter should be addressed to the text input value. For example, if the text
    input value is "Mr. Alex Jarvis", then the letter should contain "Dear Mr.
    Alex Jarvis" like so:

5.  Draco Malfoy says that you're not good enough to style your application to
    match the design because you're a muggle (a.k.a. person with no magical
    abilities). Prove him wrong!


const job = {
    firstname:'Tejas',
    surname:'Joshi'
}

function getDet(newJob) {
    const { firstname:newName } = newJob
    console.log(newName)
}

getDet(job);

function getSurname({surname:rec_surname }){
    console.log(rec_surname)
}
getSurname(job);
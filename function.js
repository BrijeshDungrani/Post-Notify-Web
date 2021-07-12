const emailId =   document.getElementById('emailId');
const firstName =   document.getElementById('firstName');
const lastName =   document.getElementById('lastName');
const streetName =   document.getElementById('streetName');
const houseNo =   document.getElementById('houseNo');
const passWord = document.getElementById('passWord');
const addBtn =   document.getElementById('addBtn');
const updateBtn =   document.getElementById('updateBtn');
const removeBtn =   document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('User')

addBtn.addEventListener('click',(e) =>{
    e.preventDefault();

    database.ref('/users/10').set({
        first_name: firstName.value,
        last_name: lastName.value,
        street_name: streetName.value,
        house_no: houseNo.value,
        email_id: emailId.value,
        password: passWord.value,
    });
});

updateBtn.addEventListener('click',(e) =>{
    e.preventDefault();

    database.ref('User/U1').set({
      emailss: "brijeshdungrani303@gmail.com"
  });

     
});




    

  /*  firebase.auth().createUserWithEmailAndPassword(emailId.value, passWord.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        prompt(error.message);
        // ..
        
    });
 

    alert(userCredential.user)
    
    



});





  function signUp(event){
      
      var email = emailId.value;
      var password = passWord.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
    });
  }


  rootRef.on('value', snapshot => {
    console.log(snapshot.child("U1/email").val());
  });
  */
  const templateParams = {
    name: 'James',
    notes: 'Check this out!',
    to_mail: 'brijeshdungrani303@gmail.com'
};
 
emailjs.send('service_t66jlir', 'template_r7ly153', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
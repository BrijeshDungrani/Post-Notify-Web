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

addBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    

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

    database.ref('/users/10').set({
        first_name: firstName.value,
        last_name: lastName.value,
        street_name: streetName.value,
        house_no: houseNo.value,
        email_id: emailId.value,
        password: passWord.value,
        
        

    });
    alert(userCredential.user)
    */
    



});


exports.newNodeDetected = functions.database.ref('users/{userId}/first_name')
.onCreate((snapshot,context) => {
    var name = snapshot.val();
    console.log(name);
    return null;
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


  
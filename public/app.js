
function dataname(dashboard) {

  var user = dashboard.User;
  var arr = new Array(user)
  console.log(arr)
  for (var id in user) {
    console.log(id)
    for (let value of Object.values(id)) {
      console.log(value);
    }

  }
}


let SignUp = () => {

  var email = document.getElementById('adsuemail').value
  var password = document.getElementById('adsupassword').value
  var name = document.getElementById('adsuname').value
  var city = document.getElementById('adsucity').value
  var country = document.getElementById('adsucountry').value

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {

      console.log(data);


    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });


  let obj = {
    name,
    email,
    password,
    city,
    country
  }

  // console.log(obj)
  key = (Math.random() * 1264354135).toFixed()
  firebase.database().ref("User/" + "id" + key).set(obj)


}


///////////////LOGIN WALA CODE/////////////////
let login = () => {

  var email = document.getElementById('exampleInputEmail1')
  var password = document.getElementById('exampleInputPassword1')

  function userData(user){
    console.log(user)
  }

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      // location.href = "deshboard.html"
      var user = userCredential.user.email;
      // ...
      userData(user)
      // console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}


///////////////////CUSTOMER SIGN UP


let signupcustomer = () => {

  var email = document.getElementById('cusuemail').value
  var password = document.getElementById('cusupassword').value
  var name = document.getElementById('cusuname').value
  var city = document.getElementById('cusucity').value
  var country = document.getElementById('cusucountry').value

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {

      console.log(data);

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });


  let obj = {
    name,
    email,
    password,
    city,
    country
  }
  key = (Math.random() * 1264354135).toFixed()
  firebase.database().ref("User/" + "id" + key).set(obj)

  console.log(obj);



}


/////////////////////////////////CUSTOMER LOGIN/////////////////////////////

let customerlogin = () => {

  var emailCu = document.getElementById('exampleInputEmail1CULG')
  var passwordCu = document.getElementById('exampleInputPassword1CULG')


  firebase.auth().signInWithEmailAndPassword(emailCu.value, passwordCu.value)
    .then((userCredential) => {
      // Signed in
      window.location.href = "index.html"
      var user = userCredential.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

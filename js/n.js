$(".info-item .btn").click(function(){
    $(".container").toggleClass("log-in");
  });
//   $(".container-form .btn").click(function(){
//     $(".container").addClass("active");
//   })
  function login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let secret = document.getElementById("secret").value
    
    let username_db = "admin"
    let password_db = "123"
    let secret_code = "car"

    if(username_db == username && password_db == password || secret_code == secret){
        alert('Welcome')
    }else{
        alert('Username or password is wrong')
    }
}
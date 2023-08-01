let accounts = [
  {nombre: 'Daniel', saldo: 700, password: 'Usuar1o2023'},
  {nombre: 'Santiago', saldo: 100, password: 'User2023ipr06'},
  {nombre: 'Nicolas', saldo: 800, password: 'Pass7bCol'}
];

//Encapsula la información de los input
const btnAccess = document.getElementById("btn-access");

const userId = document.getElementById("user-id");

const userPassword = document.getElementById("user-password");

let textInfo = document.getElementById("text-info");

const title = document.querySelector("title").textContent;


if (title == "Login") {

btnAccess.addEventListener("click", loginUser);

function loginUser(event) {
      event.preventDefault();
      const credential = {
          userId: userId.value,
          userPassword: userPassword.value
      }

      for (let i = 0; i < accounts.length; i++) {
        const regex = new RegExp(credential.userId, "gi")
        const comparison = regex.test(accounts[i].nombre) 

          if (comparison) {
              if (credential.userPassword == accounts[i].password) {
                  localStorage.setItem('userId', accounts[i].nombre);
                  localStorage.setItem('balance', accounts[i].saldo);
                  location.href='./inicio.html';
              } else {
                  textInfo.textContent = "Usuario y/o contraseña inválidos";
                  textInfo.style.color = "#ff1979";
              }
          } 
      }
  }
}
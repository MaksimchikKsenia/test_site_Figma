document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances_subnav = M.Sidenav.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var photo = document.querySelectorAll(".materialboxed");
  var instances_photo = M.Materialbox.init(photo);
});

let form_btn = document.querySelector(".form-btn");

if (localStorage.getItem("name") && localStorage.getItem("email")) {
  let registration = document.querySelector(".registration");
  let client_name = document.querySelector(".client_name");
  let client_email = document.querySelector(".client_email");
  registration.style.display = "none";
  let clientInfo = document.querySelector(".client_info");
  clientInfo.style.display = "block";
  client_name.textContent = `Здравствуйте, ${localStorage.getItem("name")}!`;
  client_email.textContent = `Ваша почта: ${localStorage.getItem("email")}`;
} else {
  form_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let registration = document.querySelector(".registration");
    let client_name = document.querySelector(".client_name");
    let client_email = document.querySelector(".client_email");
    if (name.length == 0 || email.length == 0 || !email.includes("@")) {
      alert(
        "Для входа в аккаунт введите имя и  корректный адрес электронной почты"
      );
      registration.style.display = "block";
      return;
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);

      registration.style.display = "none";
      let clientInfo = document.querySelector(".client_info");
      clientInfo.style.display = "block";
      client_name.textContent = `Здравствуйте, ${localStorage.getItem(
        "name"
      )}!`;
      client_email.textContent = `Ваша почта: ${localStorage.getItem("email")}`;
    }
  });
}

let exit_btn = document.querySelector(".exit-btn");

exit_btn.addEventListener("click", function () {
  let registration = document.querySelector(".registration");
  let clientInfo = document.querySelector(".client_info");
  registration.style.display = "block";
  clientInfo.style.display = "none";
  localStorage.removeItem("name");
  localStorage.removeItem("email");
});

// login functionality

document.getElementById("log-in").addEventListener("click", function (event) {
  event.preventDefault();

  const userName = document.getElementById("user-name").value;
  const pass = document.getElementById("pass-word").value;

  if (userName === "admin" && pass === "admin123") {
    alert("Login successful");
    window.location.href = "home.html";
  } else {
    alert("Invalid information");
  }
});

const loginForm = document.querySelector("#login-form");
const login = document.querySelector(".login");
const loginIDInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    const userID = loginIDInput.value;
    localStorage.setItem("userID", userID);
    paintGreetings(userID);
    login.classList.add("hidden")
}

function paintGreetings(userID) {
    greeting.innerText = `${userID}님 반갑습니다.`;
    greeting.classList.remove("hidden");
}

const savedUserID = localStorage.getItem("userID");

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.WhoAreyou')
    .pause(1000)
    .go();
});

function 인사하자() {
if (savedUserID === null) {
    login.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} 
else {
    loginForm.classList.add("hidden");
    login.classList.add("hidden");
    paintGreetings(savedUserID);
}
}
인사하자();
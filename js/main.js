
function S2B_FB_LOGIN() {

    const initial = document.getElementById("initial");
    const signed = document.getElementById("signed");
    const error = document.getElementById("error");

    const login = document.getElementById("login");
    const logout = document.getElementById("logout");
    const trial = document.getElementById("try");

    const loginHandler = () => {
        initial.classList.toggle("hide")
        signed.classList.toggle("hide")
    };
    
    const logoutHandler = () => {
        initial.classList.toggle("hide")
        signed.classList.toggle("hide")
    };
    
    login.addEventListener("click", loginHandler);
    logout.addEventListener("click", logoutHandler);

}

S2B_FB_LOGIN();
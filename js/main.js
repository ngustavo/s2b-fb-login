
function S2B_FB_LOGIN() {

    const initial = document.getElementById("initial");
    const signed = document.getElementById("signed");
    const error = document.getElementById("error");

    const login = document.getElementById("login");
    const logout = document.getElementById("logout");
    const trial = document.getElementById("try");

    const loginHandler = () => {

        const appid = "2034262413570505";
        const redir = "https://www.facebook.com/connect/login_success.html";
        const red = "https://ngustavo.com/s2b-fb-login/";

        const compose = `https://www.facebook.com/v3.1/dialog/oauth?client_id=${appid}&redirect_uri=${red}"`;

        window.open(compose, "_blank");

        // axios.get(compose, { 
        //     headers: {'Access-Control-Allow-Origin': '*'}
        // });

        initial.classList.toggle("hide");
        signed.classList.toggle("hide");
    };
    
    const logoutHandler = () => {
        initial.classList.toggle("hide");
        signed.classList.toggle("hide");
    };
    
    login.addEventListener("click", loginHandler);
    logout.addEventListener("click", logoutHandler);

}

S2B_FB_LOGIN();
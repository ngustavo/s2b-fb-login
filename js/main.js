
function S2B_FB_LOGIN() {

    const initial = document.getElementById("initial");
    const signed = document.getElementById("signed");
    const error = document.getElementById("error");

    const login = document.getElementById("login");
    const logout = document.getElementById("logout");
    const trial = document.getElementById("try");

    const loginHandler = () => {

        const fb =  "https://www.facebook.com/v3.1/dialog/oauth";
        const appid = "2034262413570505";
        const scopes = "email,";
        const uri = "https://ngustavo.com/s2b-fb-login/";

        const URL = `${fb}?client_id=${appid}&scopes=${scopes}&redirect_uri=${uri}`;

        axios.get(URL, { 
            headers: {'Access-Control-Allow-Origin': '*'}
        });

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
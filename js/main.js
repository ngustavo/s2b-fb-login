
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
        const scopes = "email";
        const type = "code,token";
        const uri = "https://ngustavo.com/s2b-fb-login/";

        const URL = `${fb}?client_id=${appid}&scopes=${scopes}&response_type=${type}&redirect_uri=${uri}`;

        window.location.href = URL;

        // const request = new Request(URL, {
        //     method: "GET",
        //     mode: "no-cors"
        // });

        // fetch(request).then(data => console.log(data));

        initial.classList.toggle("hide");
        signed.classList.toggle("hide");
    };
    
    const loadHandler = () => {
        console.log("here");
        const url = new URL(window.location);
        if (url.href.includes("?#")){
            const fixedURL = url.href.replace("?#", "?");
            console.log("there", fixedURL);
            window.location.href = fixedURL;
        } else if(url.href.includes("access_token=")){
            const params = url.searchParams;
            const token = params.get("token");
            console.log("token:", token);
        }
    };

    const logoutHandler = () => {
        initial.classList.toggle("hide");
        signed.classList.toggle("hide");
    };
    
    document.addEventListener("load", loadHandler);
    login.addEventListener("click", loginHandler);
    logout.addEventListener("click", logoutHandler);
}

S2B_FB_LOGIN();
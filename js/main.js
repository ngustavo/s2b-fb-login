
function S2B_FB_LOGIN() {

    const initial = document.getElementById("initial");
    const signed = document.getElementById("signed");
    const error = document.getElementById("error");

    const login = document.getElementById("login");
    const logout = document.getElementById("logout");
    const trial = document.getElementById("try");

    const loginHandler = () => {

        const fb =  "https://www.facebook.com/v3.1/dialog/oauth";
        const appid = "275895143136251"; //2034262413570505
        const scope = "email";
        const type = "token";
        const uri = "https://ngustavo.com/s2b-fb-login/";

        const url = `${fb}?client_id=${appid}&scope=${scope}&response_type=${type}&redirect_uri=${uri}`;

        window.location.href = url;

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
        if (url.href.includes("/#") || url.href.includes("/?#")){
            const fixedURL = url.href.replace("/#", "/?");
            const fixedURL = url.href.replace("/?#", "/?");
            console.log("there", fixedURL);
            window.location.href = fixedURL;
        } else if(url.href.includes("access_token=")){
            const params = url.searchParams;
            const token = params.get("access_token");
            console.log("token:", token);
            getUser(token);
        }
    };

    const logoutHandler = () => {
        initial.classList.toggle("hide");
        signed.classList.toggle("hide");
    };

    const getUser = token => {
        const url = `https://graph.facebook.com/me?fields=email,first_name,last_name&access_token=${token}`;
        fetch(url).then(data => console.log(data));
    };
    
    window.addEventListener("load", loadHandler);
    login.addEventListener("click", loginHandler);
    logout.addEventListener("click", logoutHandler);
}

S2B_FB_LOGIN();
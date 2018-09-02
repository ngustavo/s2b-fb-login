
function S2B_FB_LOGIN() {

    const initial = document.getElementById("initial");
    const signed = document.getElementById("signed");

    const login = document.getElementById("login");
    const response = document.getElementById("response");

    const loginHandler = () => {

        const fb =  "https://www.facebook.com/v3.1/dialog/oauth";
        const appid = "2034262413570505";
        const scope = "email";
        const type = "token";
        const uri = window.location.href;

        const href = `${fb}?client_id=${appid}&scope=${scope}&response_type=${type}&redirect_uri=${uri}`;

        window.location.href = href;

        initial.classList.toggle("hide");
        signed.classList.toggle("hide");
    };
    
    const loadHandler = () => {
        const url = new URL(window.location);
        if (url.href.includes("/#") || url.href.includes("/?#")){ // sometimes the url has a weird #
            const fixedURL = url.href.replace("/#", "/?");
            const finalURL = fixedURL.replace("/?#", "/?");
            window.location.href = finalURL;
        } else if(url.href.includes("access_token=")){ // if it doesn't then get that token
            const params = url.searchParams;
            const token = params.get("access_token");
            initial.classList.toggle("hide");
            signed.classList.toggle("hide");
            getUser(token);
        }
    };

    const getUser = token => {
        const url = `https://graph.facebook.com/me?fields=email,first_name,last_name&access_token=${token}`;
        fetch(url)
        .then( res => res.json() )
        .then( data => makeUser(data) )
        .catch( err => console.log(err) );
    };

    const makeUser = data => {
        const user = {};
        user.firstName = data.first_name || "";
        user.lastName = data.last_name || "";
        if(data.email) // check if you got their email
            if(data.email.includes("@")) // check if it's an actual email
                user.email = data.email;
            else // if not, it's probably a phone number (check the API)
                user.phone = user.email;
        const res = `firstName, lastName, phone, email <br>` +
            `${user.firstName}, ${user.lastName}, ${user.phone || ""}, ${user.email || ""}`;
        response.innerHTML = res;
    };
    
    window.addEventListener("load", loadHandler);
    login.addEventListener("click", loginHandler);
}

S2B_FB_LOGIN();
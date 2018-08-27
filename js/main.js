
function S2B_FB_LOGIN() {

    const initial = document.getElementById("initial");
    const signed = document.getElementById("signed");

    const login = document.getElementById("login");
    const response = document.getElementById("response");

    const loginHandler = () => {

        const fb =  "https://www.facebook.com/v3.1/dialog/oauth";
        const appid = "275895143136251"; //2034262413570505
        const scope = "email";
        const type = "token";
        const uri = "https://ngustavo.com/s2b-fb-login/";

        const url = `${fb}?client_id=${appid}&scope=${scope}&response_type=${type}&redirect_uri=${uri}`;

        window.location.href = url;

        initial.classList.toggle("hide");
        signed.classList.toggle("hide");
    };
    
    const loadHandler = () => {
        console.log("here");
        const url = new URL(window.location);
        if (url.href.includes("/#") || url.href.includes("/?#")){
            const fixedURL = url.href.replace("/#", "/?");
            const finalURL = fixedURL.replace("/?#", "/?");
            console.log("there", finalURL);
            window.location.href = finalURL;
        } else if(url.href.includes("access_token=")){
            const params = url.searchParams;
            const token = params.get("access_token");
            console.log("token:", token);
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
        user.firstName = data.first_name;
        user.lastName = data.last_name;
        user.phone = data.phone || data.id;
        user.email = data.email;
        response.innerHTML = `firstName, lastName, phone, email
                        <br>${user.firstName}, ${user.lastName}, ${user.phone}, ${user.email}`;
    };
    
    window.addEventListener("load", loadHandler);
    login.addEventListener("click", loginHandler);
}

S2B_FB_LOGIN();
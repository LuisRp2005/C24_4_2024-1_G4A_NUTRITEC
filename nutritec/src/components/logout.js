import { GoogleLogout  } from "react-google-login";

function Logout() {

    const onSuccess = () => {
        console.log("Logout !");
    }

    return (
        <div>
            <GoogleLogout
                clientId="562434628830-oth6ci1o114k7bfgstmqaq0ardicrk1l.apps.googleusercontent.com"
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}   
            />
        </div>
    )
}

export default Logout;
import { GoogleLogin } from "react-google-login";

function Login() {

    const RespuestaGoogle = (response) => {
        console.log(response)
    }

    const RespuestaGoogles = (response) => {
        console.log(response)
    }


    return(
        <div id="signInButton">
            <GoogleLogin
                    clientId="562434628830-oth6ci1o114k7bfgstmqaq0ardicrk1l.apps.googleusercontent.com"
                    buttonText='Inicia Sesión con Correo de TECSUP'
                    onSuccess={RespuestaGoogle}
                    onFailure={RespuestaGoogles}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
            />
        </div>
    )
}

export default Login;
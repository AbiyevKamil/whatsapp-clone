import React from "react";
import { Button } from "@material-ui/core";
import gooogleIMG from '../images/googleLogo.png'
import { actions } from "../redux/Reducer";
import { useStateValue } from "../redux/StateProvider";
import './Login.css'
import { auth, provider } from "../firebase/firebase";

function Login() {
    const [{ user }, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actions.name,
                    user: result.user,
                });
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="login">
            <div className="login-logo">
                <img src={gooogleIMG} alt="facebook_logo" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
      </Button>
        </div>
    );
}

export default Login;
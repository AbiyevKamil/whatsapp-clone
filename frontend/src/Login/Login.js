import React from "react";
import { Button } from "@material-ui/core";
import facebookIMG from '../images/facebook.png'
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
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"} alt="facebook_logo" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
      </Button>
        </div>
    );
}

export default Login;
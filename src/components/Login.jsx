import React  from "react";
import { auth, signInWithGoogle, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "react-bootstrap/Button";
function Login() {

    const [user] = useAuthState(auth);

    return (
        <div className="login">

            {!user && <Button variant="outline-info" className="login__btn login__google" onClick={signInWithGoogle}>
                Login with Google
            </Button>}

            {user && <div>{user.displayName}<Button variant="outline-dark" onClick={logout}>LogOut</Button></div>}

        </div>
    );
}
export default Login;

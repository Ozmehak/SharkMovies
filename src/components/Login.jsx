import React, {useEffect} from "react";
import {auth, signInWithGoogle, logout} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Button from "react-bootstrap/Button";
import {useCookies} from "react-cookie";
import LogRocket from "logrocket";
import styled from "styled-components";


function Login() {

    const [user] = useAuthState(auth);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);


 useEffect(() => {

     if (user) {setCookie("cookie-from-hell", `${user.email}`)}

 }, [user])

    const cookieMaster = () => {
        signInWithGoogle()
        LogRocket.init("znathy/mango-tree");
        let expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + 1 * 3600 * 1000);
        setCookie("cookie-from-hell", `Adam`, {
            expires: expireDate,
            httpOnly: false,
            path: "/",
            secure: true,
        });
    }

    const cookieCruncher = () => {
        removeCookie("cookie-from-hell")
        logout()
    }

return (
    <div className="login">

        {!user && <Button variant="outline-info" className="login__btn login__google" onClick={cookieMaster}>
            Login with Google
        </Button>}

        {user && <DisplayNameDiv>{user.displayName}<Button style={{marginLeft: "1rem"}} variant="outline-info" onClick={cookieCruncher}>LogOut</Button></DisplayNameDiv>}

    </div>
)
}
export default Login;

const DisplayNameDiv = styled.div `
    color: #0dcaf0;
  margin-left: 1rem;

  border-color: #0dcaf0;
`

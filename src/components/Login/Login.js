import React from "react";
import { GoogleLogin } from "react-google-login";

const clientID =
  "364886782421-josn0pjv1bq11v7tkjgj0a97rd0qtb03.apps.googleusercontent.com";

export default function Login() {
  const onSuccess = (res) => {
    console.log("Login Successful", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login Failed", res);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
}

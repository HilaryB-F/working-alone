import { GoogleLogout } from "react-google-login";

const clientID =
  "364886782421-josn0pjv1bq11v7tkjgj0a97rd0qtb03.apps.googleusercontent.com";

export default function Logout() {
  const onSuccess = () => {
    console.log("Logout Successful");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

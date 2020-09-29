import React from "react";
import axios from "axios";
//axios.defaults.withCredentials = true;
function Demo() {
  return (
    <button
      onClick={() => {
        axios
          .get("http://localhost:3002/apiDemo/demo")
          .then((result) => {
            if (result.status === 200) {
              //setAuthTokens(result.headers["x-auth-token"]);
              console.log(result);
              //console.log(result.headers);

              // console.log(isLoggedIn);
              // console.log(result.data.token);
              // console.log(result.data.role);
              // console.log({ isLoggedIn });
              // console.log(AuthContext.authtokens);
            } else if (result.status == 400) {
            }
          })
          .catch((e) => {
            //setAuthTokens("helloworld");
            console.log(e);
          });
      }}
    >
      hello
    </button>
  );
}

export default Demo;

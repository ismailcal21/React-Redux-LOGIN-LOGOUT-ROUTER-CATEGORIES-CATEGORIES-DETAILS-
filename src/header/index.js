import { useEffect, useState } from "react";
import { connect } from "react-redux";
import bootstrapSvg from "../svg/bootstrap.svg";
import useApi from "../hooks";

const Header = (props) => {
  console.log("HEADER PROPS", props);

  const [user, setUser] = useState(null);
  const api = useApi();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     api
  //       .get("user/appData")
  //       .then((response) => {
  //         console.log(">>>HEADER RESPONSE", response);
  //         setUser(response.data.data.user);
  //       })
  //       .catch((err) => {
  //         console.log(">>>HEADER ERR", err);
  //       });
  //   }
  // }, []);

  const onClickLogOutBtn = () => {
    api
      .get("auth/logout")
      .then((response) => {
        console.log(">>>LOGOUT RESPONSE", response);
      })
      .catch((err) => {
        console.log(">>>LOGOUT ERR", err);
      })
      .finally(() => {
        localStorage.removeItem("token");
        window.location.href = "#/";
        window.location.reload();
      });
  };

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom my-3">
        <img src={bootstrapSvg} className="mx-2" />
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Pricing example</span>
          {props.authState.token}
        </a>

        {props.appDataState.appData ? (
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <span>{props.appDataState.appData.user.fullname}</span>
            <a className="btn btn-primary mx-2" onClick={onClickLogOutBtn}>
              Logout
            </a>
          </nav>
        ) : (
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="btn btn-primary mx-2" href="#/login">
              Login
            </a>
            <a className="btn btn-primary mx-2" href="#/register">
              Register
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log(">>>Header STATE", state);
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Header);

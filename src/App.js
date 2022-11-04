import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./home";

import Header from "./header";
import Login from "./login";
import Deneme from "./login/deneme";

import CategoryDetails from "./categoryDetails";
import { REMOVE_TOKEN } from "./store/reducers/authReducer";
import useApi from "./hooks";
import { REMOVE_APP_DATA, SET_APP_DATA } from "./store/reducers/appDataReducer";
import { connect } from "react-redux";

function App(props) {
  const api = useApi();
  // if (props.authState.token && !props.appDataState.appData) {
  //   api
  //     .get("user/appData")
  //     .then((response) => {
  //       console.log(">>>APP RESPONSEEEEEEEEEEEEEEEE", response);

  //       const action = {
  //         type: SET_APP_DATA,
  //         payload: {
  //           appData: response.data.data,
  //         },
  //       };
  //       props.dispatch(action);
  //     })
  //     .catch((err) => {
  //       console.error(">>>APP API ERR", err);

  //       if (err.response.data.status === "error") {
  //         if (err.response.data.exceptionType === "UserNotLoggedInException") {
  //           //bu hatayi aldigimiza gore bzdeki token bilgisi artik invalid

  //           //local storageden token bilgisini sil
  //           localStorage.removeItem("token");

  //           const action = {
  //             type: REMOVE_TOKEN,
  //           };
  //           props.dispatch(action);

  //           const actionAppData = {
  //             type: REMOVE_APP_DATA,
  //           };
  //           props.dispatch(actionAppData);

  //           window.location.href = "/#";
  //         } else {
  //           alert("Genel hata olustu,lutfen daha sonra tekrar deneyin");
  //         }
  //       }
  //     });
  // }

  if (props.authState.token && !props.appDataState.appData) {
    api
      .get("user/appData")
      .then((response) => {
        console.log(">>>APP RESPONSE", response);
        window.location.href = "#/";

        const action = {
          type: SET_APP_DATA,
          payload: {
            appData: response.data.data,
          },
        };
        props.dispatch(action);
      })
      .catch((error) => {
        console.error(">>>APP ERROR", error);
        if (error.response.data.status === "error") {
          if (
            (error.response.data.exceptionType = "UserNotLoggedInException")
          ) {
            const action = {
              type: REMOVE_TOKEN,
            };
            props.dispatch(action);
            const actionAppData = {
              type: REMOVE_APP_DATA,
            };
            props.dispatch(actionAppData);

            window.location.href = "/#";
          } else {
            alert("Genel Hata Olustu. Tekrar Deneyiniz");
          }
        }
      });
  }

  return (
    <div className="container">
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="categoryDetails/:slug" element={<CategoryDetails />} />
          <Route path="deneme" element={<Deneme />} />
        </Routes>
      </HashRouter>
      ;
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(">>>APP STATE", state);
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(App);

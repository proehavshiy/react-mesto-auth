import React from "react";
import { Route, Redirect } from "react-router-dom";
import Spinner from "./Spinner";

const ProtectedRoute = ({ path, loggedIn, isUserDataReceived, children }) => {
  return (
    <Route exact path={path}>
      {
        //при ожидании ответа от сервера при получении данных пользователя и карточек показываем спиннер ожидания
        loggedIn ? (isUserDataReceived ? (children) : (<Spinner />)) : (<Redirect to='/sign-in' />)
      }
    </Route>
  )
}

export default ProtectedRoute;

// const ProtectedRoute = ({ component: Component, ...props }) => {
//   return (
//     <Route>
//       {
//         () => {
//           return props.loggedIn ? (<Component {...props} />) : (<Redirect to='/sign-in' />)
//         }
//       }
//     </Route>
//   )
// }

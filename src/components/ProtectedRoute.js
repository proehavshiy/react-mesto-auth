import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        () => {
          return props.loggedIn ? (<Component {...props} />) : (<Redirect to='/sign-in' />)
        }
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
//           //при ожидании ответа от сервера при получении данных пользователя и карточек показываем спиннер ожидания
//           return props.loggedIn ? (
//             props.isUserDataReceived ? (<Component {...props} />
//             ) : (<Spinner />)
//           ) : (<Redirect to='/sign-in' />)
//         }
//       }
//     </Route>
//   )
// }

// export default ProtectedRoute;


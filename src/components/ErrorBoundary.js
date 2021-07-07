import React from 'react';
import { NavLink } from 'react-router-dom';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasError: false,
//       error: null,
//       errorInfo: null
//     }
//   }

//   //Используйте static getDerivedStateFromError() при рендеринге запасного UI в случае отлова ошибки.
//   static getDerivedStateFromError(error) {
//     // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
//     this.setState({
//       hasError: true,
//     })
//     // return { hasError: true };
//   }

//   //Используйте componentDidCatch() при написании кода для журналирования информации об отловленной ошибке.
//   componentDidCatch(error, errorInfo) {
//     // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
//     //но я выведу в консоль
//     this.setState({
//       error: error,
//       errorInfo: errorInfo
//     })
//     console.log('error:', this.error);
//     console.log('errorInfo:', this.errorInfo.componentStack);
//   }

//   render() {
//     // const history = this.props.history;

//     if (this.state.hasError) {
//       return (
//         <>
//           <div>Возникла ошибка</div>
//           {/* <NavLink onClick={() => history.goBack()}></NavLink> */}
//         </>
//       )
//     };

//     return this.props.children;
//   }
// }

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновите состояние так, чтобы следующий рендер показал запасной интерфейс.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Здесь можно рендерить запасной интерфейс
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

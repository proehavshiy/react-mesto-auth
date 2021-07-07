import React from 'react';
import { NavLink } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  //Используйте static getDerivedStateFromError() при рендеринге запасного UI в случае отлова ошибки.
  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    this.setState({
      hasError: true,
    })
    // return { hasError: true };
  }

  //Используйте componentDidCatch() при написании кода для журналирования информации об отловленной ошибке.
  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    //но я выведу в консоль
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    console.log('error:', error);
    console.log('errorInfo:', errorInfo.componentStack);
  }

  render() {
    const history = this.props.history;

    if (this.state.hasError) {
      return (
        <>
          <div>Возникла ошибка</div>
          <NavLink onClick={() => history.goBack()}></NavLink>
        </>
      )
    };

    return this.props.children;
  }
}

export default ErrorBoundary;

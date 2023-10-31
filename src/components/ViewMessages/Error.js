import React from "react";
import "../../index.css";
const ErrorFallback = ({ error }) => {
  return (
    <div className="centered">
      <h1>Ops, algo deu errado!</h1>
      <p>
        Desculpe, ocorreu um erro inesperado. Por favor, tente novamente mais
        tarde.
      </p>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default ErrorFallback;

import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

function Soma(props) {
  const { min, max } = props;
  const Soma = min + max;

  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{Soma}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Soma);

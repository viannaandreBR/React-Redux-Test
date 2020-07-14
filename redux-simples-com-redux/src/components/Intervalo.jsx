import "./Intervalo.css";
import { connect } from "react-redux";

import React from "react";

import Card from "./Card";
import { alterarNumeroMinimo } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;



  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>

          <input type="number" value={min} readOnly />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} readOnly />
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

function mapActionCretorsToProp(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCretorsToProp)(Intervalo);

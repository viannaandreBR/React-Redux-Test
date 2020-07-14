import {
  
  NUM_MIN_ALTERADO,
  NUM_MAX_ALTERADO

  } from './actionTypes'


//Action Creator Minimo
export function alterarNumeroMinimo(novoNumero){
  return {
    type: NUM_MIN_ALTERADO, 
    payload: novoNumero
  }
}


//Action Creator Maximo
export function alterarNumeroMaximo(novoNumero){
  return {
    type: NUM_MAX_ALTERADO, 
    payload: novoNumero
  }
}
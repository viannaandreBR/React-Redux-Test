
//Action Creator
export function alterarNumeroMinimo(novoNumero){
  return {
    type: 'NUM_MIN_ALTERADO', 
    payload: novoNumero
  }
}
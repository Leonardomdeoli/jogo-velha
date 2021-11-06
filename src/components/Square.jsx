import "../styles.css";

/**
 * Componentes de Função
 * 
 * Em React, componentes de função são os mais simples de serem escritos, 
 * contém apenas um método render e não possuem seu próprio state.
 */
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
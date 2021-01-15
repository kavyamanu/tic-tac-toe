export function Square(props) {

  return (
    <button className="square" onClick = {()=> {props.onClicked(props.index)}}>
      {props.stateValue[props.index]}
    </button>
  );
}

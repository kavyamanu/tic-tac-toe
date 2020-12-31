export function Square(props) {

  return (
    <button className="square" onClick = {()=> {props.onClick(props.index)}}>
      {props.value[props.index]}
    </button>
  );
}

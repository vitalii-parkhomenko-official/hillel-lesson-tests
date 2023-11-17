function InputBase(props) {
  return (
    <input
      data-testid={props["data-testid"] || "input-base"}
      type={props.type || "text"}
      className="form-control"
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}

export default InputBase;

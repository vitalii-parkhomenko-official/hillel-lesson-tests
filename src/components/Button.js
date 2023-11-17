function Button(props) {
  const { type = "button" } = props;
  const variant = props.variant || "primary";
  const className = props.className ? `btn btn-${variant} ${props.className}` : `btn btn-${variant}`;

  return (
    <button
      data-testid={props["data-testid"] || "button"}
      type={type}
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;

function Toolbar(props) {
  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      {props.children}
    </div>
  );
}

export default Toolbar;

const A = (props) => (
  <a
    href={props.url}
    rel="noreferrer noopener"
    target={props.newtab ? "_blank" : null}
    className={props.className ? props.className : null}
  >
    {props.children}
  </a>
);

export default A;

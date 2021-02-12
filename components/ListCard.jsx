const ListCard = (props) => (
  <>
    <h3>{props.heading}</h3>
    <p>{props.f1}</p>

    {/* Phone number */}
    {props.f2.slice(0, 3) === "+61" && (
      <a href={`tel:${props.f2.replace(/\s/g, "")}`}>{props.f2}</a>
    )}

    {/* Price */}
    {props.f2.slice(0, 3) !== "+61" && <p>${props.f2}</p>}

    <img src={props.image} alt="Image" />
  </>
);

export default ListCard;

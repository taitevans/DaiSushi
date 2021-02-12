const ListCard = (props) => (
  <>
    <h3>{props.heading}</h3>
    <p>{props.f1}</p>
    <p>{props.f2}</p>
    <img src={props.image} alt="Image" />
  </>
);

export default ListCard;

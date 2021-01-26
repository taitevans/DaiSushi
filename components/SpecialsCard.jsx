const SpecialsCard = (props) => (
  <div className="specials-card">
    <picture>
      <source type="image/webp" srcSet={props.webp} />
      <img src={props.img} alt={props.alt} />
    </picture>
    <h1>{props.title}</h1>
  </div>
);

<style jsx>{`
  h1 {
    text-transform: uppercase;
  }
`}</style>;

export default SpecialsCard;

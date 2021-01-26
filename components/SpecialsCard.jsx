const SpecialsCard = (props) => (
  <>
    <div className="specials-card">
      <picture>
        <source type="image/webp" srcSet={props.webp} />
        <img src={props.img} alt={props.alt} />
      </picture>
      <h1>{props.title}</h1>
    </div>

    <style jsx>{`
      .specials-card {
        padding: 32px 0;
      }

      h1 {
        text-transform: uppercase;
        width: 160px;
        line-break: anywhere;
      }
    `}</style>
  </>
);

export default SpecialsCard;

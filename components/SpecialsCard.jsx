const SpecialsCard = (props) => (
  <>
    <div className={"specials-card " + props.title}>
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

      .luvyou {
        color: var(--green);
      }

      .nigiri {
        color: var(--red);
      }

      .uramaki {
        color: var(--pink);
      }

      .maki {
        color: var(--orange);
      }
    `}</style>
  </>
);

export default SpecialsCard;

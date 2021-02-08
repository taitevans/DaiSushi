import StarRating from "./StarRating";

const TestimonialCard = (props) => (
  <>
    <div className="card">
      <picture>
        <source
          type="image/webp"
          srcSet={`/img/portraits/port${props.avatar}.webp`}
        />
        <img
          src={`/img/portraits/port${props.avatar}.jpg`}
          alt="avatar"
          height="128"
          width="128"
        />
      </picture>
      <h5>{props.name}</h5>
      <StarRating stars={props.stars} />
      <p>{props.review}</p>
    </div>

    <style jsx>{`
      .card {
        padding: 0 16px 32px 16px;
        background-color: var(--red);
        border-radius: 24px;
        grid-column: span 4;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 96px;
      }

      img {
        border-radius: 64px;
        margin-top: -64px;
      }

      p {
        text-align: center;
      }

      @media only screen and (min-width: 840px) {
        .card {
          grid-column: span 3;
          margin-top: 64px;
        }
      }
    `}</style>
  </>
);

export default TestimonialCard;

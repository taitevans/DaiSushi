import StarRating from "./StarRating";

const TestimonialCard = (props) => (
  <>
    <div className={`card ${props.colour}-test`}>
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

    <style global jsx>{`
      .green-test,
      .green-test .rating-icon {
        background-color: var(--green);
        fill: var(--pink);
      }

      .orange-test,
      .orange-test .rating-icon {
        background-color: var(--orange);
        fill: var(--red);
      }

      .red-test,
      .red-test .rating-icon {
        background-color: var(--red);
        fill: var(--orange);
      }

      .pink-test,
      .pink-test .rating-icon {
        background-color: var(--pink);
        fill: var(--green);
      }
    `}</style>

    <style jsx>{`
      .card {
        padding: 0 16px 32px 16px;
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

      h5 {
        margin: 12px 0 4px 0;
      }

      p {
        text-align: center;
        margin-top: 12px;
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

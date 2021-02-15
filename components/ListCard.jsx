const ListCard = (props) => (
  <>
    <div className="card">
      <h4>{props.heading}</h4>
      <p>{props.f1}</p>

      {/* Phone number */}
      {props.f2.slice(0, 3) === "+61" && (
        <a href={`tel:${props.f2.replace(/\s/g, "")}`}>
          <h6>{props.f2}</h6>
        </a>
      )}

      {/* Price */}
      {props.f2.slice(0, 3) !== "+61" && <h6>${props.f2}</h6>}
    </div>
    <div className="image-container">
      <img src={`${props.image}.jpg`} alt="Image" />
    </div>

    <style jsx>{`
      .card {
        padding: 16px;
        background-color: var(--red);
        grid-column: span 2;
        border-radius: 24px 0 0 24px;
        margin-right: -16px;
        display: flex;
        flex-direction: column;
      }

      h4 {
        margin-bottom: 6px;
      }

      p:nth-child(2) {
        margin-bottom: auto;
        color: var(--text-2);
      }

      a:nth-child(3),
      p:nth-child(3) {
        margin-top: auto;
      }

      .image-container {
        grid-column: span 2;
        overflow: hidden;
        border-radius: 24px;
        margin: -24px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        height: 248px;
      }

      @media only screen and (min-width: 840px) {
        .card {
          grid-column: span 3;
          margin-right: -24px;
        }

        .image-container {
          grid-column: span 3;
        }
      }
    `}</style>
  </>
);

export default ListCard;

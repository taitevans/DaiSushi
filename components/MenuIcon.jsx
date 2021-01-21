const MenuIcon = (props) => (
  <>
    <div className={props.toggled ? "toggled" : ""}>
      <svg
        height="3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 3"
      >
        <path fill="#000" d="M0 1l20-1v3L0 2V1z" />
      </svg>
      <svg
        height="3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 3"
      >
        <path fill="#000" d="M0 1l20-1v3L0 2V1z" />
      </svg>
      <svg
        height="8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 9 8"
        className="heart"
      >
        <path
          fill="#EF8FFF"
          d="M4.5 8l-.7-.6C1.5 5.4 0 4 0 2.4 0 1.1 1 0 2.5 0c.8 0 1.5.4 2 1 .5-.6 1.2-1 2-1C8 0 9 1 9 2.4c0 1.6-1.5 3-3.8 5l-.7.6z"
          className={`${props.colour}-drawer`}
        />
      </svg>
    </div>

    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 24px;
        width: 24px;
        z-index: 2;
      }

      .heart {
        position: absolute;
        transform: translateX(0) rotate(0);
        z-index: -1;
        opacity: 0;
        transition-delay: 0s;
      }

      .toggled .heart {
        transform: translateX(-10px) rotate(-45deg);
        opacity: 1;
        transition-delay: 0.3s;
      }

      svg {
        transform: roate(0deg);
        transition: all 0.4s ease-out;
      }

      svg:nth-child(1) {
        margin-bottom: 6px;
      }

      .toggled svg:nth-child(1) {
        margin-bottom: -2px;
        transform: rotate(-45deg);
      }

      .toggled svg:nth-child(2) {
        transform: rotate(45deg);
      }
    `}</style>
  </>
);

export default MenuIcon;

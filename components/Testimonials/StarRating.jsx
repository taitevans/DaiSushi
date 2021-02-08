import { useState, useEffect } from "react";
import StarIcon from "./StarIcon";
import HalfStarIcon from "./HalfStarIcon";

export default function StarRating(props) {
  const [stars, setStars] = useState(0);
  const [halfStars, setHalfStars] = useState(0);

  useEffect(() => {
    if (props.stars <= 0 || parseFloat(props.stars) == NaN) {
      setStars(0);
      setHalfStars(1);
    } else if (props.stars > 10) {
      setStars(10);
      setHalfStars(0);
    } else {
      let calcStars = Math.round(props.stars * 2) / 2;
      let calcHalfStars = calcStars.toString().slice(-2) == ".5" ? 1 : 0;
      setStars(Math.floor(calcStars));
      setHalfStars(calcHalfStars);
    }
  }, []);

  let starList = [];
  let halfStarList = [];

  for (let i = 0; i < stars; ++i) {
    starList.push(<StarIcon />);
  }

  for (let i = 0; i < halfStars; ++i) {
    halfStarList.push(<HalfStarIcon />);
  }

  return (
    <>
      <div className="stars">
        {starList}
        {halfStarList}
      </div>

      <style jsx>{`
        .stars {
          display: inline-flex;
        }
      `}</style>
    </>
  );
}

import { useEffect, useState } from "react";
import Link from "next/link";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import SpecialsCard from "../components/SpecialsCard";
import DoorDashLogo from "../components/DoorDashLogo";
import StoreIcon from "../components/StoreIcon";
import UberEatsLogo from "../components/UberEeatsLogo";
import TestimonialCard from "../components/Testimonials/Card";

export default function Index() {
  const [bg, setBg] = useState({
    defaultBg: "",
    pinkBg: "",
    orangeBg: "",
    greenBg: "",
    redBg: "",
  });

  useEffect(() => {
    let start = getComputedStyle(document.documentElement).getPropertyValue(
      "--bg"
    );
    let pink = getComputedStyle(document.documentElement).getPropertyValue(
      "--pink"
    );
    let orange = getComputedStyle(document.documentElement).getPropertyValue(
      "--orange"
    );
    let green = getComputedStyle(document.documentElement).getPropertyValue(
      "--green"
    );
    let red = getComputedStyle(document.documentElement).getPropertyValue(
      "--red"
    );
    setBg((prevBg) => ({
      ...prevBg,
      defaultBg: start,
      pinkBg: pink,
      orangeBg: orange,
      greenBg: green,
      redBg: red,
    }));
  }, []);

  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero-container">
            <h1 className="hero-title">
              Sushi Made
              <br />
              with <span className="em pink">Love</span>
            </h1>
            <div className="buttons">
              <Link href="/order/">
                <a className="button">order now</a>
              </Link>
              <Link href="/stores/">
                <a className="button secondary">find a store</a>
              </Link>
            </div>
          </div>
        </div>
        <picture>
          <source type="image/webp" srcSet="/img/sushi-platter.webp" />
          <img
            src="/img/sushi-platter.png"
            alt="Sushi platter"
            className="sushi-platter"
            height="610"
            width="610"
          />
        </picture>
      </section>

      <section id="specials">
        <Controller>
          <Scene indicators={false} duration="1600">
            <Timeline target={<div className="specials-bg" />}>
              <Tween
                from={{
                  backgroundColor: bg.defaultBg,
                }}
                to={{
                  backgroundColor: bg.pinkBg,
                }}
              />
              <Tween
                to={{
                  backgroundColor: bg.orangeBg,
                }}
              />
              <Tween
                to={{
                  backgroundColor: bg.greenBg,
                }}
              />
              <Tween
                to={{
                  backgroundColor: bg.redBg,
                }}
              />
              <Tween
                to={{
                  backgroundColor: bg.defaultBg,
                }}
              />
              <SpecialsCard title="luvyou" webp="" img="" alt="" />
              <SpecialsCard title="nigiri" webp="" img="" alt="" />
              <SpecialsCard title="uramaki" webp="" img="" alt="" />
              <SpecialsCard title="maki" webp="" img="" alt="" />
            </Timeline>
          </Scene>
        </Controller>
      </section>

      <section id="menu">
        <div className="container">
          <div className="menu-content">
            <h2>
              But wait...
              <br />
              There's more!
            </h2>
            <p>
              Thousands of years of perfection, with a modern twist. Our range
              of freshly made sushi is guranateed to fit any taste
            </p>
            <Link href="/menu/">
              <a className="button">See Menu</a>
            </Link>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-titles">
          <h1>Sushi is art</h1>
          <h1>Sushi is art</h1>
          <h1>Sushi is art</h1>
          <h1>Sushi is art</h1>
          <h1>Sushi is art</h1>
        </div>
        <p>
          Ipsa fugiat nihil culpa. Expedita adipisci dignissimos et rerum
          officia. Et eum temporibus in tenetur distinctio totam eligendi saepe.
          Sit et enim est error est animi qui. Velit itaque molestiae qui.
          Architecto omnis accusantium saepe rerum. Maxime at mollitia eveniet
          cupiditate. Placeat repellendus harum itaque error quo qui.
          <br />
          <br />
          Et ullam reprehenderit quia quae qui et dolorem. Praesentium
          voluptatum quia dolores recusandae eveniet. Ea nihil vel fugiat itaque
          quidem et.
        </p>
      </section>

      <section id="order">
        <div className="container">
          <h2>Come Make an Order</h2>
          <a
            href="https://www.ubereats.com/"
            className="order-card"
            rel="noreferrer noopener"
          >
            <UberEatsLogo />
            <p className="p2">Uber</p>
          </a>
          <a
            href="https://www.doordash.com/"
            className="order-card"
            target="_blank"
            rel="noreferrer noopener"
          >
            <DoorDashLogo />
            <p className="p2">DoorDash</p>
          </a>
          <Link href="/stores/">
            <a className="order-card">
              <StoreIcon />
              <p className="p2">In-Store</p>
            </a>
          </Link>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <TestimonialCard
            avatar="1"
            name="Tyrell W"
            review="Elliot social engineered me into eating here"
            stars={5}
            colour="red"
          />
          <TestimonialCard
            avatar="2"
            name="Stephanie V"
            review="Whoever made the website did a great job, you should hire them!"
            stars={5}
            colour="green"
          />
          <TestimonialCard
            avatar="3"
            name="Julia H"
            review="I'm no copy writer, but this food was excellent, would eat here again"
            stars={5}
            colour="orange"
          />
          <TestimonialCard
            avatar="4"
            name="Dylan M"
            review="Decent sushi, friendly staff. I'm a hard guy to impress though, so only 4 and a half stars"
            stars={4.5}
            colour="pink"
          />
        </div>
      </section>

      <style global jsx>{`
        .buttons > a {
          width: fit-content;
        }

        .buttons > a:nth-child(1) {
          padding: 20px 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>

      <style jsx>{`
        @keyframes platterRotate {
          from {
            transform: translate(60%, 56px) rotate(0deg);
          }
          to {
            transform: translate(60%, 56px) rotate(360deg);
          }
        }

        .sushi-platter {
          position: fixed;
          width: 80vh;
          height: 80vh;
          transform: translate(60%, 56px) rotate(0deg);
          top: 0;
          right: 0;
          z-index: -4;
          animation: platterRotate 20s infinite linear;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          width: fit-content;
          margin-top: 54px;
        }

        .buttons > a:nth-child(2) {
          /* margin-left: 8px; */
          margin-top: 8px;
        }

        .buttons > a {
          width: auto;
        }

        .pink {
          color: var(--pink);
        }

        .hero-container {
          grid-column: span 4;
          width: 100%;
          height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-title {
          font-size: 16vw;
        }

        #specials,
        .menu-content {
          grid-column: span 4;
          width: 100%;
          position: relative;
        }

        .specials-bg {
          position: fixed;
          opacity: 1;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          z-index: -5;
          background-color: var(--bg);
        }

        #menu {
          padding: 116px 0 134px 0;
        }

        .menu-content {
          position: static;
        }

        #about {
          background-color: var(--pink);
          padding: 20px 16px;
          margin: 0 -16px;
          height: auto;
        }

        .about-titles {
          color: var(--green);
          text-transform: uppercase;
          grid-column: span 2;
          width: 100%;
          margin-bottom: 16px;
        }

        @supports (-webkit-text-stroke: #fff) {
          .about-titles,
          .about-titles > h1::selection,
          .about-titles > h1::-webkit-selection {
            -webkit-text-stroke: 2px var(--green);
            color: transparent;
          }

          .about-titles > h1:nth-child(3),
          .about-titles > h1:nth-child(3)::selection,
          .about-titles > h1:nth-child(3)::-webkit-selection {
            -webkit-text-stroke: 0;
            color: var(--green);
          }
        }

        .about-titles > h1 {
          text-align: center;
          font-size: 14vw;
          line-height: 92%;
          margin: 0 -16px;
        }

        #about p,
        #about .about-titles {
          grid-column: span 4;
          width: 100%;
        }

        #order {
          padding: 86px 0 146px 0;
        }

        #order h2 {
          grid-column: span 4;
          text-align: center;
        }

        .order-card {
          width: 100%;
          grid-column: span 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 62px 0 34px 0;
        }

        .order-card p {
          color: #000;
          margin-top: 16px;
        }

        .order-card svg {
          width: 128px;
          height: 128px;
          fill: #000;
        }

        @media only screen and (min-width: 840px) {
          .hero-title {
            font-size: 5.812em;
          }

          .hero-container {
            grid-column: span 12;
          }

          .menu-content {
            grid-column: span 6;
          }

          #about {
            padding: 0;
            height: calc(5.812em * 5);
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            margin: 0 -24px;
          }

          #about p {
            margin-left: 50%;
            width: 468px;
            padding-left: 12px;
            z-index: 1;
          }

          #about .container {
            min-height: calc(5.812em * 5);
          }

          .about-titles {
            margin-bottom: 0;
            position: absolute;
          }

          .about-titles h1 {
            font-size: 7.5vw;
            width: fit-content;
            right: 0;
            margin: 0 calc(50% + 12px) 0 auto;
            text-align: left;
          }

          #order h2 {
            grid-column: span 12;
            text-align: center;
          }

          .order-card {
            width: 100%;
            grid-column: span 4;
          }
        }
      `}</style>
    </>
  );
}

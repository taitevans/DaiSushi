import { useEffect, useState } from "react";
import Link from "next/link";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default function Index() {
  const [bg, setBg] = useState({ defaultBg: "", pinkBg: "" });
  useEffect(() => {
    let start = getComputedStyle(document.documentElement).getPropertyValue(
      "--bg"
    );
    let pink = getComputedStyle(document.documentElement).getPropertyValue(
      "--pink"
    );
    setBg((prevBg) => ({ ...prevBg, defaultBg: start, pinkBg: pink }));
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
                <a className="button secondary">order now</a>
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
            src="/img/sushi-platter.jpg"
            alt="Sushi platter"
            className="sushi-platter"
          />
        </picture>
      </section>

      <Controller>
        <Scene indicators={true} duration="100%">
          <Timeline wrapper={<div className="scrollBg" />}>
            <section id="specials">
              <Tween
                position="0"
                from={{
                  backgroundColor: bg.defaultBg,
                }}
                to={{
                  backgroundColor: bg.pinkBg,
                }}
              >
                <div className="specials-bg" />
              </Tween>
              <div className="specials-card">
                <img src="" alt="" />
                <h1>
                  sa
                  <br />
                  shi
                  <br />
                  mi
                </h1>
              </div>
            </section>
          </Timeline>
        </Scene>
      </Controller>

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
          grid-column-start: 1;
          grid-column-end: 5;
          width: 100%;
          height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-title {
          font-size: 16vw;
        }

        #specials {
          grid-column-start: 1;
          grid-column-end: 5;
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

        @media only screen and (min-width: 840px) {
          .hero-title {
            font-size: 5.812em;
          }
        }
      `}</style>
    </>
  );
}

import Link from "next/link";

const Contact = () => (
  <>
    <div className="hero">
      <h2>Contact</h2>
    </div>
    <section id="contact">
      <div className="container">
        <form action="">
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone number (Not required)" />
          <textarea
            required
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message here. A love letter perhaps?"
          ></textarea>
          <button className="button">Submit</button>
        </form>
        <div className="text">
          <h4>Get in contact with us</h4>
          <p>
            We love customer feedback and questions, please use this form for
            general enquiries, complaints, feedback, etc
          </p>
          <p>
            For employment enquiries, please see our{" "}
            <Link href="/careers/">
              <a>Careers</a>
            </Link>{" "}
            Page
          </p>
        </div>
      </div>
    </section>

    <style jsx>{`
      .hero * {
        text-align: center;
      }

      #contact {
        padding: 24px 0 42px 0;
      }

      form,
      .text {
        grid-column: span 4;
      }

      form {
        display: flex;
        flex-direction: column;
        font-family: "Inter", sans-serif;
        font-size: 1em;
        padding-top: 32px;
      }

      textarea {
        max-width: 100%;
        min-width: 100%;
        font-family: "Inter", sans-serif;
      }

      input,
      textarea {
        padding: 8px;
        border: 2px #000 solid;
        margin-bottom: 8px;
      }

      input:focus,
      textarea:focus {
        outline: none;
        border: 2px var(--pink) solid;
      }

      button {
        width: 100%;
        justify-content: center;
        text-align: center;
      }

      .text {
        order: -1;
      }

      @media only screen and (min-width: 840px) {
        #contact {
          padding: 24px 0 104px 0;
        }

        form {
          padding-top: 0;
        }

        button {
          width: fit-content;
        }

        form,
        .text {
          grid-column: span 6;
        }

        .text {
          order: 1;
        }
      }
    `}</style>
  </>
);

export default Contact;

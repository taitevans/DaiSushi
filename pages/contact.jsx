import Link from "next/link";

const Contact = () => (
  <>
    <div className="hero">
      <h2>Contact</h2>
    </div>
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
        <button>Submit</button>
      </form>
      <div className="text">
        <h4>Get in contact with us</h4>
        <p>
          We love customer feedback and questions, please use this conteact form
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

    <style jsx>{`
      form,
      .text {
        grid-column: span 4;
      }

      form {
        display: flex;
        flex-direction: column;
      }

      textarea {
        max-width: 100%;
      }

      .text {
        order: -1;
      }

      @media only screen and (min-width: 840px) {
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

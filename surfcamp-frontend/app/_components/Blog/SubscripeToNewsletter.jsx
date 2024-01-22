"use client";

import { useState } from "react";

function SubscripeToNewsletter() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const onChange = (e) => setEmail(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    //send email to Strapi
    if (email.length) {
      setHasSignedUp(true);
    }
    //Give back feedback to the user that they have signed up
  };

  return (
    <section className="newsletter">
      {hasSignedUp ? (
        <h4 className="newsletter__thanks">
          Thanks you for signing up to our newsletter
        </h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>Subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form className="newsletter__form" onSubmit={onSubmit}>
            <input
              className="newsletter__email input"
              placeholder="Enter your E-mail adress"
              type="text"
              value={email}
              onChange={onChange}
            />
            <button
              type="submit"
              className="newsletter__subscribe btn btn--medium btn--turquoise"
            >
              SUBSCRIBE
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default SubscripeToNewsletter;

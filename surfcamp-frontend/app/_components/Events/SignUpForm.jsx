"use client";

import TextInput from "@/app/TextInput";
import { generateSignupPayload } from "@/utils/strapi.utils";
import { allDataFilledIn } from "@/utils/vakudation.utils";
import axios from "axios";
import { useState } from "react";

function SignUpForm({
  infoText,
  headline,
  buttonLabel,
  pricing,
  eventId = null,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const [errMsg, setErrMsg] = useState(false);

  const onChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = generateSignupPayload(formData, eventId);

    if (allDataFilledIn(formData)) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`,
          payload
        );
        setShowConfirm(true);
      } catch (error) {
        setErrMsg(
          error.response?.data?.error?.message || "Something went wrong"
        );
      }
    } else {
      setErrMsg("Please fill out all fields");
    }
  };

  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">{headline}</h3>
        {infoText}
      </div>
      {showConfirm ? (
        <div className="signup-form__form">
          <h4>Thank you for signing up. We will get in touch soon!</h4>
        </div>
      ) : (
        <form className="signup-form__form" onSubmit={onSubmit}>
          <div className="signup-form__name-container">
            <TextInput
              inputName="firstName"
              value={formData.firstName}
              onChange={onChange}
              label="First Name"
            />
            <TextInput
              inputName="lastName"
              value={formData.lastName}
              onChange={onChange}
              label="Last Name"
            />
          </div>
          <TextInput
            inputName="email"
            value={formData.email}
            onChange={onChange}
            label="Your email address:"
          />
          <TextInput
            inputName="phone"
            value={formData.phone}
            onChange={onChange}
            label="Your phone number:"
          />
          <button type="submit" className="btn btn--medium btn--turquoise">
            {buttonLabel || "Stay in touch"}
          </button>
          {errMsg && <p className="copy signup-form__error">{errMsg}</p>}
          {pricing && (
            <div className="signup-form__pricing">
              <h3>Pricing</h3>
              <p className="copy">
                Single Room:{" "}
                <span className="bold">${pricing.singlePrice}$ per person</span>
              </p>
              <p className="copy">
                Shared Room:{" "}
                <span className="bold">${pricing.sharedPrice}$ per person</span>
              </p>
            </div>
          )}
        </form>
      )}
    </section>
  );
}

export default SignUpForm;

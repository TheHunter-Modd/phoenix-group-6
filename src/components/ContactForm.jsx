import { useState } from "react";
import "./ContactForm.css";

const MAX_CHARS = 100;
const ENDPOINT = "https://whitebricks.com/tsacademy.php";

const INITIAL_VALUES = { fullName: "", email: "", phone: "", message: "" };

const validate = (values) => {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Full name is required.";

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-().]{7,20}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.length > MAX_CHARS) {
    errors.message = `Message must be ${MAX_CHARS} characters or fewer.`;
  }

  return errors;
};

export default function ContactForm() {
  const [values, setValues]       = useState(INITIAL_VALUES);
  const [errors, setErrors]       = useState({});
  const [status, setStatus]       = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const body = new FormData();
      body.append("fullName", values.fullName);
      body.append("email",    values.email);
      body.append("phone",    values.phone);
      body.append("message",  values.message);

      const res = await fetch(ENDPOINT, { method: "POST", body });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch {
      setServerError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const charsLeft = MAX_CHARS - values.message.length;

  return (
    <div className="contact-wrapper">
      <div className="contact-section">
      <div className="contact-wrapper" id="contact"></div>
        <div className="contact-header">
          <h2 className="contact-title">Have Questions About Planetary Science?</h2>
          <p className="contact-subtitle">
            Interested in learning more about space, astronomy, or how planetary data is
            collected and analyzed? Reach out and we'll get back to you.
          </p>
        </div>

        <div className="form-grid">

          <div className="field-group">
            <label htmlFor="fullName">Full Name<span className="required">*</span></label>
            <input
              id="fullName" name="fullName" type="text"
              placeholder="Full name" autoComplete="name"
              value={values.fullName} onChange={handleChange}
              className={errors.fullName ? "error" : ""}
            />
            {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input
              id="email" name="email" type="email"
              placeholder="example@example.com" autoComplete="email"
              value={values.email} onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="phone">Phone Number<span className="required">*</span></label>
            <input
              id="phone" name="phone" type="tel"
              placeholder="Please enter a valid phone number." autoComplete="tel"
              value={values.phone} onChange={handleChange}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="message">Message<span className="required">*</span></label>
            <input
              id="message" name="message" type="text"
              placeholder="Enter your message"
              value={values.message} onChange={handleChange}
              className={errors.message ? "error" : ""}
               maxLength={MAX_CHARS + 20}
            />
            <span className={`char-count ${charsLeft < 0 ? "over" : ""}`}>
              {charsLeft >= 0 ? `${charsLeft} characters remaining` : `${Math.abs(charsLeft)} over limit`}
            </span>
            {errors.message && <span className="error-msg">{errors.message}</span>}
          </div>


        </div>

        <div className="submit-row">
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Submit"}
            {status !== "loading" && <span className="arrow-icon">›</span>}
          </button>

          {status === "error" && (
            <div className="error-banner">⚠ {serverError}</div>
          )}

          {status === "success" && (
            <div className="success-banner">
              ✓ Your message has been sent! We'll get back to you shortly.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

import { useState } from "react";
import "./ContactForm.css";

const MAX_CHARS = 100;

export default function ContactForm() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!values.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!values.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s\-().]{7,20}$/.test(values.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!values.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (values.message.length > MAX_CHARS) {
      newErrors.message = `Message must be ${MAX_CHARS} characters or fewer.`;
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setValues({ fullName: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  const charsLeft = MAX_CHARS - values.message.length;

  return (
    <div className="contact-wrapper">
      <div className="contact-section">
        <div className="contact-header">
          <h2 className="contact-title">Have Questions About Planetary Science?</h2>
          <p className="contact-subtitle">
            Interested in learning more about space, astronomy, or how planetary data is collected and
            analyzed? Reach out and we'll get back to you.
          </p>
        </div>

        <div className="form-grid">
          {/* Full Name */}
          <div className="field-group">
            <label htmlFor="fullName">
              Full Name<span className="required">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full name"
              value={values.fullName}
              onChange={handleChange}
              className={errors.fullName ? "error" : ""}
              autoComplete="name"
            />
            {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div className="field-group">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              autoComplete="email"
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div className="field-group">
            <label htmlFor="phone">
              Phone Number<span className="required">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Please enter a valid phone number."
              value={values.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
              autoComplete="tel"
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/* Message */}
          <div className="field-group message-group">
            <label htmlFor="message">
              Message<span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={values.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              maxLength={MAX_CHARS + 20}
            />
            <span className={`char-count ${charsLeft < 0 ? "over" : ""}`}>
              {charsLeft >= 0
                ? `${charsLeft} characters remaining`
                : `${Math.abs(charsLeft)} over limit`}
            </span>
            {errors.message && <span className="error-msg">{errors.message}</span>}
          </div>
        </div>

        <div className="submit-row">
          <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending…" : "Submit"}
            {!loading && <span className="arrow-icon">›</span>}
          </button>

          {submitted && (
            <div className="success-banner">
              ✓ Your message has been sent! We'll get back to you shortly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

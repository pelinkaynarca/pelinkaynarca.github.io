import React, { useState } from 'react';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: ''
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setFormData(INITIAL_FORM_STATE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    setFormStatus('loading');
  
    const success = await submitForm(formData);
    
    if (success) {
      setFormStatus('success');
      resetForm();
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div className="relative flex items-center justify-center w-[92%] lg:w-big-screen mb-14 text-accent1">
      <div className="w-full border-[1px] flex flex-col gap-5 md:gap-10 rounded-2xl shadow-lg border-accent2 h-fit md:h-[700px] bg-card border-opacity-25 p-10 md:p-16">
        <h2 className="text-2xl font-semibold text-accent1 mb-5">Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Name"
            id="name"
            type="text"
            value={formData.name}
            handleChange={handleChange}
            placeholder="Your name"
          />
          <FormField
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            handleChange={handleChange}
            placeholder="Your email"
          />
          <FormField
            label="Message"
            id="message"
            type="textarea"
            value={formData.message}
            handleChange={handleChange}
            placeholder="Your message"
            rows="5"
          />

          <div>
            <button
              type="submit"
              className="w-full bg-accent2 text-accent1 font-medium py-3 rounded-lg hover:bg-opacity-80 transition duration-300"
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        {formStatus === 'success' && <StatusMessage type="success" message="Message sent successfully!" />}
        {formStatus === 'error' && (
          !formData.name || !formData.email || !formData.message ? (
            <StatusMessage type="error" message="All fields must be filled!" />
          ) : (
            <StatusMessage type="error" message="Something went wrong. Please try again!" />
          )
        )}
      </div>
    </div>
  );
};

const FormField = ({ label, id, type, value, handleChange, ...props }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-accent1 font-medium mb-2">{label}</label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 text-primary rounded-lg focus:outline-none focus:border-indigo-500"
        {...props}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 text-primary rounded-lg focus:outline-none focus:border-indigo-500"
        {...props}
      />
    )}
  </div>
);

const StatusMessage = ({ type, message }) => {
  const className = type === 'success' ? 'text-accent2' : 'text-error';
  return <p className={`mt-4 text-center text-lg font-medium ${className}`}>{message}</p>;
};

// Web3Forms
const submitForm = async (formData) => {
  try {
    const formObj = { ...formData, access_key: "e19d2e59-d09f-4a45-92e8-1414f0fb1bef" };
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formObj),
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};

export default ContactForm;

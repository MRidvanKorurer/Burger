import React from "react";
import "../style/contact.css";
import Banner from "../assets/banner.png";
import { useFormik } from "formik";
import { basicSchema } from "../schema/schema";

const Contact = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="contact">
      <div className="contactImg">
        <img src={Banner} alt="" />
      </div>
      <form onSubmit={onSubmit} className="form">
        <div className="formItem">
          <label className="label">Ad Soyad</label>
          <input
            className="ınput "
            type="text"
            value={values.name}
            onChange={handleChange}
            id="name"
          />
        </div>
        {errors.name && <p className="errorP">{errors.name}</p>}

        <div className="formItem">
          <label className="label">Email</label>
          <input
            className="ınput"
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
          />
        </div>
        {errors.email && <p className="errorP">{errors.email}</p>}

        <div className="formItem">
          <label className="label">Mesajınız</label>
          <textarea
            className="ınput"
            type="text"
            value={values.message}
            onChange={handleChange}
            id="message"
            rows={5}
          />
        </div>
        {errors.message && <p className="errorP">{errors.message}</p>}

        <button disabled={isSubmitting} className="btnSubmit" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact;

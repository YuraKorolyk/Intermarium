'use client';
import React, { useState } from 'react';
import classes from './Form.module.scss';
import {useTranslation} from "react-i18next";
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  const {t} = useTranslation();
  return (
    <div className={classes.formContainer}>
      <div className={classes.title}>

      </div>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          className={classes.name}
          name="name"
          placeholder={t('form.name')}
          // value={formData.name}
          // onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          className={classes.email}
          name="email"
          placeholder={t('form.email')}
          // value={formData.email}
          // onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="country"
          className={classes.country}
          name="country"
          placeholder={t('form.country')}
          // value={formData.name}
          // onChange={handleChange}
          required
        />
      </div>
      <div>
        <textarea
          // type="text"
          id="request"
          name="request"
          className={classes.request}
          placeholder={t('form.request')}
          // value={formData.name}
          // onChange={handleChange}
          required
        />
      </div>
      <div className={classes.familiar}>
        <input name="familiar" type='checkbox'/>
        <label htmlFor="familiar">{t('form.familiar')}</label>
      </div>

      <div className={classes.button}>
        <button type="submit">{t('form.button')}</button>
      </div>
    </form>
    </div>
  );
};

export default Form;

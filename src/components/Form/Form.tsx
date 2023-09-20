'use client';
import React, { useState } from 'react';
import classes from './Form.module.scss';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    country: '',
    request: '',
    familiar: false, // Assuming familiar is a boolean field.
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData();

// Loop through the properties of formData and append them to data
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        data.append(key, formData[key]);
      }
    }



    // Send a POST request to the server
    try {
      // const response = await fetch('https://intermarium-backend.vercel.app', {
      //   method: 'POST',
      //   body: data
      // });
    // fetch('https://api.telegram.org/bot5858070417:AAHLfzyLGigxReIQl3ehhdZ38kp7NI-225c/sendMessage?chat_id=-815777950&text=some', {
    //   method: 'GET'
    // });
      const response = await fetch('/api', {
        method: 'GET',
      });
      // Handle the response as needed (e.g., check for success or errors)
      if (response.ok) {
        console.log('Form data sent successfully');
      //   // Optionally, you can reset the form here if the server request was successful
      //   // form.reset();
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error while sending form data:', error);
    }
  };

  const { t } = useTranslation();

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            className={classes.name}
            name="name"
            placeholder={t('form.name')}
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            id="request"
            name="request"
            className={classes.request}
            placeholder={t('form.request')}
            value={formData.request}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.familiar}>
          <input
            type="checkbox"
            id="familiar"
            name="familiar"
            checked={formData.familiar}
            onChange={() =>
              setFormData({
                ...formData,
                familiar: !formData.familiar,
              })
            }
          />
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

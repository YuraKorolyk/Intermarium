'use client';
import React, {FC, useEffect, useRef, useState} from 'react';
import classes from './Form.module.scss';
import {Trans, useTranslation} from 'react-i18next';
import {useRouter} from "next/navigation";
import Close from "../../../public/assets/icons/Close";

interface IProps {
  type?: 'modal';
  onClick?: any
}
const Form:FC<IProps> = ({type, onClick}) => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    country: '',
    request: '',
    familiar: false, // Assuming familiar is a boolean field.
  });
  const [isFamiliar, setIsFamiliar] = useState(true)
  const [success, setSuccess] = useState(false)
  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(formData.familiar)
    if (!formData.familiar) {
      setIsFamiliar(false);
      return
    } else {
      setIsFamiliar(true);

      const formattedData = `
Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Request: ${formData.request}
Language: ${i18n.language}
`;

      const encodedData = encodeURIComponent(formattedData);

      try {
        const response = await fetch(`https://api.telegram.org/bot6551955592:AAHGN7iMwEknSa3XGgyRJQ8CWxgQrg6cD-A/sendMessage?chat_id=-4050369133&text=${encodedData}`, {
        // const response = await fetch(`https://api.telegram.org/bot5858070417:AAHLfzyLGigxReIQl3ehhdZ38kp7NI-225c/sendMessage?chat_id=-815777950&text=${encodedData}`, {
          method: 'GET',
        });
        if (response.ok) {
          console.log('Form data sent successfully');
          setFormData({
            name: '',
            email: '',
            country: '',
            request: '',
            familiar: false,
          })

          setSuccess(true)
        } else {
          console.error('Failed to send form data');
        }
      } catch (error) {
        console.error('Error while sending form data:', error);
      }
    }
  };

  const {i18n, t} = useTranslation();

  useEffect(() => {
    if (success) {
      setTimeout(()=> {
        setSuccess(false)
      },4000)
    }
  }, [success]);
  return (
    <div className={type ? `${classes.formContainer} ${classes.modal}` : classes.formContainer}>
      {type && <div className={classes.closeIcon} onClick={onClick}><Close/></div>}
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
          <span className={classes.familiarText} style={!formData.familiar && !isFamiliar ? {color: 'red'} : {}}>
            <Trans
              i18nKey={t('form.familiar')}
              tOptions={{interpolation: {escapeValue: true}}}
              components={{
                span: <span className={classes.familiarLink} onClick={() => router.push(`/${i18n.language}/privacy`)}/>
              }}
            />
          </span>
        </div>


        <div className={classes.button}>
          <button type="submit">{t('form.button')}</button>
        </div>
      </form>
      {success && <div className={classes.overlay}></div>}
      {success && <div className={classes.success}>{t('form.success')}</div>}
    </div>
  );
};

export default Form;

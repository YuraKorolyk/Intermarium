import React, {useEffect} from 'react';
import classes from './FormModal.module.scss';
import Form from "@/components/Form/Form";
const FormModal = ({setIsOpened, isOpened}) => {
  useEffect(() => {
    if (isOpened) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }

    // Cleanup by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('lock');
    };
  }, [isOpened]);
  const onContainerClick = (e: any) => {
    if (e.target.id === 'form-modal') {
      setIsOpened(false)
    }
  }
  return (
    <div id="form-modal" className={classes.container} onClick={onContainerClick}>
      <Form type='modal' onClick={()=>setIsOpened(false)}/>
    </div>
  );
};

export default FormModal;

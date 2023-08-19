import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";


const Page = () => {
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Отримання довідки про несудимість в Україні" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>для іноземців</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>
                <span className="highlightDark">Довідка про відсутність судимості</span> – це документ, який
                підтверджує,
                що фізична особа, на ім’я якої видано документ, до кримінальної відповідальності не притягувалася, не
                є засудженою і не перебуває
                в розшуку на території України.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.whatFor}>
            <div className={classes.title}>
              <TextWithLine topText="Для чого може знадобитись довідка" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>про несудимість</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">оформлення громадянства України</CustomLi>
              <CustomLi color="light">отримання тимчасової посвідки на проживання в Україні</CustomLi>
              <CustomLi color="light">отримання постійної посвідки на проживання в Україні</CustomLi>
              <CustomLi color="light">при зверненні в установи іноземних держав</CustomLi>
              <CustomLi color="light">при оформленні усиновлення, піклування</CustomLi>
              <CustomLi color="light">створення прийомної сім’ї або дитячого будинку сімейного типу</CustomLi>
              <CustomLi color="light">участь в тендері</CustomLi>
              <CustomLi color="light">для отримання дозволу на зброю</CustomLi>
              <CustomLi color="light">для оформлення ліцензії на роботу з вибухонебезпечними речовинами</CustomLi>
              <CustomLi color="light">для пакета документів при оформленні візи для виїзду за кордон</CustomLi>
              <CustomLi color="light">при подачі документів в органи соціального забезпечення</CustomLi>
              <CustomLi color="light">для оформлення ліцензії на роботу з наркотичними засобами, психотропними речовинами</CustomLi>
              <CustomLi color="light">для оформлення або відновлення документів</CustomLi>
              <CustomLi color="light">на вимогу військових комісаріатів</CustomLi>
              <CustomLi color="light">для отримання водійських прав</CustomLi>
              <CustomLi color="light">для пред’явлення за місцем вимоги</CustomLi>
            </ul>
          </div>
          <div className={classes.listOfDoc}>
            <div className={classes.title}>
              <TextWithLine topText="Перелік документів для оформлення" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>довідки</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">Копія тимчасової/постійної посвідки на проживання а у випадку її відсутності нотаріально засвідчений переклад вашого паспорта на українську мову</CustomLi>
              <CustomLi color="light">Повна адреса народження іноземця</CustomLi>
              <CustomLi color="light">З якою метою оформлюється довідка</CustomLi>
            </ul>
          </div>
          <div className={classes.term}>
            Термін оформлення довідки становить 10-14 робочих днів
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          {/*<div className="MLblock">*/}
          <div className={classes.text}>
            Якщо у вас виникла необхідність в отриманні довідки про несудимість в Україні <span className="highlightDark">компанія Intermarium швидко та ефективно зможе допомогти вам</span> в цьому та після готовності довідки ми одразу відправляємо вам її на вашу адресу.
          </div>
          {/*</div>*/}
          <div className={classes.button}>
            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
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
            <TextWithLine topText="ПОДАТКОВИЙ НОМЕР" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>для іноземця</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>
                <span className="highlightDark">Ідентифікаційний код (податковий номер)</span> – це документ, який потрібен практично кожному іноземцю, який планує жити в Україні.
              </p>
              <p>
                <span className="highlightDark">Без цього документа іноземець не зможе</span> відкрити бізнес, придбати нерухомість, відкрити рахунок у банку, купити автомобіль, оформити спадщину, а також при нарахуванні та виплаті будь-яких доходів іноземного громадянина, отриманих в Україні.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.listOfDoc}>
            <div className={classes.title}>
              <TextWithLine topText="Перелік документів для отримання" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>ідентифікаційного коду</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">Нотаріально завірена та перекладена копія паспорта іноземця</CustomLi>
              <CustomLi color="light">Адреса проживання іноземця за кордоном</CustomLi>
              <CustomLi color="light">Оригінал довіреності посвідчений нотаріусом на ім&apos;я представника</CustomLi>
            </ul>
          </div>
          <div className={classes.nextDoc}>
            <div className={classes.title}>
              <TextWithLine topText="Для отримання податкового номера для неповнолітнього іноземця необхідно надати наступні" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>документи</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">Копія свідоцтва про народження</CustomLi>
              <CustomLi color="light">Оригінал перекладу нотаріально засвідчений</CustomLi>
              <CustomLi color="light">Копія паспорта одного з батьків</CustomLi>
              <CustomLi color="light">Оригінал перекладу українською мовою, засвідчений нотаріально</CustomLi>
              <CustomLi color="light">Посвідка на тимчасове проживання (за наявності)</CustomLi>
              <CustomLi color="light">Оригінал довіреності нотаріально посвідчений</CustomLi>
            </ul>
          </div>
          <div className={classes.procedure}>
            <div className={classes.title}>
              <TextWithLine topText="процедура отримання" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>ідентифікаційного коду</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">Підготовка документів (переклад паспорта та нотаріальне засвідчення, підготовка заяви для подачі в ДПС та ін.).</CustomLi>
              <CustomLi color="light">Подайте необхідні документи до податкової служби</CustomLi>
              <CustomLi color="light">Отримати ідентифікаційний номер платника податків</CustomLi>
            </ul>
          </div>
          <div className={classes.term}>
            Термін виконання 5-7 робочих днів
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
          <div className={classes.text}>
            Порядок отримання цього документа для іноземця відрізняється від порядку його отримання для громадянина України. Тому рекомендую <span className="highlightDark">звернутися за допомогою до кваліфікованого юриста, який допоможе швидко та легко отримати ідентифікаційний код.</span>
          </div>
          </div>
          <div className={classes.button}>
            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
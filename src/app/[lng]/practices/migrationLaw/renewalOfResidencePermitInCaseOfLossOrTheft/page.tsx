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
            <TextWithLine topText="Відновлення посвідки на проживання у випадку" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>втрати/викрадення</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>
                <span className="highlightDark">Посвідка на постійне/тимчасове проживання</span> є документом, що
                посвідчує особу іноземця або особу без громадянства та підтверджує законні підстави для проживання в
                Україні.
              </p>
              <p>
                У разі <span className="highlightDark">виникнення підстав для обміну посвідки</span>, а саме втрати або
                пошкодження документа, особа зобов’язана негайно звернутися до територіального підрозділу Державної
                міграційної служби України або до центру надання адміністративних послуг.
              </p>
              <p>
                А <span className="highlightDark">у випадку викрадення</span> вам потрібно буде ще повідомити органи
                Міністерства внутрішніх справ України.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.whatToDo}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Що робити якщо посвідка на проживання" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>втрачена /викрадена</span>
            </TextWithLine>
          </div>
          <div className={classes.immediately}>
            Вам негайно потрібно звернутися в територіальні органи Державної міграційної служби та у випадку
            викрадення в органи поліції та надати такий пакет документів:
          </div>
          <ul>
            <CustomLi>Посвідка, що підлягає обміну (крім випадків втрати та викрадення)</CustomLi>
            <CustomLi>Паспортний документ іноземця або документ, що посвідчує особу без громадянства</CustomLi>
            <CustomLi>Переклад на українську мову сторінки паспортного документа іноземця або документа, що посвідчує
              особу без громадянства, з особистими даними, засвідчений у встановленому законодавством
              порядку</CustomLi>
            <CustomLi>Документи, що підтверджують обставини, у зв’язку з якими посвідка підлягає обміну (крім випадків
              закінчення строку дії посвідки та непридатності посвідки для подальшого використання);</CustomLi>
          </ul>


          <div className={classes.term}>
            Термін розгляду документів 15 робочих днів
          </div>
          <div className={classes.after}>
            Також важливо розуміти, що як і подача документів так і потім отримання вже готової посвідки на проживання
            відбувається особисто самим заявником або законним представником, оскільки відбувається процедура
            верифікації особи (фото та відбитки пальців).
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className={classes.text}>
            Звернувшись до <span className="highlightDark">Intermarium law firm</span> за допомогою
            для відновлення чи обміну посвідки на проживання
            в Україні, Ви гарантовано швидко зможете отримати
            нову посвідку. Ціна при цьому виявиться найвигідніша,
            а професіоналізм і спектр послуг - максимальний.
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

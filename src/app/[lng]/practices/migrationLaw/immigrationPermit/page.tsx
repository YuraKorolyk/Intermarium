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
            <TextWithLine topText="ДОЗВІЛ НА" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>імміграцію</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>
                <span className="highlightDark">Дозвіл на імміграцію</span> - рішення спеціально уповноваженого
                центрального органу виконавчої влади з питань імміграції та підпорядкованих йому органів, яке надає
                іноземцям та особам без громадянства право на імміграцію.
              </p>
              <p className={classes.reasons}>
                <div className={classes.headline}>Існує багато підстав, за якими іноземець може отримати дозвіл на
                  імміграцію, але я ми поговоримо лише про найпоширеніші та ті з якими найчастіше використовуються
                  іноземцями, а саме:
                </div>
                <ul>
                  <CustomLi>територіальне походження іноземця</CustomLi>
                  <CustomLi>родинні зв&apos;язки з громадянами України</CustomLi>
                  <CustomLi>висококваліфіковані спеціалісти</CustomLi>
                  <CustomLi>інвестиції в економіку України</CustomLi>
                  <CustomLi>особи, які раніше були громадянами України</CustomLi>
                </ul>
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.documents}>
        <Container className={classes.wrapper}>

          <div className={classes.permission}>
            <p>
              <span className="highlightLight">Для отримання дозволу на імміграцію іноземцю необхідно</span> зібрати необхідні документи та написати заяву на
              отримання дозволу на імміграцію (оформляється в електронному вигляді при подачі документів) до ДМС,
              територіального органу міграційної служби або територіального відділення ДМС. (Державна міграційна
              служба)
            </p>
            <p>
              Існує <span className="highlightLight">14 підстав для отримання дозволу на імміграцію:</span> за квотою і поза квотою.
            </p>
            <p>
              <span className="highlightLight">Квота</span> - це максимальна кількість людей, які мають право на отримання дозволу на імміграцію. Такі квоти
              щороку затверджуються Урядом України.
            </p>
            <p>
              <span className="highlightLight">Поза</span> квотою є, наприклад, територіальне походження, одруження з громадянином України та ін.
            </p>
            <p>
              Є загальний перелік документів та додаткові. <span className="highlightLight">Загальний перелік</span> єдиний для всіх підстав для отримання
              дозволу на імміграцію.
              А <span className="highlightLight">додаткові документи</span> підтверджують вашу підставу для звернення за дозволом на імміграцію. Наприклад,
              свідоцтво про шлюб, дозвіл Мінсоцполітики, свідоцтво про народження та ін.
            </p>
          </div>
          <div className={classes.listOfDoc}>
            <div className={classes.title}>Перелік документів:</div>
            <ul>
              <CustomLi>Заява (заповнюється та підписується при подачі документів)</CustomLi>
              <CustomLi>Оригінал паспорта (або копія посвідки на тимчасове проживання та довідка з місця реєстрації)</CustomLi>
              <CustomLi>Адреса проживання в Україні (нотаріально завірена заява-згода орендодавця)</CustomLi>
              <CustomLi>Паспорт власника житла та право власності на це житло</CustomLi>
              <CustomLi>Документ, що підтверджує адресу реєстрації за кордоном (права, довідка про реєстрацію), або документ, що підтверджує відсутність такого місця проживання.</CustomLi>
              <CustomLi>Довідка про несудимість</CustomLi>
              <CustomLi>Загальна медична довідка та акт наркологічної експертизи</CustomLi>
              <CustomLi>Та інші документи, які підтвердять підставу для отримання дозволу на імміграцію</CustomLi>
              <CustomLi>Квитанція про сплату державного мита</CustomLi>
            </ul>
            <div className={classes.conclusion}>
              <span className="highlightLight">Виняток:</span> пункти документів, зазначені у пунктах 6 та 7, не потрібні у разі оформлення дозволу на імміграцію за територіальним походженням та у разі укладення шлюбу з громадянином України та особами без громадянства.
            </div>
            <div className={classes.addDocs}>
              Всі документи повинні бути подані виключно особисто заявником.
            </div>
            <div className={classes.term}>
              Термін розгляду документів триває до 12 місяців, але на практиці може бути і швидше, може бути і 4 місяці, і 6 місяців
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              <span className="highlightDark">Intermarium Law Firm</span> надає повний цикл супроводу іноземців, що
              бажають отримати дозвіл на імміграцію.
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

import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Calendar from "../../../../../public/assets/icons/Calendar";
import CustomLi from "@/components/CustomLi/CustomLi";
import TextWithLine from "@/components/TextWithLine/TextWithLine";

const Page = () => {
  return (
    <>
      <div className={classes.topBar}>
        <Container className={classes.wrapper}>
          <ArticleAuthor author='Taras'/>
          <div className={classes.date}>
            <Calendar fill={"#013043"}/>
            <span>{'14/06/2023'}</span>
          </div>
        </Container>
      </div>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.titleMain}>
            Є-РЕЗИДЕНСТВО ДЛЯ ІНОЗЕМЦІВ
          </div>
          <div className={classes.subtitle}>
            Нещодавно Президентом України Зеленським В.В. був підписаний Закон № 2654-IX.
          </div>
          <div className={classes.what}>
            <div className={classes.title}>
              <TextWithLine topText={'Що дає цей'} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>ЗАКОН</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>Якщо коротко, це надає можливість іноземцям провадити свою підприємницьку діяльність на території України не перебуваючи фізично в Україні.</p>
              <p>Е-Резидент – це іноземець, який досяг 18-річного віку, не є податковим резидентом України, отримав електронний цифровий підпис та інформацію про якого внесена в інформаційну систему “Е-РЕЗИДЕНТ”.</p>
            </div>
          </div>
          <div className={classes.how}>
            <div className={classes.title}>
              <TextWithLine topText={'Як стати'} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>Е-РЕЗИДЕНТОМ</span>
              </TextWithLine>
            </div>
            <div className={classes.headline}>
              Для того щоб стати Е-РЕЗИДЕНТОМ достатньо зробити лише декілька кліків:
            </div>
            <ul>
              <CustomLi fontSize={20}>Зареєструватися на веб-порталі “Дія” або через мобільний застосунок та подати заявку для перевірки й отримання статусу е-резидента.</CustomLi>
              <CustomLi fontSize={20}>Якщо внаслідко перевірки, вашу заявку задоволено ви фактично стаєте електронним резидентом.</CustomLi>
              <CustomLi fontSize={20}>Отримуєте електронний підпис та податковий номер.</CustomLi>
              <CustomLi fontSize={20}>Зареєструватись на спрощену систему оподаткування 3-ї групи.</CustomLi>
              <CustomLi fontSize={20}>Відкрити рахунок в українському банку.</CustomLi>
            </ul>
            <div className={classes.text}>
              <p>Іноземець може провадити підприємницьку діяльність сплачуючи податок – 5 % від доходів у рамках ліміту ФОП 3 групи. Більше ліміту – 15 %.</p>
              <p><span className="highlightDark">Всі документи в електронній формі, всі листування з ДПС (податкова служба) – онлайн, всі розрахунки – безготівкові.</span></p>
            </div>
          </div>
          <div className={classes.who}>
            <div className={classes.title}>
              <TextWithLine topText={'Хто НЕ може бути'} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>Е-РЕЗИДЕНТОМ</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi fontSize={20}>громадяни країни-агресора РФ;</CustomLi>
              <CustomLi fontSize={20}>внесені в «чорний список» FATF (Міжнародна група з протидії відмиванню брудних грошей);</CustomLi>
              <CustomLi fontSize={20}>особи, які мають дохід в Україні (крім пасивного);</CustomLi>
              <CustomLi fontSize={20}>іноземці, які мають право на постійне проживання в Україні чи є податковими резидентами України.</CustomLi>
            </ul>
          </div>
          <div className={classes.ticket}>
            <div className={classes.title}>
              <TextWithLine topText={'ЯКІ ШТРАФИ ЗА ПОРУШЕННЯ ПОДАТКОВОГО'} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>ЗАКОНОДАВСТВА</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi fontSize={20}>За неоплату податків або оплату податків не в повному обсязі іноземець повинен буде сплатити штраф у розмірі 10% від суми податку, що підлягає оплаті.</CustomLi>
              <CustomLi fontSize={20}>Якщо іноземець умисно буде ухилятися від оплати податків – штраф у розмірі 25% від загальної суми податку, який підлягає оплаті.</CustomLi>
              <CustomLi fontSize={20}>Якщо дії вчиненні повторно протягом 1095 днів штраф в розмірі – 50% від суми податку що підлягає сплатій до бюджету.</CustomLi>
              <CustomLi fontSize={20}>Більше 3 разів і більше – штраф у розмірі 75% від суми податку.</CustomLi>
            </ul>
            <div className={classes.text}><span className="highlightDark">
              Податковою адресою платника податків - електронного резидента (е-резидента) визнається електронна адреса, зазначена такою особою у заяві про набуття статусу електронного резидента (е-резидента)
            </span></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;

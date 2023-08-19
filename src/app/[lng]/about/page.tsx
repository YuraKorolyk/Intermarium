"use client"
import React, {useEffect} from 'react';
import classes from "./page.module.scss"
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Partner from "@/components/Partner/Partner";
import {useTranslation} from "react-i18next";
import CustomLi from "@/components/CustomLi/CustomLi";

const Page = () => {

return (
  <>
    <div className={classes.about}>
      <Container className={classes.wrapper}>
        <div className={classes.gridBox}>
          <div className={classes.imageBox}>
            <img src="/assets/images/bothVertical.jpg" alt=""/>
          </div>
          <div className={classes.title}>
            <TextWithLine topText="Про" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>Нас</span>
            </TextWithLine>
          </div>
          <div className={classes.description}>
            <span className="highlightDark">Intermarium Law Firm</span> — українська юридична компанія з амбіціями
            міжнародного рівня, утворена у 2023 році в результаті об&apos;єднання зусиль одних із найкращих
            спеціалістів в галузі міжнародного та міграційного права — <span
            className="highlightDark">Тараса Горбатюка</span> та <span
            className="highlightDark">Юрія Бєлоконя</span>.
          </div>
        </div>


        <div className={classes.text}>
          <div className={classes.becauseOf}>
            Завдяки синергії експертних можливостей засновників компанії стало можливим об&apos;єднання спільних
            зусиль для <span className="highlightDark">надання якісних юридичних послуг в галузях міграційного, міжнародного та корпоративного права для іноземців</span>,
            що проживають на території України, планують мігрувати чи розпочати власний бізнес в Україні.
          </div>
          <div className={classes.support}>
            <div className={classes.title}>Компанія надає багаторівневу юридичну підтримку з:</div>
            <ul className={classes.list}>
              <CustomLi>легалізації іноземців на території України</CustomLi>
              <CustomLi>супроводу відкриття бізнесів</CustomLi>
              <CustomLi>інвестування</CustomLi>
              <CustomLi>також надає юридичні консультації іноземцям з різноманітних питань, з якими вони стикаються на
                території України
              </CustomLi>
            </ul>
          </div>
        </div>
      </Container>
    </div>
    <div className={classes.mission}>
      <Container className={classes.wrapper}>
        <div className={classes.title}>
          <TextWithLine topText="Наша" topColor="light">
            <span className={`${classes.bottomText} bottomTextWithLine`}>Місія</span>
          </TextWithLine>
        </div>
        <div className={classes.text}>
          <div className={classes.first}>
            <span className="highlightLight">Intermarium Law Firm</span> - українська компанія з орієнтацією на
            міжнародний рівень, що надає юридичні послуги не тільки на загальноукраїнському рівні, але й на
            регіональному. Intermarium - <span
            className="highlightLight">простір країн у Центральній та Східній Європі</span>,
            об&apos;єднаний спільними політичними, економічними та бізнес-інтересами.
          </div>
          <div>
            Ми стоїмо <span className="highlightLight">на захисті інтересів іноземців та їхнього бізнесу</span>, щоб
            зробити <span className="highlightLight">Україну</span> та <span className="highlightLight">увесь Центрально-Європейський регіон</span> найбільш
            інвестиційно привабливою частиною світу, щоб мільйони людей
            зі всього світу <span className="highlightLight">інвестували</span>, <span
            className="highlightLight">мігрували</span> в пошуках кар&apos;єрних та бізнес можливостей та <span
            className="highlightLight">будували краще життя в країнах Інтермаріуму</span>, що стане найбільшою точною
            зростання та процвітання у світі.
          </div>
        </div>
      </Container>
    </div>
    <div className={classes.team}>
      <Container className={classes.wrapper}>
        <div className={classes.title}>
          <TextWithLine topText="Наша" topColor="dark">
            <span className={`${classes.bottomText} bottomTextWithLine`}>Команда</span>
          </TextWithLine>
        </div>
        <div className={classes.partnerBox}>
          <Partner
            name="Taras"
            title="Тарас – керівник практики корпоративного права та співкерівник практики міграційного права."
            description={
              <>Тарас має <span className='highlightDark'>багаторічний досвід роботи у сфері міграційного та корпоративного права</span> та
                спеціалізується на вирішенні складних кейсів, допомагає нашим клієнтам в оформлення усі необхідних
                документів для легального перебування іноземців на території України, а також допомагає іноземцям з
                питань оформлення громадянства, інвестування в економіку України, легального працевлаштування та
                консультує іноземців з усіх питань що стосується імміграції в Україну.
                <br/><br/>
                У галузі корпоративного права, Тарас надає юридичні консультації з питань створення та реєстрації
                компаній, купівлі-продажу бізнесу, розподілу акцій та інших питань, пов&apos;язаних з корпоративними
                структурами. <span className='highlightDark'>Його експертний досвід в Intermarium Law Firm гарантує комфортність, легальність та юридичну захищеність іноземних інвесторів</span>,
                що бачать своє майбутнє з Україною та з усім регіоном між Чорним, Балтійським та Адріатичним морями.
              </>
            }
          />
          <Partner
            name="Yurii"
            title="Юрій – експерт з міграційного, корпоративного права та візової підтримки, ідейний натхненник створення Intermarium Law Firm."
            description={
              <>Юрій завдяки своєму досвіду в правових та міграційних питаннях та ефективній
                комунікації в середовищі іноземців в Україні та міжнародного бізнесу може знаходити оптимальні рішення
                для тих, хто бажає мігрувати або започаткувати бізнес на території України та усього регіону
                Інтермаріуму.
                <br/><br/>
                Юрій забезпечує якісне надання послуг для іноземних громадян та підбирає оптимальні рішення для
                інвесторів, орієнтуючись у своїй роботі на законодавчі норми та розуміння потреб клієнтів. Юрій є
                експертом в проведенні <span className='highlightDark'>due diligence об&apos;єкту інвестування</span> та
                є відповідальним за комунікацію з
                корпоративними клієнтами, що укладають з <span
                  className='highlightDark'>Intermarium Law Firm</span> договори про абонентське обслуговування.
              </>
            }
          />
        </div>
      </Container>
    </div>
  </>
);
}
;

export default Page;
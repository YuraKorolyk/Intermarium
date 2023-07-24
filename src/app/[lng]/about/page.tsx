import React from 'react';
import classes from "./page.module.scss"
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Partner from "@/components/Partner/Partner";

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
                          <span className="highlightDark">Intermarium Law Firm</span> — українська юридична компанія з амбіціями міжнародного рівня, утворена у 2023 році в результаті об’єднання зусиль одних із найкращих спеціалістів в галузі міжнародного та міграційного права — <span className="highlightDark">Тараса Горбатюка</span> та <span className="highlightDark">Юрія Бєлоконя</span>.
                      </div>
                  </div>


                  <div className={classes.text}>
                      <div className={classes.becauseOf}>
                          Завдяки синергії експертних можливостей засновників компанії стало можливим обʼєднання спільних зусиль для  <span className="highlightDark">надання якісних юридичних послуг в галузях міграційного, міжнародного та корпоративного права для іноземців</span>, що проживають на території України, планують мігрувати чи розпочати власний бізнес в Україні.
                      </div>
                      <div className={classes.support}>
                          <div className={classes.title}>Компанія надає багаторівневу юридичну підтримку з:</div>
                          <ul className={classes.list}>
                              <li>легалізації іноземців на території України</li>
                              <li>супроводу відкриття бізнесів</li>
                              <li>інвестування</li>
                              <li>також надає юридичні консультації іноземцям з різноманітних питань, з якими вони стикаються на території України</li>
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
                          <span className="highlightLight">Intermarium Law Firm</span> - українська компанія з орієнтацією на міжнародний рівень, що надає юридичні послуги не тільки на загальноукраїнському рівні, але й на регіональному. Intermarium - <span className="highlightLight">простір країн у Центральній та Східній Європі</span>, об&apos;єднаний спільними політичними, економічними та бізнес-інтересами.
                      </div>
                      <div>
                          Ми стоїмо <span className="highlightLight">на захисті інтересів іноземців та їхнього бізнесу</span>, щоб зробити <span className="highlightLight">Україну</span> та <span className="highlightLight">увесь Центрально-Європейський регіон</span> найбільш інвестиційно привабливою частиною світу, щоб мільйони людей
                          зі всього світу <span className="highlightLight">інвестували</span>, <span className="highlightLight">мігрували</span> в пошуках кар&apos;єрних та бізнес можливостей та <span className="highlightLight">будували краще життя в країнах Інтермаріуму</span>, що стане найбільшою точною зростання та процвітання у світі.
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
                        <Partner name="Taras" title="Тарас – керівник практики корпоративного права та співкерівник практики міграційного права."/>
                        <Partner name="Yurii" title="Юрій – експерт з міграційного, корпоративного права та візової підтримки, ідейний натхненник створення Intermarium Law Firm."/>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Page;
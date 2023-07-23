"use client"
import Container from "@/components/Layouts/Container/Container";
import CircleLogo from "../../public/assets/icons/CircleLogo";
import classes from "./page.module.scss"
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import One from "../../public/assets/icons/One";
import Three from "../../public/assets/icons/Three";
import Two from "../../public/assets/icons/Two";
import Practice from "@/components/Practice/Practice";
import Article from "@/components/Article/Article";
import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
      <>
          <div className={classes.intro}>
              <Container className={classes.wrapper}>
                  <div className={classes.block}>
                      <div className={classes.logoBox}>
                          <CircleLogo />
                      </div>
                      <span className={classes.text}>Aut cum scuto,<br/>aut in scuto</span>
                  </div>
              </Container>
          </div>
          <div className={classes.mission}>
              <Container className={classes.wrapper}>
                <div className={classes.imageBox}>
                    <img src="/assets/images/bothVertical.jpg" alt=""/>
                    {/*<Image src="/assets/images/bothVertical.jpg" alt="bg"/>*/}
                </div>
                <div className={classes.title}>
                    <TextWithLine topText="Наша" topColor="dark">
                        <span className={`${classes.bottomText} bottomTextWithLine`}>Місія</span>
                    </TextWithLine>
                </div>
                <div className={classes.text}>
                    <div className={classes.description}>
                        Ми стоїмо на захисті інтересів іноземців та їхнього бізнесу, щоб зробити <span className="highlightDark">Україну</span> та увесь <span className="highlightDark">Центрально-Європейський</span> регіон найбільш інвестиційно привабливою частиною світу, щоб мільйони людей зі всього світу інвестували, мігрували в пошуках кар&apos;єрних та бізнес можливостей та будували краще життя в країнах <span className="highlightDark">Інтермаріуму</span>
                    </div>
                    <div className={classes.buttonBox}>
                        <Button text="Дізнатися більше"/>
                    </div>
                </div>
              </Container>
          </div>
          <div className={classes.whyWe}>
              <Container className={classes.wrapper}>
                  <div className={classes.title}>
                      <TextWithLine topText="Чому" topColor="light">
                          <span className={`${classes.bottomText} bottomTextWithLine`}>саме ми</span>
                      </TextWithLine>
                  </div>
                  <div className={classes.list}>
                      <div className={classes.numbers}>
                          <div className={classes.iconBox}>
                              <One />
                          </div>
                          <div className={classes.mobTitle}>
                              Досконале вивчення проблематики запиту
                          </div>
                      </div>
                      <div className={classes.text}>
                          <div className={classes.textTitle}>
                              Досконале вивчення проблематики запиту
                          </div>
                          <div className={classes.description}>
                              Ознайомлення з ситуацією, щодо якої клієнт звернувся
                              по допомогу, ознайомлення з документацією, побажанням та баченням клієнта, аналіз прецедентів
                              та ознайомлення з усією передісторією запиту клієнта
                          </div>
                      </div>
                  </div>
                  <div className={classes.list}>
                      <div className={classes.numbers}>
                          <div className={classes.iconBox}>
                            <Two />
                          </div>
                          <div className={classes.mobTitle}>
                              Вибір найкращої стратегії вирішення
                          </div>
                      </div>
                      <div className={classes.text}>
                          <div className={classes.textTitle}>
                              Вибір найкращої стратегії вирішення
                          </div>
                          <div className={classes.description}>
                              Підбір найбільш ефективної, законодавчо правильної
                              та обгрунтованої моделі дій, яка б поєднувала відповідність до правових норм, побажання клієнта
                              та детальний аналіз можливого розвитку подій та оцінку ризиків та перспектив. При виборі стратегії рішення враховуються побажання клієнта щодо строків, бюджету та кінцевого результу
                          </div>
                      </div>
                  </div>
                  <div className={classes.list}>
                      <div className={classes.numbers}>
                          <div className={classes.iconBox}>
                            <Three />
                          </div>
                          <div className={classes.mobTitle}>
                              Доведення до результату
                          </div>
                      </div>
                      <div className={classes.text}>
                          <div className={classes.textTitle}>
                              Доведення до результату
                          </div>
                          <div className={classes.description}>
                              Кожен клієнт який нам довірився отримує гарантію результату, адже наша команда розпочинає роботу
                              з клієнтом лише після детального вивчення кожної ситуації індивідуально, оцінює ризики та шанси їх вирішення
                          </div>
                      </div>
                  </div>
              </Container>
          </div>
          <div className={classes.practices}>
              <Container className={classes.wrapper}>
                  <div className={classes.title}>
                      <TextWithLine topText="Наші" topColor="dark">
                          <span className={`${classes.bottomText} bottomTextWithLine`}>практики</span>
                      </TextWithLine>
                  </div>
                  <div className={classes.list}>
                      <Practice
                          bg="1"
                          title="міграційне право"
                          description="Intermarium Law Firm надає повний цикл супроводу іноземців, що бажають мігрувати до України або отримати українське громадянство"
                          isAlone={false}
                      />
                      <Practice
                          bg="2"
                          title="корпоративне право"
                          description="Експерти Intermarium Law Firm забезпечують фахову підтримку іноземців на всіх етапах ведення бізнесу в Україні"
                          isAlone={false}
                      />
                      <Practice
                          bg="3"
                          title="візова підтримка"
                          description="Intermarium Law Firm підбирає для вас найоптимальніший вид візи, країну, консульство та час подачі документів"
                          isAlone={false}
                      />
                      <Practice
                          bg="4"
                          title="юридичний дью-ділідженс"
                          description="Належна підготовка до Due Diligence разом з експертами Intermarium Law Firm значно підвищує шанси на успішне завершення угоди"
                          isAlone={false}
                      />
                      <Practice
                          bg="5"
                          title="абонентське обслуговування"
                          description="Юридична компанія Intermarium надає повний супровід у відкритті бізнесу в Україні та подальшому його введення з питань що стосуються юридичної складової"
                          isAlone={true}
                      />
                  </div>
              </Container>
          </div>
          <div className={classes.blog}>
              <Container className={classes.wrapper}>
                  <div className={classes.title}>
                      <TextWithLine topText="Наш" topColor="light">
                          <span className={`${classes.bottomText} bottomTextWithLine`}>юридичний блог</span>
                      </TextWithLine>
                  </div>
                  <div className={classes.list}>
                      <Article author="Taras" date="16/06/2023" title="Закон України для громадян Республіки Польща, які перебувають на території України"/>
                      <Article author="Taras" date="08/06/2023" title="Законопроєкт 5795"/>
                      <Article author="Taras" date="02/06/2023" title="Є-резиденство для іноземців"/>
                  </div>
                  <div className={classes.buttonBox}>
                      <Button text="Переглянути всі статті"/>
                  </div>
              </Container>
          </div>
          <div className={classes.application}>
              <Container className={classes.wrapper}>
              </Container>
          </div>
      </>
  )
}

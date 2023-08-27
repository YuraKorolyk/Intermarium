"use client"
import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import {useRouter} from "next/navigation";
import {useTranslation} from "react-i18next";


const data = [
  {
    "label": "Посвідка на тимчасове проживання",
    "link": "temporaryResidence"
  },
  {
    "label": "Посвідка на постійне проживання",
    "link": "permanentResidence"
  },
  {
    "label": "Дозвіл на імміграцію",
    "link": "immigrationPermit"
  },
  {
    "label": "Відновлення втраченої/викраденої посвідки на проживання",
    "link": "renewalOfResidencePermitInCaseOfLossOrTheft"
  },
  {
    "label": "Супровід в оформленні шлюбу з резидентами України",
    "link": "marriageRegistration"
  },
  {
    "label": "Продовження терміну перебування в Україні",
    "link": "extensionOfStayInUkraine"
  },
  {
    "label": "Оформлення громадянства України",
    "link": "acquisitionOfUkrainianCitizenship"
  },
  {
    "label": "Дозвіл на працевлаштування в Україні",
    "link": "workPermitInUkraine"
  },
  {
    "label": "Зняття заборони на в‘їзд в Україну",
    "link": "removalOfTheEntranceBan"
  },
  {
    "label": "Оскарження рішень Державної міграційної служби",
    "link": "appealOfMigrationServiceDecisions"
  },
  {
    "label": "Оформлення довідки про несудимість в Україні",
    "link": "policeClearance"
  },
  {
    "label": "Оформлення податкового номеру для іноземців",
    "link": "taxId"
  },
  {
    "label": "Отримання статусу закордонного українця",
    "link": "foreignUkrainian"
  },
  {
    "label": "Оформлення довідки громадянина України",
    "link": "registrationAsCitizenOfUkraine"
  }
]
const Page = () => {
  const router = useRouter();
  const {t, i18n} = useTranslation()
    return (
        <>
            <HeaderBackground background="1"/>
            <div className={classes.intro}>
                <Container className={classes.wrapper}>
                   <div className={classes.title}>
                       <TextWithLine topText="Міграційне" topColor="dark">
                           <span className={`${classes.bottomText} bottomTextWithLine`}>Право</span>
                       </TextWithLine>
                   </div>
                    <div className={classes.text}>
                        <p>
                            <span className="highlightDark">Intermarium Law Firm</span> надає повний цикл супроводу іноземців, що бажають мігрувати до України або отримати українське громадянство.
                        </p>
                        <p>
                            Ми допомагаємо клієнтам <span className="highlightDark">з десятків різних країн світу</span> отримати статус резидента та легально перебувати
                            в Україні, а також отримувати фахові консультації <span className="highlightDark">з будь-яких міграційних питань</span>.
                        </p>

                    </div>
                </Container>
            </div>
            <div className={classes.order}>
                <Container className={classes.wrapper}>
                    <div className={classes.title}>
                        <TextWithLine topText="Замовити за напрямом" topColor="dark">
                            <span className={`${classes.bottomText} bottomTextWithLine`}>Послугу</span>
                        </TextWithLine>
                    </div>
                  <div className={classes.list}>
                    {data && data.map((item, i) => (
                      <div
                        key={i}
                        onClick={()=> router.push(`migrationLaw/${item.link}`)}
                      >{item.label}</div>
                    ))}
                  </div>
                    {/*<ul className={classes.favourList}>*/}
                    {/*    <li>Lorem ipsum dolor sit</li>*/}
                    {/*    <li>Lorem ipsum dolor sit</li>*/}
                    {/*    <li>Lorem ipsum dolor sit</li>*/}
                    {/*    <li>Lorem ipsum dolor sit</li>*/}
                    {/*</ul>*/}
                </Container>
            </div>
        </>
    );
};

export default Page;

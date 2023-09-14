"use client"
import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import {useRouter} from "next/navigation";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";

const Page = () => {
  const router = useRouter();
  const {t, i18n} = useTranslation()

  const data = [
    {
      "label": t('practices.migrationLaw.data.d1'),
      "link": "temporaryResidence"
    },
    {
      "label": t('practices.migrationLaw.data.d2'),
      "link": "permanentResidence"
    },
    {
      "label": t('practices.migrationLaw.data.d3'),
      "link": "immigrationPermit"
    },
    {
      "label": t('practices.migrationLaw.data.d4'),
      "link": "renewalOfResidencePermitInCaseOfLossOrTheft"
    },
    {
      "label": t('practices.migrationLaw.data.d5'),
      "link": "marriageRegistration"
    },
    {
      "label": t('practices.migrationLaw.data.d6'),
      "link": "extensionOfStayInUkraine"
    },
    {
      "label": t('practices.migrationLaw.data.d7'),
      "link": "acquisitionOfUkrainianCitizenship"
    },
    {
      "label": t('practices.migrationLaw.data.d8'),
      "link": "workPermitInUkraine"
    },
    {
      "label": t('practices.migrationLaw.data.d9'),
      "link": "removalOfTheEntranceBan"
    },
    {
      "label": t('practices.migrationLaw.data.d10'),
      "link": "appealOfMigrationServiceDecisions"
    },
    {
      "label": t('practices.migrationLaw.data.d11'),
      "link": "policeClearance"
    },
    {
      "label": t('practices.migrationLaw.data.d12'),
      "link": "taxId"
    },
    {
      "label": t('practices.migrationLaw.data.d13'),
      "link": "foreignUkrainian"
    },
    {
      "label": t('practices.migrationLaw.data.d14'),
      "link": "registrationAsCitizenOfUkraine"
    }
  ]

    return (
        <>
            <HeaderBackground background="1"/>
            <div className={classes.intro}>
                <Container className={classes.wrapper}>
                   <div className={classes.title}>
                       <TextWithLine topText={t('practices.migrationLaw.intro.title.topText')} topColor="dark">
                           <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.migrationLaw.intro.title.bottomText')}</span>
                       </TextWithLine>
                   </div>
                    <div className={classes.text}>
                        <p>
                          {trans('practices.migrationLaw.intro.text.p1', 'dark')}
                        </p>
                        <p>
                          {trans('practices.migrationLaw.intro.text.p1', 'dark')}
                        </p>
                    </div>
                </Container>
            </div>
            <div className={classes.order}>
                <Container className={classes.wrapper}>
                    <div className={classes.title}>
                        <TextWithLine topText={t('practices.migrationLaw.order.title.topText')} topColor="dark">
                            <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.migrationLaw.order.title.bottomText')}</span>
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
                </Container>
            </div>
        </>
    );
};

export default Page;

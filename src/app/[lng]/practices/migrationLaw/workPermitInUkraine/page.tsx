import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import Nine from "../../../../../../public/assets/icons/Numbers/Nine";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Five from "../../../../../../public/assets/icons/Numbers/Five";
import Four from "../../../../../../public/assets/icons/Numbers/Four";
import Three from "../../../../../../public/assets/icons/Numbers/Three";
import Two from "../../../../../../public/assets/icons/Numbers/Two";
import Button from "@/components/Button/Button";

const Page = () => {
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Дозвіл на працевлаштування" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>В Україні</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p>
              <span className="highlightDark">Дозвіл на застосування праці іноземців та осіб без громадянства</span> -
              документ, який надає право роботодавцю
              тимчасово використовувати працю іноземця або особи без громадянства, або добровільно отриманий резидентом
              Дія Сіті для укладення гіг-контракту з іноземцем або особою без громадянства.
            </p>
            <p>
              Відповідно до законодавства України іноземці та особи без громадянства не можуть працювати без дозволу на
              роботу. Окрім цього, <span className="highlightDark">дозвіл на роботу дає можливість отримати відповідну візу в Україну та посвідку на
              тимчасове проживання</span>.
            </p>
            <p> <span className="highlightDark">
              Після отримання дозволу на застосування праці, іноземець набуває таких самих прав що і громадянин України.
            </span>
            </p>

          </div>
        </Container>
      </div>
      <div className={classes.detail}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Детальна інформація щодо" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>Послуги</span>
            </TextWithLine>
          </div>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Як отримати дозвіл на працевлаштування?"
            description="Як отримати дозвіл на працевлаштування?"
          >
            <One/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Строк дії дозволу на працевлаштування."
            description="Як отримати дозвіл на працевлаштування?"
          >
            <Two/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Список необхідних документів."
            description="Як отримати дозвіл на працевлаштування?"
          >
            <Three/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Вартість дозволу на застосування праці іноземців."
            description="Як отримати дозвіл на працевлаштування?"
          >
            <Four/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Відповідальність за порушення законодавства України у сфері працевлаштування іноземців та осіб без громадянства."
            description="Як отримати дозвіл на працевлаштування?"
          >
            <Five/>
          </LinkWithDropdown>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className={classes.text}>
            <span className="highlightDark">Intermarium Law Firm</span> надає повний цикл супроводу іноземців, що бажають отримати дозвіл на працевлаштування в Україні. Ми  допоможемо зекономити час та уникнути в майбутньому значних витрат.
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
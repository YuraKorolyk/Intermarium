import React from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import One from "../../../../public/assets/icons/Numbers/One";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import Two from "../../../../public/assets/icons/Numbers/Two";
import Three from "../../../../public/assets/icons/Numbers/Three";
import Four from "../../../../public/assets/icons/Numbers/Four";
import Button from "@/components/Button/Button";

const Page = () => {
  return (
    <>
      <HeaderBackground background="3"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Візова" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>Підтримка</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p>Іноземці, що проживають на території України, часто стикаються з необхідністю <span
              className="highlightDark">оформлення транзитних, туристичних чи робочих віз</span> в сусідні країни.</p>
            <p>В залежності від вашої ситуації та причин по яких необхідне відвідування Молдови або країн ЄС, ми
              підберемо для вас <span className="highlightDark">найоптимальніший вид візи, країну, консульство та час подачі документів</span>.
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.questions}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Наша компанія надає візову підтримку з" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>наступних питань</span>
            </TextWithLine>
          </div>
          <div className={classes.link}>
            <LinkWithDropdown
              dropdown="link"
              title="Допомога в отриманні транзитної та бізнес візи в Молдову"
            >
              <One/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="link"
              title="допомога в отриманні транзитної чи туристичної візи в Польщу, Румунію, Угорщину"
            >
              <Two/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="link"
              title="допомога в отриманні робочих запрошень від польських компаній
для сезонної роботи (на 9 місяців) або для працівників будівельної
сфери (на 3 роки), а також допомога в отриманні робочих віз"
            >
              <Three/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="link"
              title="допомога з отриманням статусу електронного резидента Естонії та відкриттям компанії в Естонії для тих, хто планує масштабувати свій бізнес
та вивести його на загальноєвропейський рівень та укладати контракти
з європейськими партнерами/постачальниками та підрядниками"
            >
              <Four/>
            </LinkWithDropdown>

          </div>
        </Container>
      </div>
      <div className={classes.help}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Візова підтримка включає повний цикл допомоги, а саме:
          </div>
          <div className={classes.list}>
            <ul>
              <li>отримання дат бронювань в консульстві</li>
              <li>отримання запрошень</li>
              <li>підготовку усієї документації для подачі на візу</li>
              <li>особистий супровід при подачі документів </li>
              <li>освітніх послугах</li>
              <li>подальша відправка вашого паспорту з проставленою візою за вашою адресою</li>
            </ul>

            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
'use client';
import React, {useState} from 'react';
import Container from "@/components/Layouts/Container/Container";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import One from "../../../../public/assets/icons/One";
import Arrow from "../../../../public/assets/icons/Arrow";
import Button from "@/components/Button/Button";

const Page = () => {
  const [descriptionOpened, setDescriptionOpened] = useState<boolean>(false)
  return (
    <>
      <HeaderBackground/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Корпоративне" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>Право</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p>
              Стабільний розвиток держави та суспільства неможливий без іноземних інвестицій, широких можливостей для
              ведення бізнесу та відкритості країни для талановитих та підприємливих людей зі всього світу, що бажають
              вкладати кошти, весті бізнес та будувати своє життя в Україні.
            </p>
            <p>
              <span className="highlightDark">Експерти Intermarium Law Firm забезпечують фахову підтримку іноземців на всіх етапах ведення бізнесу в Україні</span>,
              включно
              з реєстрацією, купівлею, реорганізацією, ліквідацією компаній, а також злиттям
              та поглинанням.
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.order}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Замовити за напрямом" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>Послугу</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <div className={classes.numbers}>
              <div className={classes.iconBox}>
                <One/>
              </div>
              <div className={classes.textTitle}>
                Підготовка корпоративної документації (статути, акціонерні угоди, локальні нормативні акти)
              </div>
              <div className={descriptionOpened ? `${classes.arrow} ${classes.active}` : classes.arrow} onClick={()=> setDescriptionOpened((prevState) => !prevState)}>
                <Arrow color="#ECECEC"/>
              </div>
            </div>
            <div className={classes.description}>
              <div className={descriptionOpened ? `${classes.text} ${classes.active}` : classes.text}>
                Корпоративні спори за своїм характером відносяться до категорії найбільш складних справ, і пов’язані зі значними матеріальними витратами. Найчастіше результат такого спору безпосередньо залежить від того, як складені установчі документи. Установчі документи регулюють та визначають найбільш важливі, основоположні поняття та засади діяльності
                суб’єкта господарювання.
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.different}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Наша команда супроводжує у різних галузях та секторах бізнесу:
          </div>
          <ul className={classes.list}>
            <li>галузь нерухомості</li>
            <li>галузь транспорту та логістики</li>
            <li>галузь рітейлу</li>
            <li>туристичних послугах</li>
            <li>освітніх послугах</li>
            <li>і багато інших</li>
          </ul>
          <div className={classes.text}>
            Однією із основних цілей Intermarium Law Firm є максимальне сприяння іноземним клієнтам у веденні бізнесу на території України.
          </div>
          <Button text="Залишити заявку"/>
        </Container>
      </div>
    </>
  );
};

export default Page;
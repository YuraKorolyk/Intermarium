'use client';
import React from 'react';
import Container from "@/components/Layouts/Container/Container";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import One from "../../../../../public/assets/icons/Numbers/One";
import Button from "@/components/Button/Button";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import Two from "../../../../../public/assets/icons/Numbers/Two";
import Three from "../../../../../public/assets/icons/Numbers/Three";
import Four from "../../../../../public/assets/icons/Numbers/Four";
import Five from "../../../../../public/assets/icons/Numbers/Five";

const Page = () => {
  return (
    <>
      <HeaderBackground background="2"/>
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
            <LinkWithDropdown
              dropdown="dropdown"
              title="Підготовка корпоративної документації (статути, акціонерні угоди, локальні нормативні акти)"
              description="Корпоративні спори за своїм характером відносяться до категорії найбільш складних справ, і пов’язані зі
          значними матеріальними витратами. Найчастіше результат такого спору безпосередньо залежить від того, як
          складені установчі документи. Установчі документи регулюють та визначають найбільш важливі, основоположні
          поняття та засади діяльності
          суб&apos;єкта господарювання."
            >
              <One/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="dropdown"
              title="Забезпечуємо комплексне представництво в процесі купівлі бізнесу, що включає в себе проведення due diligence"
              description="Під час купівлі будь-якого дорогого активу природним бажанням покупця є дізнатися всі нюанси щодо об&apos;єкта майбутньої угоди. Процедура DD є дієвим та ефективним механізмом, який дозволяє не лише отримати справжнє уявлення про потенційні активи, але й запобігти появі «неприємних сюрпризів» після закриття угоди. "
            >
              <Two/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="dropdown"
              title="Створення та реєстрацію су&apos;єктів господарювання різних організаційно-правових форм, а також відокремлених підрозділів юридичних осіб"
              description="Intermarium law firm має значний досвід в реєстрації усіх форм суб&apos;єктів господарювання. Ми допомагаємо у створення та реєстрації товариства з обмеженою відповідальністю, акціонерних товариств, різних типів кооперативів, політичних партій, громадських організацій, волонтерських організацій, благодійний фондів, іноземних представництв, дочірніх підприємств в Україні та надаємо супровід на всій стадії процесу."
            >
              <Three/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="dropdown"
              title="Оформлення ліцензій та дозволів, реєстрацію у державних органах та дотримання інших регуляторних вимог, що виникають як при створенні бізнесу, так і у процесі ведення господарської діяльності"
              description="В Україні для ведення легального бізнесу достатньо бути зареєстрованим у встановленому законом порядку та вести свою діяльність не порушуючи чинного законодавства. Проте, в деяких випадках недостатньо бути зареєстрованим як суб’єкт господарювання (юридичною або фізичною особою-підприємцем) для легальної підприємницької діяльності.
В законодавстві України встановлено 33 види діяльності, для провадження яких необхідно отримати дозвіл – ліцензію.
Порушення ліцензійних умов може бути виявлено органом ліцензування під час перевірки суб&apos;єктів господарювання. У такому випадку орган ліцензування видає розпорядження про усунення порушень ліцензійних умов. У зазначений в такому розпорядженні термін ліцензіат повинен надати органу ліцензування інформацію про усунення порушень.

Intermarium law firm пропонує повний комплекс послуг з отримання бізнесом відповідних ліцензій та їх реєстрацію.
"
            >
              <Four/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="dropdown"
              title="Консультуємо іноземних клієнтів щодо механізмів інвестування в Україні"
              description="Україна завжди була цікавою для іноземних інвесторів та залишається такою попри війну.  Неймовірний результат за підсумками 2022 року продемонструвала українська IT-індустрія, яка зросла на 5,8%. Привабливими для інвесторів залишаються також аграрна галузь, фармацевтика, енергетика, транспорт та інфраструктура, будівництво, FMCG а також зростає інтерес до military tech, військової/оборонної сфери. Intermarium law firm займається дослідженням іноземних інвестицій та надає іноземцям консультації щодо механізмів інвестування а також консультуємо з питань захисту іноземних інвестицій в Україні."
            >
              <Five/>
            </LinkWithDropdown>

          </div>
        </Container>
      </div>
      <div className={classes.different}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Наша команда супроводжує у різних галузях та секторах бізнесу:
          </div>
          <div className={classes.list}>
            <ul>
              <li>галузь нерухомості</li>
              <li>галузь транспорту та логістики</li>
              <li>галузь рітейлу</li>
              <li>туристичних послугах</li>
              <li>освітніх послугах</li>
              <li>і багато інших</li>
            </ul>
            <div className={classes.text}>
              Однією із основних цілей Intermarium Law Firm є максимальне сприяння іноземним клієнтам у веденні бізнесу
              на території України.
            </div>
            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
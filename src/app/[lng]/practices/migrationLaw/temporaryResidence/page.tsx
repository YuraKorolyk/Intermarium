import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Three from "../../../../../../public/assets/icons/Numbers/Three";
import Two from "../../../../../../public/assets/icons/Numbers/Two";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";

const Page = () => {
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Посвідка на тимчасове" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>проживання</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              <p>
                <span className="highlightDark">Посвідка на тимчасове проживання</span> – це документ, що посвідчує
                особу іноземця або особу без громадянства та підтверджує законні підстави тимчасового проживання в
                Україні.
              </p>
              <p>
                <span className="highlightDark">Посвідка на тимчасове проживання видається на 1 рік</span> (виняток –
                посвідка на підставі працевлаштування, у цьому випадку якщо іноземцю оформляється дозвіл на
                працевлаштування на 3 роки – посвідка на тимчасове проживання видається відповідно також на 3
                роки). <span className="highlightDark">Посвідка дає можливість іноземцю легально перебувати на території України та набуває практично усіх прав як і громадянин України.</span>
              </p>
            </div>
          </div>
          <div className={classes.advantages}>
            <div className={classes.description}>З основних переваг, які дає посвідка на тимчасове проживання іноземцю:</div>
            <ul>
              <CustomLi>право на навчання</CustomLi>
              <CustomLi>право на відкриття банківських рахунків</CustomLi>
              <CustomLi>право на відкриття бізнесу</CustomLi>
              <CustomLi>право на реєстрацію ФОП</CustomLi>
              <CustomLi>право на безоплатне ввезення автомобіля</CustomLi>
              <CustomLi>право на отримання посвідки на тимчасове проживання (чоловіка/дружини, дітей) іноземця</CustomLi>
            </ul>
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
            title="Основні підстави отримання посвідки на тимчасове проживання"
            //             description="<strong>Важливо</strong> розуміти, для того щоб отримати дозвіл на працевлаштування роботодавець повинен подати відповідні документи до центру зайнятості вказавши у заяві строк на який повинен видаватись дозвіл та посаду.
            // Праця іноземців та осіб без громадянства може застосовуватися на різних посадах в одного або декількох (двох і більше) роботодавців, за умови отримання дозволу на застосування праці іноземців та осіб без громадянства кожним роботодавцем, у випадку зміни місця роботи чи переведення на іншу посаду потрібно отримувати інший дозвіл на працевлаштування, але лише у випадку зміни роботодавця,
            // Праця іноземців та осіб без громадянства може застосовуватися без дозволу на посадах за сумісництвом в одного роботодавця, якщо строк дії трудового договору на посаді за сумісництвом не перевищує строку дії дозволу за основним місцем роботи."
            description={
              <>
                <p>
                 <ul className="listWithPointer">
                   <li>Працевлаштування</li>
                   <li>Волонтерство</li>
                   <li>Шлюб із громадянином України</li>
                   <li>Навчання</li>
                   <li>Воз’єднання сім’ї (чоловік/дружина)</li>
                 </ul>
                </p>
              </>
            }
          >
            <One/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Перелік необхідних документів для отримання посвідки на тимчасове проживання"
            description={
              <>
                <p>
                  <ul className="listWithPointer">
                    <li>Заява на оформлення посвідки (заповнюється безпосередньо при подачі документів на місці).</li>
                    <li>Оригінал паспорта (з штампом візою типу Д).</li>
                    <li>Копія паспорта (завірена та перекладена нотаріусом).</li>
                    <li>Медичний поліс страхування (на весь період посвідки).</li>
                    <li>Завірена копія дозволу на працевлаштування та його оригінал (у випадку
                      оформлення на підставі працевлаштування).
                    </li>
                    <li>Клопотання (подання) від волонтерської організації (у випадку оформлення на
                      підставі волонтерства).
                    </li>
                  </ul>
                </p>
                <p>
                  Та інші документи, в залежності від підстави оформлення посвідки.
                </p>
              </>
            }
          >
            <Two/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Порядок оформлення посвідки на тимчасове проживання"
            description={
              <>
                <p>
                  <ul className="listWithPointer">
                    <li>Для того щоб отримати посвідку на тимчасове проживання насамперед потрібно отримати візу
                      відповідного типу, за винятком країн з безвізовим режимом (Азербайджан, Молдова, Білорусь,
                      Грузія, Вірменія , Узбекистан).
                    </li>
                    <li>Після того як ви отримали візу, збираємо інший необхідний пакет документів та подаємо в ДМС.
                    </li>
                    <li>На місці подачі документів вас фотографують та знімають відбитки пальців.</li>
                    <li>Розгляд вашої заявки на посвідку триває до 15 днів.</li>
                    <li>Після того як ваша посвідка буде надрукована та направлено у відповідний орган в якому ви
                      подавали документи, ви можете йти та забрати свою посвідку (посвідка зберігається до 6 місяців).
                    </li>
                  </ul>
                </p>
                <p className={classes.bold}>
                  З дати оформлення посвідки вам необхідно зареєструвати своє проживання протягом 30 днів.
                </p>
              </>
            }
          >
            <Three/>
          </LinkWithDropdown>

        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              <span className="highlightDark">Intermarium Law Firm</span> надає повний цикл супроводу іноземців, що
              бажають отримати посвідку на тимчасове проживання. Ми допоможемо зекономити час та уникнути в майбутньому
              значних витрат.
            </div>
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
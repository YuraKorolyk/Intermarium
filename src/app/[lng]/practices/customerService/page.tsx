import React from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import One from "../../../../../public/assets/icons/Numbers/One";
import Two from "../../../../../public/assets/icons/Numbers/Two";
import Three from "../../../../../public/assets/icons/Numbers/Three";
import Four from "../../../../../public/assets/icons/Numbers/Four";
import Five from "../../../../../public/assets/icons/Numbers/Five";
import Six from "../../../../../public/assets/icons/Numbers/Six";
import Seven from "../../../../../public/assets/icons/Numbers/Seven";
import Eight from "../../../../../public/assets/icons/Numbers/Eight";
import Nine from "../../../../../public/assets/icons/Numbers/Nine";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";

const Page = () => {
  return (
    <>
      <HeaderBackground background='5'/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="абонентське" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>обслуговування</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p><span className="highlightDark">Юридичний аутсорсинг є незамінним для західних компаній</span>. Як
              показує досвід, участь професійного юриста
              саме на етапі відкриття бізнесу значно <span className="highlightDark">зменшує ризик виникнення проблем</span> в подальшому а у разі їх
              виникнення <span className="highlightDark">надає можливість швидкому їх вирішенню</span>.</p>
            <p>Будь-який Об&apos;єкт господарювання який заходить на український ринок <span className="highlightDark">потребує комплексної юридичної підтримки</span>.
            </p>
            <p>Юридична компанія Intermarium надає <span className="highlightDark">повний супровід у відкритті бізнесу в Україні та подальшому його введенні</span> з питань що стосуються юридичної складової.
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.receive}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Підписавши з нашою компанією абонентське юридичне обслуговування" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>ви отримаєте:</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <LinkWithDropdown
              dropdown="none"
              title="Юридичний аудит договорів з вашими контрагентами та оцінка ризиків, складання протоколу розбіжностей, розробка типового договору, додаткового договору"
            >
              <One/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title="Повну перевірку вашого контрагента перед укладенням угод"
            >
              <Two/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title="Аналіз документів, складання претензій, відповідь на претензії"
            >
              <Three/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title="Представництво інтересів в державних органах"
            >
              <Four/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title="Складання заяв, скарг, звернень до державних органів"
            >
              <Five/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title="Юридичне оформлення відносин з вашими працівниками та повний супровід з отриманням необхідних дозволів"
            >
              <Six/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title="Аналіз ситуацій які потребують вирішення, письмові та усні консультації щодо їх вирішення"
            >
              <Seven/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title="Захист Торгової марки (ТМ) та прав інтелектуальної власності компанії"
            >
              <Eight/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title="Розробку шаблонів документів (договір, наказів та ін.)"
            >
              <Nine/>
            </LinkWithDropdown>

          </div>
        </Container>
      </div>
      <div className={classes.preferences}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Переваги абонентського обслуговування:
          </div>
          <ul>
            <CustomLi>юридичний супровід при реєстрації, розвитку і просуванні Вашого бізнесу на ринку</CustomLi>
            <CustomLi>постійна допомога з боку команди юристів-професіоналів, яка потрібна для успішного ведення бізнесу</CustomLi>
            <CustomLi>постійна підтримка онлайн без вихідних</CustomLi>
            <CustomLi>економія грошей на утримання штатного юридичного відділу в компанії</CustomLi>
            <CustomLi>гарантована конфіденційність інформації</CustomLi>
            <CustomLi>постійний контроль за дотриманням законодавства України</CustomLi>
            <CustomLi>надійний правовий захист на всіх етапах розвитку бізнесу</CustomLi>
            <CustomLi>надійний правовий захист на всіх етапах розвитку бізнесу</CustomLi>
          </ul>
          <div className={classes.text}>
            <p>Якщо вам необхідна <span className="highlightDark">постійна юридична підтримка</span> але вам фінансово не вигідно утримувати юридичний відділ, хочете <span className="highlightDark">бути в курсі змін у бізнесі та щоб вас попереджали про ризики</span>, обирайте <span className="highlightDark">абонентське обслуговування</span>.</p>
            <p>
              <span className="highlightDark">Перелік послуг</span> в межах абонентського обслуговування визначається <span className="highlightDark">індивідуально з урахуванням специфіки вашої діяльності</span> та за погодженням з Клієнтом.
            </p>
          </div>
          <div className={classes.button}>
            <Button text="залишити заявку"/>
          </div>
        </Container>
      </div>
    </>

  );
};

export default Page;
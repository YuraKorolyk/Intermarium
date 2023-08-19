import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
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
            <TextWithLine topText="Порядок отримання статусу закордонного" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>українця</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Хто такий закордонний українець?"
              description={
                <>
                  <p>
                    <span className="highlightDark">Закордонний українець</span> – це особа, яка є громадянином іншої держави або особою без громадянства, а також має українське етнічне походження або є походженням з України.
                  </p>
                </>
              }
            >
              <One fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Переваги статусу закордонного українця"
              description={
                <>
                  <p>
                    <ul className="listWithPointer">
                      <li>можливість навчання у закладах вищої освіти України за кошти державного бюджету в
                        межах встановлених квот;</li>
                      <li>право працювати на підприємствах, в установах і організаціях або провадити іншу
                        трудову діяльність без відповідного дозволу на це (який необхідний для іноземців);</li>
                      <li>право на безкоштовне оформлення багаторазової візи для відвідання України без надання
                        відповідного запрошення терміном дії на 5 років (для громадян держав, з якими Україна
                        має візовий режим);</li>
                      <li>можливість безкоштовно та поза квотами отримати дозвіл на імміграцію на підставі якого
                        отримати посвідку на постійне проживання.</li>
                      <li>набуття громадянства України в порядку, встановленому Законом України &quot;Про
                        громадянство України&quot;;</li>
                    </ul>
                  </p>
                </>
              }
            >
              <Two fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Як отримати статус закордонного українця?"
              description={
                <>
                  <p>
                    Для того щоб отримати посвідчення закордонного українця, особа повинна звернутися на території України до МЗС України та за кордоном в консульство України з заявою до якої потрібно додати:
                    <ul className="listWithPointer">
                      <li>паспортний документ, або інший документ який посвідчує особу.,</li>
                      <li>копії документів які засвідчують українське етнічне походження або походження з України (свідоцтво або інші документи про народження особи або її родичів, документи, що підтверджують факт проживання особи на території України, та у разі потреби інші документи);</li>
                      <li>фото (30х40) – 2 шт.,</li>
                      <li>квитанцію про оплату послуг (вартість послуг за отримання посвідчення закордонного українця становить еквівалент 10 долларів США).</li>
                    </ul>
                  </p>
                </>
              }
            >
              <Three fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Хто може отримати статус закордонного українця?"
              description={
                <>
                  <p>
                    Статус закордонного українця може отримати особа яка відповідає таким критеріям:
                    <ul className="listWithPointer">
                      <li>українська самоідентифікація;</li>
                      <li>українське етнічне походження або походження з України;</li>
                      <li>письмове звернення щодо бажання мати статус закордонного українця;</li>
                      <li>досягнення особою 16-річного віку;</li>
                      <li>відсутність громадянства України.</li>
                    </ul>
                  </p>
                </>
              }
            >
              <Four fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Строки отримання статус закордонного українця"
              description={
                <>
                  <p>
                    Заява про надання статусу закордонного українця та інші документи, подані представництву МЗС на території України, за кордоном - закордонній дипломатичній установі України, не пізніше ніж через два місяці з дня їх отримання надсилаються Національній комісії дипломатичною поштою або фельд’єгерським зв’язком.
                  </p>
                  <p>
                    Національна комісія розглядає заяву протягом 90 днів з дати її отримання та приймає відповідне рішення.
                  </p>
                </>
              }
            >
              <Five fill="#286E8D"/>
            </LinkWithDropdown>
          </div>
        </Container>
      </div>

      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              <span className="highlightDark">Intermarium Law Firm</span> надає повний цикл супроводу іноземців, що бажають отримати статус закордонного українця.
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
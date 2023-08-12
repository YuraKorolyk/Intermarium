import React from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Two from "../../../../../../public/assets/icons/Numbers/Two";
import Three from "../../../../../../public/assets/icons/Numbers/Three";
import Four from "../../../../../../public/assets/icons/Numbers/Four";
import CustomLi from "@/components/CustomLi/CustomLi";

const Page = () => {
  return (
    <>
      <HeaderBackground background="3"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Допомога в отриманні транзитної візи" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>в Молдову</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              Молдова - найбільш доступний варіант транзиту для громадян азіатських та африканських країн, які хочуть
              виїхати з України або заїхати на територію України.
            </div>
          </div>
          <div className={classes.button}>
            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
      <div className={classes.home}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Для тих, хто перебуває на території України, та хоче" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>повернутися додому</span>
            </TextWithLine>
          </div>
          <div className={classes.block}>
            <div className={classes.list}>
              <div className={classes.item}>
                <div className={classes.number}>
                  <One/>
                </div>
                <div className={classes.text}>
                  Необхідно забронювати дату прийому в консульстві Молдови в Києві, підготувати необхідні документи, що
                  підтверджують намір їхати транзитом через територію Молдови, в тому числі бронювання квитків на літак
                  та автобус, а також підготувати візову анкету.
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Two/>
                </div>
                <div className={classes.text}>
                  При поданні на візу необхідно надати консульству не тільки паспорт, але й документи що підтверджують
                  легальність перебування в Україні та, якщо людина просить багаторазову візу, то необхідно також надати
                  докази того, що людина може легально заїхати на територію України.
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Three/>
                </div>
                <div className={classes.text}>
                  Після подачі в консульстві, аплікант має очікувати приблизно
                  тиждень часу підтвердження візи, після чого може забирати паспорт
                  з проставленою візою або його юрист чи представник можуть
                  забрати паспорт і потім передати особі чи відправити поштовим відправленням.
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Four/>
                </div>
                <div className={classes.text}>
                  Вартість консульського збору складає 40 євро, й після його сплати необхідно надати відповідні
                  квитанції консулу Молдови. Оплата відбувається у відділенні АТ «Укрексімбанк» у м. Києві за адресою
                  03150, м. Київ, вул. Німецька, 5.
                </div>
              </div>
            </div>
            <div className={classes.subtext}>
              Віза видається строком <span className={classes.highlight}>від 2 днів до 6 місяців</span>, в залежності
              від
              наданих документів, що підтверджують мету поїздки.
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.ukraine}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Для тих, хто хоче" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>приїхати до України</span>
            </TextWithLine>
          </div>
         <div className="MLblock">
           <div className={classes.text}>
             Подібний процес відбувається й в інших консульствах Молдови, якщо особи бажає приїхати до України та подає
             документи
             на візу в Баку, Абу Дабі, Катарі та інших локація, де є дипломатичні представництва Республики Молдова.
           </div>
         </div>
        </Container>
      </div>
      <div className={classes.transit}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="для тих, хто є громадянином країни, щодо яких існує заборона на видачу"
                          topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>транзитних віз</span>
            </TextWithLine>
          </div>

          <div className="MLblock">
            <div className={classes.text}>
              Також, якщо подорожуючий транзитом до України, є громадянином 9 країн, щодо яких існує <span className="highlightDark">заборона на видачу
              транзитних віз</span>, то така особа може отримати <span className="highlightDark">бізнес-запрошення для відкриття бізнес-візи в Молдову</span> за такою
              самою процедурою.
            </div>
            <div className={classes.listOfCountries}>
              Список країн, для громадян яких призупинено видачу транзитних віз, є наступним:
              <div className={classes.listWrapper}>
                <ul>
                  <CustomLi>Ірак</CustomLi>
                  <CustomLi>Іран</CustomLi>
                  <CustomLi>Нігерія</CustomLi>
                  <CustomLi>Непал</CustomLi>
                  <CustomLi>Пакистан</CustomLi>
                  <CustomLi>Афганістан</CustomLi>
                  <CustomLi>Вьєтнам</CustomLi>
                  <CustomLi>Сирія</CustomLi>
                  <CustomLi>Ліван</CustomLi>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.tourist}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="хто може подаватись на електронну"
                          topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>туристичну візу</span>
            </TextWithLine>
          </div>

          <div className="MLblock">
            <div className={classes.text}>
              Також, громадяни багатьох країн, наприклад <span className="highlightDark">Китаю, Ефіопії, Кенії</span> можуть подаватися на <span className="highlightDark">електронну туристичну візу</span>, й для цього необхідно надати документи, що підтверджують наявність туристичного страхування, бронювання квитків та житла, а також інші підтверджуючі документи.
            </div>
          </div>
        </Container>
      </div>
    </>
  )
};

export default Page;
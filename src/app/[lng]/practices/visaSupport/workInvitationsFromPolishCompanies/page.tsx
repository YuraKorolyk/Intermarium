import React from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Two from "../../../../../../public/assets/icons/Numbers/Two";

const Page = () => {
  return (
    <>
      <HeaderBackground background="3"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Робочі запрошення від" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>польських компаній</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              <span className="highlightDark">Іноземці, що проживають в Україні</span>, а також громадяни країн Африки,
              Азії, Близького Сходу та Південної Америки, що бажають <span className="highlightDark">отримати працевлаштування в польській компанії та переїхати до Польщі</span>,
              можуть звернутися до Intermarium Law Firm по наступне:
            </div>
          </div>
          <div className={classes.list}>
            <div className={classes.item}>
              <div className={classes.number}>
                <One fill="#286E8D"/>
              </div>
              <div className={classes.itemText}>Сезонні запрошення строком до 9 місяців, для тих, хто бажає поїхати на
                сільськогосподарські роботи сезонного характеру. Із цим запрошенням людина має право подаватися на
                польську національну візу строком до 9 місяців.
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.number}>
                <Two fill="#286E8D"/>
              </div>
              <div className={classes.itemText}>Воєводські запрошення від будівельних компаній та промислових виробництв,
                строком на 3 роки, по яких можна подаватися на Шенген візу строком на 1 рік, а пізніше подаватися знов
                на весь строк дії воєводського запрошення.
              </div>
            </div>
          </div>
          <div className={classes.also}>
            Також: після отримання візи, людина має право <span className="highlightDark">змінити роботодавця</span> вже на території Польщі та <span className="highlightDark">без необхідності отримувати нову робочу візу</span>. Запрошення можуть бути відправлені <span className="highlightDark">в будь-яку країну світу</span>.
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
import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";


const Page = () => {
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="ПОСВІДКА НА ПОСТІЙНЕ" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>ПРОЖИВАННЯ</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>
                <span className="highlightDark">Посвідка на постійне проживання</span> є документом,
                що підтверджує право іноземця або особи без громадянства на постійне проживання в країні. Зазвичай це
                документ, який <span
                className="highlightDark">дає право на вільний виїзд і в’їзд в країну</span> протягом усього періоду
                дії посвідки на постійне проживання.
              </p>
              <p>
                Дозвіл на постійне проживання <span className="highlightDark">видається на підставі дозволу на імміграцію</span>,
                тому після позитивного рішення щодо отримання дозволу на імміграцію іноземець може подати заяву на
                отримання дозволу на постійне проживання.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.advantages}>
            <div className={classes.title}>Переваги ПМП:</div>
            <ul>
              <CustomLi color="light">Право на працевлаштування без відповідного дозволу на працевлаштування</CustomLi>
              <CustomLi color="light">Відвідувати країну без обмежень у кількості</CustomLi>
              <CustomLi color="light">Відсутність необхідності щороку продовжувати термін дії сертифіката</CustomLi>
              <CustomLi color="light">Іноземець зберігає громадянство країни, але при цьому є резидентом України</CustomLi>
            </ul>
            <div className={classes.text}>
              Важливо розуміти, що іноземцю <span className="highlightLight">видається копія дозволу на імміграцію</span>, оскільки <span className="highlightLight">оригінал залишається в Міграційній службі.</span>
            </div>
          </div>
          <div className={classes.listOfDoc}>
            <div className={classes.title}>
              Перелік документів, які необхідно подати до міграційної служби для отримання посвідки на тимчасове проживання:
            </div>
            <ul>
              <CustomLi color="light">Оригінал паспорта</CustomLi>
              <CustomLi color="light">Нотаріально завірений та перекладений паспорт іноземця</CustomLi>
              <CustomLi color="light">Копія дозволу на імміграцію</CustomLi>
              <CustomLi color="light">Квитанцію про сплату державного мита</CustomLi>
            </ul>
            <div className={classes.text}>
              Якщо іноземець <span className="highlightLight">не перебував на території України та не отримував посвідки на тимчасове проживання</span> під час розгляду дозвільних документів на імміграцію, йому <span className="highlightLight">необхідно буде отримати окрему візу типу D.</span>
            </div>
          </div>
          <div className={classes.term}>
            Термін розгляду документів 15 робочих днів
          </div>
          <div className={classes.after}>
            Після отримання посвідки на постійне проживання вам <span className="highlightLight">необхідно зареєструвати місце проживання в Україні протягом 30 днів з дня видачі посвідки на постійне проживання.</span> Іноді іноземці думають, що з моменту отримання посвідки на постійне проживання відраховується 30 днів, але це не так, <span className="highlightLight">30 днів відраховується з дати видачі, яка вказана на самій посвідці на постійне проживання.</span>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          {/*<div className="MLblock">*/}
          <div className={classes.text}>
            В цілому процедура отримання посвідки на постійне проживання на перший погляд не здається складною, але на практиці ситуація зовсім інша, є багато незрозумілих деталей і процес вимагає тісного контакту з Державною міграційною службою, тому для того <span className="highlightDark">щоб уникнути зайвих помилок рекомендуємо звернутися до наших спеціалістів.</span>
          </div>
          {/*</div>*/}
          <div className={classes.button}>
            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
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
            <TextWithLine topText="Супровід укладення шлюбу з громадянами" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>України</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>
                <span className="highlightDark">Шлюб з іноземним елементом</span> є набагато складніший та триваліший
                ніж шлюб між громадянами України, оскільки <span className="highlightDark">потребує додаткових погоджень від державних органів.</span>
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.documents}>
            <div className={classes.title}>
              <TextWithLine topText="Перелік необхідних" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>документів</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">Оригінал паспорта, а у випадку іноземця то посвідка на проживання в
                Україні</CustomLi>
              <CustomLi color="light">Переклад паспорта іноземця на українську мову</CustomLi>
              <CustomLi color="light">Якщо хтось із наречених раніше перебував у шлюбі – документ, який підтверджує
                припинення цього попереднього шлюбу, а саме: свідоцтво про розірвання шлюбу, рішення суду про розірвання
                шлюбу (або про визнання його недійсним) – з відміткою про набрання законної сили, висновок РАЦС про
                анулювання попереднього актового запису про шлюб, свідоцтво про смерть.</CustomLi>
            </ul>
            <p>
              Для того, щоб після реєстрації шлюбу на території України, претендувати
              на отримання візи чоловіка/дружини в ту чи іншу країну, важливо задовольняти всім вимогам до цієї
              категорії візи, представивши у відповідне посольство правильно підготовлений пакет документів. В
              більшості випадків, відмова в отриманні візи по цій категорії візи відбувається через відсутність
              будь-якого документа, який було б дуже легко отримати, але про який Заявник не знав, або з причини
              простої непідготовленості до інтерв&apos;ю з консульським офіцером в посольстві. А подальша необхідна апеляція
              стосовно цього питання призведе до зайвих чималих фінансових витрат і втрати часу.
            </p>
          </div>
          <div className={classes.war}>
            <div className={classes.title}>
              <TextWithLine topText="ШЛЮБ З ІНОЗЕМЦЕМ ПІД ЧАС" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>воєнного стану</span>
              </TextWithLine>
            </div>
            <div>
              <p className={classes.because}>
                У звʼязку із загрозою життю та здоровʼю осіб, під час воєнного стану доступна прискорена процедура реєстрації шлюбу без звернення за послугою «Шлюб за добу».
              </p>
              <p>
                <div className={classes.subtitle}>
                  Що для цього потрібно?
                </div>
                <ul>
                  <CustomLi color="light">Подання заяви на реєстрацію шлюбу до відділу РАЦС</CustomLi>
                  <CustomLi color="light">Призначення дати реєстрації шлюбу (через 2-3 дні після подачі заяви)</CustomLi>
                  <CustomLi color="light">Відділ РАЦС надсилає запит до Державної міграційної служби України щодо законності перебування іноземця на території України та отримує висновок</CustomLi>
                  <CustomLi color="light">Реєстрація шлюбу та отримання свідоцтва про шлюб</CustomLi>
                </ul>
              </p>

            </div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              Тому якщо вам необхідна юридична допомога з приводу укладення шлюбу в Україні <span className="highlightDark">Intermarium law firm надає повний юридичний супровід</span> по підготовці документів для укладення шлюбу з іноземним громадянином як за кордоном, так і на території України, а також повний юридичний супровід по укладенню шлюбного договору.
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
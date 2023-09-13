import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Calendar from "../../../../../public/assets/icons/Calendar";
import CustomLi from "@/components/CustomLi/CustomLi";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
const Page = () => {
  return (
    <>
      <div className={classes.topBar}>
        <Container className={classes.wrapper}>
          <ArticleAuthor author='Taras' />
          <div className={classes.date}>
            <Calendar fill={"#013043"}/>
            <span>{'14/06/2023'}</span>
          </div>
        </Container>
      </div>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Закон України
          </div>
          <div className={classes.subtitle}>
            Про встановлення додаткових правових та соціальних гарантій для громадян Республіки Польща, які перебувають на території України
          </div>
          <div className={classes.block}>
            <div className={classes.image}>
              <img src="/assets/images/lawForPoles.jpg"/>
            </div>
            <div className={classes.text}>
              <p>
                7 липня 2022 року був прийнятий Закон України <span className="highlightDark">“Про встановлення додаткових правових та соціальних гарантій для громадян Республіки Польща, які перебувають на території України”</span>, який вступив в дію вже 16 вересня 2022 року.
              </p>
              <p>
                Цей Закон був прийнятий в знак вдячності Польщі на допомогу України та прийняття Закону Республіки Польща від 12 березня 2022 року "Про допомогу громадянам України у зв’язку із збройним конфліктом на території тієї держави", який діє з 24 лютого 2022 року.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className={classes.for}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={'Що дає цей Закон громадянам'} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>Польщі</span>
            </TextWithLine>
          </div>
          <ul className={classes.list}>
            <CustomLi>Перебування на території України протягом 18 місяців без оформлення додаткових документів а також їх подружжям та дітям (незалежно від їх громадянства) з правом продовження свого перебування оформивши відповідні документи наприклад на підставі навчання чи працевлаштування;</CustomLi>
            <CustomLi>Працевлаштування без дозволу на застосування праці іноземців та осіб без громадянства;</CustomLi>
            <CustomLi>Державну реєстрацію як платників податків та отримання реєстраційного номера облікової картки платника податків відповідно до законодавства України. Заявку на отримання реєстраційного номера облікової картки платника податків від імені малолітніх/неповнолітніх дітей подають їхні батьки та інші законні представники;</CustomLi>
            <CustomLi>Провадження господарської діяльності на тих самих умовах, що i громадяни України;</CustomLi>
            <CustomLi>Здобуття освіти на тих самих умовах, що і громадяни України, у тому числі за рахунок коштів державного або місцевого бюджету;</CustomLi>
            <CustomLi>Безоплатну медичну допомогу в державних і комунальних закладах охорони здоров’я на тих самих умовах, що і громадяни України та інші умови передбачені Законом.</CustomLi>
          </ul>
        </Container>
      </div>
      <div className={classes.also}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Також, громадяни Польщі, які виявили бажання залишитися в України довше ніж на 18 місяців з метою працевлаштування можуть оформити посвідку на тимчасове проживання без отримання довгострокової візи, достатньо лише подати відповідні документи в міграційну службу а саме:
          </div>
          <ul className={classes.list}>
            <CustomLi>Заява (складається в електронному вигляді при подачі документів);</CustomLi>
            <CustomLi>Трудовий договір або гіг-контракт;</CustomLi>
            <CustomLi>Зобов'язання роботодавця повідомити центральний орган виконавчої влади, що реалізує державну політику у сфері міграції (імміграції та еміграції), у тому числі протидії нелегальній (незаконній) міграції, громадянства, реєстрації фізичних осіб, біженців та інших визначених законодавством України категорій мігрантів, про дострокове розірвання чи припинення трудового договору (контракту);</CustomLi>
            <CustomLi>Оригінал паспорта;</CustomLi>
            <CustomLi>Нотаріально завірений переклад паспорта на українську мову;</CustomLi>
            <CustomLi>Документ, що підтверджує сплату державного мита та адміністративного збору за оформлення посвідки на тимчасове проживання (оплачується також при подачі документів).</CustomLi>
          </ul>

            <p className={classes.bold}>
              Посвідка оформлюється на строк дії трудового договору, але не більше ніж на 3 роки.
            </p>
        </Container>
      </div>
    </>
  );
};

export default Page;

import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import CustomLi from "@/components/CustomLi/CustomLi";
import TextWithLine from "@/components/TextWithLine/TextWithLine";

const Page = () => {
  return (
    <>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Правила та повідомлення про приватність
          </div>
          <div className={classes.lastUpdate}>
            Останнє оновлення 01.09.2023 року
          </div>
        </Container>
      </div>
      <div className={classes.contents}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Зміст
          </div>
          <ul>
            <CustomLi>Умови використання</CustomLi>
            <CustomLi>Користування веб-сайтом</CustomLi>
            <CustomLi>Права інтелектуальної власності</CustomLi>
            <CustomLi>Зміст даних та мета, для якої вона збирається</CustomLi>
            <CustomLi>Права осіб щодо яких збираються персональні дані</CustomLi>
            <CustomLi>Оновлення цього повідомлення</CustomLi>
          </ul>
        </Container>
      </div>
      <div className={classes.list}>
        <Container className={classes.wrapper}>
          <div className={`${classes.item} ${classes.first}`}>
            <div className={classes.title}>
              <TextWithLine topText="умови" topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>ВИКОРИСТАННЯ</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>Доступ та використання www.intermarium.law («Веб-сайт») надається ТОВ «ЮК» ІНТЕРМАРІУМ» на умовах,
                викладених нижче. Заходячи на веб-сайт і використовуючи його, ви зобов’язуйтесь виконувати ці Умови.</p>
              <p>Зверніть увагу, що ці умови можуть періодично змінюватися, тому їх слід регулярно перевіряти.
                Продовження використання цього веб-сайту буде вважатися прийняттям оновлених або змінених умов.</p>
            </div>
          </div>
          <div className={`${classes.item} ${classes.second}`}>
            <div className={classes.title}>
              <TextWithLine topText="КОРИСТУВАННЯ" topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>ВЕБ-САЙТОМ</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>Наш веб-сайт створений з метою поширення інформацію про зміст, об’єм, перелік послуг які надає наша
                компанія, а також з метою поширення інформації про діяльність компанії для потенційних клієнтів.</p>
              <p>Ви визнаєте, що будете використовувати Веб-сайт лише в законних цілях, для свого особистого або
                внутрішнього ділового використання.</p>
            </div>
          </div>
          <div className={`${classes.item} ${classes.third}`}>
            <div className={classes.title}>
              <TextWithLine topText="ПРАВА ІНТЕЛЕКТУАЛЬНОЇ" topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>власності</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>Усі авторські права, торгові марки, права на дизайн, патенти та інші права інтелектуальної власності на
                цьому Веб-сайті належать ТОВ «ЮК» ІНТЕРМАРІУМ» та захищаються законом України “Про авторське право і
                суміжні права” та іншими законами України, використання їх третіми особами може бути можливим лише за
                згодою ТОВ «ЮК» ІНТЕРМАРІУМ» та/або за згодою їх учасників.</p>
              <p>Цей Веб-сайт не можна будь-яким чином модифікувати, декомпілювати або реконструювати. Жодна частина
                веб-сайту не може бути відтворена без нашого прямого дозволу.</p>
            </div>
          </div>


          <div className={`${classes.item} ${classes.fourth}`}>
            <div className={classes.title}>
              <TextWithLine topText="Зміст даних та мета, для якої" topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>вона збирається</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>На нашому веб-сайті відвідувачі мають можливість залишати заявку зворотнього зв’язку з нами в
                результаті чого виникає збирання, використання та поширення інформації, яка відноситься до
                «конфіденційної інформації» повідомляємо вас з якою метою та яку саме інформацію ми від вас
                отримуємо.</p>
              <p>
                Дані, які ми збираємо та обробляємо за допомогою вебсайту, соціальних мереж, месенджерів діляться на
                категорії:
                <ul>
                  <li>дані, надані відвідувачами (ім’я, електронна пошта та інформація з повідомлення, яке ви можете нам
                    залишити).
                  </li>
                </ul>
              </p>
              <p>
                Ми можемо передати ваші персональні дані нашим співробітникам, підрядникам або партнерам для виконання
                договору. Також ми передаємо ваші дані з наступних підстав:
                <ul>
                  <li>для виконання державного запиту, постанови суду або відповідного законодавства;</li>
                  <li>для запобігання незаконному використанню нашого вебсайту;</li>
                  <li>для захисту від претензій третіх сторін;</li>
                  <li>для запобігання або для допомоги в розслідуванні шахрайства.</li>
                </ul>
              </p>
              <p>А також, ми передаємо ваші персональні дані третім сторонам на підставі договору для обробки від нашого
                імені, який містить перелік відповідних технічних та організаційних заходів з метою захисту ваших
                персональних даних. Ми можемо передавати ваші дані конкретним компаніям, консультантам, підрядникам, які
                надають певні послуги на наше замовлення.</p>
              <p className={classes.strong}>У випадку, якщо передача даних не є частиною виконання договору ми запитаємо
                вашої згоди.</p>
            </div>
          </div>
          <div className={`${classes.item} ${classes.fifth}`}>
            <div className={classes.title}>
              <TextWithLine topText="Права осіб щодо яких збираються" topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>персональні дані</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>У вас, як у власників персональних даних є наступні права:</p>
              <p>
                <ul>
                  <li><span className={classes.highlights}>Право на доступ до інформації</span>: Ви можете запитати пояснення обробки ваших персональних даних.</li>
                  <li><span className={classes.highlights}>Право на виправлення інформації</span>: Ви можете змінити інформацію, якщо вона неточна або неповна.</li>
                  <li><span className={classes.highlights}>Право на обмеження обробки</span>: Ви можете частково або повністю заборонити нам обробляти ваші персональні дані.</li>
                  <li><span className={classes.highlights}>Право на заперечення проти обробки</span>: Ви можете заперечувати проти обробки ваших персональних даних.</li>
                  <li><span className={classes.highlights}>Право відкликати згоду</span>: Ви можете відкликати свою згоду в будь-який момент.</li>
                  <li><span className={classes.highlights}>Право подати скаргу</span>: Якщо ваш запит не був задоволений, ви можете подати скаргу до регулюючого органу.</li>
                </ul>
              </p>
              <p>Якщо ваші права були порушені або у вас виникли питання з приводу тексту цього повідомлення ви можете звернутись до нас написавши листа на електронну пошту: <span className={classes.highlightsP}>office@intermariumlaw.com</span></p>
              <p> Зверніть увагу: право на видалення даних не є абсолютним — ми не можемо видалити ті ваші дані, які зобов’язані зберігати за законодавством.</p>
            </div>
          </div>
          <div className={`${classes.item} ${classes.sixth}`}>
            <div className={classes.title}>
              <TextWithLine topText="ОНОВЛЕННЯ ЦЬОГО" topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>ПОВІДОМЛЕННЯ</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>Це Повідомлення і правовідносини, що потрапляють під її дію, регулюються Законом України «Про захист
                персональних даних». Чинні закони і вимоги до обробки персональних даних можуть змінитися. У випадку
                оновлення тексту цього повідомлення ми одразу публікуємо його із зазначенням дати оновлення.</p>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
};

export default Page;
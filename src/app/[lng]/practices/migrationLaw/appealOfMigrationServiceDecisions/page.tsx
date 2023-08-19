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
            <TextWithLine topText="Оскарження рішень" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>ДМС</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>Дуже часто іноземці стикаються з <span className="highlightDark">проблемами в Державній міграційній службі</span> які
                пов’язані з відмовою у видичі посвідки на проживання в Україні, чи працівники не бажають приймати
                документи на дозвіл на імміграцію не обгрунтовуючи свою позицію, відмовляють у прийнятті громадянства
                України та ін.</p>
              <p>Іноді для того, щоб отримати необхідну послугу або документ <span className="highlightDark">потрібно витратити чимало часу та ресурсів.</span>
              </p>
              <p>Якщо особа отримала відмову в оформленні чи прийнятті документів посвідки не потрібно розчаровуватись,
                адже <span className="highlightDark">будь яке рішення можна оскаржити</span>. Рішення територіального
                органу Державної міграційної служби України можна оскаржити як і в аміністративному порядку шляхом
                подання скарги безпосередньо до Державної міграційної служби так і до суду.</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.appeal}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.title}>
              Оскарження рішення про відмову в отриманні посвідки до Державної міграційної служби
            </div>
          </div>

          <div className={classes.text}>
            <div className="MLblock">
              <p>З дня отримання рішення про відмову особа подає скаргу безпосередньо
                до ДМС, таку скаргу потрібно подати протягом 30 днів з моменту ознайомлення особи з рішенням про
                відмову. В скарзі потрібно викласти обставини з якими не погоджується та надати докази на підтвердження
                вказаних обставин. Розглядається скарга протягом тридцяти календарних днів від дня її отримання. Строк
                може бути продовжений на п&apos;ятнадцять календарних днів, якщо є необхідність у цьому. Про продовження
                строку особа повідомляється офіційним листом.
              </p>
              <p>Після розгляду скарги ДМС надасть відповідь про прийняте рішення. Якщо ДМС відмовить в задоволенні
                скарги можна звертатися до суду.</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          {/*<div className="MLblock">*/}
            <div className={classes.text}>
              Радимо для оскарження відмови ДМС у видачі посвідки, дозволу на імміграцію чи будь якого іншого
              документа <span className="highlightDark">звернутися до міграційного юриста, який надасть фахову допомогу та зекономить ваш час</span>.
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
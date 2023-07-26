import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";

const Page = () => {
    return (
        <>
            <HeaderBackground/>
            <div className={classes.intro}>
                <Container className={classes.wrapper}>
                   <div className={classes.title}>
                       <TextWithLine topText="Міграційне" topColor="dark">
                           <span className={`${classes.bottomText} bottomTextWithLine`}>Право</span>
                       </TextWithLine>
                   </div>
                    <div className={classes.text}>
                        <p>
                            <span className="highlightDark">Intermarium Law Firm</span> надає повний цикл супроводу іноземців, що бажають мігрувати до України або отримати українське громадянство.
                        </p>
                        <p>
                            Ми допомагаємо клієнтам <span className="highlightDark">з десятків різних країн світу</span> отримати статус резидента та легально перебувати
                            в Україні, а також отримувати фахові консультації <span className="highlightDark">з будь-яких міграційних питань</span>.
                        </p>

                    </div>
                </Container>
            </div>
            <div className={classes.order}>
                <Container className={classes.wrapper}>
                    <div className={classes.title}>
                        <TextWithLine topText="Замовити за напрямом" topColor="dark">
                            <span className={`${classes.bottomText} bottomTextWithLine`}>Послугу</span>
                        </TextWithLine>
                    </div>
                    <ul className={classes.favourList}>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem ipsum dolor sit</li>
                    </ul>
                </Container>
            </div>
        </>
    );
};

export default Page;
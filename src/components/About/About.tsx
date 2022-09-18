import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.info}>
          <span>Приветствую!</span>

          <p>
            Меня зовут <b>Отинов Константин</b>, мне 28 лет. Живу в России, город Пермь.
          </p>
          <p>
            Занимаюсь веб-разработкой с <b>2020 года</b>. Сначала учился верстать сайты с
            применением html5, scss, jquery. Потом с jquery перешел на чистый JS. Начал использовать
            cms Wordpress и базу данных sql. Разработал несколько коммерческих проектов на фрилансе
            (одностраничные сайты с посадкой на wordpress).
          </p>
          <p>Сейчас изучаю и работаю с react, typescript, redux.</p>
          <p>
            <b>Ищу работу для frontend разработчика.</b>
          </p>

          <p>Языки: Русский, Английский</p>
        </div>

        <div className={styles.skills}>
          <span>Навыки:</span>
          <ul className={styles.list}>
            <li>
              <img src={process.env.PUBLIC_URL + '/icons/html5.svg'} alt="html5 icon" />
              HTML5
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/icons/css3.svg'} alt="css3 icon" />
              CSS3 / <img src={process.env.PUBLIC_URL + '/icons/sass.svg'} alt="sass icon" /> SCSS
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/icons/tailwind.svg'} alt="tailwind icon" />{' '}
              Tailwind
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/icons/js.svg'} alt="js icon" /> JavaScript
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/icons/git.svg'} alt="git icon" /> Git /{' '}
              <img src={process.env.PUBLIC_URL + '/icons/github.svg'} alt="github icon" /> Github
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/icons/react.svg'} alt="react icon" /> React
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/icons/typescript.svg'} alt="typescript icon" />{' '}
              TypeScript
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/icons/redux.svg'} alt="redux icon" /> Redux /
              Redux Toolkit
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.images}>
        <div>
          <img src={process.env.PUBLIC_URL + '/photos/01.jpg'} alt="photo01" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/photos/02.jpg'} alt="photo02" />
        </div>
      </div>
    </>
  );
};

export default About;

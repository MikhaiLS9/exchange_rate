import { FC } from "react";
import { IAboutPageProps } from "./AboutPage.props";
import Htag from "../../components/Htag/Htag";
import Ptag from "../../components/Ptag/Ptag";
import styles from './AboutPage.module.css';

const AboutPage: FC<IAboutPageProps> = () => {
  return (
    <div className={styles.aboutContainer}>
      <Htag tag="h1">Exchange Rate Application</Htag>
      <div className={styles.section}>
        <Htag tag="h2" className={styles.sectionTitle}>Exchange Rate</Htag>
        <Ptag size="medium" className={styles.ptag}>
          Это веб-приложение, предназначенное для конвертации валют в реальном
          времени. Приложение предлагает простой и интуитивно понятный интерфейс
          для быстрой конвертации валют между различными доступными парами.
          Авторизация через Firebase, что обеспечивает
          безопасность пользовательских данных и удобный доступ к функциям
          приложения.
        </Ptag>
      </div>

      <div className={styles.section}>
        <Htag tag="h2" className={styles.sectionTitle}>Основные функции</Htag>
        <div className={styles.sectionContent}>
          <Htag tag="h3">Конвертация валют:</Htag>
          <Ptag size="medium" className={styles.ptag}>
            Пользователи могут легко выбрать парами валют и ввести сумму для
            конвертации, получая результат в реальном времени.
          </Ptag>
        </div>

        <div className={styles.sectionContent}>
          <Htag tag="h3">Актуальные курсы валют:</Htag>
          <Ptag size="medium" className={styles.ptag}>
            Информация о курсах валют обновляется в реальном времени, что
            обеспечивает точность конвертаций.
          </Ptag>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
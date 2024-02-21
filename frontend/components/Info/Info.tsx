import styles from "./info.module.css";
import classNames from "classnames";

const Info = () => {
  return (
    <section>
      <h2 className="Section__title" id="Важное">
        Важное
      </h2>
      <div className={styles.Info__cardRoot}>
        <div className={classNames(styles.Info__card, styles.Info__cardItem1)}>
          <h3 className={styles.Info__title}>Оформление заявки</h3>
          <div>
            <ul className={styles.Info__ul}>
              <li className={styles.Info__li}>
                Оформляйте заявки и задавайте вопросы исключительно по
                электронной почте.
              </li>
              <li className={styles.Info__li}>Звонки не принимаются</li>
              <li className={styles.Info__li}>
                Заявка может содержать только те позиции, которые представлены в
                прайс-листе
              </li>
              <li className={styles.Info__li}>
                Заявки от 2 позиций необходимо дублировать в виде вложенного
                файла Excel Письма без личной подписи и контактного номера
                телефона рассматриваться не будут
              </li>
              <li className={styles.Info__li}>
                Телефоны менеджеров не предоставляются
              </li>
            </ul>
          </div>
        </div>
        <div className={classNames(styles.Info__card, styles.Info__cardItem2)}>
          <h3 className={styles.Info__title}>Наличие</h3>
          <div>
            <ul className={styles.Info__ul}>
              <li className={styles.Info__li}>
                В наличии имеется только тот ассортимент, который указан в
                прикрепленном прайс-листе
              </li>
              <li className={styles.Info__li}>
                Под заказ производим поставку металлопроката под заказ с завода
                Серова (УГМК) и Электростали с доплатой до 100% по фактическому
                весу перед отгрузкой
              </li>
              <li className={styles.Info__li}>
                Оптовые цены по Электростали обсуждаются при условии предоплаты
              </li>
            </ul>
          </div>
        </div>
        <div className={classNames(styles.Info__card, styles.Info__cardItem3)}>
          <h3 className={styles.Info__title}>Отгрузка</h3>
          <div>
            <ul className={styles.Info__ul}>
              <li className={styles.Info__li}>
                Отгрузка с 10:00 до 17:00 пн-пт Заезд по навигатору - с
                Московского шосее
              </li>
              <li className={styles.Info__li}>
                Заезд с Софийского шоссе по согласованию - отправляйте заявку с
                указанием гос. номера машины на почту
              </li>
              <li className={styles.Info__li}>
                Для согласования отгрузки  с 9:00 до 19:00 и выходные -
                отправляйте заявку с на почту
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

import styles from "./table.module.css";
import classNames from "classnames";

const Table = () => {
  return (
    <section>
      <h2 className="Section__title" id="Прайс лист">
        Таблица
      </h2>
      <div className={styles.Table__cardRoot}>
        <div
          className={classNames(styles.Table__card, styles.Table__cardItem1)}
        >
          <div className={styles.Table__table}>Таблица</div>
        </div>
        <div
          className={classNames(styles.Table__card, styles.Table__cardItem2)}
        >
          Просим также внимательно ознакомиться с индексом склада для
          организации самостоятельной доставки. <br /> <br /> Приплаты за
          мерность и малый вес указаны в конце ценника. Напоминаем, что любой
          счет от 2,000 рублей требует оплаты, и неоплаченные счета будут
          дополнительно тарифицированы
        </div>
        <div
          className={classNames(styles.Table__card, styles.Table__cardItem3)}
        >
          <div>
            Обратите внимание, что в прайс-листе есть позиции с двумя ценами:
            предоплата и по факту. <br /> <br />
            Это относится к товарам, находящимся в производстве и ожидающим
            поступление в ближайший месяц
          </div>
          <div className={styles.Table__cardButtonDiv}>
            <button className={styles.Table__cardButton}>
              Скачать прайс лист
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;

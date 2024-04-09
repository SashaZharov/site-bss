"use client";
import styles from "./table.module.css";
import classNames from "classnames";
import tableData from "./tableData.json";
import { getTableCards, getTableData } from "@/api";
import { API_URL } from "@/urls";
import { useEffect, useState } from "react";
import { TableProps } from "./table.types";
import { splitIntoSentences } from "@/utils";

const Table: React.FC = () => {
  const [tableDataWithServerInfo, setTableDataWithServerInfo] =
    useState<TableProps>(tableData);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      Promise.all([getTableCards(), getTableData()]).then(
        ([cardsRes, tableRes]) => {
          const newCards = [
            {
              text: splitIntoSentences(cardsRes.description1),
            },
            {
              text: splitIntoSentences(cardsRes.description2),
            },
          ];
          setTableDataWithServerInfo((prev) => ({
            data: {
              ...prev.data,
              cards: newCards,
              table: tableRes,
            },
          }));
          console.log(tableRes);
          setIsMounted(true);
        }
      );
    }
  }, [isMounted]);

  const { title, table, cards, button } = tableDataWithServerInfo.data;
  console.log(tableDataWithServerInfo.data.cards);
  return (
    <section>
      <h2 className="Section__title" id="Прайс лист">
        {title}
      </h2>
      <div className={styles.Table__cardRoot}>
        <div
          className={classNames(styles.Table__card, styles.Table__cardItem1)}
        >
          <div className={styles.Table__table}>
            <div className={styles.styled__table}>
              <div className={classNames(styles.tableRow, styles.tableHeader)}>
                <div className={styles.tableCell}>СОРТ</div>
                <div className={styles.tableCell}>Прф.</div>
                <div className={styles.tableCell}>д (мм)</div>
                <div className={styles.tableCell}>L (м)</div>
                <div className={styles.tableCell}>-</div>
                <div className={styles.tableCell}>База</div>
                <div className={styles.tableCell}>Наличие кг</div>
                <div className={styles.tableCell}>Цена с НДС 20%</div>
              </div>
              {table &&
                table.map((row, index) => (
                  <div key={index} className={styles.tableRow}>
                    <div className={styles.tableCell}>{row.sort}</div>
                    <div className={styles.tableCell}>{row.prf}</div>
                    <div className={styles.tableCell}>{row.d}</div>
                    <div className={styles.tableCell}>{row.l}</div>
                    <div className={styles.tableCell}>{row.additional}</div>
                    <div className={styles.tableCell}>{row.base}</div>
                    <div className={styles.tableCell}>
                      {row.product_availability}
                    </div>
                    <div className={styles.tableCell}>{row.price}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {cards.map((card, index) => (
          <div
            key={index}
            className={classNames(
              styles.Table__card,
              styles[`Table__cardItem${index + 2}`]
            )}
          >
            {card.text && (
              <div className={styles.Table__cardItemText}>
                {card.text.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            )}
            {table && index === cards.length - 1 && (
              <div className={styles.Table__cardButtonDiv}>
                <a
                  className={styles.Table__cardButton}
                  href={`${API_URL}/download-pricelist`}
                  download="price_list.xlsx"
                >
                  {button.text}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Table;

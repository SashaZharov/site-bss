import { ButtonType } from "../Contacts/contacts.types";

type TableItem = {
  text: string[];
};

type TableData = {
  title: string;
  table: Record<string, unknown>; // Тип вашей таблицы, при необходимости можно уточнить
  cards: TableItem[];
  button: ButtonType;
};

type TableProps = {
  data: TableData;
};

export type { TableProps };

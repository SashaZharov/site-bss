import { ButtonType } from "../Contacts/contacts.types";

type TableCard = {
  text: string[];
};

type TableData = {
  title: string;
  table: TableItem[];
  cards: TableCard[];
  button: ButtonType;
};

type TableProps = {
  data: TableData;
};

type TableItem = {
  id: number;
  sort: string;
  prf: string;
  d: string;
  l: string;
  additional: string;
  base: string;
  product_availability: string;
  price: string;
};

export type { TableProps };

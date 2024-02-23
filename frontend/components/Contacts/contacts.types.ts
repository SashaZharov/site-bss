type ContactType = {
  icon: any;
  text: string;
};

type ButtonType = {
  text: string;
  link: string;
};

type MapType = {
  coords: number[];
};

type ContactsData = {
  title: string;
  map: MapType;
  info: ContactType[];
  button: ButtonType;
};

type ContactsProps = {
  data: ContactsData;
};

export type { ContactsProps, ContactType, ButtonType };

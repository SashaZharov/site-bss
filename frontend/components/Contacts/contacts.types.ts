type ContactType = {
  icon: "mail" | "phone" | "location";
  text: string;
};

type ButtonType = {
  text: string;
  link: string;
};

type ContactsData = {
  title: string;
  info: ContactType[];
  button: ButtonType;
};

type ContactsProps = {
  data: ContactsData;
};

export type { ContactsProps, ContactType };

type InfoItem = {
  title: string;
  list: string[];
};

type InfoData = {
  title: string;
  cards: InfoItem[];
};

type InfoProps = {
  data: InfoData;
};

export type { InfoProps };

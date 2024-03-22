export const splitIntoSentences = (text: string) => {
  const regex = /\n+/;
  return text.split(regex).filter(Boolean);
};

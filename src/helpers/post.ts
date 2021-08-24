export const createSpoiler = (text: string, letters = 225): string => {
  const prepared = text.substr(0, letters);
  return `${prepared}...`;
};

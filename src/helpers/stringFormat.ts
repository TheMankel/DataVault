const stringFormat = (text: string, length: number = 10) => {
  if (text.length > 10) return text.slice(0, length) + '...';
  else return text;
};

export default stringFormat;

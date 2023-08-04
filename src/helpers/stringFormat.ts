const stringFormat = (text: string) => {
  if (text.length > 10) return text.slice(0, 10) + '...';
};

export default stringFormat;

export const listToArrowString = (list) =>
  list.reduce((acc, current) => acc + "->" + current);

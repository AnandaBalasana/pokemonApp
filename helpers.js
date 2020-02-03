export const getTypes = types => {
  let typesArray = types.map(type => type.type.name);
  return typesArray.join(', ');
};

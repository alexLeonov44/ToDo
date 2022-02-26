export const getTimeWithoutSeconds = () => {
  let today = new Date();
  return today.getHours() + ':' + today.getMinutes();
};

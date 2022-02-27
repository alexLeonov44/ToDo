export const getTimeWithoutSeconds = () => {
  let today = new Date();
  let hours = today.getHours()
  let minutes = today.getMinutes()
  console.log(String(minutes).length)
  return `${hours} : ${String(minutes).length === 1 ? '0' + minutes : minutes}`;
};

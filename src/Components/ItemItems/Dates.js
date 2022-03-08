const date = () => {
  const currentDate = new Date();
  const day =
    currentDate.getDate().toString().length === 1
      ? `0${currentDate.getDate().toString()}`
      : currentDate.getDate().toString();
  const year = currentDate.getFullYear().toString();
  const month =
    (currentDate.getMonth() + 1).toString().length === 1
      ? `0${(currentDate.getMonth() + 1).toString()}`
      : (currentDate.getMonth() + 1).toString();
  return `${year}-${month}-${day}`;
}

export default date;
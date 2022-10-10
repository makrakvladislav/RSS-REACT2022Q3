type emailCheck = (val: HTMLInputElement | null | undefined) => boolean;
type dateCheck = (val: HTMLInputElement | null | undefined) => boolean;

const emailValidate: emailCheck = (val) => {
  const regEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return regEx.test(val!.value);
};

const dateValidate: dateCheck = (val) => {
  const date = Number(new Date(val!.value));
  const currentDate = Number(new Date());
  return (
    (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)) || date < currentDate
  );
};

export { emailValidate, dateValidate };

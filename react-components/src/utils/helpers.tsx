type emailCheck = (val: string) => boolean;
type dateCheck = (val: Date) => boolean;
type nameCheck = (val: string) => boolean;
type countryCheck = (val: string) => boolean;

const emailValidate: emailCheck = (val) => {
  const regEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return regEx.test(val);
};

const dateValidate: dateCheck = (val) => {
  const date = new Date(val);
  if (!date) {
    return false;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return !(date > today);
};

const nameValidate: nameCheck = (val) => {
  return !(val.length < 3);
};

const contryValidate: countryCheck = (val) => {
  return val !== 'default';
};

export { emailValidate, dateValidate, nameValidate, contryValidate };

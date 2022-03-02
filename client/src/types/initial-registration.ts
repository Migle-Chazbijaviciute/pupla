type InitialRegistration = {
  name: string,
  surname: string,
  phoneNumber: string,
  country: string,
  address: string,
  city: string,
  zipcode: string,
  email: string,
  password: string,
  repeatPassword: string,
  emailChecked?: boolean,
  emailAvailable?: boolean,
};

export default InitialRegistration;

type LoggedInUser = {
  id: string;
  email: string;
  role: 'USER' | 'ADMIN';
  name: string;
  surname: string;
  phoneNumber: string;
  country: string;
  address: string;
  city: string;
  zipcode: string;
  createdAt: string;
  updatedAt: string;
};

export default LoggedInUser;

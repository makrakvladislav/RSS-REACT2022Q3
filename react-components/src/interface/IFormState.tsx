export default interface IFormState {
  items: {
    name: string;
    lastName: string;
    birthday: number;
    email: string;
    avatar: string;
    country: string;
    subscribe: boolean;
    agree: string;
  }[];
}

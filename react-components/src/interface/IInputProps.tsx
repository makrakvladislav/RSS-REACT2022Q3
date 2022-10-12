export default interface IInputProps {
  type: string;
  name: string;
  placeholder?: string;
  isError: number;
  errormessage: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

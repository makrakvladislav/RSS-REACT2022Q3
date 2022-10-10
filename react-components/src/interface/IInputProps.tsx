export default interface IInputProps {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  errorstate: number;
  errormessage: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

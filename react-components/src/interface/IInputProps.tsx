export default interface IInputProps {
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  iserror?: number;
  errormessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

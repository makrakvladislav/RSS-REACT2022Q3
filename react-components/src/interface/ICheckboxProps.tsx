export default interface ICheckboxProps {
  type: string;
  name: string;
  label?: string;
  isError: number;
  errormessage: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default interface ICheckboxProps {
  type: string;
  name: string;
  label?: string;
  iserror: number;
  errormessage: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

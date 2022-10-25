export default interface ISelectProps {
  options: Array<string>;
  name?: string;
  iserror?: number;
  errormessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

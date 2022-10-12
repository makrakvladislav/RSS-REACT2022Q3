export default interface ISelectProps {
  options: Array<string>;
  name?: string;
  isError: number;
  errormessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

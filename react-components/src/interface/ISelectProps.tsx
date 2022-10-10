export default interface ISelectProps {
  options: Array<string>;
  name?: string;
  errorstate: number;
  errormessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

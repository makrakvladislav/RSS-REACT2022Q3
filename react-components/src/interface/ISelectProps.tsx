export default interface ISelectProps {
  options: Array<string>;
  name?: string;
  errorstate: boolean;
  errormessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

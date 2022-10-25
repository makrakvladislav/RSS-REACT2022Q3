import { FieldError } from 'react-hook-form';

export default interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  error: { hasError?: FieldError | undefined | boolean; message: string };
}

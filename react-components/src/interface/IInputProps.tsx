import { FieldError } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';

export default interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: { hasError?: FieldError | undefined | boolean; message: string };
}

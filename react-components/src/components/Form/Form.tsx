import Input from 'components/UI/Input/Input';
import Select from 'components/UI/Select/Select';
import { emailValidate, dateValidate, contryValidate } from 'utils/helpers';
import React, { memo, useEffect } from 'react';
import Toggle from 'components/UI/Toggle/Toggle';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import IFormCard from 'interface/IFormCard';
import { useForm } from 'react-hook-form';

interface ChildProps {
  handleClick?: (items: IFormCard) => void;
}
interface IForm {
  name: string;
  lastName: string;
  birthday: Date;
  email: string;
  avatar: string;
  country: string;
  agree: boolean;
  subscribe: boolean;
}
const Form = memo((props: ChildProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid, isDirty, isSubmitted },
  } = useForm<IForm>({ mode: 'onSubmit' });

  const onSubmit = (data: IFormCard) => {
    let avatarURL;
    if (data.avatar![0]) {
      const blob = new Blob([data.avatar[0]], {
        type: 'image/jpeg',
      });
      avatarURL = URL.createObjectURL(blob);
    } else {
      avatarURL = '';
    }
    const item: IFormCard = {
      name: data.name,
      lastName: data.lastName,
      birthday: data.birthday,
      email: data.email,
      avatar: avatarURL,
      country: data.country,
      subscribe: data.subscribe,
      agree: data.agree,
    };
    props.handleClick!(item);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <>
      <form
        data-testid="form"
        className="flex-1 mt-8 mb-8 max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <Input
            type="text"
            error={{ hasError: errors.name, message: 'Name should contains at least 3 characters' }}
            {...register('name', { required: true, minLength: 3 })}
          />
        </div>

        <div className="mb-3">
          <Input
            type="text"
            error={{
              hasError: errors.lastName,
              message: 'Last Name should contains at least 3 characters',
            }}
            {...register('lastName', { required: true, minLength: 3 })}
          />
        </div>

        <div className="mb-3">
          <Input
            type="date"
            error={{ hasError: errors.birthday, message: 'Input correct birthday date' }}
            {...register('birthday', { required: true, validate: dateValidate })}
          />
        </div>

        <div className="mb-3">
          <Input
            type="email"
            error={{ hasError: errors.email, message: 'Wrong email' }}
            {...register('email', { required: true, validate: emailValidate })}
          />
        </div>

        <div className="mb-3">
          <Input
            type="file"
            error={{ hasError: errors.avatar, message: 'Choose your avatar' }}
            {...register('avatar', { required: false })}
          />
        </div>

        <div className="mb-3">
          <Select
            options={['Belarus', 'Ukraine', 'United States', 'Poland']}
            error={{ hasError: errors.country, message: 'Choose your country' }}
            {...register('country', { required: true, validate: contryValidate })}
          />
        </div>

        <div className="mb-3">
          <Checkbox
            type="checkbox"
            data-testid="agree"
            label="I consent to my personal data"
            error={{ hasError: errors.agree, message: 'Agree to consent personal data' }}
            {...register('agree', { required: true })}
          />
        </div>

        <div className="mb-3">
          <Toggle
            type="checkbox"
            data-testid="subscribe"
            error={{ message: 'subscribe' }}
            {...register('subscribe', { required: false })}
          />
        </div>
        <button
          type="submit"
          disabled={(!isDirty || isSubmitted) && !isValid}
          className={
            (!isDirty || isSubmitted) && !isValid
              ? 'bg-blue-400 cursor-not-allowed w-full mt-4 text-white right-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-1'
              : 'w-full mt-4 text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-1'
          }
        >
          Create Card
        </button>
      </form>
    </>
  );
});

export default Form;

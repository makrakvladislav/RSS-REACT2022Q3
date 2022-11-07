import Input from 'components/UI/Input/Input';
import Select from 'components/UI/Select/Select';
import { emailValidate, dateValidate, contryValidate } from 'utils/helpers';
import React, { memo, useCallback, useEffect } from 'react';
import Toggle from 'components/UI/Toggle/Toggle';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { useForm } from 'react-hook-form';
import { IFormCard } from './FormCard/FormCard';
import { useAppDispatch } from 'store/hooks/redux';
import { setFormCard } from 'store/reducers/ActionCreators';

const selectOption = ['Belarus', 'Ukraine', 'United States', 'Poland'];

const Form = memo(() => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid, isDirty, isSubmitted },
  } = useForm<IFormCard>({ mode: 'onSubmit' });

  const onSubmit = useCallback(
    (data: IFormCard) => {
      let avatarURL;
      if (data.avatar[0]) {
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
      dispatch(setFormCard(item));
    },
    [dispatch]
  );

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const disabled = (!isDirty || isSubmitted) && !isValid;

  return (
    <>
      <form
        data-testid="form"
        className="flex-1 mt-8 mb-8 max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <Input
            data-testid="name"
            type="text"
            hasError={errors.name}
            message={'Name should contains at least 3 characters'}
            {...register('name', { required: true, minLength: 3 })}
          />
        </div>

        <div className="mb-3">
          <Input
            data-testid="last-name"
            type="text"
            hasError={errors.lastName}
            message={'last Name should contains at least 3 characters'}
            {...register('lastName', { required: true, minLength: 3 })}
          />
        </div>

        <div className="mb-3">
          <Input
            data-testid="birthday"
            type="date"
            hasError={errors.birthday}
            message={'Input correct birthday date'}
            {...register('birthday', { required: true, validate: dateValidate })}
          />
        </div>

        <div className="mb-3">
          <Input
            data-testid="email"
            type="email"
            hasError={errors.email}
            message={'Wrong email'}
            {...register('email', { required: true, validate: emailValidate })}
          />
        </div>

        <div className="mb-3">
          <Input
            data-testid="avatar"
            type="file"
            hasError={errors.avatar}
            message={'Choose your avatar'}
            {...register('avatar', { required: false })}
          />
        </div>

        <div className="mb-3">
          <Select
            data-testid="country"
            options={selectOption}
            hasError={errors.country}
            message={'Choose your country'}
            {...register('country', { required: true, validate: contryValidate })}
          />
        </div>

        <div className="mb-3">
          <Checkbox
            type="checkbox"
            data-testid="agree"
            label="I consent to my personal data"
            hasError={errors.agree}
            message={'Agree to consent personal data'}
            {...register('agree', { required: true })}
          />
        </div>

        <div className="mb-3">
          <Toggle
            type="checkbox"
            data-testid="subscribe"
            hasError={errors.subscribe}
            message={'subscribe'}
            {...register('subscribe', { required: false })}
          />
        </div>
        <button
          type="submit"
          disabled={disabled}
          className={
            disabled
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

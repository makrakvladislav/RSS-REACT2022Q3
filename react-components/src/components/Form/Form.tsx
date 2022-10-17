import Input from 'components/UI/Input/Input';
import Select from 'components/UI/Select/Select';
import { emailValidate, dateValidate } from 'utils/helpers';
import React, { Component, createRef } from 'react';
import IFormErrorsState from 'interface/IFormStateErrors';
import Toggle from 'components/UI/Toggle/Toggle';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import IFormCard from 'interface/IFormCard';

interface ChildProps {
  handleClick?: (items: IFormCard) => void;
}

export class Form extends Component<ChildProps, IFormErrorsState> {
  name: React.RefObject<HTMLInputElement> | null;
  lastName: React.RefObject<HTMLInputElement> | null;
  email: React.RefObject<HTMLInputElement> | null;
  birthday: React.RefObject<HTMLInputElement> | null;
  avatar: React.RefObject<HTMLInputElement> | null;
  country: React.RefObject<HTMLSelectElement> | null;
  subscribe: React.RefObject<HTMLInputElement> | null;
  agree: React.RefObject<HTMLInputElement> | null;

  constructor(props: ChildProps) {
    super(props);
    this.name = createRef();
    this.lastName = createRef();
    this.email = createRef();
    this.birthday = createRef();
    this.avatar = createRef();
    this.country = createRef();
    this.subscribe = createRef();
    this.agree = createRef();
    this.onSubmitForm.bind(this);

    this.state = {
      nameError: true,
      lastNameError: true,
      emailError: true,
      birthdayError: true,
      avatarError: true,
      countryError: true,
      agreeError: true,
      disableSubmit: true,
      formSubmited: false,
    };
  }

  changeHandler = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const input = e.target as HTMLInputElement;
    const inputName = input.name + 'Error';

    /*
    let emailState = true;
    if (e as React.ChangeEvent<HTMLInputElement>) {
      emailState = emailValidate(input);
    }
    let birthdayState = true;
    if (e as React.ChangeEvent<HTMLInputElement>) {
      birthdayState = !dateValidate(input);
    }
    */

    this.setState((prevState) => {
      return { ...prevState, disableSubmit: false };
    });

    if (this.state.formSubmited) {
      if (
        ((input.name === 'name' || input.name === 'lastName') && input.value.length < 3) ||
        (input.name === 'email' && !emailValidate(input)) ||
        (input.name === 'agree' && !!input.checked) ||
        (input.name === 'birthday' && !dateValidate(input))
      ) {
        this.setState((prevState) => {
          return { ...prevState, [inputName]: false };
        });
      } else {
        this.setState((prevState) => {
          return { ...prevState, [inputName]: true };
        });
      }
      if (!this.onValidateAll()) {
        this.setState({ disableSubmit: true });
      }
    }
  };

  onValidate = (
    fieldName: React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>,
    state: boolean
  ): boolean => {
    const inputName = fieldName.current!.name + 'Error';
    if (state) {
      this.setState((prevState) => {
        return { ...prevState, [inputName]: false };
      });
      return false;
    } else {
      this.setState((prevState) => {
        return { ...prevState, [inputName]: true };
      });
      return true;
    }
  };

  onValidateAll = () => {
    const name = this.name?.current;
    const lastName = this.lastName?.current;
    const birthday = this.birthday?.current;
    const email = this.email?.current;
    const country = this.country?.current;
    const agree = this.agree?.current;

    let validate = true;
    validate = this.onValidate(this.name!, name!.value.length < 3) && validate;
    validate = this.onValidate(this.lastName!, lastName!.value.length < 3) && validate;
    validate = this.onValidate(this.email!, !emailValidate(email)) && validate;
    validate = this.onValidate(this.birthday!, !dateValidate(birthday)) && validate;
    validate = this.onValidate(this.agree!, !agree!.checked) && validate;
    validate = this.onValidate(this.country!, country!.value === 'default') && validate;

    return validate;
  };

  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = this.name?.current;
    const lastName = this.lastName?.current;
    const birthday = this.birthday?.current;
    const email = this.email?.current;
    const avatar = this.avatar?.current;
    const country = this.country?.current;
    const subscribe = this.subscribe?.current;
    const agree = this.agree?.current;

    if (this.onValidateAll()) {
      if (name && lastName && birthday && email && avatar && country && agree) {
        let avatarURL;
        if (this.avatar!.current!.files![0]) {
          avatarURL = URL.createObjectURL(this.avatar!.current!.files![0]);
        } else {
          avatarURL = '';
        }
        const isSubscribe = subscribe!.checked;
        const isAgree = agree!.checked;
        const item: IFormCard = {
          name: name.value,
          lastName: lastName.value,
          birthday: birthday.value,
          email: email.value,
          avatar: avatarURL,
          country: country.value,
          subscribe: isSubscribe,
          agree: isAgree,
        };
        this.props.handleClick!(item);
      }
      (e.target as HTMLFormElement).reset();
      this.setState({ formSubmited: false, disableSubmit: true });
    } else {
      this.setState({ disableSubmit: true, formSubmited: true });
    }
  };

  render() {
    return (
      <form
        data-testid="form"
        className="flex-1 mt-8 mb-8 max-w-sm mx-auto"
        onSubmit={this.onSubmitForm}
      >
        <div className="mb-3">
          <Input
            data-testid="name"
            type="text"
            name="name"
            ref={this.name}
            placeholder="Name"
            iserror={+this.state.nameError}
            errormessage="Name should contains at least 3 characters"
            onChange={this.changeHandler}
          />
        </div>
        <div className="mb-3">
          <Input
            data-testid="last-name"
            type="text"
            name="lastName"
            ref={this.lastName}
            placeholder="Last Name"
            iserror={+this.state.lastNameError}
            errormessage="last Name should contains at least 3 characters"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.changeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <Input
            data-testid="birthday"
            type="date"
            name="birthday"
            ref={this.birthday}
            placeholder="Birthday date"
            iserror={+this.state.birthdayError}
            errormessage="Input correct birthday date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.changeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <Input
            data-testid="email"
            type="text"
            name="email"
            ref={this.email}
            placeholder="Email"
            iserror={+this.state.emailError}
            errormessage="Wrong email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.changeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <Input
            data-testid="avatar"
            type="file"
            name="avatar"
            ref={this.avatar}
            placeholder="Avatar"
            iserror={+this.state.avatarError}
            errormessage="Choose your avatar"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.changeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <Select
            data-testid="country"
            name="country"
            ref={this.country}
            options={['Belarus', 'Ukraine', 'United States', 'Poland']}
            iserror={+this.state.countryError}
            errormessage="Choose your country"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.changeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <Checkbox
            data-testid="agree"
            type="checkbox"
            name="agree"
            ref={this.agree}
            label="I consent to my personal data"
            iserror={+this.state.agreeError}
            errormessage="Agree to consent personal data"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.changeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <Toggle type="checkbox" name="subscribe" ref={this.subscribe} />
        </div>

        <button
          type="submit"
          disabled={this.state.disableSubmit}
          className={
            this.state.disableSubmit
              ? 'bg-blue-400 cursor-not-allowed w-full mt-4 text-white right-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-1'
              : 'w-full mt-4 text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-1'
          }
        >
          Create Card
        </button>
      </form>
    );
  }
}

export default Form;

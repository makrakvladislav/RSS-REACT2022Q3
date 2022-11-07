import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

const mockedData = {
  name: 'Jhon',
  lastName: 'Doe',
  birthday: '2020-05-12',
  email: 'test@yandex.ru',
  avatar: 'https://via.placeholder.com/600/92c952',
  country: 'Belarus',
  subscribe: false,
  agree: 'true',
};

describe('Form test', () => {
  it('Form renders', () => {
    render(<Form />);

    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('Form snapshot', () => {
    const form = render(<Form />);
    expect(form).toMatchSnapshot();
  });

  it('Check submit button disabled', () => {
    const { getByText } = render(<Form />);
    expect(getByText('Create Card')).toBeDisabled();
  });

  it('Check submit button Enabled', () => {
    const { getByText } = render(<Form />);

    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'test.@yandex.ru' },
    });
    expect(getByText('Create Card')).toBeEnabled();
  });

  it('Check input name', () => {
    render(<Form />);
    const inputName = screen.getByTestId('name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, mockedData.name);
    screen.getByDisplayValue(mockedData.name);
  });

  it('Check input name error', () => {
    render(<Form />);
    const inputName = screen.getByTestId('name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, '1');
    fireEvent.click(screen.getByText(/Create Card/i));
    expect(screen.getByText('Name should contains at least 3 characters')).toBeInTheDocument();
  });

  it('Check input last name', () => {
    render(<Form />);
    const inputName = screen.getByTestId('last-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, mockedData.lastName);
    screen.getByDisplayValue(mockedData.lastName);
  });

  it('Check input last name error', () => {
    render(<Form />);
    const inputName = screen.getByTestId('last-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, '1');
    fireEvent.click(screen.getByText(/Create Card/i));
    expect(screen.getByText('last Name should contains at least 3 characters')).toBeInTheDocument();
  });

  it('Check input Email', () => {
    render(<Form />);
    const inputBirthday = screen.getByTestId('email');
    expect(inputBirthday).toBeInTheDocument();
    fireEvent.change(inputBirthday, { target: { value: mockedData.birthday } });
    screen.getByDisplayValue('2020-05-12');
  });

  it('Check input Email error', () => {
    render(<Form />);
    const inputBirthday = screen.getByTestId('email');
    expect(inputBirthday).toBeInTheDocument();
    fireEvent.change(inputBirthday, { target: { value: '1' } });
    fireEvent.click(screen.getByText(/Create Card/i));
    expect(screen.getByText('Input correct birthday date')).toBeInTheDocument();
  });

  it('Check input avatar', () => {
    render(<Form />);
    const inputAvatar = screen.getByTestId('avatar') as HTMLInputElement;
    expect(inputAvatar).toBeInTheDocument();
    const file = new File(['logo'], 'logo.png', { type: 'image/png' });
    userEvent.upload(inputAvatar, file);

    expect(inputAvatar!.files![0]).toStrictEqual(file);
    expect(inputAvatar!.files!.item(0)).toStrictEqual(file);
    expect(inputAvatar.files).toHaveLength(1);
  });

  it('Check input avatar error', () => {
    render(<Form />);
    const inputAvatar = screen.getByTestId('avatar');
    expect(inputAvatar).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Create Card/i));
    expect(screen.getByText('Choose your avatar')).toBeInTheDocument();
  });

  it('Check select country', async () => {
    render(<Form />);
    const inputCountry = screen.getByTestId('country');
    expect(inputCountry).toBeInTheDocument();
    expect(await screen.getByRole('option', { name: 'Belarus' })).toBeInTheDocument();
    userEvent.selectOptions(inputCountry, 'Belarus');
    expect(inputCountry).toHaveValue('Belarus');
  });

  it('Check select country error', () => {
    render(<Form />);
    const inputCountry = screen.getByTestId('country');
    expect(inputCountry).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Create Card/i));
    expect(screen.getByText('Choose your country')).toBeInTheDocument();
  });

  it('Check agree checkbox', async () => {
    render(<Form />);
    const inputAgree = screen.getByTestId('agree') as HTMLInputElement;
    expect(inputAgree).toBeInTheDocument();
    fireEvent.click(inputAgree);
    expect(inputAgree.checked).toEqual(true);
  });

  it('Check agree checkbox error', () => {
    render(<Form />);
    const inputAgree = screen.getByTestId('agree') as HTMLInputElement;
    expect(inputAgree).toBeInTheDocument();
    fireEvent.click(inputAgree);
    fireEvent.click(inputAgree);
    expect(inputAgree.checked).toEqual(false);
    expect(screen.getByText('Agree to consent personal data')).toBeInTheDocument();
  });

  it('Check submit form', async () => {
    let showCard = false;
    const mockedFn = jest.fn(() => {
      showCard = true;
      console.log('form submited');
    });
    render(<Form />);

    const inputName = screen.getByTestId('name');
    const inputLastName = screen.getByTestId('last-name');
    const inputBirthday = screen.getByTestId('birthday');
    const inputEmail = screen.getByTestId('email');
    const fileUploader: HTMLInputElement = screen.getByTestId('avatar');
    const select = screen.getByTestId('country');

    userEvent.type(inputName, mockedData.name);
    userEvent.type(inputLastName, mockedData.lastName);
    fireEvent.change(inputBirthday, { target: { value: mockedData.birthday } });
    userEvent.type(inputEmail, mockedData.email);
    expect(await screen.getByRole('option', { name: 'Belarus' })).toBeInTheDocument();
    userEvent.selectOptions(select, 'Belarus');
    expect(select).toHaveValue('Belarus');

    waitFor(() => {
      const checkbox = screen.getByTestId('agree') as HTMLInputElement;
      fireEvent.click(checkbox);
      expect(checkbox.checked).toEqual(true);
    });

    const file = new File(['logo'], 'logo.png', { type: 'image/png' });
    userEvent.upload(fileUploader, file);

    expect(fileUploader!.files![0]).toStrictEqual(file);
    expect(fileUploader!.files!.item(0)).toStrictEqual(file);
    expect(fileUploader.files).toHaveLength(1);
    window.URL.createObjectURL = jest.fn();
    await fireEvent.click(screen.getByTestId('form'));
    //expect(mockedFn).toHaveBeenCalledTimes(1);
    //expect(showCard).toBeTruthy();
  });
});

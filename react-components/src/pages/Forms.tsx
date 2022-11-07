import Form from 'components/Form/Form';
import FormCardsList from 'components/Form/FormCardsList/FormCardsList';
import React, { memo, useEffect } from 'react';
import { useAppselector } from 'store/hooks/redux';

const Forms = memo(() => {
  const { cards } = useAppselector((state) => state.formReducer);

  useEffect(() => {}, [cards]);

  return (
    <>
      <h1>Form</h1>
      <Form />
      <FormCardsList items={cards} />
    </>
  );
});

export default Forms;

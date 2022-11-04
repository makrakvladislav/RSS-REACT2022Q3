import Form from 'components/Form/Form';
import FormCardsList from 'components/Form/FormCardsList/FormCardsList';
import { formCardSelector, useSelector } from 'components/GlobalState/StateContext';
import React, { memo, useEffect } from 'react';

const Forms = memo(() => {
  const formCards = useSelector(formCardSelector);

  useEffect(() => {}, [formCards]);

  return (
    <>
      <h1>Form</h1>
      <Form />
      <FormCardsList items={formCards} />
    </>
  );
});

export default Forms;

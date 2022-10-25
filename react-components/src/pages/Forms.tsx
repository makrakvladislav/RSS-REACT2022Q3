import Form from 'components/Form/Form';
import FormCardsList from 'components/Form/FormCardsList/FormCardsList';
import IFormCard from 'interface/IFormCard';
import IFormState from '../interface/IFormState';

import React, { memo, useState } from 'react';

const Forms = memo(() => {
  const [cards, setCards] = useState<IFormState>({ items: [] });

  const createCard = (item: IFormCard) => {
    setCards({ items: cards.items.concat(item) });
  };

  return (
    <>
      <h1>Form</h1>
      <Form handleClick={createCard} />
      <FormCardsList items={cards.items} />
    </>
  );
});

export default Forms;

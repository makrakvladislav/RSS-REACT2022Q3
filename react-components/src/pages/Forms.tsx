import Form from 'components/Form/Form';
import { IFormCard } from 'components/Form/FormCard/FormCard';
import FormCardsList from 'components/Form/FormCardsList/FormCardsList';
import React, { memo, useState } from 'react';

const Forms = memo(() => {
  const [cards, setCards] = useState<Array<IFormCard>>([]);

  const createCard = (item: IFormCard) => {
    setCards(cards.concat(item));
  };

  return (
    <>
      <h1>Form</h1>
      <Form handleClick={createCard} />
      <FormCardsList items={cards} />
    </>
  );
});

export default Forms;

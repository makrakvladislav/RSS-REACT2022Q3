import Card from 'components/Card/Card';
import { ICardListProps } from 'interface/ICardListProps';
import React, { memo } from 'react';

const CardsList = memo((props: ICardListProps) => {
  return (
    <>
      <div className="grid mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 grid-flow-row gap-4">
        {props.items.map((item, index) => (
          <Card key={index} item={item} setVisible={props.setVisible} />
        ))}
      </div>
    </>
  );
});

export default CardsList;

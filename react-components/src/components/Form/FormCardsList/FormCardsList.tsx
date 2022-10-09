import React, { Component } from 'react';
import IFromCardListProps from 'interface/IFormCardsListProps';
import FormCard from '../FormCard/FormCard';
import IFormCard from 'interface/IFormCard';

export class FormCardsList extends Component<IFromCardListProps> {
  render() {
    return (
      <>
        <div className="cardsList grid mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 grid-flow-row gap-4">
          {this.props.items.map((item: IFormCard, index: number) => (
            <FormCard key={index} item={item} />
          ))}
        </div>
      </>
    );
  }
}

export default FormCardsList;

import Card from 'components/Card/Card';
import { ICardListProps } from 'interface/ICardListProps';
import React, { Component } from 'react';

import IMyState from '../../interface/IMyState';

class CardsList extends Component<ICardListProps> {
  state: IMyState = {
    items: this.props.items,
  };
  render() {
    return (
      <>
        <div className="grid mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 grid-flow-row gap-4">
          {this.state.items.map((item, index) => (
            <Card key={index} item={item} setVisible={this.props.setVisible} />
          ))}
        </div>
      </>
    );
  }
}

export default CardsList;

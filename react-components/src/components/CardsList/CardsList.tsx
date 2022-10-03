import Card from 'components/Card/Card';
import React, { Component } from 'react';

import IMyState from '../../interface/IMyState';

class CardsList extends Component<IMyState> {
  state: IMyState = {
    items: this.props.items,
  };
  render() {
    return (
      <>
        <div className="grid mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 grid-flow-row gap-4">
          {this.state.items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </>
    );
  }
}

export default CardsList;

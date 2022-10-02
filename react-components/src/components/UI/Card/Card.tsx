import ICardState from '../../../interface/ICardState';
import IMyProps from '../../../interface/IMyProps';
import React, { Component } from 'react';

export class Card extends Component<IMyProps, ICardState> {
  constructor(props: IMyProps) {
    super(props);
    this.state = {
      item: props.item,
    };
  }
  render() {
    return (
      <>
        <div className="card bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src={`${this.state.item.url}`}
            className="w-full rounded-t-lg object-contain"
            alt="Post img"
          />
          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {this.state.item.title}
            </h3>
          </div>
        </div>
      </>
    );
  }
}

export default Card;

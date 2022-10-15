import ICardState from '../../interface/ICardState';
import IMyProps from '../../interface/IMyProps';
import React, { Component } from 'react';
import ImagePlaceholder from 'components/UI/ImagePlaceholder/ImagePlaceholder';

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
          {this.state.item.poster_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${this.state.item.poster_path}`}
              className="w-full rounded-t-lg object-contain max-w-md"
              alt="Post img"
            />
          ) : (
            <ImagePlaceholder />
          )}

          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {this.state.item.title}
            </h3>
            <button
              onClick={() => this.props!.setVisible!(true, this.state.item.id)}
              className="w-full mt-4 text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-1"
            >
              More info
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;

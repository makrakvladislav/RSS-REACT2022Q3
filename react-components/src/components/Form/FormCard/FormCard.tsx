import React, { Component } from 'react';

import IFormCardState from 'interface/IFormCardState';
import IForm from 'interface/IFormProps';

export class FormCard extends Component<IForm, IFormCardState> {
  constructor(props: IForm) {
    super(props);
    this.state = {
      item: props.item,
    };
  }
  render() {
    return (
      <>
        <div className="card flex flex-col bg-white rounded-lg border border-gray-200 shadow-md">
          <img
            src={`${this.state.item.avatar}`}
            className="w-full h-full max-h-60 rounded-t-lg object-cover"
            alt="Post img"
          />
          <div className="flex flex-col p-5">
            <div className="mb-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {this.state.item.name} {this.state.item.lastName}
              </h3>
              <span className="text-sm text-gray-600 italic">{this.state.item.country}</span>
            </div>
            <div className="block mb-2 text-xs italic text-gray-600">
              {this.state.item.birthday}
            </div>
            <div className="flex items-center m-b-5 text-sm text-gray-600">
              <span className="text-sm italic">{this.state.item.email}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm">
                {this.state.item.subscribe
                  ? 'Subscribed to newsletter'
                  : 'NOT Subscribed to newsletter'}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FormCard;

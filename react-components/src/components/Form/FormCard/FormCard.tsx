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
    //<imgsrc={`${this.state.item}`}className="w-full rounded-t-lg object-contain"alt="Post img"/>
    return (
      <>
        <div className="card bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {this.state.item.name} {this.state.item.lastName}
            </h3>
            <span className="m-b-5 text-xs italic text-gray-600">{this.state.item.birthday}</span>
            <div>{this.state.item.email}</div>
            <div>{this.state.item.avatar}</div>
          </div>
        </div>
      </>
    );
  }
}

export default FormCard;

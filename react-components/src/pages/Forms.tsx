import Form from 'components/Form/Form';
import FormCardsList from 'components/Form/FormCardsList/FormCardsList';
import IFormCard from 'interface/IFormCard';
import React, { Component } from 'react';
import IFormState from 'interface/IFormState';

class About extends Component<Record<string, never>, IFormState> {
  state: IFormState = {
    items: [],
  };

  constructor(props: Record<string, never>) {
    super(props);
  }

  createCard = (item: IFormCard) => {
    this.setState((prevState) => ({
      items: prevState.items.concat(item),
    }));
  };

  render() {
    return (
      <>
        <h1>Form</h1>
        <Form handleClick={this.createCard} />
        <FormCardsList items={this.state.items} />
      </>
    );
  }
}

export default About;

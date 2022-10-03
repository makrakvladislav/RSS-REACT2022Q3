import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import Search from '../components/Search/Search';
import React, { Component } from 'react';
import Data from '../api/api';
import IMyState from '../interface/IMyState';

class Main extends Component<Record<string, never>, IMyState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      items: [],
      isFetching: false,
    };
  }

  async componentDidMount() {
    const response = await Data.getData(12, 1);
    if (response !== undefined) this.setState({ items: response.items, isFetching: true });
  }

  render() {
    return (
      <>
        <h1>Main page</h1>
        <Search />
        {this.state.isFetching ? <CardsList items={this.state.items} /> : <Loader />}
      </>
    );
  }
}

export default Main;

import CardsList from '../components/CardsList';
import Loader from '../components/UI/Loader/Loader';
import Search from '../components/UI/Search/Search';
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
    const response = await Data.getData();
    if (response !== undefined) this.setState({ items: response, isFetching: true });
  }

  render() {
    const data = this.state.items;
    return (
      <>
        <h1>Main page</h1>
        <Search />
        {this.state.isFetching ? <CardsList items={data} /> : <Loader />}
      </>
    );
  }
}

export default Main;

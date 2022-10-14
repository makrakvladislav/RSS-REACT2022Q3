import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import Search from '../components/Search/Search';
import React, { Component } from 'react';
import Data from '../api/api';
import IMyState from '../interface/IMyState';
import SearchError from 'components/UI/SearchError/SearchError';

class Main extends Component<Record<string, never>, IMyState> {
  state = {
    items: [],
    isFetching: false,
    isError: false,
  };
  constructor(props: Record<string, never>) {
    super(props);
  }

  async componentDidMount() {
    const response = await Data.getMovies(1);
    if (response !== undefined)
      this.setState({ items: response.results.results, isFetching: true });
    console.log(response!.results);
  }

  searchHandler = async (query: string) => {
    this.setState({ isFetching: false });
    const response = await Data.getByQuery(1, query);
    if (response !== undefined && response!.results.results.length > 0) {
      this.setState({ items: response.results.results, isFetching: true, isError: false });
      console.log(response!.results);
    } else {
      this.setState({ isFetching: true, isError: true });
    }
  };

  render() {
    return (
      <>
        <h1>Main page</h1>
        <Search handleSearch={this.searchHandler!} />
        {!this.state.isFetching && <Loader />}
        {!this.state.isError && this.state.isFetching && <CardsList items={this.state.items} />}
        {this.state.isError && this.state.isFetching && <SearchError />}
      </>
    );
  }
}

export default Main;

import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import Search from '../components/Search/Search';
import React, { Component } from 'react';
import Data from '../api/api';
import IMyState from '../interface/IMyState';
import SearchError from 'components/UI/SearchError/SearchError';
import Modal from 'components/UI/Modal/Modal';

class Main extends Component<Record<string, never>, IMyState> {
  state = {
    items: [],
    isFetching: false,
    modalData: [],
    modalIsVisible: false,
  };
  constructor(props: Record<string, never>) {
    super(props);
  }

  async componentDidMount() {
    const response = await Data.getMovies(1);
    if (response !== undefined)
      this.setState({ items: response.results.results, isFetching: true });
  }

  searchHandler = async (query: string) => {
    this.setState({ isFetching: false });
    const response = await Data.getByQuery(1, query);
    this.setState({ items: response!.results.results, isFetching: true });
  };

  modalHandler = async (isVisible: boolean, movieId?: number) => {
    if (isVisible) {
      const response = await Data.getByMovieId(movieId!);
      if (response !== undefined)
        this.setState({
          modalData: [response.results],
          modalIsVisible: isVisible,
          isFetching: true,
        });
    } else {
      this.setState({ modalIsVisible: isVisible });
    }
  };

  render() {
    if (this.state.items.length == 0) {
      return (
        <>
          <h1>Main page</h1>
          <Search handleSearch={this.searchHandler} />
          <SearchError />
        </>
      );
    }

    return (
      <>
        <h1>Main page</h1>
        <Search handleSearch={this.searchHandler} />
        {this.state.modalIsVisible && (
          <Modal
            modalData={[...this.state.modalData]}
            isVisible={this.state.modalIsVisible}
            setVisible={this.modalHandler}
          />
        )}
        {!this.state.isFetching ? (
          <Loader />
        ) : (
          <CardsList items={this.state.items} setVisible={this.modalHandler} />
        )}
      </>
    );
  }
}

export default Main;

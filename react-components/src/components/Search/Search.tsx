import ISearchState from 'interface/ISearchState';
import React, { Component } from 'react';

export class Search extends Component<Record<string, never>, ISearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchQuery') });
  }

  componentWillUnmount() {
    if (this.state.value !== null) {
      localStorage.setItem('searchQuery', `${this.state.value}`);
    }
  }

  render() {
    return (
      <>
        <form className="flex-1 mt-8 mb-8 max-w-sm mx-auto">
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-3 pl-10 pr-20 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              value={!this.state.value ? '' : this.state.value}
              placeholder={!this.state.value ? 'Search...' : this.state.value}
              onChange={this.handleChange}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1"
            >
              Search
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Search;

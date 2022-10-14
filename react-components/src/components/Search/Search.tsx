import Input from 'components/UI/Input/Input';
import ISearchState from 'interface/ISearchState';
import React, { Component, createRef } from 'react';
import './Search.css';
interface ChildProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSearch?: (items: any) => void;
}

export class Search extends Component<ChildProps, ISearchState> {
  search: React.RefObject<HTMLInputElement> | null;

  constructor(props: ChildProps) {
    super(props);
    this.search = createRef();
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm.bind(this);
    this.state = {
      value: '',
      isDisabled: false,
    };
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
    if (e.target.value.length === 0) {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  }

  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchQuery') });
    const lSValue = localStorage!.getItem('searchQuery');
    if (lSValue) {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  }

  componentWillUnmount() {
    if (this.state.value !== null) {
      localStorage!.setItem('searchQuery', `${this.state.value}`);
    }
  }

  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.handleSearch!(this.search!.current!.value);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitForm} className="flex-1 mt-8 mb-8 max-w-sm mx-auto">
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
            <Input
              data-testid="name"
              type="search"
              name="search"
              ref={this.search}
              value={!this.state.value ? '' : this.state.value}
              iserror={1}
              placeholder={!this.state.value ? 'Search...' : this.state.value}
              onChange={this.handleChange}
            />

            <button
              type="submit"
              disabled={this.state.isDisabled && true}
              className={
                this.state.isDisabled
                  ? 'bg-blue-400 cursor-not-allowed text-white absolute right-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1'
                  : 'text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1'
              }
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

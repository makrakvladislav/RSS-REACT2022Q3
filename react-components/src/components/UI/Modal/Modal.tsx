import { IModalProps } from 'interface/IModalProps';
import React, { Component } from 'react';
import GenresList from '../GenresList/GenresList';

export class Modal extends Component<IModalProps> {
  wrapperRef: React.RefObject<HTMLDivElement>;

  constructor(props: IModalProps) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(e: Event) {
    this.props!.setVisible!(false);
    console.log(e.target);
  }

  render() {
    const modalData = this.props.modalData[0];
    return (
      <>
        <div
          className={
            this.props.isVisible
              ? 'fixed inset-0 bg-gray-500 bg-opacity-75'
              : 'hidden fixed inset-0 bg-gray-500 bg-opacity-75'
          }
        ></div>
        <div
          ref={this.wrapperRef}
          id="medium-modal"
          className={
            this.props.isVisible
              ? 'flex items-center justify-center h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'
              : 'hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'
          }
        >
          <div className="relative p-4 w-full max-w-6xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-between items-center p-5 rounded-t border-b">
                <h3 className="flex gap-4 items-center text-xl font-medium text-gray-900 ">
                  {modalData.title}
                  <div className="rating flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                      {modalData.vote_average.toFixed(2)}
                    </p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                      {modalData.vote_count} reviews
                    </span>
                  </div>
                </h3>
                <button
                  onClick={() => this.props!.setVisible!(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="medium-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="flex row gap-5 p-6">
                <div className="flex w-1/3 image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${modalData.poster_path}`}
                    className="h-full w-full"
                  />
                </div>
                <div className="description flex w-2/3 flex-col">
                  <GenresList items={modalData.genres} />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {modalData.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;

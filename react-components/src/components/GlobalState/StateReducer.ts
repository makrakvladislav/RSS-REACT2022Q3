import { TAction } from './Actions';
import { IState } from './StateProvider';

const stateReducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA': {
      console.log('FETCH_DATA', state);
      state.cache.cards = [...action.payload.cards];
      return {
        ...state,
        cache: state.cache,
      };
    }
    case 'SAVE_SEARCH_QUERY': {
      console.log('SAVE_SEARCH_QUERY', state.workspace);
      state.workspace.searchPage.searchQuery = action.payload.searchQuery;
      return {
        ...state,
        workspace: state.workspace,
      };
    }
    case 'INITIALIZE_PAGINATION': {
      console.log('INITIALIZE_PAGINATION', action.payload);
      state.workspace.mainPage.pagination.currentPage = action.payload.currentPage;
      state.workspace.mainPage.pagination.pagesCount = action.payload.pagesCount;

      return {
        ...state,
        workspace: state.workspace,
      };
    }
    case 'ADD_ITEM': {
      console.log('ADD_TODO_ITEM', action.payload, state);
      state.cache.cards = [...state.cache.cards, action.payload.card];
      return {
        ...state,
        cache: state.cache,
      };
    }
    case 'REMOVE_ITEM': {
      console.log('REMOVE_TODO_ITEM', action.payload);
      const filtered = state.cache.cards.filter(({ id }) => id !== action.payload.id);
      state.cache.cards = filtered;
      return {
        ...state,
        cache: state.cache,
      };
    }

    default:
      throw new Error('Error');
  }
};

export default stateReducer;

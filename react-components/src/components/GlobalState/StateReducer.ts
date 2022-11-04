import { TAction } from './Actions';
import { initialState, IState } from './StateProvider';

const stateReducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA': {
      return {
        ...state,
        cache: { ...state.cache, cards: action.payload.cards },
      };
    }
    case 'SAVE_SEARCH_QUERY': {
      state.workspace.searchPage.searchQuery = action.payload.searchQuery;
      return {
        ...state,
        workspace: state.workspace,
      };
    }
    case 'PAGINATION': {
      state.workspace.mainPage.pagination.currentPage = action.payload.currentPage;
      state.workspace.mainPage.pagination.pagesCount = action.payload.pagesCount;

      return {
        ...state,
        workspace: state.workspace,
      };
    }
    case 'PAGINATION_SEARCH': {
      state.workspace.searchPage.pagination.currentPage = action.payload.currentPage;
      state.workspace.searchPage.pagination.pagesCount = action.payload.pagesCount;

      return {
        ...state,
        workspace: state.workspace,
      };
    }
    case 'LIMIT_PER_PAGE': {
      state.workspace.limit = action.payload.limit;
      return {
        ...state,
        workspace: state.workspace,
      };
    }
    case 'SORT_PAGE': {
      state.workspace.mainPage.sortBy = action.payload.sortBy;
      return {
        ...state,
        workspace: state.workspace,
      };
    }
    case 'ADD_FORM_CARD': {
      state.workspace.formPage.cards = [...state.workspace.formPage.cards, action.payload.card];
      return {
        ...state,
        cache: state.cache,
      };
    }
    case 'ADD_ITEM': {
      state.cache.cards = [...state.cache.cards, action.payload.card];
      return {
        ...state,
        cache: state.cache,
      };
    }
    case 'REMOVE_ITEM': {
      const filtered = state.cache.cards.filter(({ id }) => id !== action.payload.id);
      state.cache.cards = filtered;
      return {
        ...state,
        cache: state.cache,
      };
    }

    default:
      return initialState;
  }
};

export default stateReducer;

import { ICard } from 'components/Card/Card';
import { IFormCard } from 'components/Form/FormCard/FormCard';

export type TAction =
  | ReturnType<typeof removeItemAction>
  | ReturnType<typeof addItemAction>
  | ReturnType<typeof fetchDataAction>
  | ReturnType<typeof saveSearchQueryAction>
  | ReturnType<typeof paginationAction>
  | ReturnType<typeof paginationSearchAction>
  | ReturnType<typeof limitPerPageAction>
  | ReturnType<typeof sortPageAction>
  | ReturnType<typeof addFormCardAction>;

export const fetchDataAction = (cards: Array<ICard>) => ({
  type: 'FETCH_DATA' as const,
  payload: { cards },
});

export const addItemAction = (card: ICard) => ({
  type: 'ADD_ITEM' as const,
  payload: { card },
});

export const saveSearchQueryAction = (searchQuery: string) => ({
  type: 'SAVE_SEARCH_QUERY' as const,
  payload: { searchQuery },
});

export const paginationAction = (currentPage: number, pagesCount: number) => ({
  type: 'PAGINATION' as const,
  payload: { currentPage, pagesCount },
});

export const paginationSearchAction = (currentPage: number, pagesCount: number) => ({
  type: 'PAGINATION_SEARCH' as const,
  payload: { currentPage, pagesCount },
});

export const limitPerPageAction = (limit: number) => ({
  type: 'LIMIT_PER_PAGE' as const,
  payload: { limit },
});

export const addFormCardAction = (card: IFormCard) => ({
  type: 'ADD_FORM_CARD' as const,
  payload: { card },
});

export const sortPageAction = (sortBy: string) => ({
  type: 'SORT_PAGE' as const,
  payload: { sortBy },
});

export const removeItemAction = (id: number) => ({ type: 'REMOVE_ITEM' as const, payload: { id } });

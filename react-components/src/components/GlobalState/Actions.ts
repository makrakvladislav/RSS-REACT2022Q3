import { ICard } from 'components/Card/Card';

export type TAction =
  | ReturnType<typeof removeItemAction>
  | ReturnType<typeof addItemAction>
  | ReturnType<typeof fetchDataAction>
  | ReturnType<typeof saveSearchQueryAction>
  | ReturnType<typeof initializePaginationAction>;

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

export const initializePaginationAction = (currentPage: number, pagesCount: number) => ({
  type: 'INITIALIZE_PAGINATION' as const,
  payload: { currentPage, pagesCount },
});

export const removeItemAction = (id: number) => ({ type: 'REMOVE_ITEM' as const, payload: { id } });

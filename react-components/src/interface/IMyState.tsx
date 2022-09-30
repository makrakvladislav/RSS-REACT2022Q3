export default interface IMyState {
  items: {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
  }[];
  isFetching?: boolean;
}

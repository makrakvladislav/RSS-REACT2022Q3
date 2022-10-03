export default interface IResponse {
  items: {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
  }[];
  totalCount: string;
}

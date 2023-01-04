export interface ArticlesModel {
  id: string;
  title: string;
  body: string;
}
export interface CommentsModel {
  id: string;
  postId: string;
  email: string;
  body: string;
}

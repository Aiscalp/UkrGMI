import { useApi } from "@/api/useApi";
import { ArticlesModel, CommentsModel } from "@/models/ArticlesModel";

const api = useApi();

async function getArticles(): Promise<Array<ArticlesModel>> {
  const response = await api.get<Array<ArticlesModel>>("posts");
  return response.data;
}
async function getComments(): Promise<Array<CommentsModel>> {
  const response = await api.get<Array<CommentsModel>>("comments");
  return response.data;
}

export function useArticlesService() {
  return {
    getArticles,
    getComments,
  };
}

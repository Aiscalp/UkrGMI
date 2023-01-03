import { useApi } from "@/api/useApi";
import { ArticlesModel } from "@/models/ArticlesModel";

const api = useApi();

async function getArticles(): Promise<Array<ArticlesModel>> {
  const response = await api.get<Array<ArticlesModel>>("posts");
  return response.data;
}

export function useArticlesService() {
  return {
    getArticles,
  };
}

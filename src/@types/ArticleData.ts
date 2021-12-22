import IMap from "./map";

interface ArticleData<T> {
  title: string;
  date: string;
  data: T[];
}

export default ArticleData;

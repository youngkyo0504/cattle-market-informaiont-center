import styled from "styled-components/macro";
import { color, layout, space } from "styled-system";
import LineArticleHead from "./LineArticleHead";
import LineArticleList from "./LineArticleList";
import ArticleData from "../../@types/ArticleData";

const LineArticleContainer = styled.div`
  ${space}
  ${layout}
  ${color};
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  box-shadow: 2px 2px 4px #dee1e7;
  margin-bottom: 10px;
`;

interface ILineArticle {
  data: ArticleData<any>;
}

const LineArticle = ({ data }: ILineArticle) => {
  return (
    <LineArticleContainer>
      <LineArticleHead data={data} />
      <LineArticleList data={data} />
    </LineArticleContainer>
  );
};

export default LineArticle;

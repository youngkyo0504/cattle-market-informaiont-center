import styled from "styled-components/macro";
import ArticleData from "../../@types/ArticleData";

const LineArticleHeadContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #d4d6dc;
`;
const LineArticleHeadTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 11px 15px;
`;

const LineArticleDate = styled.div`
  position: absolute;
  right: 15px;
  top: 12px;

  span {
    color: #999;
    padding-left: 4px;
    font-size: 12px;
  }
`;

interface LineArticleHead {
  data: ArticleData<any>;
}
const LineArticleHead = ({ data }: LineArticleHead) => {
  return (
    <LineArticleHeadContainer>
      <LineArticleHeadTitle> {data.title}</LineArticleHeadTitle>
      <LineArticleDate>
        <span>{data.date}</span> <span>기준</span>
      </LineArticleDate>
    </LineArticleHeadContainer>
  );
};

export default LineArticleHead;

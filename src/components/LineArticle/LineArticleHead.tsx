import styled from "styled-components/macro";
import ArticleData from "../../@types/ArticleData";
import Pagination from "react-js-pagination";

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
  top: 10px;

  span {
    color: #999;
    padding-left: 4px;
    font-size: 12px;
  }
`;

interface LineArticleHeadProps {
  data: ArticleData<any>;
  page: number;
  handlePageChange: (page: number) => void;
  totalPageNumber: number;
}
const LineArticleHead = ({
  data,
  page,
  handlePageChange,
  totalPageNumber,
}: LineArticleHeadProps) => {
  return (
    <LineArticleHeadContainer>
      <LineArticleHeadTitle> {data.title}</LineArticleHeadTitle>
      <LineArticleDate>
        <Pagination
          activePage={page}
          itemsCountPerPage={1}
          totalItemsCount={totalPageNumber}
          pageRangeDisplayed={-1}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
          hideFirstLastPages={true}
        />
        {/*<span>{data.date}</span> <span>기준</span>*/}
      </LineArticleDate>
    </LineArticleHeadContainer>
  );
};

// totalItemsCount/itemsCountPerPage = 총 페이지 수;

export default LineArticleHead;

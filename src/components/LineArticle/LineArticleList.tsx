import styled from "styled-components/macro";
import { color, ColorProps, layout, space } from "styled-system";
import ArticleData from "../../@types/ArticleData";
import { CowInfo } from "../../@types";

const StyledLineArticleList = styled.ul`
  padding: 25px 15px;
`;

const LineArticleItemOrder = styled.div<ColorProps>`
  flex-basis: 20px;
  margin-right: 10px;
  text-align: center;
  ${color}
`;

const LineArticleItem = styled.div`
  display: flex;
  margin-top: 25px;
  &:nth-child(1) {
    margin-top: 0px;
  }
`;

const LineArticleItemTitle = styled.div`
  flex: 1;
`;
const LineArticleItemChange = styled.div`
  flex-basis: 80px;
  margin-left: 10px;
  text-align: right;
`;
const Price = styled.span`
  color: #d60000 !important ;
`;

interface ILineArticleList {
  data: ArticleData<CowInfo>;
}
const LineArticleList = ({ data }: ILineArticleList) => {
  return (
    <StyledLineArticleList>
      <li>
        {data.data.map((item, index) => (
          <LineArticleItem>
            <LineArticleItemOrder color={index < 3 ? "chartRed" : "black"}>
              <span>{index + 1}</span>
            </LineArticleItemOrder>
            <LineArticleItemTitle>
              <span>{item.kpn}</span>
            </LineArticleItemTitle>
            <LineArticleItemChange>
              <Price>{item.price + "원"}</Price>
            </LineArticleItemChange>
          </LineArticleItem>
        ))}
      </li>
    </StyledLineArticleList>
  );
};

export default LineArticleList;

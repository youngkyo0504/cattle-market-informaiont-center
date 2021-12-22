// components/Layout/Header/Header.tsx
import Header from "./HeaderPresenter";
import { links } from "../../datas/index";
export type link = {
  name: string;
  link: string;
};
const HeaderContainer = () => {
  return <Header links={links} />;
};

export default HeaderContainer;

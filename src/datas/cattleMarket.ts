import { ICattleMarketInfo } from "../@types";
import IMap from "../@types/map";

//우시장마다 id를 저장하고 id마다 각 정보들을 적어서 넣는다.
// 계속 늘려나가면 됨
const cattleMarket: IMap<ICattleMarketInfo> = {
  gch: {
    title: "거창",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    phone: "010-3182-4552",
  },
  woolsan: {
    title: "울산",
    position: {
      latitude: 37.5989354,
      longitude: 127.0231516,
    },
    phone: "02-929-4550",
  },
};
export default cattleMarket;

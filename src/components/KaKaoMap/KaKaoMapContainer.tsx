import React, { useCallback, useEffect, useState } from "react";
import Map from "./KaKaoMap";
import KaKaoMap from "../../service/kakao-map";
import { cattleMarket } from "../../datas";
import { SingleValue } from "react-select";
// 스크립트로 kakao maps api를 심어서 가져오면 window전역 객체에 들어가게 된다. 그리고 그걸 사용하려면 window에서 kakao객체를 뽑아서 사용하면 된다.

const KaKaoMapContainer = () => {
  const [cattleMarketName, setCattleMarket] = useState<string>("gch");
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b730b97a99b3e4393cfafbd5dd7ffeb8&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao }: any = window;
      kakao.maps.load(() => {
        const container = document.getElementById("myMap");
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 12,
        };

        const map = new kakao.maps.Map(container, options);
        const cattleMarketMap = new KaKaoMap(
          map,
          kakao,
          setCattleMarket,
          cattleMarket
        );
        setMap(cattleMarketMap);
      });
    };
  }, []);

  const changeMarket = useCallback(
    (value: SingleValue<{ value: string; label: string }>) => {
      if (value) {
        const marketName = value.value;
        setCattleMarket(marketName);
        const position = map.getLatlLon(cattleMarket[marketName].position);
        map.panTo(position);
      }
    },
    [map, setCattleMarket]
  );

  return (
    <>
      <div>
        <p>우시장 이름: {cattleMarket[cattleMarketName].title}</p>
        <p>우시장 전화 번호 {cattleMarket[cattleMarketName].phone}</p>
      </div>
      <Map changeMarket={changeMarket} cattleMarketName={cattleMarketName} />
    </>
  );
};

export default KaKaoMapContainer;

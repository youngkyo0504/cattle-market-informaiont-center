import IMap from "../@types/map";
import ICattleMarketInfo from "../@types/CattleMarketInfo";

interface IPosition {
  latitude: number;
  longitude: number;
}

class Map {
  private imageSrc: string;
  private imageSize: any;

  constructor(
    public map: any,
    private kakao: any,
    public setMarketName: React.Dispatch<React.SetStateAction<string>>,
    public markers?: IMap<ICattleMarketInfo>
  ) {
    this.kakao = kakao;
    this.imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    this.imageSize = new this.kakao.maps.Size(24, 35);
    this.addControl();
    this.assignMarkers();
  }

  addControl() {
    const mapTypeControl = new this.kakao.maps.MapTypeControl();
    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    this.map.addControl(
      mapTypeControl,
      this.kakao.maps.ControlPosition.TOPRIGHT
    );
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new this.kakao.maps.ZoomControl();
    this.map.addControl(zoomControl, this.kakao.maps.ControlPosition.RIGHT);
  }

  assignMarkers() {
    for (const marketId in this.markers) {
      const markerImage = this.getMarkerImage();
      const moveLatLon = this.getLatlLon(this.markers[marketId]["position"]);
      const marketName = this.markers[marketId]["title"];
      const markerInfo = { markerImage, moveLatLon, marketId, marketName };
      const marker = this.getMarker(markerInfo);
      const customOverlay = this.makeCustomOverlay(markerInfo);
      console.log(customOverlay);
      this.addClickEvent(marketId, marker, customOverlay);
    }
  }

  addClickEvent(marketId: string, marker: any, customOverlay: any) {
    const title = marker.getTitle();
    const position = marker.getPosition();
    this.kakao.maps.event.addListener(marker, "click", () => {
      this.setMarketName(title);
      this.panTo(position);
    });
  }

  makeCustomOverlay(markerInfo: any) {
    // app.css에 customoverlay에 있다.
    const { marketName, moveLatLon, marketId } = markerInfo;
    const content = document.createElement("div");
    content.classList.add("customoverlay");
    content.id = marketName;
    content.innerHTML = `  <div > 
            <span class="title">${marketName} 우시장</span> 
          </div> `;

    const customOverlay = new this.kakao.maps.CustomOverlay({
      map: this.map,
      position: moveLatLon,
      content: content,
      yAnchor: 1,
    });
    const hello = () => {
      console.log("hello");
      this.setMarketName(marketId);
      this.panTo(moveLatLon);
    };

    this.addEventHandle(content, "click", hello);
    //Todo
    // content에 이벤트 넣기 , 아래의 addEventHadle(target, type, callback)
    // Event type 알아보기 , call back 타입 , target 타입
    //  this.addEventHandle(content, "mousedown", hello);
    customOverlay.setZIndex(-1);
    return customOverlay;
  }
  addEventHandle(
    target: HTMLElement,
    type: keyof HTMLElementEventMap,
    callback: () => void
  ) {
    if (target.addEventListener) {
      target.addEventListener(type, callback);
    }
  }

  getMarker(markerInfo: any) {
    const { markerImage, moveLatLon, marketId } = markerInfo;
    const marker = new this.kakao.maps.Marker({
      map: this.map, // 마커를 표시할 지도
      position: moveLatLon, // 마커를 표시할 위치
      title: marketId, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });

    return marker;
  }

  getMarkerImage() {
    const markerImage = new this.kakao.maps.MarkerImage(
      this.imageSrc,
      this.imageSize
    );
    return markerImage;
  }

  setCenter(moveLatLon: any) {
    // 이동할 위도 경도 위치를 생성합니다
    console.log(moveLatLon);
    // 지도 중심을 이동 시킵니다
    this.map.setLevel(4);
    this.map.setCenter(moveLatLon);
  }

  getLatlLon(position: IPosition) {
    const moveLatLon = new this.kakao.maps.LatLng(
      position.latitude,
      position.longitude
    );
    return moveLatLon;
  }

  panTo(moveLatLon: any) {
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    this.map.setLevel(4);
    this.map.panTo(moveLatLon);
  }
}

export default Map;

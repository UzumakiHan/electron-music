export interface IBannerList{
    imageUrl: string;
    targetId: number;
    adid: any;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url: string;
    exclusive: false;
    monitorImpress: string;
    monitorClick: string;
    monitorType: string;
    monitorImpressList: string;
    monitorClickList: string;
    monitorBlackList: string;
    extMonitor: string;
    extMonitorInfo: string;
    adSource: string;
    adLocation: string;
    adDispatchJson: string;
    encodeId: number;
    program: string;
    event: string;
    video: string;
    song: string;
    scm: string;
    bannerBizType: string
}
export interface IBanner {
    code: number;
    banners: Array<IBannerList>
}
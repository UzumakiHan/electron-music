export interface IBannerList{
    imageUrl: string;
    targetId: number,
    adid: null,
    targetType: number,
    titleColor: string,
    typeTitle: string,
    url: string,
    exclusive: false,
    monitorImpress: string,
    monitorClick: string,
    monitorType: string,
    monitorImpressList: string,
    monitorClickList: string,
    monitorBlackList: string,
    extMonitor: string,
    extMonitorInfo: string,
    adSource: string,
    adLocation: string,
    adDispatchJson: string,
    encodeId: number,
    program: string,
    event: string,
    video: string,
    song: string,
    scm: string,
    bannerBizType: string
}
export interface ITags{
    playlistTag: {
        id: number,
        name: string,
        category: number,
        usedCount: number,
        type: number,
        position: number,
        createTime: number,
        highQuality: number,
        highQualityPos: number,
        officialPos: number
    },
    activity: false,
    usedCount: number,
    hot: true,
    createTime: number,
    position: number,
    category: number,
    name: string,
    id: number,
    type: number
}
export interface IPlaylist{
    
}
export interface IBanner {
    code: number;
    banners: Array<IBannerList>
}
export interface IHotList {
    code: number;
    tags: Array<ITags>
}


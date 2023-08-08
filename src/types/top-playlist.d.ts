export interface ISinger {
    accountStatus: number;
    anchor: boolean;
    authStatus: number;
    authenticationTypes: number;
    authority: number;
    avatarDetail: {
        userType: number;
        identityLevel: number;
        identityIconUrl: string;
    };
    avatarImgId: number;
    avatarImgIdStr: string;
    avatarImgId_str: string;
    avatarUrl: string;
    backgroundImgId: number;
    backgroundImgIdStr: string;
    backgroundUrl: string;
    birthday: number;
    city: number;
    defaultAvatar: boolean;
    description: string;
    detailDescription: string;
    djStatus: number;
    expertTags: string;
    experts: any;
    followed: boolean;
    gender: number;
    mutual: boolean;
    nickname: string;
    province: number;
    remarkName: string;
    signature: string;
    userId: number;
    userType: number;
    vipType: number
}
export interface ITopPlatList {
    adType: number;
    alg: string;
    anonimous: boolean;
    cloudTrackCount: number;
    commentCount: number;
    commentThreadId: string;
    coverImgId: number;
    coverImgId_str: string;
    coverImgUrl: string;
    coverStatus: number;
    coverText: string;
    createTime: number;
    creator: ISinger;
    description: string;
    highQuality: number;
    iconImgUrl: string;
    id: number;
    name: string;
    newImported: boolean;
    ordered: boolean;
    playCount: number;
    privacy: number;
    recommendInfo: string;
    recommendText: string;
    relateResId: number;
    relateResType: number;
    shareCount: number;
    socialPlaylistCover: string;
    specialType: number;
    status: number;
    subscribed: boolean;
    subscribedCount: number;
    subscribers: Array<ISinger>;
    tags: Array<string>;
    totalDuration: number;
    trackCount: number
    trackNumberUpdateTime: number;
    trackUpdateTime: number;
    tracks: Array<{
        first:string;
        second:string;
    }>;
    updateTime: number;
    userId: number;
}
export interface ITopPlatListAjax {
    cat:string;
    code:number;
    more:boolean;
    playlists:Array<ITopPlatList>
}
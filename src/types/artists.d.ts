export interface IArtists {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: 65;
    alias: Array<string>;
    trans: string;
    musicSize: number;
    topicPerson: number;
    showPrivateMsg: null;
    isSubed: null;
    accountId: null;
    picId_str: string;
    img1v1Id_str: string;
    transNames: null;
    followed: false;
    mvSize: null;
    publishTime: null;
    identifyTag: null;
    alg: null;
    fansCount: number
}
export interface IArtistsAjax {
    code: number;
    more: boolean;
    artists: Array<IArtists>
}
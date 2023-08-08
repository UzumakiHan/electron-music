export interface IHot {
    activity: boolean;
    usedCount:number;
    category: number;
    createTime: number
    hot: boolean;
    id: number;
    name: string;
    position:number;
    type:number;
    playlistTag: {
        id: number;
        name: string;
        category: number;
        usedCount: number;
        type: number;
        position: number;
        createTime: number;
        highQuality: number;
        highQualityPos: number;
        officialPos: number
    }
}
export interface IHotAjax{
    code:number;
    tags:Array<IHot>
}
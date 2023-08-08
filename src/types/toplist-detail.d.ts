import { ITopPlatList } from "./top-playlist";
export interface IArtistToplist{
    artists:Array<{
        first:string;
        second:string;
        third:number
    }>;
    coverUrl:string;
    name:string;
    position:string;
    upateFrequency:string;
    updateFrequency:string;
}
export interface IList extends IArtistToplist{
    ToplistType:string;
    updateFrequency:string
}
export interface IRewardToplist{
    coverUrl:string;
    name:string;
    position:number;
    songs:Array<{
        
    }>
}
export interface ITopListDetail{

}
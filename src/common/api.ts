import {get,post} from './ajax'
const BASE_URL = ''
export const getBanner = ()=> get(BASE_URL+'/banner')

export const getHotList=()=>get(BASE_URL+'/playlist/hot')

// 歌单列表

export const ajaxPlayList = ({ order = 'hot', cat = '', limit = 50, offset = 0 })=>get(BASE_URL+`/top/playlist?limit=${limit}&order=${order}&cat=${cat}&offset=${offset}`)
//新碟上架
export const ajaxTopAlbum = ({ limit = 20, offset = 0, area = 'all', type = 'new', year = '', month = '' }) => get(BASE_URL+`/top/album?limit=${limit}&offset=${offset}&area=${area}&type=${type}&year=${year}&month=${month}`, {})

//排行榜
export const ajaxToplist=()=>get(BASE_URL+'/toplist/detail')
//排行榜歌单列表
export const ajaxTopRankList=({ id = '', s = 8 })=>get(BASE_URL+`/playlist/detail?id=${id}&s=${s}`)



// 热门电台
export const ajaxGetHotDj = ({ limit = 30, offset = 0 }) =>get(BASE_URL+`/dj/hot?limit=${limit}&offset=${offset}`)

// 热门歌手
export const ajaxTopArtists = ({ limit = 30, offset = 0 }) => get(BASE_URL+`/top/artists?limit=${limit}&offset=${offset}`) 
// 所有榜单内容摘要
export const ajaxTopListDetail = () => get(BASE_URL+'/toplist/detail')

// 歌单详情
export const ajaxListDetail = ({ id = '', s = 8 }) =>get(BASE_URL+`/playlist/detail?id=${id}&s=${s}`)

// 歌词
export const ajaxLyrics = ({ id = '' }) => get(BASE_URL+`/lyric?id=${id}`)

// 歌单分类
export const ajaxCatlist = () => get(BASE_URL+'/playlist/catlist', {})

// 歌单详情
export const ajaxPlaylistdetail = ({ id = '', s = 8 }) => get(BASE_URL+`/playlist/detail?id=${id}&s=${s}`) 

/* ********* 歌曲 ********* */
// 歌曲详情 多个id , 隔开
export const ajaxSongDetail = ({ ids = '', timestamp = 0 }) => post(BASE_URL+`/song/detail?timestamp=${timestamp}`, { ids: ids }) 

// 获取相似音乐
export const ajaxSimiSong = ({ id = '' }) =>get(BASE_URL+`/simi/song?id=${id}`)

// 包含这首歌的歌单
export const ajaxSimiPlayList = ({ id = '' }) => get(BASE_URL+`/simi/playlist?id=${id}`, {})

// 歌单收藏用户
export const ajaxPlaylistsCollect = ({ id = '', limit = 20, offset = 0 }) => get(BASE_URL+`/playlist/subscribers?id=${id}&limit=${limit}&offset=${offset}`) 

// 相关歌单推荐
export const ajaxPlaylistRelated = ({ id = '' }) =>get(BASE_URL+`/related/playlist?id=${id}`)


// 歌单评论
export const ajaxPlaylistComment = ({ id = '', limit = 20, offset = 0, before = 0 }) => get(BASE_URL+`/comment/playlist?id=${id}&limit=${limit}&offset=${offset}&before=${before}`)

// 收藏、取消歌单 1：收藏 2取消
export const ajaxSubPlayList = ({ t = 1, id = '' }) => get(BASE_URL+`/playlist/subscribe?t=${t}&id=${id}`)

/* ********* MV ********* */
// 获取 mv
export const ajaxMv = ({ area = '', type = '', order = '', limit = 50, offset = 0 }) => get(BASE_URL+`/mv/all?area=${area}&type=${type}&order=${order}&limit=${limit}&offset=${offset}`)

// 获取 mv详情
export const ajaxMvDetail = ({ id = '' }) => get(BASE_URL+`/mv/detail?mvid=${id}`)

// 获取 地址
export const ajaxMvUrl = ({ id = '', r = 1080 }) =>get(BASE_URL+`/mv/url?id=${id}&r=${r}`) 
// 获取mv评论
export const ajaxCommentMv = ({ id = '', limit = 20, offset = 0, before = 0, timestamp = 0 }) => get(BASE_URL+`/comment/mv?id=${id}&limit=${limit}&offset=${offset}&before=${before}&timestamp=${timestamp}`) 
// 相似mv
export const ajaxSimiMv = ({ id = '' }) => get(BASE_URL+`/simi/mv?mvid=${id}`)

// 获取歌手列表
/*
    * 给评论点赞
    * type: -1:全部; 1:男歌手; 2:女歌手; 3:乐队
    * area: -1:全部; 7华语; 96欧美; 8:日本; 16韩国; 0:其他
    * initial: 按首字母索引查找参数, 热门传-1, #传0
    * limit: 30
    * offset: 0
*/
export const ajaxArtistList = ({ type = -1, area = -1, initial = '', limit = 50, offset = 0 }) => get(BASE_URL+`/artist/list?type=${type}&area=${area}&initial=${initial}&limit=${limit}&offset=${offset}`)

// 歌手热门歌曲
export const ajaxArtists = ({ id = '' }) => get(BASE_URL+`/artists?id=${id}`)
// 获取歌手专辑
export const ajaxArtistAlbum = ({ id = '', limit = 50, offset = 0 }) =>get(BASE_URL+`/artist/album?id=${id}&limit=${limit}&offset=${offset}`, {})
/* ********* 专辑 ********* */
// 获取专辑内容
export const ajaxAlbum = ({ id = '' }) =>get(BASE_URL+`/album?id=${id}`, {})
export const ajaxAlbumDynamic = ({ id = '' }) => get(BASE_URL+`/album/detail/dynamic?id=${id}`, {})
export const ajaxAlbumSub = ({ id = '', t = 1 }) => get(BASE_URL+`/album/sub?id=${id}&t=${t}`, {}) 
// 专辑评论
export const ajaxAlbumComment = ({ id = '', limit = 20, offset = 0, before = 0, timestamp = 0 }) => get(BASE_URL+`/comment/album?id=${id}&limit=${limit}&offset=${offset}&before=${before}&timestamp=${timestamp}`, {})
// 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
export const ajaxCloudsearch = ({ keywords = '', limit = 30, offset = 0, type = '1' }) => get(`/cloudsearch?keywords=${keywords}&limit=${limit}&offset=${offset}&type=${type}`) 
// 热门搜索
export const ajaxSerachHot = () => get('/search/hot')
// 热门搜索详细
export const ajaxSerachHotDetail = () => get('/search/hot/detail')
export const ajaxSerachSuggest = ({ keywords = '' }) =>get(`/search/suggest?keywords=${keywords}`)
export const ajaxSerachMatch = ({ keywords = '' }) => get(`/search/multimatch?keywords=${keywords}`) 
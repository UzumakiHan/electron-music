//推荐歌单
import {onMounted,ref} from 'vue'
import {getHotList,ajaxPlayList} from '@/common/api'
import {IHotAjax} from '@/types/dj-hot'
import{ITopPlatListAjax,ITopPlatList} from '@/types/top-playlist'
export const useHotRecommondAction=()=>{
   
    const playlistTags = ref(['为你推荐'])
    const playlistList = ref<Array<ITopPlatList>>([])
    const playlistIndex = ref(0)
    const playlistCount = ref(6)
    const playlistLoading =ref(true)
    const playlistParams = ref({
        limit:6,
        offset:0,
        order:'hot',
        cat:''
    })
   
    // 获取热门推荐歌单标签
    const getHotTags = async() => {
       const hotListRes = await getHotList() as IHotAjax
 

        if (hotListRes.code === 200) {
           const hotTags = hotListRes.tags.splice(0,5)
           hotTags.forEach(tags=>{
            playlistTags.value.push(tags.name)
           })
         
        }
    }
       // 分类歌单列表
    const getPlayList = async() => {
       const playlistRes = await ajaxPlayList(playlistParams.value) as ITopPlatListAjax
        if (playlistRes.code === 200) {
            playlistList.value = playlistRes.playlists;
            playlistLoading.value = false;
        }
    }
     // 切换歌单类别
     const choosePlayListType = (index:number) => {
        playlistIndex.value = index
        playlistParams.value.cat = index!==0?playlistTags.value[index] :''
        playlistLoading.value = true;
        getPlayList()
    }
    onMounted(() => {
        getHotTags();
        getPlayList();
    });
    return{
        playlistList,
        playlistTags,
        playlistIndex,
        playlistCount,
        playlistLoading,
        getHotTags,
        choosePlayListType

    }

}
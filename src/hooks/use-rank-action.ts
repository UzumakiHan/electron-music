import {ref,onMounted} from 'vue'
import {ajaxToplist,ajaxTopRankList} from '@/common/api'
import {handleFormatSongs} from '@/common/util'

export const useRankAction=()=>{
    const topList = ref([]);
    const songList = ref({}) as any;
    const loading = ref(true);
    const rankNum = ref(6)
    const handleGetTopList =async()=>{
        const topRes = await ajaxToplist() as any
            if(topRes.code ===200){
                topList.value = topRes.list.splice(0,4)
                topList.value.forEach(async(topItem:any)=>{
                    const rankRes = await ajaxTopRankList({id:topItem.id}) as any
                    songList.value[topItem.id] = handleFormatSongs(rankRes.playlist.tracks.splice(0, rankNum.value), rankRes.privileges.splice(0, rankNum.value))
                })
                loading.value = false
               
            }
        
    }
    onMounted(()=>{
        handleGetTopList();
    })
    return{
        rankNum,
        loading,
        songList,
        topList
    }
}
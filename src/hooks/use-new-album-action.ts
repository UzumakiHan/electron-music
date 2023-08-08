import {  ref, onMounted } from 'vue';
import constant from '@/common/constant';
import {ajaxTopAlbum} from '@/common/api'

export const useNewAlbumAction = ()=>{
    const albumArea = constant.ALBUM_AREA
    const albumList = ref([]);
    const albumIndex = ref(0);
    const albumParams = ref({
        limit:12,
        area:'all',
        
    })
    const albumCount =ref(12);
    const albumLoading = ref(true)

    const getAlbumList=async()=>{
        const albumRes = await ajaxTopAlbum(albumParams.value) as any
        if(albumRes.code === 200){
            if(albumParams.value.area === 'all'){
                albumList.value = albumRes.weekData.splice(0,albumCount.value)
            }else{
                albumList.value = albumRes.monthData.splice(0,albumCount.value)
            }
           
            albumLoading.value = false
        }
       
    }
    const chooseAlbumType=(index:number)=>{
        albumIndex.value =index;
        albumParams.value.area = index!==0?albumArea[index].code:'all';
        albumLoading.value = true;
        getAlbumList()
    }
    onMounted(()=>{
        getAlbumList()
    })
    return{
        albumList,
        albumLoading,
        albumIndex,
        albumArea,
        albumCount,
        chooseAlbumType
    }
}
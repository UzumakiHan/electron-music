import {ref,onMounted} from 'vue'
import {ajaxMv} from '@/common/api';
import constant from '@/common/constant'
export const useMvAction = ()=>{
    const mvList = ref([]);
    const mvArea = constant.MV_AREA;
    const mvIndex= ref(0);
    const mvParams = ref({
        limit:10,
        area:''
    })
    const mvCount = ref(10);
    const mvLoading= ref(true)
    const handleGetMvList = async()=>{
        const mvRes = await ajaxMv(mvParams.value) as any
        if(mvRes.code === 200){
            mvList.value = mvRes.data;
            mvLoading.value = false
        }
    }
    // 切换MV类别
    const chooseMvType = (index:number)=>{
        mvIndex.value = index;
        mvParams.value.area = index !==0 ? mvArea[index] :'';
        mvLoading.value =true;
        handleGetMvList()

    }
    onMounted(()=>{
        handleGetMvList()
    })
    return{
        mvList,
        mvArea,
        mvLoading,
        mvCount,
        mvIndex,
        chooseMvType
    }
}
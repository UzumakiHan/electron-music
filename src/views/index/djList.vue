<template>
    <el-skeleton
        :loading="djLoading"
        animated
        :throttle="500"
        :count="djCount"
        >
        <template #template>
            <div class="ske-item">
                <el-skeleton-item class="ske-img" variant="image" />
                <div class="ske-info">
                    <el-skeleton-item variant="h3" class="ske-name" />
                    <el-skeleton-item variant="h3" class="ske-rcmdtext" style="width:50%" />
                    <el-skeleton-item variant="text" class="ske-count" />
                </div>
            </div>
        </template>
        <template #default>
            <div class='dj'>
                <router-link :to="{ path: '/dj', query: { id: item.id }}" class="item" :key="item.id" v-for="item in djList">
                    <div class="faceImg">
                        <el-image :src="item.picUrl + '?param=120y120'">
                            <div slot="placeholder" class="image-slot">
                                <i class="iconfont icon-placeholder"></i>
                            </div>
                        </el-image>
                    </div>
                    <div class="info">
                        <div class="dj-name" v-if="item.name"><i class="iconfont icon-dj"></i>{{item.name}}</div>
                        <div class="dj-rcmdtext" v-if="item.rcmdtext">{{item.rcmdtext}}</div>
                        <div class="dj-count"><span>共{{handleFormartNum(item.programCount)}}期</span> <span>订阅{{handleFormartNum(item.subCount)}}次</span></div>
                    </div>
                </router-link>
            </div>
        </template>
    </el-skeleton>
</template>
<script setup>
import {ref,onMounted} from 'vue'
import {ajaxGetHotDj} from '@/common/api'
import {handleFormartNum} from  '@/common/util'

const djList = ref([]);
const djParams = ref({
    limit:6
})
const djCount = ref(6);
const djLoading = ref(true);
const handleGetHotDj = async()=>{
    const djRes = await ajaxGetHotDj(djParams.value);
    if(djRes.code === 200){
        djList.value = djRes.djRadios;;
        djLoading.value = false
    }

}
onMounted(()=>{
    handleGetHotDj()
})
</script>
<style lang="less" scoped>
.dj {
    display: block;
    flex-wrap: wrap;
    font-size: 0;
    margin-right: -20px;

    .item {
        display: inline-flex;
        width: 50%;
        margin-bottom: 20px;
    }

    .faceImg {
        width: 100px;
        height: 100px;
        border-radius: 4px;
        overflow: hidden;
    }

    .info {
        flex: 1;
        padding: 5px 0;
        margin: 0 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .dj-name, .icon-dj {
        padding-right: 10px;
        font-size: 18px;
        font-weight: bold;
        color: var(--color-text-main);
    }

    .dj-rcmdtext {
        font-size: 14px;
        color: var(--color-text);
    }

    .dj-count {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #999;
    }
}

.el-skeleton {
    width: auto;
    display: block;
    flex-wrap: wrap;
    font-size: 0;

    .ske-item {
        display: inline-flex;
        width: 50%;
        margin-bottom: 20px;
    }

    .ske-img {
        width: 120px;
        height: 120px;
        border-radius: 4px;
        overflow: hidden;
    }

    .ske-info {
        flex: 1;
        padding: 10px 0;
        margin: 0 15px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

}
</style>
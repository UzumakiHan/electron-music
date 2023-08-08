<template>
    <el-skeleton
        :loading="artistLoading"
        animated
        :throttle="500"
        :count="artistCount"
        >
        <template #template>
            <el-skeleton-item class="ske-img" variant="image" />
        </template>
        
        <template #default>
          
            <el-carousel class='artist' height="340px" :interval="8000" arrow="never" indicator-position="outside">
                <el-carousel-item class="box" :key="index" v-for="(list, index) in artistList">
                    <router-link :to="{ path: '/artist', query: { id: item.id }}" :key="item.id" v-for="item in list" class="item">
                    
                        <div class="faceImg">
                            <el-image :src="item.picUrl + '?param=100y100'">
                                <div slot="placeholder" class="image-slot">
                                    <i class="iconfont icon-placeholder"></i>
                                </div>
                            </el-image>
                        </div>
                        <div class="info">
                            <div class="artist-name" v-if="item.name">{{item.name}}</div>
                        </div>
                    </router-link>
                </el-carousel-item>
            </el-carousel>
        </template>
    </el-skeleton>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue'
import {ajaxTopArtists} from '@/common/api'
import {IArtists,IArtistsAjax} from '@/types/artists'
import _ from 'lodash';

const artistList = ref<Array<Array<IArtists>>>([])
const artistCount = ref(12);
const artistLoading = ref(true);
const artistParams = ref({
    limit:36
})

const handleGetArtistList=async()=>{
    const artistRes = await ajaxTopArtists(artistParams.value) as IArtistsAjax;
   
    if(artistRes.code === 200){
       
        artistList.value = _.chunk(artistRes.artists, artistCount.value);
        artistLoading.value = false
       
    }
}
onMounted(()=>{
    handleGetArtistList();
})
</script>
<style lang="less" scoped>
.artist {
    display: block;
    height: 360px;
    font-size: 0;

    .box {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
    }

    .item {
        // width: 100px;
        // height: 100px;
        border-radius: 4px;
        overflow: hidden;
    }
}

.el-skeleton {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-around;
    height: 340px;

    .ske-img {
        width: 100px;
        height: 100px;
    }
}
</style>
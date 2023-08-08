<template>
    <div>
        <el-skeleton :loading="loading" animated>
            <template #template>
                <el-skeleton-item class="skeleton-img" variant="image" />
                <el-skeleton-item class="skeleton-img" variant="image" />
                <el-skeleton-item class="skeleton-img" variant="image" />
                <el-skeleton-item class="skeleton-img" variant="image" />
            </template>
            <template #default>
                <swiper
                :slides-per-view="4"
                :space-between="30"
                :modules="modules"
                :autoplay="{ delay: 3000 }"
                :pagination="{ clickable: true }"
                v-if="bannerList" 
                ref="mySwiper"
                class="banner_wrap"
                >
                    <swiper-slide v-for="item of bannerList" :key="item.imageUrl">
                        <el-image :src="item.imageUrl" :alt="item.typeTitle" class="banner_img" @click="pathHandler(item)">
                            <template #placeholder>
                                <div class="image-slot">
                                    <i class="iconfont icon-placeholder"></i>
                                </div>
                            </template>
                        </el-image>
                    </swiper-slide>
                </swiper>
            </template>
        </el-skeleton>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {getBanner} from '@/common/api';
import {IBanner,IBannerList} from '@/types/banner'
// console.log(ajax)
const loading = ref(true);
const mySwiper = ref()
const modules = [Navigation, Pagination, Autoplay]
const bannerList = ref<Array<IBannerList>>([])
const pathHandler = (banner:IBannerList)=>{
    console.log(banner)
    
}
const handleBannerList = async()=>{
    const banerRes = await getBanner() as IBanner;
    if(banerRes.code === 200){
        bannerList.value = banerRes.banners
        loading.value = false;

    }
   
}
onMounted(()=>{
    handleBannerList()
})
</script>

<style lang="less" scoped>
// 轮播图的宽度
@w: calc((@mainWidth - 90px) / 4);

.banner {
    padding-bottom: 30px;
}
.banner_wrap {
    position: relative;
    padding: 40px 0;
    .calcHeight(@w, 1080, 400);
    font-size: 0;

    .banner_img {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .swiper-slide, .el-image {
        .calcHeight(@w, 1080, 400);
    }
}

.el-skeleton {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;

    .skeleton-img {
        flex: 1;
        .calcHeight(@w, 1080, 400);
        margin-right: 30px;

        &:last-child {
            margin: 0;
        }
    }
}
.swiper {
    // opacity: .1;

    .swiper-slide {
        border-radius: 12px;
        box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
        overflow: hidden;
    }
    :deep(.swiper-pagination-bullet-active) {
        width: 15px;
        border-radius: 4px;
        background: var(--color-text-height);
    }
}
</style>

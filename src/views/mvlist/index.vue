<template>
    <div class="mv">
        <div class="mv-container">
           
           
            <div class="mv-main">
                <div class='wrapper infinite-list' v-infinite-scroll="loadMv" infinite-scroll-disabled="isLoadMv"
                    infinite-scroll-distance="50">
                    <MvList :mvList="list" :loading="mv_loading" :num="mv_count" />
                    <!-- <template v-if="isLoading">
                        <Loading />
                    </template> -->
                </div>
            </div>
            <el-affix :offset="70" class="mb-20px">
                <div class="bg-#fff px-10px py-15px rounded-10px">
                <div class="mb-10px">
                    <h3>排序</h3>
                <div class="flex items-center">
                    <div class="mr-8px cursor-pointer relative filter-item z-1 py-5px" v-for="(item, index) in order"
                        :class="index === orderIndex ? 'active' : ''" :key="index" @click="selectType('order', index)">{{
                            item }}</div>
                </div>
                </div>
               <div class="mb-10px">
                <h3>区域</h3>
                <div class="flex items-center">
                    <div class="mr-8px cursor-pointer relative filter-item z-1 py-5px" v-for="(item, index) in area"
                        :class="index === areaIndex ? 'active' : ''" :key="index" @click="selectType('area', index)">{{
                            item }}</div>
                </div>
               </div>
               <div>
                <h3>类型</h3>
                <div class="flex items-center">
                    <div class="mr-8px cursor-pointer relative filter-item z-1 py-5px" v-for="(item, index) in type"
                        :class="index === typeIndex ? 'active' : ''" :key="index" @click="selectType('type', index)">{{
                            item }}</div>
                </div>
               </div>

            </div>
            </el-affix>
         
        </div>
    </div>
</template>

<script setup>

import { onMounted, watchEffect, reactive, toRefs } from 'vue'
import constant from '@/common/constant';
import { ajaxMv } from '@/common/api'
const info = reactive({
    area: constant.MV_AREA,
    type: constant.MV_TYPE,
    order: ['上升最快', '最新'],
    areaIndex: 0,
    typeIndex: 0,
    orderIndex: 0,
    params: {
        area: '',
        type: '',
        order: '',
        limit: 30,
        offset: 0
    },
    list: [],
    mv_count: 20,
    mv_loading: true,
    isLoading: true,
    isLoadMv: true
});
const { area, type, order, areaIndex, typeIndex, orderIndex, params, list, mv_count, mv_loading, isLoading, isLoadMv } = toRefs(info)
const getMv = async (params) => {
    const mvRes = await ajaxMv(params)

    if (mvRes.code === 200) {
        info.list = info.params.offset !== 0 ? [...info.list, ...mvRes.data] : mvRes.data
        info.isLoadMv = !mvRes.hasMore
        info.isLoading = mvRes.hasMore
        info.mv_loading = false;
    }


};

const selectType = (type, index) => {
    info[type + 'Index'] = index
    info.list = []
    info.params.offset = 0
    info.params[type] = info[type][index]
    info.mv_loading = true
};

const loadMv = () => {
    info.isLoadMv = true
    info.params.offset = info.list.length
};

onMounted(() => {
    info.params.area = info.area[info.areaIndex]
    info.params.type = info.type[info.typeIndex]
    info.params.order = info.order[info.orderIndex]
})

watchEffect(() => {
    getMv(info.params);
});
</script>
<style lang="less" scoped>
.mv-container {
    display: flex;
    padding-top: 40px;

    .mv-main {
        flex: 1;
        margin-top: -20px;
        margin-right: 20px;
    }
}

.aside-menu {
    padding: 20px 20px 1px;
    margin-bottom: 25px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
}

.aside-title {}

.filter-item {


    &.active {

        &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 5px;
            width: 100%;
            height: 6px;
            background: #ff641e;
            z-index: -1;
        }
    }
}

.filter-main {
    margin: 5px 0 20px;

    em {
        position: relative;
        z-index: 1;
        display: inline-block;
        padding: 5px 0;
        margin-right: 15px;
        font-style: normal;
        cursor: pointer;

        &.active {

            &::after {
                position: absolute;
                content: "";
                left: 0;
                bottom: 5px;
                width: 100%;
                height: 6px;
                background: #ff641e;
                z-index: -1;
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .mv-container {
        flex-direction: column-reverse;
    }

    .mv-main{
        margin-right: 0;
    }

    // .aside-box{
    //     position: relative;
    //     top: -100px;
    // }
    // .filter-main{
    //     position: relative;
    //     z-index: 0;
    //     top: -100px;
    // }

}
</style>
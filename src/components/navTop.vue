<template>
    <div class="flex w-full bg-#fff fixed top-0 left-240px z-100 px-20px py-20px nav-top">
        <div class="flex items-center">
            <img :src="arrowLeftIcon" alt="" class="w-26px h-26px cursor-pointer" @click="handleGoBack">
            <div class="mx-10px w-200px overflow-hidden h-30px rounded-40px ">
                <input type="text" class="w-200px h-30px border-none outline-none pl-10px bg-gray-200 text-12px"
                    placeholder="请输入..." @keypress.enter="handleGoSearch" v-model="searchVal">
            </div>
            <!-- <img :src="arrowRightIcon" alt="" class="w-26px h-26px cursor-pointer"> -->

        </div>
        <div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import arrowLeftIcon from '@/assets/img/arrow-left.svg'


// import arrowRightIcon from '@/assets/img/arrow-right.svg'
const router = useRouter();
const route = useRoute()
const searchVal = ref('')
const handleGoBack = () => {
    const name = route.name
    if (name === 'index') return
    router.go(-1)
}
const handleGoSearch = () => {
    const keyWord = searchVal.value.trim() === '' ? null : searchVal.value
    if (keyWord) {
        router.push({ path: '/search', query: { key: keyWord } })



    } else {
        ElMessage({
            message: '搜索词不能为空',
            type: 'warning',
        })
    }


}
</script>

<style lang="less" scoped>
@media screen and (max-width: 1200px) {
    .nav-top {
        left: 200px;
    }

    /* .aside-box {
        width: 300px;
    } */
}</style>

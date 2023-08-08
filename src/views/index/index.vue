<template>
    <div class="home">
        <Banner/>
        <div class="hot-list">
            <div class="h_title">
                <h3>热门推荐</h3>
                <span v-for="(item, index) in playlistTags" :key="item" :class="index == playlistIndex ? 'active' : ''" @click="choosePlayListType(index)">{{item}}</span>
            </div>
            <div class="wrapper">
                <PlayList :playList="playlistList" :loading="playlistLoading" :num="playlistCount"/>
            </div>
        </div>
        <div class='album_list'>
            <div class="h_title">
                <h3>新碟上架</h3>
                <span v-for="(item, index) in albumArea" :key="index" :class="index == albumIndex ? 'active' : ''" @click="chooseAlbumType(index)">{{item.name}}</span>
            </div>
            <div class="wrapper">
                <AlbumList :albumList="albumList" :loading="albumLoading" :num="albumCount"/>
            </div>
        </div>
        <div class='top_list'>
            <RankList />
        </div>
        <div class='mv_list'>
            <div class="h_title">
                <h3>最新MV</h3>
                <span v-for="(item, index) in mvArea" :key="index" :class="index == mvIndex ? 'active' : ''" @click="chooseMvType(index)">{{item}}</span>
            </div>
            <div class="wrapper">
                <MvList :mvList="mvList" :loading="mvLoading" :num="mvCount"/>
            </div>
        </div>
        <div class="dj-artist">
            <div class="dj-list">
                <div class="h_title">
                    <h3>热门电台</h3>
                </div>
                <DjList />
            </div>
            <div class="artist-list">
                <div class="h_title">
                    <h3>热门歌手</h3>
                </div>
                <ArtistList />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useHotRecommondAction} from '@/hooks/use-hot-recommond-action'
import {useNewAlbumAction} from '@/hooks/use-new-album-action'
import {useMvAction} from '@/hooks/use-mv-action'
// import {ElMessage} from 'element-plus'
// console.log(ElMessage)
import Banner from './banner.vue'
import RankList from './rankList.vue';
import DjList from './djList.vue';
import ArtistList  from './artistList.vue';
const { playlistList,playlistTags,playlistIndex,playlistCount,playlistLoading,choosePlayListType} =useHotRecommondAction()

const { albumList,albumLoading,albumIndex,albumArea,albumCount,chooseAlbumType} = useNewAlbumAction()
const {  mvList,mvArea,mvLoading,mvCount,mvIndex,chooseMvType} =useMvAction()

</script>
<style lang="less" scoped>
.h_title {
    padding: 20px 0 10px;

    h3 {
        display: inline-block;
        padding-right: 50px;
        font-size: 28px;
        font-weight: 700;
    }

    span {
        display: inline-block;
        font-size: 16px;
        margin: 0 40px 0 0;
        color: var(--color-text-main);
        cursor: pointer;

        &.active {
            position: relative;
            z-index: 1;
            font-weight: 600;
            color: var(--color-text-main);

            &:after {
                position: absolute;
                content: "";
                left: 0;
                bottom: 1px;
                width: 100%;
                height: 6px;
                background: var(--color-text-height);
                z-index: -1;
            }
        }
    }
}

.hot-list, .album_list, .mv_list, .dj-list, .artist-list {
    padding: 0 20px;
    margin-bottom: 25px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
}

.top_list {
    margin-bottom: 25px;   
}
.dj-artist {
    display: flex;
}
.dj-list {
    flex: 1;
    margin-right: 20px;
}
.artist-list {
    width: 440px;
}
@media (max-width: 1300px) {
  .dj-artist {
    flex-direction: column;
  }
  .artist-list{
    flex: 1;
  }
}

</style>
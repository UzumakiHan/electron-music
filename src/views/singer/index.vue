<template>
    <div class="singer" v-if="artist">
        <div class="singer-header">
            <div class="singer-avatar">
                ;;;
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router';
import {ajaxArtists} from '@/common/api'
import {handleFormatMsgTime,handleFormatSongTime} from '@/common/util'
const route = useRoute();
        const info = reactive({
            sUid: '',
            artist: null,
            hotSongs: []
        })
        const {sUid,artist,hotSongs}=toRefs(info)

        const getArtists = async() => {
           const artistRes= await ajaxArtists({ id: info.sUid, timestamp: new Date().valueOf() })

            if (artistRes.code === 200) {
                info['artist'] = res.artist
            info['hotSongs'] = res.hotSongs.map(item => {
                return {
                    id: String(item.id),
                    name: item.name,
                    mvId: item.mv,
                    singer: item.ar,
                    album: item.al,
                    alia: item.alia,
                    vip: item.fee === 1,
                    license: item.license,
                    duration:handleFormatSongTime(item.dt),
                    url: `https://music.163.com/song/media/outer/url?id=${item.id}.mp3`,
                    publishTime: handleFormatMsgTime(item.publishTime)
                }
            })
            }

           
        };

        onMounted(() => {
            info['sUid'] = route.query.id
            getArtists();
        });
</script>
<style scoped lang="less">
    .singer-avatar {
        display: flex;
        height: 300px;
        position: relative;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
        overflow: hidden;

        span {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 5;
            background-position: center top;
            background-size: cover;
            background-attachment: fixed;
        }

        em {
            position: absolute;
            z-index: 9;
            display: block;
            width: 100%;
            height: 100%;
            -webkit-filter: blur(20px);
            -moz-filter: blur(20px);
            -ms-filter: blur(20px);
            -o-filter: blur(20px);
            filter: blur(20px);
            background-position: center top;
            background-size: cover;
            background-attachment: fixed;
        }
    }
</style>
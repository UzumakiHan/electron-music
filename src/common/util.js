import { handleFormatSongInfo } from './song.js';
import dayjs from 'dayjs'
//格式化时间
export const handleFormatTime = (time, formatType = 'YYYY-MM-DD') => {
    return dayjs(time).format(formatType)
  }

export const handleFormartNum=(val)=>{
    let num = 0
    if (val > 9999) {
        num = Math.round(val / 10000 * 10) / 10 
    } else {
        num = val
    }

    return num+'万'
}
export const handleFormatSongSecond=(duration)=>{
    let arr = duration.split(':'),
    second = 0;

for(let i = 0; i < arr.length; i++) {
    second += arr[i] * 60 * (arr.length - 1 - i)
}

second += arr[arr.length - 1] * 1;

return second;
}
export const handleFormatSongs=(list, privileges)=>{
    const ret = [] 
    list.map((item, index) => {
        if (item.id) {
            // 是否有版权播放
            item.license = !privileges[index].cp
            ret.push(handleFormatSongInfo(item))
        }
    })
    return ret
}
export const handleFormatSongTime=(duration = 0)=>{
    duration = duration >= 0 ? duration / 1000 : 0;
    const m = (Math.floor(duration / 60) + '').padStart(2, '0')
    const s = (Math.floor(duration % 60) + '').padStart(2, '0')
    return `${m}:${s}`
}
export const handleFormatMsgTime=(duration)=>{
    let result = ''
    const NOW = new Date()
    const PAST = new Date(duration)

    // 判断是当天的时间 显示格式 10：30
    if (NOW.toDateString() === PAST.toDateString()) {
        result = handleFormatTime(duration, 'HH:mm')
    // 时间为当年 显示月日 时间戳
    } else if (PAST.getFullYear() === NOW.getFullYear()) {
        result =handleFormatTime(duration, 'MM月DD日 HH:mm')
    } else {
        result = handleFormatTime(duration, 'YYYY年MM月DD日')
    }

    return result

}
export const handleConcatPlayList=(newList = [], oldList = [])=>{
    const arr = [...oldList, ...newList]
    const map = new Map()

    for (const item of arr) {
        if (!map.has(item.id)) {
            map.set(item.id, item)
        }
    }

    return [...map.values()]
}

<script>
    export default {
        name: 'aj-button'
    }
</script>
<script setup>
import { ElButton } from 'element-plus'
const props = defineProps({
    ajt: String
})
let content
let type
if (props.ajt === 'add') {
    content = '增加'
    type='primary'
}
if (props.ajt === 'edit') {
    content = '修改'
    type='warning'
}
if (props.ajt === 'del') {
    content = '删除'
    type='danger'
}


</script>
<template>
    <ElButton v-bind="$attrs" :type="type">
        <template #icon>
            <svg v-if="props.ajt == 'add'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm-6 4q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z" />
            </svg>
            <svg v-if="props.ajt == 'edit'" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z" />
            </svg>
            <svg v-if="props.ajt == 'del'" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z" />
            </svg>
        </template>
        {{ content }}
    </ElButton>
</template>

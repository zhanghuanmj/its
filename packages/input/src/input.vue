<!--
 * @file 
 * @author its-wild(https://gitee.com/its-wild)
 * @date 2021/05/31
-->
<template>
    <el-input />
</template>

<script>
import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/input.css'

export default {
    name: "ItsInput",
    components: {
        [Input.name]: Input
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="less">

</style>

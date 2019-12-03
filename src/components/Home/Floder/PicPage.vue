<template>
    <div class="pic-page">
        <img :src="picList[activeItem].url" class="pic-view">
        <!--缩略图组件-->
        <Thumbnails :list="picList" :active-item = activeItem  @selectItem="selectItem"></Thumbnails>
    </div>
</template>

<script>
    import Thumbnails from "@/components/base/Thumbnails";
    export default {
        name: "picPage",
        props: {},
        data() {
            return {
                // 默认视图

                picList: [
                    {
                        url: require('@/assets/images/mobile.jpg')
                    },
                    {
                        url: require('@/assets/images/index.png')
                    },
                ],
                activeItem: 0
            }
        },
        computed: {},
        created() {
        },
        methods: {
            // 当前激活的视图
            selectItem(index){
                this.activeItem = index;
            }
        },
        components: {
            Thumbnails
        },
    }
</script>

<style lang="scss">
.pic-view {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>

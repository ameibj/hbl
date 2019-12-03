<template>
    <div class="blackboard" style="background: #456547">
        <img src=""  class="blackboard-view" alt="">
        <!--缩略图组件-->
        <div class="thumbnails">
            <div class="arrow" @click="isShowThumbnails = !isShowThumbnails">
                <svg class="svg-icon" aria-hidden="true">
                    <use :xlink:href="[isShowThumbnails? '#icon-left': '#icon-right']"></use>
                </svg>
            </div>
            <Scroll :click="true" class="blackboard-list">
                <ul class="list" v-show="!isShowThumbnails">
                    <!-- list 循环-->
                    <li class="item" v-for="(item, index) in blackboardList"
                        :key="index"
                        :class="{'active':  index === activeItem}"
                        @click="selectItem(index)"
                    >
                        <img class="img" :src="item.url" alt="">
                        <span class="pageNum">
                         {{ index + 1 }}
                    </span>
                    </li>
                </ul>
            </Scroll>
        </div>
    </div>
</template>

<script>
    import Scroll from '@/components/base/Scroll'

    export default {
        name: "blackboard",
        props: {},
        data() {
            return {
                isShowThumbnails: false,

                // 白板列表
                blackboardList:[
                    {
                        url: require('@/assets/images/index.png')
                    },
                   {
                        url: require('@/assets/images/index.png')
                    },

                    {
                        url: require('@/assets/images/index.png')
                    },
                    {
                        url: require('@/assets/images/index.png')
                    }
                ],
                // 当前显示的下标
                activeItem: 0
            }
        },
        computed: {},
        created() {
        },
        methods: {
            // 选择的视图
            selectItem(index){
                this.activeItem = index;
            }
        },
        components: {
            Scroll
        },
    }
</script>

<style lang="scss">
    @import "~@/assets/style/var.scss";

    .thumbnails {
        position: absolute;
        display: flex;
        align-items: center;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;

        .arrow {
            display: flex;
            justify-items: center;
            align-items: center;
            height: 60px;
            width: 35px;
            border-radius: 40px 0 0 40px;
            background: rgba(0, 0, 0, 0.25);

            .svg-icon {
                font-size: 30px;
            }
        }

        .blackboard-list {
            max-height: 380px;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.25);
        }

        .list {
            width: 180px;
            padding: 20px;

            .item {
                position: relative;
                height: 78px;
                width: 100%;
                margin-bottom: 10px;
                border-radius: 4px;
                overflow: hidden;
                border-style: solid;
                border-width: 2px;
                border-color: transparent;

                &.active {
                    border-color: $themeColor;

                    .pageNum {
                        background: $themeColor;
                    }
                }

                .img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    margin: 0;
                    object-fit: cover;
                }

                .pageNum {
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: #fff;
                    width: 25px;
                    height: 25px;
                    background: $gray-1;
                    border-radius: 0 0 4px 0;
                    text-align: center;
                }
            }
        }

    }

</style>

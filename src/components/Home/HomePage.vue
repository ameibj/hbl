<template>
    <div class="home-page">
        <img src="~@/assets/images/index.png" class="home-bg" v-show="$route.name === 'home'">
        <!-- 各组件展示页-->
        <router-view class="comps-wrapper"></router-view>
        <div class="tools-box"
             v-show="$route.name === 'pic' || $route.name === 'blackboard' || $route.name === 'player'">
            <div class="item" v-for="(item, index) in tools" :key="index">
                {{ item.text }}
            </div>
        </div>
        <!-- 课件、展台、黑板等-->
        <!--打开-->
        <div class="panel-folder panel" v-show="currentPanel ==='folder'">
            <div class="panel-header folder">
                打开
                <svg class="svg-icon close" aria-hidden="true" @click="currentPanel = ''">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </div>
            <div class="panel-body">
                <div class="title">
                    <div class="h3">课件</div>
                    <label class="icon-plus">
                        <svg class="svg-icon" aria-hidden="true">
                            <use xlink:href="#icon-plus"></use>
                        </svg>
                        <input type="file" class="file">
                        <span class="text">上传</span>
                    </label>
                </div>
                <!-- scroll data 里传列表数据-->
                <Scroll :click="true" :data="[]" class="scroll-wrapper">
                    <ul class="list">
                        <li class="li" @click="jumpFolder('pic', 'PPT')">
                            <svg class="svg-icon icon" aria-hidden="true">
                                <use xlink:href="#icon-ppt"></use>
                            </svg>
                            <span class="text">ppt</span>
                        </li>
                        <li class="li">
                            <svg class="svg-icon icon" aria-hidden="true">
                                <use xlink:href="#icon-word"></use>
                            </svg>
                            <span class="text">word</span>
                        </li>
                        <li class="li">
                            <svg class="svg-icon icon" aria-hidden="true">
                                <use xlink:href="#icon-excel"></use>
                            </svg>
                            <span class="text">excel</span>
                        </li>
                        <li class="li">
                            <svg class="svg-icon icon" aria-hidden="true">
                                <use xlink:href="#icon-pdf"></use>
                            </svg>
                            <span class="text">pdf</span>
                        </li>
                        <li class="li">
                            <svg class="svg-icon icon" aria-hidden="true">
                                <use xlink:href="#icon-folder"></use>
                            </svg>
                            <span class="text">教案</span>
                        </li>
                        <li class="li">
                            <svg class="svg-icon icon" aria-hidden="true">
                                <use xlink:href="#icon-folder"></use>
                            </svg>
                            <span class="text">截图</span>
                        </li>
                    </ul>
                </Scroll>

                <div class="title">
                    <div class="h3">黑板</div>
                    <div class="icon-plus">
                        <svg class="svg-icon" aria-hidden="true">
                            <use xlink:href="#icon-plus"></use>
                        </svg>
                        <span class="text">添加</span>
                    </div>
                </div>
                <ul class="list blackboard-list">
                    <li class="li" :class="{'active': n === 1}" v-for="n in 3"
                        @click="jumpFolder('blackboard', '黑板')">
                        <div class="blackboard">
                            <div class="view">
                                {{ n }}
                            </div>
                            <div class="delete">
                                <svg class="svg-icon" aria-hidden="true">
                                    <use xlink:href="#icon-delete"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="title">展台</div>
                <ul class="list showstation-list">
                    <li class="li active"
                        @click="jumpFolder('showstation', '展台')">
                        <div class="showstation">
                            <div class="view">
                                本机
                            </div>
                            <div class="dot"></div>
                        </div>
                    </li>
                    <li class="li">
                        <div class="showstation">
                            <div class="view">
                                投屏
                            </div>
                            <div class="dot"></div>
                        </div>
                    </li>
                    <li class="li">
                        <div class="showstation">
                            <div class="view">
                                HDMI
                            </div>
                            <div class="dot"></div>
                        </div>
                    </li>
                    <li class="li">
                        <div class="showstation">
                            <div class="view">
                                HDMI
                            </div>
                            <div class="dot"></div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <!--互动-->
        <div class="panel-interaction panel" v-show="currentPanel ==='interaction'">
            <div class="panel-header interaction">
                互动
                <svg class="svg-icon close" aria-hidden="true" @click="currentPanel = ''">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </div>
            <div class="panel-body">
                <ul class="list">
                    <li class="li">口述发起</li>
                    <li class="li">截图发起</li>
                </ul>
                <div class="title">类型：</div>
                <ul class="list">
                    <li class="li"
                        v-for="(item,index) in interactions">
                        {{item.text}}
                    </li>
                </ul>
                <div class="title">题型</div>
                <ul class="list">
                    <li class="li">单选</li>
                    <li class="li">多选</li>
                    <li class="li">判断</li>
                    <li class="li">主观</li>
                </ul>
                <div class="title">选项个数：</div>
                <ul class="list">
                    <li class="li" style="width: 3em" v-for="n in 8">{{n}}</li>
                </ul>
                <div class="title">发送至：</div>
                <ul class="list">
                    <li class="li">全部</li>
                    <li class="li" style="width: 5em" v-for="n in 4">{{n}}组</li>
                </ul>
                <div class="text-center">
                    <button class="btn btn-block" @click="jumpInteraction('test')">发送</button>
                </div>

                <ul class="list">
                    <li class="li">弹幕</li>
                    <li class="li">讨论墙</li>
                </ul>
                <p class="tips">共发起互动4次</p>
            </div>

        </div>
        <!--设置-->
        <div class="panel-setting panel" v-show="currentPanel ==='setting'">
            <div class="panel-header setting">
                设置
                <svg class="svg-icon close" aria-hidden="true" @click="currentPanel = ''">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </div>
            <div class="panel-body">
                <img src="~@/assets/images/rcode.png" width="100" height="100" alt="">
                <p>课程进行45分钟</p>
                <ul class="list">
                    <li class="li">62人</li>
                    <li class="li">4组</li>
                    <li class="li">录制（关）</li>
                </ul>

                <div class="text-center">
                    <button class="btn btn-md btn-default">下课</button>
                    <button class="btn btn-md btn-default">首页</button>
                </div>
            </div>

        </div>

        <!-- 智 menu -->
        <div class="menus">
            <!-- 任务栏-->
            <div class="task-box" v-show="currentTask">
                <!--缩略图-->
                <div class="view" @click="isShowTaskList = !isShowTaskList">
                    <!--黑板-->
                    <svg class="svg-icon thumb-icon" aria-hidden="true" v-show="currentTask=== '黑板'">
                        <use xlink:href="#icon-blackboard"></use>
                    </svg>

                    <!--ppt-->
                    <svg class="svg-icon thumb-icon" aria-hidden="true" v-show="currentTask=== 'PPT'">
                        <use xlink:href="#icon-ppt"></use>
                    </svg>
                    <!--  其他 .... -->
                </div>
                <!-- 任务列表-->
                <div class="task-list" v-show="isShowTaskList">
                    <div class="panel task-panel">
                        <div class="panel-header">
                            <div class="left">
                                <svg class="svg-icon task-icon" aria-hidden="true">
                                    <use xlink:href="#icon-ppt"></use>
                                </svg>
                                <span>黑板-1</span>
                            </div>
                            <!--关闭-->
                            <svg class="svg-icon close" aria-hidden="true">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </div>
                        <div class="panel-body">
                            <div class="img-box">
                                <img class="task-img" src="~@/assets/images/index.png">
                            </div>
                        </div>
                    </div>
                    <div class="panel task-panel">
                        <div class="panel-header">
                            <div class="left">
                                <svg class="svg-icon task-icon" aria-hidden="true">
                                    <use xlink:href="#icon-ppt"></use>
                                </svg>
                                <span class="text">创意设计年报</span>
                            </div>
                            <!--关闭-->
                            <svg class="svg-icon close" aria-hidden="true">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </div>
                        <div class="panel-body">
                            <div class="img-box">
                                <img class="task-img" src="~@/assets/images/guide_bg.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 菜单-->
            <div class="menu-wrapper">
                <div class="item"
                     v-show="isShowMenu"
                     v-for="(item, index) in  navs"
                     :key="item.type"
                     :class="{'active': currentPanel === item.type}"
                     @click="selectPanel(item)">
                    <svg class="svg-icon menu-icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                    <span class="name">{{item.name}}</span>

                </div>
                <div class="item main-menu" @click="isShowMenu = !isShowMenu">
                    <svg class="svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-wisdom"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Scroll from '@/components/base/Scroll'

    export default {
        name: "homePage",
        props: {},
        data() {
            return {
                // 工具箱
                tools: [
                    {
                        text: '截图'
                    },
                    {
                        text: '工具'
                    },
                    {
                        text: '关联'
                    },
                    {
                        text: '画笔'
                    },
                    {
                        text: '智能搜索'
                    }
                ],
                // panelTypes
                navs: [
                    {
                        name: '打开',
                        type: 'folder',
                        icon: '#icon-open'
                    },
                    {
                        name: '互动',
                        type: 'interaction',
                        icon: '#icon-comment'
                    },
                    {
                        name: '广播',
                        type: 'broadcast',
                        icon: '#icon-play'
                    },
                    {
                        name: '设置',
                        type: 'setting',
                        icon: '#icon-set'
                    }
                ],
                // 显示的panel
                currentPanel: '',
                // 当前任务视图
                currentTask: '',
                // 是否显示menu
                isShowMenu: true,
                // panelTitle
                panelTitle: '',
                /*互动 */
                interactions: [
                    {
                        text: '测验',
                        name: 'test'

                    },
                    {
                        text: '投票',
                        name: 'vote'
                    },
                    {
                        text: '讨论',
                        name: 'discuss'
                    },
                    {
                        text: '提问',
                        name: 'question'
                    }
                ],

                // 默认隐藏 任务视图列表
                isShowTaskList: false

            }
        },
        computed: {},
        created() {
        },
        methods: {
            // 路由跳转
            _routerLink(routeName) {
                this.$router.push({
                    name: routeName
                });

            },
            // 打开跳转
            jumpFolder(routeName, task) {
                this._routerLink(routeName)
                this.currentTask = task;
            },

            // 互动跳转
            jumpInteraction(routeName) {
                this._routerLink(routeName);
            },
            // 选择面板
            selectPanel(item) {
                this.panelTitle = item.name;

                // 显示 和隐藏 panel
                if (this.currentPanel) {
                    this.currentPanel = '';
                } else {
                    this.currentPanel = item.type;
                }
            }
        },
        components: {
            Scroll
        },
    }
</script>

<style lang="scss">
    @import "~@/assets/style/var.scss";
    @import "~@/assets/style/mixins.scss";

    .home-page {
        position: relative;
        width: 100%;
        height: 100%;

        .home-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        .menus {
            position: absolute;
            display: flex;
            right: 25px;
            bottom: 25px;

            .task-box {
                display: flex;
                position: relative;
                align-items: center;
                margin-right: 25px;
                border-radius: 4px;
                /* arrow*/
                &:before {
                    content: '';
                    position: absolute;
                    top: -5px;
                    left: 50%;
                    width: 15px;
                    height: 15px;
                    background: #fff;
                    transform: translateX(-50%) rotate(-45deg);
                    border: 2px solid rgba(0, 0, 0, 0.16);
                    border-left-width: 0;
                    border-bottom-width: 0;
                    z-index: 2;
                }

                .view {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 70px;
                    height: 70px;
                    line-height: 70px;
                    text-align: center;
                    background: #fff;
                    border: 2px solid rgba(0, 0, 0, 0.16);
                    border-radius: 4px;
                    box-shadow: 0 2px 10px -2px #bfbfbf;
                    z-index: 1;
                }

                .thumb-icon {
                    font-size: 60px;
                }

            }
        }

        .tools-box,
        .menu-wrapper {
            background: #fff;
            display: flex;
            align-items: center;
            border-radius: 6px;
            box-shadow: 0 2px 10px -2px #bfbfbf;
            border: 2px solid rgba(0, 0, 0, 0.16);

            .item {
                display: flex;
                flex-direction: column;
                flex: 1;
                width: 70px;
                height: 70px;
                line-height: 70px;
                align-items: center;
                justify-content: center;
                color: $gray-2;

                &.active {
                    color: $themeColor;
                }

                .menu-icon {
                    font-size: 40px;
                }

                .name {
                    display: block;
                    line-height: 1;
                }
            }

            .main-menu {
                font-size: 50px;
                color: #fff;
                line-height: 1;
                background: $themeColor;
            }
        }

        .menu-wrapper {
            overflow: hidden;

            .item {
                &:first-child {
                    margin-left: 15px;
                }

                &:nth-last-child(2) {
                    margin-right: 15px;
                }
            }
        }

        .tools-box {
            position: absolute;
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%);
        }

        .comps-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
        }
    }

    .panel {
        background: #fff;

        .panel-header {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .close {
                font-size: 25px;
                line-height: 1;
            }
        }

        .panel-body {
            padding: 0 20px;
            background: #fff;
            border-radius: inherit;
            @include clearfix();
        }

    }

    .panel-wrapper {
        position: absolute;
        right: 25px;
        bottom: 115px;
        width: 480px;
        border-radius: 10px;
        box-shadow: 0 2px 10px -2px #bfbfbf;
        overflow: hidden;
        background: $themeColor;

        .panel-header {
            background: $themeColor;
            color: #fff;
            height: 46px;
            padding: 0 20px;
            font-size: 18px;
            font-weight: bold;

            &:before {
                position: absolute;
                display: block;
                padding: 0 10px;
                left: 0;
                top: 0;
                font-size: 60px;
                line-height: 1;
                color: rgba(255, 255, 255, 0.2);
            }

            &.folder:before {
                content: '打开';
            }

            &.interaction:before {
                content: '互动';
            }

            &.setting:before {
                content: '设置';
            }
        }

    }

    .panel-folder,
    .panel-setting,
    .panel-interaction {
        @extend .panel-wrapper;
    }

    .panel-folder {
        .blackboard-list {
            .li {
                &.active {
                    .blackboard {
                        background: #456547;
                        color: #fff;
                        border-color: #456547;

                        .view {
                            background: #577f5a;
                            color: #fff;
                        }
                    }
                }
            }
        }

        .showstation-list {
            .li {
                .view {
                    font-size: 16px;
                }

                &.active {
                    .showstation {
                        position: relative;
                        color: $themeColor;
                        border-color: $themeColor;
                        box-shadow: 0 4px 10px -3px rgba($themeColor, 0.7);
                        background: rgba($themeColor, 0.2);

                        .view {
                            background: transparent;
                            color: $themeColor;
                        }

                        .dot {
                            position: absolute;
                            left: 5px;
                            top: 5px;
                            width: 5px;
                            height: 5px;
                            background: $themeColor;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }

        &.panel {

        }

        .title {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e8e8e8;
            padding: 12px 0;
            font-size: 16px;
            line-height: 1;

            .h3 {
                color: $gray-2;
                font-weight: bold;
            }
        }

        .scroll-wrapper {
            max-height: 295px;
            overflow: auto;
        }

        .list {
            width: 100%;
            font-size: 0;
            margin: 10px 0;

            .li {
                display: inline-block;
                width: 25%;
                margin-bottom: 10px;
                font-size: 16px;
                text-align: center;

                .icon {
                    font-size: 70px;
                    cursor: pointer;
                }

                .text {
                    display: block;
                }
            }
        }

        /* 黑板 和 展台*/
        .blackboard,
        .showstation {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 58px;
            border: 2px solid $gray-6;
            border-radius: 4px;
            background: $gray-6;

            .view {
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 1;
                height: 100%;
                font-size: 18px;
                background: #f5f5f5;
                color: $gray-2;
            }

            .delete {
                width: 23px;
                padding-left: 2px;
                cursor: pointer;
            }
        }
    }

    .icon-plus {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 20px;
        color: $gray-2;
        cursor: pointer;

        .file {
            position: absolute;
            width: 1px;
            height: 1px;
            left: -99999px;
            z-index: -1;
        }

        .text {
            font-size: 14px;
        }
    }

    .task-list {
        position: absolute;
        display: flex;
        left: 50%;
        bottom: calc(100% + 12px);
        transform: translateX(-50%);
        box-shadow: 0 2px 10px -2px #bfbfbf;
        border: 2px solid rgba(0, 0, 0, 0.16);
        border-radius: 6px;
        overflow: hidden;
    }

    .task-panel {
        width: 216px;

        .panel-header {
            padding: 5px 10px 5px;

            .close {
                font-size: 16px;
                color: $gray-2;
            }

            .left {
                display: flex;
                align-items: center;
                color: $gray-4;
            }

            .task-icon {
                font-size: 30px;
            }
        }

        .panel-body {
            padding: 0 10px 10px;
        }

        .img-box {
            width: 196px;
            height: 110px;

            .task-img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

</style>

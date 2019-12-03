<template>
    <div class="guide">
        <div class="banner">
            <div class="qr-box">
                <img src="~@/assets/images/rcode.png" class="qrcode" width="416px" height="419px" alt="">
            </div>
            <p class="tips">微信扫码登录</p>
        </div>
        <div class="main">
            <ul class="list">
                <li class="li">
                    <svg class="svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-place"></use>
                    </svg>
                    <div class="describe">
                        <div class="title">所在教室</div>
                        <div class="info">学院楼A区305教室</div>
                    </div>
                </li>
                <li class="li">
                    <svg class="svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    <div class="describe">
                        <div class="title">上课教师</div>
                        <div class="info">丁小涵</div>
                    </div>
                </li>
                <li class="li">
                    <svg class="svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-mem"></use>
                    </svg>
                    <div class="describe">
                        <div class="title">连接同学</div>
                        <div class="info">20位同学连接</div>
                    </div>
                </li>

            </ul>
            <div class="footer">
                <button @click="$router.push({name:'home'})" type="button" class="btn btn-lg">开始</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "guide",
        props: {},
        data() {
            return {}
        },
        computed: {},
        created() {
        },
        methods: {},
        components: {},
    }
</script>

<style lang="scss">
    @import "~@/assets/style/var.scss";

    .guide {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-align: center;

        .banner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 670px;
            width: 100%;
            background: url("~@/assets/images/guide_bg.png") no-repeat center;
            background-size: cover;

            .qr-box {
                width: 436px;
                height:440px;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: -30px;
            }

            .tips {
                font-size: 18px;
                color: #fff;
            }
        }

        .list {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60%;
            margin: 0 auto 60px;

            .li {
                flex: 1;
                padding: 0 50px;
                display: flex;
                justify-content: center;
                align-items: center;

                .describe {
                    text-align: left;
                }

                .title {
                    margin-bottom: 5px;
                    color: $gray-4;
                }

                .info {
                    color: $gray-1;
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }

        .svg-icon {
            font-size: 90px;
        }
    }

</style>

<template>
    <div class="test-page">
        <div class="left">
            <div class="main">
                <h2>测验</h2>
                <!--题或结果展示区-->
                <div class="answer-end">
                    <div class="title">测验结果</div>
                    <div class="statistics-wrapper" ref="right">
                        <div class="item">
                            <div class="label">A</div>
                            <div class="content">
                                <div class="text">5人 20%</div>
                                <div class="member-wrapper">
                                    <div class="member" v-for="n in 5">
                                        <img class="avatar" src="~@/assets/logo.png" alt/>
                                        <div>李忠奇</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="label">B</div>
                            <div class="content">
                                <div class="text">5人 20%</div>
                                <div class="member-wrapper">
                                    <div class="member" v-for="n in 5">
                                        <img class="avatar" src="~@/assets/images/mobile.jpg" alt/>
                                        <div>李奇</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <button class="btn btn-md btn-theme">停止作答</button>
                <button class="btn btn-md btn-default">取消答题</button>
                <button class="btn btn-md btn-default">二次互动</button>
            </div>
        </div>
        <div class="right">
            <div class="header">答题情况</div>
            <div class="list">
                <div class="item">
                    <div class="info">00:26</div>
                    <div class="text">用时</div>
                </div>
                <div class="item">
                    <div class="info">0/25</div>
                    <div class="text">提交人数</div>
                </div>
            </div>
            <div class="header">提交情况</div>
            <div class="user-list">
                <div class="user">
                    <img src="~@/assets/logo.png" class="avatar" alt="" width="50" height="50">
                    <span class="name">李忠奇</span>
                </div>
                <div class="user">
                    <img src="~@/assets/logo.png" class="avatar" alt="" width="50" height="50">
                    <span class="name">李奇</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "testPage",
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
    .test-page {
        display: flex;

        .left {
            display: flex;
            flex-direction: column;
            flex: 1;

            .main {
                flex: 1;
            }

            .footer {
                text-align: center;
            }
        }

        .right {
            flex: 0 0 24%;
            width: 24%;
            background: #f5f5f5;
            padding: 36px 30px;
        }
    }

    .avatar {
        width: 50px;
        height: 50px;
    }

    .answer-end {
        .title {
            margin-bottom: 32px;
        }
        .statistics-wrapper {
            .item {
                margin-bottom: 30px;
            }

            .label {
                float: left;
                display: inline-block;
                width: 60px;
                height: 60px;
                margin-right: 16px;
                border: 1px solid #ccc;
                border-radius: 50%;
                text-align: center;
                justify-content: center;
                align-items: center;
                line-height: 58px;
                font-size: 30px;
            }

            .content {
                overflow: hidden;

                .member {
                    display: inline-block;
                    margin-right: 25px;
                }

                .text {
                    margin-bottom: 12px;
                }

                .avatar {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: 50%;
                    margin-bottom: 6px;
                }
            }

            .chart-style {
                width: 450px;
                height: 450px;
            }
        }
    }
</style>

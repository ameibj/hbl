
function responsive (_standard = 750, base_DPR = 1) {
    /**初始化方法
     * _standard 设计稿对应的分辨率
     * base_DPR 设定最小DPR值
     */
   // var _standard = 1920;

    function setInitialRem(_standard, base_DPR) {

        //取得当前设备DPR
        var dpr = window.devicePixelRatio || 1;

        //如果设定了默认最小DPR值
        if (base_DPR) {
            dpr = dpr >= base_DPR ? dpr : base_DPR;
        }

        //设定缩放视图比例
        var scale = 1 / dpr;
        //取得当前设备宽度
        var device_width = document.documentElement.clientWidth; //window.innerWidth;
        //标定原稿设计基准值 当前稿件设计宽度为 iPhone6/6s 375像素
        var standard_width = _standard * dpr;
        //设定基准单位
        var base_value = 100;
        //基准系数=设备宽度➗稿件基准宽度✖️设备DPR✖️100
        var rem = device_width / standard_width * dpr * base_value;

        // 判断 device_width（设备宽度） 小等于 _standard（设计图宽度）？ 写入meta等比适配： 相应放大
        if(device_width <= _standard){
            //设直视图缩放比例
            document.head.querySelector('meta[name="viewport"]').content = "width=device-width,initial-scale=" + scale + ",minimum-scale=" + scale + ",maximum-scale=" + scale + ",user-scalable=no, shrink-to-fit=no";
        }


        //设置 REM
        document.documentElement.style.fontSize = rem + "px";
        // html上设置 dpr便于查看
        document.documentElement.setAttribute('data-dpr',dpr );
    }

    window.addEventListener("resize", function () {
        setInitialRem(_standard, base_DPR);
    });

    setInitialRem(_standard, base_DPR);
}
export default responsive

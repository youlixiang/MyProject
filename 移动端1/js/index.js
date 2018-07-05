window.onload = function () {
    /*3.倒计时*/
    downTime();
}
var downTime = function () {
    /*1.每一秒改变当前的时间*/
    /*2.倒数计时  假设 4小时*/
    var time = 4 * 60 * 60;
    var spans = document.querySelectorAll('.time span');

    var timer = setInterval(function () {
        time --;
        /*格式化  给不同的元素html内容*/
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = Math.floor(time%60);

        spans[0].innerHTML = Math.floor(h/10);
        spans[1].innerHTML = h%10;
        spans[3].innerHTML = Math.floor(m/10);
        spans[4].innerHTML = m%10;
        spans[6].innerHTML = Math.floor(s/10);
        spans[7].innerHTML = s%10;

        if(time <= 0){
            clearInterval(timer);
        }
    }, 1000)
};

$(document).scroll(function(){
    var hhh = $(document).scrollTop();
    console.log(hhh + "px")
    if(hhh >= 200){
      $(".jd_search .jd_search_box").addClass("z_j_color")
    }
    else{
        $(".jd_search .jd_search_box").removeClass("z_j_color")
    }
});
$(".jd_banner, .jd_nav, .jd_product").click(function() {
    console.log("点击轮播图")
    alert("触发点击事件！")
});
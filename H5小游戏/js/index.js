//jquery的也分为三个过程，但是在事件名称上有所不同
// keyup：某个键盘的键被松开
// keydown：某个键被按下
// keypress：某个键盘的键被按下或按住
//32==空格，13==回车，38==上键，37==左键，39==右键，40==下键

//监听松开键盘
// $(document).keyup(function(event){
//     switch(event.keyCode) {
//         case 32:
//             console.log('你松开了空格');
//             return;
//         case 13:
//             console.log('你松开了回车');
//             return;
//     }
// });

//监听按下键盘
// $(document).keydown(function(event){
//     switch(event.keyCode) {
//         case 38:
//             console.log('你按下了上键');
//              return;
//         case 40:
//             console.log('你按下了下键');
//             return;
//         case 37:
//             console.log('你按下了左键');
//             return;
//         case 39:
//             x = x + 10; $(".a1").css("top", x + "px"); break;
//            // console.log('你按下了右键');
//         default: break;
//     }
// });

//监听按住(按住不松手)键盘
// $(document).keypress(function(event){
//     switch(event.keyCode) {
//         case 32:
//             console.log('你按住了空格');
//             return;
//         case 13:
//             console.log('你按住了回车');
//             return;
//     }
// });

// console.log(time2)
// console.log(time1)

//拿数组中的随机元素
// window.onload = function(){
//     var arr = ["top","left","bottom","right"];
//     var index = Math.floor((Math.random()*arr.length));
//     var xx = arr[index];
//     console.log(xx);
// }




//jQuery通过键盘控制DIV移动
var x = 0;//水平方向位移
var y = 0;//垂直方向位移
$(document).keydown(function (event) {
    switch (event.which) {
        //监听用户按键(方向键下)，马上改变方向
        case 40:
            var time1 = parseInt(Math.random()*(1000-500+1)+500,10);
            console.log("下键")
            $(".a1").stop();
            // $(".a1").animate({ left : "" },1000);
            $(".a1").animate({ top : "450px" },time1, function () {
                alert('游戏结束');
            }
            )
            // if(aa = 400) {
            //     alert("到了")
            // }

            //当用户操作方向时，马上清除定时器
            window.clearTimeout(t10)
            window.clearTimeout(t20)
          //  break;

    //食物动画
        case 40:
            var time2 = Math.floor(Math.random()*(1000-500+1)+500);
            console.log("下键")
            $(".food").stop();
            // $(".a1").animate({ left : "" },1000);
            $(".food").animate({ top : "0" },time2)
            // if(aa = 400) {
            // alert("到了")
            // }

            //当用户操作方向时，马上清除定时器
            window.clearTimeout(t10)
            window.clearTimeout(t20)
            break;
//监听用户按键(方向键左)，马上改变方向
        case 37:
            var time1 = parseInt(Math.random()*(1000-500+1)+500,10);
            console.log("左键")
            $(".a1").stop();
            // $(".a1").animate({ left : "" },1000);
            $(".a1").animate({ left : "0" },time1, function () {
                    alert('游戏结束');
                }
            )
            //当用户操作方向时，马上清除定时器
            window.clearTimeout(t10)
            window.clearTimeout(t20)

    //食物动画
        case 37:
            var time2 = Math.floor(Math.random()*(1000-500+1)+500);
            console.log("左键")
            $(".food").stop();
            // $(".a1").animate({ left : "" },1000);
            $(".food").animate({ left : "450px" },time2,)
            // if(aa = 400) {
            //     alert("到了")
            // }

            //当用户操作方向时，马上清除定时器
            window.clearTimeout(t10)
            window.clearTimeout(t20)
            break;
        //监听用户按键(方向键上)，马上改变方向
        case 38:
            var time1 = parseInt(Math.random()*(1000-500+1)+500,10);
            console.log("上键")
            $(".a1").stop();
            // $(".a1").animate({ left : "" },1000);
            $(".a1").animate({ top : "0" },time1,function(){
                alert('游戏结束');
            });
            //当用户操作方向时，马上清除定时器
            window.clearTimeout(t10)
            window.clearTimeout(t20)

        //食物动画
        case 38:
            var time2 = Math.floor(Math.random()*(1000-500+1)+500);
            console.log("上键")
            $(".food").stop();
            // $(".a1").animate({ left : "" },1000);
            $(".food").animate({ top : "450px" },time2,)
            // if(aa = 400) {
            //     alert("到了")
            // }

            //当用户操作方向时，马上清除定时器
            window.clearTimeout(t10)
            window.clearTimeout(t20)
            break;
        //监听用户按键(方向键右)，马上改变方向
        case 39:
            var time1 = parseInt(Math.random()*(1000-500+1)+500,10);
            console.log("右键")
            $(".a1").stop();
            // $(".a1").animate({ left : "" },1000);
            $(".a1").animate({ left : "450px" },time1,function(){
                alert('游戏结束');
            });
            //当用户操作方向时，马上清除定时器
            window.clearTimeout(t10)
            window.clearTimeout(t20)

        //食物动画
        case 39:
            var time2 = Math.floor(Math.random()*(1000-500+1)+500);
            console.log("右键")
            $(".food").stop();
            // $(".a1").animate({ left : "" },1000);
            $(".food").animate({ left : "0" },time2,)
            // if(aa = 400) {
            //     alert("到了")
            // }

            //当用户操作方向时，马上清除定时器
            window.clearTimeout(t10)
            window.clearTimeout(t20)
            break;
    }
});



//页面刷新时开始计时
function hello(){
    // alert("hello");
    // $("#a2").addClass("a4")
   // $(".a1").css("left","300px")
    var left = 0;
  //  $(".a1").animate({ left : "450px" },1000);
}
// 使用方法名字执行方法
var t1 = window.setTimeout(hello,10);
var t2 = window.setTimeout("hello()",10);//使用字符串执行方法
window.clearTimeout(t1);//去掉定时器

function dh(){
    //alert("游戏结束")
}
// 使用方法名字执行方法
var t10 = window.setTimeout(dh,1000);
var t20 = window.setTimeout("dh()",1000);//使用字符串执行方法
window.clearTimeout(t10);//去掉定时器

//页面加载之前执行
window.onload=function (){
    //var userName=”xiaoming”;
   // console.log("开始动画")
}




//动态拿坐标
$('.play button').click(function() {
    $(".play").animate({ top : "-3800px" },500);
});


//产生随机数
var rand1 = Math.floor(Math.random () * 450);
// console.log(rand1)
var rand2 = Math.floor(Math.random () * 450);
// console.log(rand2)

//拿到随机数并生成坐标，然后赋值给食物
//在数组中获取随机元素

    var arr = ["pink","red","blue","#444"]
    var index = Math.floor((Math.random()*arr.length))
    var xx = arr[index]
    console.log(xx)
    console.log(arr[3])



function dh10(){
    $(".food").css("top",rand1+"px").css("left",rand2+"px");
    //alert("游戏结束")

    // if($(".a1").css("top",rand1+"px").css("left",rand2+"px")) {
    //     alert("吃到了")
    // }
}
// 使用方法名字执行方法
var t12 = window.setTimeout(dh10,10);
var t22 = window.setTimeout("dh10()",10);//使用字符串执行方法
window.clearTimeout(t10);//去掉定时器

    $(".food").css("backgroundColor","xx")

//游戏美化


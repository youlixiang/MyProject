  //The college students from Sichuan say hello to you--------------**

 //导航栏下拉菜单方法
 $(function () {
	      var $li = $(".wrap>ul>li");	      
	      //给li注册鼠标经过事件，让自己的ul显示出来
	      $li.mouseenter(function () {
	        //找到所有的儿子，并且还得是ul	        
	        //stop：停止当前正在执行的动画
	        $(this).children("ul").stop().slideDown(200);
	      });	  
	      $li.mouseleave(function () {
	        $(this).children("ul").stop().slideUp(200);
	      });	      	      
	    });


//位移轮播图方法
     function my$(id) {
    	return document.getElementById(id);
		}
  //获取最外面的div
  var box = my$("box");
  //获取相框
  var screen = box.children[0];
  //获取相框的宽度
  var imgWidth = screen.offsetWidth;
  //获取ul
  var ulObj = screen.children[0];
  //获取ul中的所有的li
    var list = ulObj.children;
  //获取ol
  var olObj = screen.children[1];
  //焦点的div
  var arr = my$("arr");
  var pic = 0;//全局变量
  //创建小按钮----根据ul中的li个数
  for (var i = 0; i < list.length; i++) {
    //创建li标签,加入到ol中
    var liObj = document.createElement("li");
    olObj.appendChild(liObj);
    //liObj.innerHTML = (i + 1);
    //在每个ol中的li标签上添加一个自定义属性,存储索引值
    liObj.setAttribute("index", i);
    //注册鼠标进入事件
    liObj.onmouseover = function () {
      //先干掉所有的ol中的li的背景颜色
      for (var j = 0; j < olObj.children.length; j++) {
        olObj.children[j].removeAttribute("class");
      }
      //设置当前鼠标进来的li的背景颜色
      this.className = "current";
      //获取鼠标进入的li的当前索引值
      pic = this.getAttribute("index");
      //移动ul
      animate(ulObj, -pic * imgWidth);
    };
  }
  //设置ol中第一个li有背景颜色
  olObj.children[0].className = "current";
  //克隆一个ul中第一个li,加入到ul中的最后=====克隆
  ulObj.appendChild(ulObj.children[0].cloneNode(true));
  //自动播放
 var timeId= setInterval(clickHandle,3000);
  //鼠标进入到box的div显示左右焦点的div
  box.onmouseover = function () {
    arr.style.display = "block";
    //鼠标进入废掉之前的定时器
    clearInterval(timeId);
  };
  //鼠标离开到box的div隐藏左右焦点的div
  box.onmouseout = function () {
    arr.style.display = "none";
    //鼠标离开自动播放
    timeId= setInterval(clickHandle,3000);
  };
  //右边按钮
  my$("right").onclick =clickHandle;
  function clickHandle() {
    //如果pic的值是5,恰巧是ul中li的个数-1的值,此时页面显示第六个图片,而用户会认为这是第一个图,
    //所以,如果用户再次点击按钮,用户应该看到第二个图片
    if (pic == list.length - 1) {
      //如何从第6个图,跳转到第一个图
      pic = 0;//先设置pic=0
      ulObj.style.left = 0 + "px";//把ul的位置还原成开始的默认位置
    }
    pic++;//立刻设置pic加1,那么此时用户就会看到第二个图片了
    animate(ulObj, -pic * imgWidth);//pic从0的值加1之后,pic的值是1,然后ul移动出去一个图片
    //如果pic==5说明,此时显示第6个图(内容是第一张图片),第一个小按钮有颜色,
    if (pic == list.length - 1) {
      //第五个按钮颜色干掉
      olObj.children[olObj.children.length - 1].className = "";
      //第一个按钮颜色设置上
      olObj.children[0].className = "current";
    } else {
      //干掉所有的小按钮的背景颜色
      for (var i = 0; i < olObj.children.length; i++) {
        olObj.children[i].removeAttribute("class");
      }
      olObj.children[pic].className = "current";
    }
  };
  //左边按钮
  my$("left").onclick = function () {
    if (pic == 0) {
      pic = 5;
      ulObj.style.left = -pic * imgWidth + "px";
    }
    pic--;
    animate(ulObj, -pic * imgWidth);
    //设置小按钮的颜色---所有的小按钮干掉颜色
    for (var i = 0; i < olObj.children.length; i++) {
      olObj.children[i].removeAttribute("class");
    }
    //当前的pic索引对应的按钮设置颜色
    olObj.children[pic].className = "current";
  };
  //设置任意的一个元素,移动到指定的目标位置
  function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
      //获取元素的当前的位置,数字类型
      var current = element.offsetLeft;
      //每次移动的距离
      var step = 40;
      step = current < target ? step : -step;
      //当前移动到位置
      current += step;
      if (Math.abs(current - target) > Math.abs(step)) {
        element.style.left = current + "px";
      } else {
        //清理定时器
        clearInterval(element.timeId);
        //直接到达目标
        element.style.left = target + "px";
      }
    }, 10);
  }


  //渐变轮播图
    // 保存元素
    var $carousel = $("#carousel");
    // 获取li们
    var $imgLis = $("#carousel .imgs ul li");
    // 获取小圆点们
    var $circles = $("#circles ol li");
    var $leftBtn = $("#leftBtn");
    var $rightBtn = $("#rightBtn");
    // 数量
    var amount = $circles.length;
    // console.log(amount);
    // 定时器
    var timer = setInterval(rightBtnFun, 5000);
    // 鼠标进入carousel 停止
    $carousel.mouseenter(function() {
      // 停止timer
      clearInterval(timer);
    });
    // 鼠标离开重新开启
    $carousel.mouseleave(function() {
      // 设表先关
      clearInterval(timer);
      // 重新开启
      timer = setInterval(rightBtnFun, 3000);
    });
    // 信号量
    var idx = 0;
    // 右按钮点击事件
    // 左右按钮防流氓 图片不运动才接收新任务
    // 可以将匿名函数提取 将函数名书写在小括号
    $rightBtn.click(rightBtnFun);
    // rightBtnFun();
    // 声明右按钮点击事件
    function rightBtnFun() {
      // 图片在运动，什么事情都不做
      if($imgLis.is(":animated")) {
        return;
      }
      // 图片不运动，才会执行这些语句
      // 老图消失
      $imgLis.eq(idx).fadeOut(800);
      // 信号量改变
      idx ++;
      // 验证
      if(idx > amount - 1) {
        idx = 0;
      }
      // 新图淡入
      $imgLis.eq(idx).fadeIn(1000);
      // 小圆点改变
      $circles.eq(idx).addClass("cur").siblings().removeClass("cur");
    }
    // 左按钮点击事件
    $leftBtn.click(function() {
      // 图片在不运动才接收新任务
      if(!$imgLis.is(":animated")) {
        // 老图淡入
        $imgLis.eq(idx).fadeOut(800);
        // 信号量改变
        idx --;
        if(idx < 0) {
          idx = amount - 1;
        }
        // 新图淡入
        $imgLis.eq(idx).fadeIn(1000);
        // 小圆点改变
        $circles.eq(idx).addClass("cur").siblings().removeClass("cur");
      }
    });
    // 小圆点鼠标进入事件
    // 防流氓 立即触发
    $circles.mouseenter(function() {
      // 老图淡出
      $imgLis.eq(idx).stop(true).fadeOut(800);
      // 信号量改变 $(this)触发 的小圆点
      idx = $(this).index();
      // 新图淡入
      $imgLis.eq(idx).stop(true).fadeIn(1000);
      // 小圆点改变
      $(this).addClass("cur").siblings().removeClass("cur");
    });



//返回顶部按钮方法
//移到450的距离后，右边漂浮出现。
$(document).scroll(function(){
	var hhh = $(document).scrollTop();		
	if(hhh > 450){		
		$('.protype').css("display","block");	
		$('.black_top a').css("display","block");
	}		
	else{
		$('.protype').css("display","none");
		$('.black_top a').css("display","none");
	}		 	 
});	
//返回顶部点击事件    
				$('.black_top a').click(function() {
        	         $('body,html').animate({ scrollTop: 0 }, 1000);
		         });


  
//通过监听光标进入搜索框来操作其他对象
        $(document).ready(function(){
  $("input").focus(function(){
    $(".xxx").css("width","250px");
  });
  $("input").blur(function(){
    $(".xxx").css("width","200px");
  });
  }); 

                $(document).ready(function(){
  $("input").focus(function(){
    $(".o").css("display","block");
  });
  $("input").blur(function(){
    $(".o").css("display","none");
  });
  }); 



//导航栏跟着鼠标跑，然后返回，特效。
 $(function () {
        var $li = $(".zzz");       
        //给li注册鼠标经过事件，让自己的ul显示出来
        $li.mouseenter(function () {
          //找到所有的儿子，并且还得是ul         
          //stop：停止当前正在执行的动画
         $(".yy").css("left","200px").css("background-color","blue");;
        });   
        $li.mouseleave(function () {
          $(".yy").css("left","0px").css("background-color","#6B8F24");
        });               
      });

 $(function () {
        var $li = $(".zzz1");       
        //给li注册鼠标经过事件，让自己的ul显示出来
        $li.mouseenter(function () {
          //找到所有的儿子，并且还得是ul         
          //stop：停止当前正在执行的动画
         $(".yy").css("left","400px").css("background-color","blue");;
        });   
        $li.mouseleave(function () {
          $(".yy").css("left","0px").css("background-color","#6B8F24");
        });               
      });
 $(function () {
        var $li = $(".zzz2");       
        //给li注册鼠标经过事件，让自己的ul显示出来
        $li.mouseenter(function () {
          //找到所有的儿子，并且还得是ul         
          //stop：停止当前正在执行的动画
         $(".yy").css("left","600px").css("background-color","blue");;
        });   
        $li.mouseleave(function () {
          $(".yy").css("left","0px").css("background-color","#6B8F24");
        });               
      });
 $(function () {
        var $li = $(".zzz3");       
        //给li注册鼠标经过事件，让自己的ul显示出来
        $li.mouseenter(function () {
          //找到所有的儿子，并且还得是ul         
          //stop：停止当前正在执行的动画
         $(".yy").css("left","800px").css("background-color","blue");;
        });   
        $li.mouseleave(function () {
          $(".yy").css("left","0px").css("background-color","#6B8F24");
        });               
      });
 $(function () {
        var $li = $(".zzz4");       
        //给li注册鼠标经过事件，让自己的ul显示出来
        $li.mouseenter(function () {
          //找到所有的儿子，并且还得是ul         
          //stop：停止当前正在执行的动画
         $(".yy").css("left","1000px").css("background-color","blue");
        });   
        $li.mouseleave(function () {
          $(".yy").css("left","0px").css("background-color","#6B8F24");
        });               
      });



//监听浏览器向上卷曲的距离来操作其他对象
$(document).scroll(function(){
  var hhh = $(document).scrollTop();    
  if(hhh > 600){   
    $('.sss1').show("");   
  }   
  else{
    $('.sss1').hide(""); 
  }      
}); 
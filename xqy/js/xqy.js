// 顶部开始
(function() {
	$("#service").mouseover(function() {
	$(".service-in").show();
});
//$("#service").mouseout(function() {
//	$(".service-in").hide();
//});
var timer = setTimeout(function() {
	$("#service").mouseout(function() {
	$(".service-in").hide();
});	
},100);
$(".service-in").mouseover(function() {
	clearTimeout(timer);
	$(".service-in").show();
});
$(".service-in").mouseout(function() {
	clearTimeout(timer);
	$(".service-in").hide();
});

$("#store").mouseover(function() {
	$(".store-in").show();
});
var timer = setTimeout(function() {
	$("#store").mouseout(function() {
	$(".store-in").hide();
});
},100);
$(".store-in").mouseover(function() {
	clearTimeout(timer);
	$(".store-in").show();
});
$(".store-in").mouseout(function() {
	$(".store-in").hide();
});
})();

 // 顶部结束

 // 店铺左边开始

 // 店铺描述部分有时间再做
 (function() {

 	$(".shop-score").mouseover(function() {
 	$(".details").show();
 	$(".user-l").css("backgroundColor","#F2F2F2")
 });
  $(".shop-score").mouseout(function() {
 	$(".details").hide();
 	$(".user-l").css("backgroundColor","");
 });
 $(".score-right").mouseover(function() {
 	$(".details").show();
 	$(".user-l").css("backgroundColor","#F2F2F2");
 	// $(this).css("backgroundImage","../images3/up.png");
 });
$(".score-right").mouseout(function() {
 	$(".details").hide();
 	$(".user-l").css("backgroundColor","");
 	// $(this).css("backgroundImage","../images3/up.png");
 });

 })();
 



 //右侧导航栏的功能
 (function() {
 	$(window).scroll(function() {
 		var dis = $("html").scrollTop();
 		// console.log(dis);
 		if(dis>0) {
 			$(".food-top").fadeIn(600);
 		} else {
 			$(".food-top").fadeOut(600);
 		}
 	});

 	$(".food-top").click(function() {
 		$("html").animate({
 			scrollTop:0
 		},1000);
 	})

 })();


 // 放大镜效果
(function() {

	// $(".img").mouseover(function(e) {
	// 	$(".img .jing").css("display","block"); 
	// 	$(".img .da").css("display","block");
		
	// 	$(document).mousemove(function(e) {
	// 		var x = e.clientX - $(".img").offset().left +"px";
	// 		var y = e.clientY - $(".img").offset().top + "px";
	// 		console.log(x);
	// 		$(".img .jing").css({
	// 		left:x,
	// 		top: y
	// 	});
	// 	})
		

	// });


// 获取事件相关元素
		// var oBox1 = document.getElements('box1');
		// var oBox2 = document.getElementById('box2');
		// var oBox3 = document.getElementById('box3');

			// 给box1添加鼠标移上事件
			$(".img")[0].onmouseover = function(e) {
				e = e || event;
				$(".img .jing")[0].style.display = "block";
				$(".img .da")[0].style.display = "block";
				// 给文档添加鼠标移动事件
				document.onmousemove = function(e) {
					e = e || event;
					var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
					// var x = e.clientX-36-oBox1.offsetLeft;
					// var y = e.clientY-50-oBox1.offsetTop;
					
					// var x = e.clientX-$(".img .jing")[0].offsetWidth/2-$(".img")[0].offsetLeft;
					var x = e.clientX-20-74.5;


					// var x = e.clientX-$(".img .jing")[0].offsetWidth/2-$(".img").offset().left;
					// var y = e.clientY-$(".img .jing")[0].offsetHeight/2-$(".img")[0].offsetTop;
					var y = e.clientY +scrollT-20-304;

					// var y = e.clientY-$(".img .jing")[0].offsetHeight/2-$(".img").offset().top;
						// console.log(x)
						// console.log(y)
						// console.log($(".img").offset().left )
						// console.log($(".img").offset().top )
						// console.log(e.clientX);
						// console.log(e.clientY);
						// console.log("===========")
							// 设置鼠标移动范围
					x = x < 0 ? 0 : x;
					x = x > $(".img")[0].offsetWidth - $(".img .jing")[0].offsetWidth ? $(".img")[0].offsetWidth - $(".img .jing")[0].offsetWidth : x;
					y = y < 0 ? 0 : y;
					y = y > $(".img")[0].offsetHeight - $(".img .jing")[0].offsetHeight ? $(".img")[0].offsetHeight - $(".img .jing")[0].offsetHeight : y;
					$(".img .jing")[0].style.left = x + 'px';
					$(".img .jing")[0].style.top = y + 'px';
					
					$(".img .da")[0].style.backgroundPosition = -1.875*x + 'px '+-1.25*y + 'px';
					
				}
			}

	$(".img").mouseout(function() {
		$(".img .jing").css("display","none"); 
		$(".img .da").css("display","none");    
	});



	// 鼠标移上下面图片的效果

	// $(".see>li").mouseover(function() {
	// 	// var arr = []
	// 	$(this).fadeTo(500,1);
	// 	$(this).siblings().fadeTo(500,0.3);
	// })

	$(".see>ul>li").mouseenter(function(){
					
					// 做事情
					$(this).stop().fadeTo(500,1).siblings().stop().fadeTo(500,0.3);
					$(".img>img").attr("src",$(this).children("a").attr("href"));
					// $(".img .da").css("backgroundImage",$(this).children().eq(1).attr("href"))
					// $(".img .da").css("backgroundImage",$(".see #aa a").attr("href"));

					// $(".img .da").css("backgroundImage",$(".see #aa a").eq($(this).index()).attr("href"));
					// $(".img .da").css("backgroundColor","red");
					// $(".img .da").css("backgroundImage",$(".see #aa a").eq($(this).index()).attr("href")); 

					// var str = $(".see #aa a").eq($(this).index()).attr("href");
					// $(".img .da").css("backgroundImage","url(str) 0 0 no-repeat");
					// $(".img .da").css("backgroundColor","red");
					// console.log($(".img .da").css("backgroundImage"));
					// console.log($(".see #aa a").eq($(this).index()).attr("href"));
				});
				
				$(".see").mouseleave(function(){
					$(this).find("ul>li").stop().fadeTo(500,1);
				})

})();


// 倒计时开始
(function() {
	var timer = null;
	var num = $("#time .s").text();
	var num2 = $("#time .m").text();
	// console.log(num2);
	timer = setInterval(function() {
		
		if(num<=0) {
			num = 59;
			num2 = num2-1;
		}
		num--;
		$("#time .s").text(num);
		$("#time .m").text(num2);
		if( num <1 && num2== 0) {
		$(".al").css({"backgroundColor":"#fff","color":"#4C3333","border":"1px solid #DDDDDD"});
			clearInterval(timer);
			
			// console.log($(".ar"))
			return;
		}
	
		// $("#time .s").text(num);
		// $("#time .m").text(num2);
		console.log($(".al"))
	},1000);
})();

// 导航栏的功能

(function() {
	// $(".tabbar-box>ul>li")click
	var oDiv = document.getElementById("oUl");
	console.log(oDiv);
	var aLi = oDiv.getElementsByTagName("li");
	var aA = oDiv.getElementsByTagName("a");
	var Box10 = document.getElementById("box10");
	var Box11 = document.getElementById("box11");
	var Box12 = document.getElementById("box12");

	aLi[0].onclick = function() {
		$("#box11").css("display","none");
		$("#box10").children("div").css("display","block");
		// Box11.style.display = "none";
		// Box10.style.display = "block";
		aA[0].id = "jsa";
		aA[1].id = "";
		aA[2].id = "";

	}
aLi[1].onclick = function() {
		$("#box10").children("div").css("display","none");
		$("#box12").children("div").css("display","none");
		$("#box11").css("display","block");

		// Box10.style.display = "none";
		// Box12.style.display = "none";
		// Box10.style.display = "block";
		aA[1].id = "jsa";
		aA[0].id = "";
		aA[2].id = "";

	}

aLi[2].onclick = function() {
		$("#box11").children("div").css("display","none");
		$("#box10").children("div").css("display","none");
		$("#box12").children("div").css("display","block");

		Box11.style.display = "none";
		Box10.style.display = "block";
		aA[2].id = "jsa";
		aA[1].id = "";
		aA[0].id = "";

	}



	// $("#tabbar-box>ul>li>a").click(function() {
	// 	var indx = $(this).index();
	// 	$("#box10").eq(indx).attr("class","").siblings().attr("class","yincang")
	// })



// 固定导航栏
// console.log($(".tabbar-box").offset().top);
// console.log($(".tabbar-box"));

// var arr = [
// 	{
// 		position: "fixed",
// 		left: $(".sidebar-shop-in").offset().left+"px",
// 		// top: $(".sidebar-shop-in").offset().top,
// 		top: 0,
// 		width: "220px"
// 	},
// 	{
// 		position: "fixed",
// 		left: $(".tabbar-box").offset().left+"px",
// 		// top: $(".tabbar-box").offset().top,
// 		top: 0
// 	},
// 	{
// 		position: "fixed",
// 		// left: $(".phone-in").offset().left,
// 		right: 0,
// 		// top: $(".sidebar-shop-in").offset().top,
// 		top: 0
// 	}
// ];
// var topH = $(".tabbar-box").offset().top;
// console.log($(".tabbar-box").offset().top);
// $(window).scroll(function() {
// 	var scrollT = $("html").scrollTop();
// 	if(scrollT >= topH) {
// 		$(".sidebar-shop-in").addClass(arr[0]);
// 		$(".tabbar-box").addClass(arr[1]);
// 		$(".phone-in").addClass(arr[2]);
// 	}
// })

// console.log(arr[0])
// // console.log($(".phone-in").offset().left);
})();



// 计价器功能
(function(){
	var oNumber = document.getElementById("number");
	var aSpan = oNumber.getElementsByTagName("span");
	var oInt = document.getElementById("gc");
	var oDiv = document.getElementById("gouwuche");
	console.log(oDiv);
	var str = oInt.value;
	aSpan[1].onclick = function() {
		str++;
		oInt.value = str;
		// oDiv.innerText = str;
	}
	aSpan[0].onclick = function() {
		str--;

		if(str < 1) {
			// oInt.disabled = true;
			return;
		}
		oInt.value = str;
	}

})();


// (function() {
// 	$(".clothesColor-right>ol>li").mouseenter(function(){
					
// 					// 做事情
// 					$(this).stop().fadeTo(500,1).siblings().stop().fadeTo(500,0.3);
// 					$(".img>img").attr("src",$(this).children("a").attr("href"));
// 				})();
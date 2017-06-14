window.onload=function(){
	function animate_v6(element,obj,callback){
    //清楚上一次的计时器
    clearInterval(element.timer);
    //为这次动画重新开始计时器
    element.timer = setInterval(function(){

        //因为如果没有假设，只要有一个属性到达目标，就会停下，其他的属性就都无法继续进行变换
        var flag = true;
        //循环的遍历对象，取出其中的键值对，进行动画修改
        for(var attr in obj){
            //对每一个属性进行动画修改
            //当属性是opacity或者z-index等不是以px为单位的就不能像之前一样设置
            if(attr == "opacity"){
                // 1 获取当前值
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                //2计算步长 -- 因为是小数运算，所以变大之后在取整比较
                current *= 100;
                target *= 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //重新设定
                current += step; //已经是放大100倍的数字,在重新设定的时候，要除回来
                element.style[attr] = current / 100;
                //判断停止
            }else if(attr == "zIndex"){
                //因为z-index是没有动画，可以直接设置为目标值就可以了
                element.style[attr] = obj[attr];
                var target = obj[attr];
                var current = target;

            }else if(attr == "zoom"){
                // 1 获取当前值
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                //2计算步长 -- 因为是小数运算，所以变大之后在取整比较
                current *= 100;
                target *= 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //重新设定
                current += step; //已经是放大100倍的数字,在重新设定的时候，要除回来
                element.style[attr] = current / 100;
						}
             else{
                //这个部分即是以px为单位的属性的写法

                //1 获取当前值
                var current = parseFloat(getStyle(element,attr));
                //获取某个属性要到达的目标值
                var target = obj[attr];
                //2 计算步长
                var step = (target - current) / 10;
                //判断方向取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //3 重新设定属性
                current += step;
                element.style[attr] = current + "px";
                //4 判断停止
            }
            if(target != current){
                flag = false;
            }

        }
        //判断是否所有的属性都到达目标值，如果到达了，就停止计时器
        if(flag){
            clearInterval(element.timer);
            //如果计时器停止了，证明动画都已经执行完毕了，调用回调函数，执行你想要动画结束后的逻辑
            callback && callback();
        }
    },20);
}

		

        
         
         
         function getStyle(element,attr){
    if(getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}
         var yao=document.getElementById("yao")
         setInterval(function(){
         	animate_v6(yao,{zoom:1.1},function(){
         		
         		animate_v6(yao,{zoom:1})
         	})
         },1000)
         	var cha=document.getElementById("cha")
             var yqh=document.getElementById("yqh")
         
          var dashe=document.getElementById("dashe")	
          var yao=document.getElementById("yao")
         yao.onclick=function(){
         	yqh.style.display="block"
         	animate_v6(yqh,{top:0,zoom:1,opacity:1})
         	animate_v6(dashe,{left:800})
         }
         
         cha.onclick=function(){
			      animate_v6(yqh,{top:-820,zoom:0,opacity:0})
			      animate_v6(dashe,{left:10000})			      
         }
         
         
         
         var xia=document.getElementsByClassName("xia")[0]
        
        setInterval(function(){
        	animate_v6(xia,{opacity:0.1},function(){
         		animate_v6(xia,{opacity:0.9})
         	})
        },1500)

       	
       	var ds=document.getElementById("ds")
       		var dm=document.getElementsByClassName("dm")[0]
       		var li1=document.getElementById("li1")
       		var li2=document.getElementById("li2")
       		var li3=document.getElementById("li3")
       		var li4=document.getElementById("li4")
       		var video=document.getElementById("video")
       		var video=document.getElementById("tf")
       	document.onscroll=function(){
       			var scrolltop=document.body.scrollTop||document.documentElement.scrollTop
       		if(scrolltop>=1036&&scrolltop<=2000){
       			animate_v6( ds,{left:660})
       		}else{
       			animate_v6(ds,{left:6000})
       		}
       		if(scrolltop>=1300&&scrolltop<=2200){
     			animate_v6( dm,{left:-70})
     			}else{
     			animate_v6(dm,{left:-4500})
     		}
       		var count=document.getElementsByClassName("about")[0].clientWidth
       		var li1lfet=Math.floor(count*0.0849)  
    		var li2lfet=Math.floor(count*0.286) 
       		var li3lfet=Math.floor(count*0.498) 
       		var li4lfet=Math.floor(count*0.715) 
       		
       		if(scrolltop>=2110){
       			animate_v6(li1,{left:li1lfet,top:150,opacity:1,zoom:1})
       			animate_v6(li2,{left:li2lfet,top:150,opacity:1,zoom:1})
       			animate_v6(li3,{left:li3lfet,top:150,opacity:1,zoom:1})
       			animate_v6(li4,{left:li4lfet,top:150,opacity:1,zoom:1})
       		}else if(scrolltop>=2600||scrolltop<=2110){
       			animate_v6(li1,{left:-800,top:0,opacity:0,zoom:0})
       			animate_v6(li2,{left:-800,top:0,opacity:0,zoom:0})
       			animate_v6(li3,{left:2000,top:0,opacity:0,zoom:0})
       			animate_v6(li4,{left:2000,top:0,opacity:0,zoom:0})
       		}
       		if(scrolltop>=2000){
       			video.style.display="none"
       			tf.style.display="none"
       		}
       	}
//     	377
       	var lis=document.getElementById("nav").getElementsByTagName("li")
       	var huis=document.getElementsByClassName("hui")
       	var dzs=document.getElementsByClassName("dz")
       document.getElementById("nav").onmouseout=function(){
       	
       	for ( var i=0;i<dzs.length;i++  ) {
       		animate_v6(dzs[i],{top:900})
       		animate_v6(lis[i],{top:0})
       		huis[i].style.display="block"
       	}	
       	
       }
       	for ( var j=0;j<lis.length;j++ ) {
       		lis[j].num=j
       		lis[j].onmouseover=function(){
       			var index=this.num
       	for ( var i=0;i<lis.length;i++  ) {
       		animate_v6(lis[i],{top:0})
       		huis[i].style.display="block"
       		animate_v6(dzs[i],{top:900})
       	}	
       		animate_v6(this,{top:-100})
       		huis[index].style.display="none"
       		animate_v6(dzs[index],{top:450})
       	}
       	}
       	
       	
       	
       $(function(){
		setInterval(function(){
			$("#dashe").fadeToggle(1000)
		},1000)
			setInterval(function(){
				$("#dashe").animate({top:360},500,function(){
				$("#dashe").animate({top:335},500)
			})
			},1000)

			$("#aul li").hover(function(){
		},function(){})
		
			
			
	})
       
       
       
       
         }

	


//在页面加载完毕时执行多个函数
function addLoadEvent(func){
	var oldonload=window.onload;
	if (typeof window.onload !="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//在页面加载完毕时执行的函数创建为一个队列
addLoadEvent(firstFunction);
addLoadEvent(secondFunction);
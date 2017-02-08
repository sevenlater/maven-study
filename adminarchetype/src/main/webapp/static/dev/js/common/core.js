// description:金八后台核心库
// author:vicshang(2016-04-19 18:46:03)
// update:
var JB={},
prefixProtocol=(("https:" == document.location.protocol) ? "https://" : "http://")
JB.Core={
	userPrefix:prefixProtocol+window.location.host,
	cdnHost:$("#cdnHost").val(),//cdnHostdi
	/* 
	* 核心ajax方法
	* @param obj{object} ajax各项参数
	*/
	ajax:function(obj) {
		var _prefix=JB.Core.userPrefix;
		$.ajax({
			url:_prefix+obj.url,
			type:obj.type||"post",
			data:obj.params,
			dataType:obj.dataType||"json",
			xhrFields: {
            	 withCredentials: true
            },
            cache:false,
			crossDomain: true,
			//发送之前的回调
			beforeSend:function(){
				if(obj.beforeSend&&typeof obj.beforeSend==="function"){
					obj.beforeSend();
				}
			},
			//完成方法
			complete:function(XHR, TS){
				if(obj.complete&&typeof obj.complete==="function"){
					obj.complete(XHR, TS);
				}
			},
			//成功方法
			success:function(data){
				//如果有成功前置方法则调用成功前置方法
				if(obj.noBefore&&typeof obj.noBefore==="function"){
					obj.noBefore(data);
					return;
				}				
				if(obj.success&&typeof obj.success==="function"){
					obj.success(data);
				}
			},
			//ajax方法回调
			error:function(){
				if(obj.error&&typeof obj.error==="function"){
					obj.error();
				}
			}
		});
	},

	//获取cookie
    getCookie:function(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }else{
            return null;
        }
    },
    //设置cookie
    setCookie:function(name,value){
        var Days = 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";domain=.91jinrong.com;expires=" + exp.toGMTString()+";path=/";
    },

}
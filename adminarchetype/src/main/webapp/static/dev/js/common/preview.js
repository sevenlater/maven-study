// description：文章详情预览脚本
// author：vicshang（2016-05-04 14:54:34）
// update:
var JB_ArtPreview=function(){}
JB_ArtPreview.prototype={
	//初始化方法
	init:function(){
		this.initBind();
	},
	//事件绑定
	initBind:function(){
		//预览按钮click事件绑定
		$(".preview_close").click(function(){
			$(".previewWrap").removeClass("active");
		});
	},
	//显示详情预览信息
	showDetail:function(article,content){
		// console.log(article);
		console.log($(".previewWrap").length);
		$(".previewWrap").addClass("active");//弹出遮罩层
		var _contStr=[];
		_contStr.push('<section style="margin-bottom:8px;"><img src="http://static.jinrongbaguanv.com/style/summy.png" style="width: 100%;display:block"></section><section style="line-height: 20px;font-size:14px;color:#666;" id="summary_text_artDesc">'+article.summary+'</section>');
		_contStr.push('<p style="color:#a5a5a5;font-size:14px;margin:14px 0px;">来源：'+article.author+'</p>');
		_contStr.push(content);
		$("#art_previwe").html(_contStr.join(""));
	},
	//显示嘉宾详情预览信息
	showDateDetail:function(article,content){
		console.log($(".previewWrap").length);
		$(".previewWrap").addClass("active");//弹出遮罩层
		var _contStr=[];
		_contStr.push('<div id="out" style="width: 100%;padding: 0px 10px;box-sizing:border-box;">');
		_contStr.push('<div style="width: 100%;padding: 10px 0px;box-sizing:border-box;font-size: 20px; color: #333; line-height: 28px;text-align: justify;word-break:break-all;" id="title">'+article.title+'</div>');
		_contStr.push('<div style="width: 100%;padding-left: 5px;margin-top:3px;height:11px;box-sizing:border-box;font-size: 12px;color: #999;line-height: 10px;border-left: 1px solid #ff55ae;">2016.07.12</div>');
		_contStr.push('<div style="width: 100%;text-align: justify;font-size: 16px;color: #3e3e3e;overflow: hidden;" id="content">'+content+'</div>');
		_contStr.push('</div>');
		$("#art_previwe").html(_contStr.join(""));
		$("img").each(function(){
			if($(this).attr("data-src")){
				$(this).attr("src",$(this).attr("data-src"));
			}
		})
		
	}
}
var jb_ArtPreview=new JB_ArtPreview();
jb_ArtPreview.init();
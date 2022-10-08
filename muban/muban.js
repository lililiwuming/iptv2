######模板列表1
网页-MXone Pro：/index.php/vod/search/page/#PN#/wd/#KEY#.html
网页-MX Pro：/index.php/vod/search/page/#PN#/wd/#KEY#.html
网页-MX(采集站)：/index.php/vod/search/page/#PN#/wd/#KEY#.html
接口-CMS(json)：?ac=videolist&wd=#KEY#&pg=#PN#
接口-CMS(xml)：?ac=videolist&wd=#KEY#&pg=#PN#
接口-CMS(mc10)：?ac=videolist&wd=#KEY#&pg=#PN#
接口-APP(vod)：?wd=#KEY#&page=#PN#
接口-APP(app)：search?test=#KEY#&pg=#PN#
接口-APP(v1)：search?test=#KEY#&pg=#PN#
接口-APP(v2)：search?test=#KEY#&pg=#PN#
接口-iptv(zm)：?ac=list&zm=#KEY#&page=#PN#
接口-iptv(wd)：?ac=list&wd=#KEY#&page=#PN#
######UA列表2
网页：Mozilla/5.0
接口(cms/iptv)：Dalvik/2.1.0
接口(vod)：okhttp/4.1.0
接口(app/v1/v2)：Dart/2.14 (dart:io)
######本地新增3
var key=getVar("输入内容");
var 记录=[];
if(key.indexOf("==http")!=-1&&key.indexOf("#KEY#")!=-1&&(key.indexOf("网页-MXone Pro")!=-1||key.indexOf("网页-MX Pro")!=-1||
key.indexOf("网页-MX(采集站)")!=-1||key.indexOf("接口-CMS(json)")!=-1||key.indexOf("接口-CMS(xml)")!=-1||
key.indexOf("接口-CMS(mc10)")!=-1||key.indexOf("接口-APP(vod)")!=-1||key.indexOf("接口-APP(app)")!=-1||key.indexOf("接口-APP(v1)")!=-1||
key.indexOf("接口-APP(v2)")!=-1||key.indexOf("接口-iptv")!=-1)){
    var filename='站源.json';
    var 输入条目=key.match(/.+==http.+/g);
    for(var j=0;j<输入条目.length;j++){
        var title=e2Rex(输入条目[j],".tz(==)");
        var index=e2Rex(输入条目[j],".ty(==).tz(@@)");
        var search=e2Rex(输入条目[j],".ty(@@).tz(--)");
        var type=e2Rex(输入条目[j],".ty(--).tz(**)");
        var UA=e2Rex(输入条目[j],".ty(**)");
        记录.push({"站名":title,"首页地址":index,"搜索地址":search,"类型":type,"UA":UA});
    }
    if(readStr(filename)){
        var 新记录=JSON.parse(readStr(filename));
    }else{
        var 新记录=[];
    }
    for(var i in 记录){
        var 当前条目=[];当前条目.push(记录[i]);
        if(新记录.length==0){
            新记录.push({title:记录[i].类型,data:当前条目});
        }else{
            let res=新记录.some(item=>{
                if(item.title==记录[i].类型){
                    item.data=当前条目.concat(item.data.filter(d=>d.首页地址!=记录[i].首页地址));
                    return true
                }
            });
            if(!res){
                新记录.push({title:记录[i].类型,data:当前条目});
            }
        }
    }
    writeStr(filename,JSON.stringify(新记录));
    alert(title+"\n规则写入成功");
}else{
    alert("输入格式错误，请重新输入");
}
######站源分类4
var 首页地址=getVar("首页地址");
var 类型=getVar("类型");
var UA=getVar("UA");
function 头部导航(){
    var res={};var items=[];
    if(类型.indexOf("接口")!=-1){
        for (var j=0;j<列表.length;j++){
          var 标题=e2Rex(列表[j],标题规则);
          var 地址=e2Rex(列表[j],地址规则);
          var 分类地址=首页地址+前+地址+后;
          items.push({title:标题,url:分类地址,mode:"OKHTTP",翻页后:翻页后});
        }
    }else if(类型.indexOf("网页")!=-1){
        for(var j=0;j<列表.length;j++){
          if(e2Rex(列表[j],地址规则).indexOf("id")!=-1){
            var 标题=e2Rex(列表[j],标题规则);
            var 地址=e2Rex(列表[j],地址规则).split("id/")[1].split(".html")[0];
            var 分类地址=首页地址+前+地址+后;
            items.push({title:标题,url:分类地址,mode:"JSOUP",翻页后:翻页后});
          }else if(e2Rex(列表[j],地址规则).indexOf("vodtype")!=-1){
              var 标题=e2Rex(列表[j],标题规则);
              var 地址=e2Rex(列表[j],地址规则).split("vodtype/")[1].split(".html")[0];
              var 分类地址=首页地址+前+地址+后;
              items.push({title:标题,url:分类地址,mode:"JSOUP",翻页后:翻页后});
          }
        }
    }
    res.data=items;
    return JSON.stringify(res);
}
if(类型.indexOf("网页")!=-1){
    var 源码=getHttp(JSON.stringify({url:首页地址,redirect:false,head:{"User-Agent":UA}}));
    if(类型.indexOf("MXone Pro")!=-1){
        var 列表=e2Arr(源码,".css(div.sidebar div ul>li)");
        var 标题规则=".css(a).t()";
        var 地址规则=".css(a).a(href)";
        var 前="/index.php/vod/show/id/";
        var 后="/page/";
        var 翻页后='.html';
        头部导航();
    }else if(类型.indexOf("MX Pro")!=-1){
        var 列表=e2Arr(源码,".css(ul.drop-content-items.grid-items>li.grid-item).or().css(div.nav ul>li)");
        var 标题规则=".css(a).t()";
        var 地址规则=".css(a).a(href)";
        var 前="/index.php/vod/show/id/";
        var 后="/page/";
        var 翻页后=".html";
        头部导航();
    }else if(类型.indexOf("MX(采集站)")!=-1){
        var 列表=e2Arr(源码,".css(div.container div ul.stui-header__menu.clearfix>li)");
        var 标题规则=".css(a).t()";
        var 地址规则=".css(a).a(href)";
        var 前="/index.php/vod/type/id/";
        var 后="/page/";
        var 翻页后='.html';
        头部导航();
    }
}else if(类型.indexOf("app")!=-1||类型.indexOf("v1")!=-1||类型.indexOf("v2")!=-1){
    var URL=首页地址+"nav";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    if(类型.indexOf("app")!=-1){
        var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(list)");
        var 标题规则=".json(type_name)";
        var 地址规则=".json(type_id)";
        var 前="video?tid=";
        var 后="&class=&area=&lang=&year=&limit=&pg=";
        var 翻页后='';
        头部导航();
    }else if(类型.indexOf("v1")!=-1){
        var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
        var 标题规则=".json(type_name)";
        var 地址规则=".json(type_id)";
        var 前="video?tid=";
        var 后="&class=&area=&lang=&year=&limit=&pg=";
        var 翻页后='';
        头部导航();
    }else if(类型.indexOf("v2")!=-1){
        var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
        var 标题规则=".json(type_name)";
        var 地址规则=".json(type_id)";
        var 前="video?tid=";
        var 后="&class=&area=&lang=&year=&limit=&pg=";
        var 翻页后='';
        头部导航();
    }
}else if(类型.indexOf("vod")!=-1){
    var URL=首页地址+"/types";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data).json(list)");
    var 标题规则=".json(type_name)";
    var 地址规则=".json(type_id)";
    var 前="?type=";
    var 后="&class=&area=&lang=&year=&by=hits&limit=&page=";
    var 翻页后='';
    头部导航();
}else if(类型.indexOf("CMS")!=-1){
    var URL=首页地址+"?ac=list";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    if(类型.indexOf("json")!=-1){
        var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(class)");
        var 标题规则=".json(type_name)";
        var 地址规则=".json(type_id)";
        var 前="?ac=videolist&t=";
        var 后="&pg=";
        var 翻页后='';
        头部导航();
    }else if(类型.indexOf("xml")!=-1){
        var 列表=e2Arr(源码,".xml(class ty)");
        var 标题规则=".t()";
        var 地址规则=".a(id)";
        var 前="?ac=videolist&t=";
        var 后="&pg=";
        var 翻页后='';
        头部导航();
    }else if(类型.indexOf("mc10")!=-1){
        var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(class)");
        var 标题规则=".json(type_name)";
        var 地址规则=".json(type_id)";
        var 前="?ac=videolist&t=";
        var 后="&pg=";
        var 翻页后='';
        头部导航();
    }
}else if(类型.indexOf("iptv")!=-1){
    var URL=首页地址+"?ac=flitter";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),'.z(\".*?\\]\\}\\])');
    var 标题规则='.z2(\"\\(.*?\\)\")';
    var 地址规则='.z2(\"\\(.*?\\)\")';
    var 前="?ac=list&class=";
    var 后="&area=&type=&start=&page=";
    var 翻页后='';
    头部导航();
}
######筛选条件5

######筛选列表6
var 源码=getVar("源");
var 首页地址=getVar("首页地址");
var 类型=getVar("类型");
function 通用列表(){
    var res={};var items=[];var LIST=[];
    var LIMIT=列表.length;
    for(var j=0;j<LIMIT;j++){
        var CODE=列表[j];
        if(类型.indexOf("iptv")!=-1){
          var 地址=e2Rex(CODE,地址规则);
        }else{
          var 地址=首页地址+e2Rex(CODE,地址规则);
        }
        var 标题=e2Rex(CODE,标题规则);
        var 图片=e2Rex(CODE,图片规则);
        var 播放源=e2Rex(CODE,播放源规则);
        var 状态=e2Rex(CODE,状态规则);
        LIST.push({title:标题,url:地址,img:图片,from:播放源,state:状态});
    }
    var play_={};
    play_.list=LIST;
    items.push(play_);
    res.data=items;
    return JSON.stringify(res);
}
if(类型.indexOf("xml")!=-1){
    var 列表=e2Arr(源码,'.xml(list video)');
    var 标题规则='.xml(name).ty(CDATA[).tz2(]])';
    var 地址规则='.c(?ac=videolist&ids=).xml(id).z(\\d+)';
    if(首页地址.indexOf("mac")!=-1){
        var 图片规则='.xml(pic).t().z(\\S.*\\S).th( ##%20).ty(CDATA[).tz(])';
    }else{
        var 图片规则='.xml(pic).t().z(\\S.*\\S).th( ##%20)';
    }
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).xml(dl).ty(flag=").tz(">).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).xml(type).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("json")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(list)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_play_from).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("mc10")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(list)");
    var 标题规则=".json(vod_name).or().json(art_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id).or().json(art_id)";
    var 图片规则=".json(vod_pic).or().json(art_pic)";
    var 播放源规则=".tx(<p style='background-color:#0997F7'><font color='white' size='40px'>).json(vod_play_from).or().json(art_from).ct(</font></p>)";
    var 状态规则=".tx(<p style='background-color:#CC00FF'><font color='white'>).json(vod_remarks).or().json(type_name).ct(</font></p>)";
    通用列表();
}else if(类型.indexOf("app")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(list)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("v1")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("v2")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("vod")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data).json(list)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(/detail?&vod_id=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("iptv")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(title)";
    var 地址规则=".json(nextlink)";
    var 图片规则=".json(pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(type).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(state).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MXone Pro")!=-1){
    var 列表=e2Arr(源码,".css(div.content div.module a.module-poster-item.module-item)");
    var 标题规则=".css(a).a(title)";
    var 地址规则=".css(a).a(href)";
    var 图片规则=".css(img).a(data-original)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).css(div.module-item-douban).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).css(div.module-item-note).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MX Pro")!=-1){
    var 列表=e2Arr(源码,".css(div.module-items div.module-item)");
    var 标题规则=".css(div.module-item-style.video-name a).t()";
    var 地址规则=".css(div.module-item-style.video-name a).a(href)";
    var 图片规则=".css(img).a(data-src)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_play_from).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).css(div.module-item-text).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MX")!=-1){
    var 列表=e2Arr(源码,".css(ul.stui-vodlist.clearfix li).i(1,-1)");
    var 标题规则=".css(h3 a).a(title)";
    var 地址规则=".css(h3 a).a(href)";
    var 图片规则="http://43.140.205.222:4433/mxtheme/images/load.gif";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).css(span.time).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).css(em).t().ct(</font></p>)';
    通用列表();
}
######首页推荐7
var 首页地址=getVar("首页地址");
var 类型=getVar("类型");
var UA=getVar("UA");
function 通用列表(){
    var res={};var items=[];var LIST=[];
    for(var j=0;j<分类.length;j++){
      var 分类标题=e2Rex(分类[j],分类标题规则);
      var 列表=e2Rex(分类[j],列表规则);
      for(var i=0;i<列表.length;i++){
        if(类型.indexOf("iptv")!=-1){
          var 地址=e2Rex(列表[i],地址规则);
        }else{
          var 地址=首页地址+e2Rex(列表[i],地址规则);
        }
        var 标题=e2Rex(列表[i],标题规则);
        var 图片=e2Rex(列表[i],图片规则);
        var 播放源=e2Rex(列表[i],播放源规则);
        var 状态=e2Rex(列表[i],状态规则);
        LIST.push({title:标题,url:地址,img:图片,from:播放源,state:状态});
    }
    var play_={};
    play_.list=LIST;
    play_.title=分类标题;
    items.push(play_);
    res.data=items;
    return JSON.stringify(res);
}
if(类型.indexOf("xml")!=-1){
    var 列表=e2Arr(源码,'.xml(list video)');
    var 标题规则='.xml(name).ty(CDATA[).tz2(]])';
    var 地址规则='.c(?ac=videolist&ids=).xml(id).z(\\d+)';
    if(首页地址.indexOf("mac")!=-1){
        var 图片规则='.xml(pic).t().z(\\S.*\\S).th( ##%20).ty(CDATA[).tz(])';
    }else{
        var 图片规则='.xml(pic).t().z(\\S.*\\S).th( ##%20)';
    }
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).xml(dl).ty(flag=").tz(">).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).xml(type).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("json")!=-1){
    var URL=首页地址+"?ac=videolist"
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(list)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_play_from).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("mc10")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(list)");
    var 标题规则=".json(vod_name).or().json(art_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id).or().json(art_id)";
    var 图片规则=".json(vod_pic).or().json(art_pic)";
    var 播放源规则=".tx(<p style='background-color:#0997F7'><font color='white' size='40px'>).json(vod_play_from).or().json(art_from).ct(</font></p>)";
    var 状态规则=".tx(<p style='background-color:#CC00FF'><font color='white'>).json(vod_remarks).or().json(type_name).ct(</font></p>)";
    通用列表();
}else if(类型.indexOf("app")!=-1){
    var URL=首页地址+"index_video";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码.replace(/<.*?>/g,""),".json(list)";
    alert(首页地址);
    var 分类标题规则=".json(type_name)";
    var 列表规则=".json(vlist)";
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("v1")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("v2")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("vod")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data).json(list)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(/detail?&vod_id=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("iptv")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(title)";
    var 地址规则=".json(nextlink)";
    var 图片规则=".json(pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(type).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(state).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MXone Pro")!=-1){
    var 列表=e2Arr(源码,".css(div.content div.module a.module-poster-item.module-item)");
    var 标题规则=".css(a).a(title)";
    var 地址规则=".css(a).a(href)";
    var 图片规则=".css(img).a(data-original)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).css(div.module-item-douban).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).css(div.module-item-note).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MX Pro")!=-1){
    var 列表=e2Arr(源码,".css(div.module-items div.module-item)");
    var 标题规则=".css(div.module-item-style.video-name a).t()";
    var 地址规则=".css(div.module-item-style.video-name a).a(href)";
    var 图片规则=".css(img).a(data-src)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_play_from).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).css(div.module-item-text).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MX")!=-1){
    var 列表=e2Arr(源码,".css(ul.stui-vodlist.clearfix li).i(1,-1)");
    var 标题规则=".css(h3 a).a(title)";
    var 地址规则=".css(h3 a).a(href)";
    var 图片规则="http://43.140.205.222:4433/mxtheme/images/load.gif";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).css(span.time).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).css(em).t().ct(</font></p>)';
    通用列表();
}
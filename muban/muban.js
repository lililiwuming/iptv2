######模板列表1
####网页-1
@@网页-MXone Pro-1@@/index.php/vod/show/id/#ID#/page/#PN#.html@@/index.php/vod/search/page/#PN#/wd/#KEY#.html@@Mozilla/5.0@@

####网页-2
@@网页-MXone Pro-2@@/vodshow/#ID#--------#PN#---.html@@/vodsearch/#KEY#----------#PN#---.html@@Mozilla/5.0@@

####网页-3
@@网页-MX Pro-1@@/index.php/vod/show/id/#ID#/page/#PN#.html@@/index.php/vod/search/page/#PN#/wd/#KEY#.html@@Mozilla/5.0@@

####网页-4
@@网页-MX(采集站)@@/index.php/vod/type/id/#ID#/page/#PN#.html@@/index.php/vod/search/page/#PN#/wd/#KEY#.html@@Mozilla/5.0@@

####采集接口-5
@@接口-CMS(json)@@?ac=videolist&t=#ID#&pg=#PN#@@?ac=videolist&wd=#KEY#&pg=#PN#@@Dalvik/2.1.0@@

####采集接口-6
@@接口-CMS(xml)@@?ac=videolist&t=#ID#&pg=#PN#@@?ac=videolist&wd=#KEY#&pg=#PN#@@Dalvik/2.1.0@@

####采集接口-7
@@接口-CMS(mc10)@@?ac=videolist&t=#ID#&pg=#PN#@@?ac=videolist&wd=#KEY#&pg=#PN#@@Dalvik/2.1.0@@

####APP-8
@@接口-APP(app)@@video?tid=#ID#&class=&area=&lang=&year=&limit=&pg=#PN#@@search?test=#KEY#&pg=#PN#@@Dart/2.14 (dart:io)@@

####APP-9
@@接口-APP(v1)@@video?tid=#ID#&class=&area=&lang=&year=&limit=&pg=#PN#@@search?test=#KEY#&pg=#PN#@@Dart/2.14 (dart:io)@@

####APP-10
@@接口-APP(v2)@@video?tid=#ID#&class=&area=&lang=&year=&limit=&pg=#PN#@@search?test=#KEY#&pg=#PN#@@Dart/2.14 (dart:io)@@

####APP-11
@@接口-APP(vod)@@?type=#ID#&class=&area=&lang=&year=&by=hits&limit=&page=#PN#@@?wd=#KEY#&page=#PN#@@okhttp/4.1.0@@

####APP-12
@@接口-iptv(zm)@@?ac=list&class=#ID#&area=&type=&start=&page=#PN#@@?ac=list&zm=#KEY#&page=#PN#@@Dalvik/2.1.0@@

####APP-13
@@接口-iptv(wd)@@?ac=list&class=#ID#&area=&type=&start=&page=#PN#@@?ac=list&wd=#KEY#&page=#PN#@@Dalvik/2.1.0@@

######切割列表2
网页：#IOS
其它：?
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
        var indexurl=e2Rex(输入条目[j],".ty(==).tz(##)");
        var typeurl=e2Rex(输入条目[j],".ty(##).tz(@@)");
        var searchurl=e2Rex(输入条目[j],".ty(@@).tz(€€)");
        var type=e2Rex(输入条目[j],".ty(€€).tz(**)");
        var UA=e2Rex(输入条目[j],".ty(**)");
        记录.push({"站名":title,"首页地址":indexurl,"分类地址":typeurl,"搜索地址":searchurl,"类型":type,"UA":UA});
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
var 分类url=getVar("分类地址");
var 类型=getVar("类型");
var UA=getVar("UA");
function 头部导航(){
    var res={};var items=[];
    if(类型.indexOf("接口")!=-1){
        for(var j=0;j<列表.length;j++){
            var 标题=e2Rex(列表[j],标题规则);
            var 地址=e2Rex(列表[j],地址规则);
            var ID=e2Rex(列表[j],地址规则);
            var 分类地址=首页地址+分类url.replace('#ID#',ID);
            分类地址=分类地址.split('#PN#')[0]+分类url.split('#PN#')[1];
            var 分类筛选=JSON.parse(列表)[j].type_extend;
            var str="";
            for(var key in 分类筛选[j]){
                if(key=="class"||key=="area"||key=="lang"||key=="year"){
                    str=str+"筛选"+key+"+全部=+"+分类筛选[key].replace(/,/g,"+")+"\r\n";
                }
            }
            if(类型.indexOf("vod")!=-1){
                str+"\r\n"+"排序+全部=+最新=time+最热=hits+评分=score";
            }else if(类型.indexOf("app")!=-1||类型.indexOf("v1")!=-1||类型.indexOf("v2")!=-1){
                str;
            }else if(类型.indexOf("iptv")!=-1){
                str="类型+全部=+喜剧+爱情+恐怖+动作+科幻+剧情+战争+警匪+犯罪+动画+奇幻+武侠+冒险+枪战+恐怖+悬疑+惊悚+经典+青春+文艺+微电影+古装+历史+运动+农村+惊悚+惊悚+伦理+情色+福利+三级+儿童+网络电影\n地区+全部=+大陆+香港+台湾+美国+英国+法国+日本+韩国+德国+泰国+印度+西班牙+加拿大+其他\n年份+全部=+2022+2021+2020+2019+2018+2017+2016+2015+2014+2013+2012+2011+2010+2009+2008+2007+2006+2005+2004+2003+2002+2001+2000";
            }else{
                str="";
            }
            items.push({title:标题,url:分类地址,mode:"OKHTTP",翻页后:翻页后,type_extend:str});
        }
    }else if(类型.indexOf("网页")!=-1){
        for(var j=0;j<列表.length;j++){
            var 标题=e2Rex(列表[j],标题规则);
            var ID=e2Rex(列表[j],地址规则).match(/[0-9]/);
            var 分类地址=首页地址+分类url.replace('#ID#',ID);
            分类地址=分类地址.split('#PN#')[0]+分类url.split('#PN#')[1].split('.html')[0];
            items.push({title:标题,url:分类地址,mode:"JSOUP",翻页后:翻页后});
        }
    }
    res.data=items;
    return JSON.stringify(res);
}
if(类型.indexOf("xml")!=-1){
    var URL=首页地址+"?ac=list";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码,".xml(class ty)");
    var 标题规则=".t()";
    var 地址规则=".a(id)";
    var 翻页后='';
    头部导航();
}else if(类型.indexOf("json")!=-1){
    var URL=首页地址+"?ac=list";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(class)");
    var 标题规则=".json(type_name)";
    var 地址规则=".json(type_id)";
    var 翻页后='';
    头部导航();
}else if(类型.indexOf("mc10")!=-1){
    var URL=首页地址+"?ac=list";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(class)");
    var 标题规则=".json(type_name)";
    var 地址规则=".json(type_id)";
    var 翻页后='';
    头部导航();
}else if(类型.indexOf("app")!=-1){
    var URL=首页地址+"nav";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(list)");
    var 标题规则=".json(type_name)";
    var 地址规则=".json(type_id)";
    var 翻页后='';
    头部导航();
}else if(类型.indexOf("v1")!=-1){
    var URL=首页地址+"nav";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(type_name)";
    var 地址规则=".json(type_id)";
    var 翻页后='';
    头部导航();
}else if(类型.indexOf("v2")!=-1){
    var URL=首页地址+"nav";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(type_name)";
    var 地址规则=".json(type_id)";
    var 翻页后='';
    头部导航();
}else if(类型.indexOf("vod")!=-1){
    var URL=首页地址+"/types";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data).json(list)");
    var 标题规则=".json(type_name)";
    var 地址规则=".json(type_id)";
    var 翻页后='';
    //var 分类筛选=e2Arr(源码.replace(/<.*?>/g,""),".json(data).json(list).json(type_extend)");
    头部导航();
}else if(类型.indexOf("iptv")!=-1){
    var URL=首页地址+"?ac=flitter";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),'.z(\".*?\\]\\}\\])');
    var 标题规则='.z2(\"\\(.*?\\)\")';
    var 地址规则='.z2(\"\\(.*?\\)\")';
    var 翻页后='';
    头部导航();
}else if(类型.indexOf("MXone Pro")!=-1){
    var 源码=getHttp(JSON.stringify({url:首页地址,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码,".get(div.sidebar a[href~=/vod/type/.+]).or().get(div.sidebar a[href~=/vodtype/.+]).or().get(div.sidebar a[href~=/type/.+])");
    var 标题规则=".get(a).t()";
    var 地址规则='.get(a).a(href)';
    var 翻页后='.html';
    头部导航();
}else if(类型.indexOf("MX Pro")!=-1){
    var 源码=getHttp(JSON.stringify({url:首页地址,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码,".get(div.nav-menu-item a[href~=/vod/type/.+]).or().get(div.nav ul>li)");
    var 标题规则=".get(a).t()";
    var 地址规则=".get(a).a(href)";
    var 翻页后='.html';
    头部导航();
}else if(类型.indexOf("MX(采集站)")!=-1){
    var 源码=getHttp(JSON.stringify({url:首页地址,redirect:false,head:{"User-Agent":UA}}));
    var 列表=e2Arr(源码,".get(div.container div ul.stui-header__menu.clearfix>li)");
    var 标题规则=".get(a).t()";
    var 地址规则=".get(a).a(href)";
    var 翻页后='.html';
    头部导航();
}
######筛选条件5
var URL=getVar("地址");
var 分类筛选=JSON.parse(getVar("源")).type_extend;
var str="";
for(var key in 分类筛选){
    if(key=="class"||key=="area"||key=="lang"||key=="year"){
        str=str+"筛选"+key+"+全部=+"+分类筛选[key].replace(/,/g,"+")+"\r\n";
    }
}
if(URL.indexOf(".vod")!=-1){
  str+"\r\n"+"排序+全部=+最新=time+最热=hits+评分=score";
}else if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1||URL.indexOf("xgtv")!=-1){
  str;
}else{
    "类型+全部=+喜剧+爱情+恐怖+动作+科幻+剧情+战争+警匪+犯罪+动画+奇幻+武侠+冒险+枪战+恐怖+悬疑+惊悚+经典+青春+文艺+微电影+古装+历史+运动+农村+惊悚+惊悚+伦理+情色+福利+三级+儿童+网络电影\n地区+全部=+大陆+香港+台湾+美国+英国+法国+日本+韩国+德国+泰国+印度+西班牙+加拿大+其他\n年份+全部=+2022+2021+2020+2019+2018+2017+2016+2015+2014+2013+2012+2011+2010+2009+2008+2007+2006+2005+2004+2003+2002+2001+2000";
}
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
        if(类型.indexOf("网页")!=-1){
            var mode="JSOUP";
        }else{
            var mode="OKHTTP";
        }
        LIST.push({title:标题,url:地址,img:图片,from:播放源,state:状态,mode:mode});
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
    var 地址规则=".c(video_detail?id=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("v1")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(video_detail?id=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("v2")!=-1){
    var 列表=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(video_detail?id=).json(vod_id)";
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
    var 列表=e2Arr(源码,".get(a[href~=/vod/detail/.+]).or().get(a[href~=/voddetail/.+])");
    var 标题规则=".get(a).a(title)";
    var 地址规则=".get(a).a(href)";
    var 图片规则=".get(img).a(data-original)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).get(div.module-item-douban).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).get(div.module-item-note).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MX Pro")!=-1){
    var 列表=e2Arr(源码,".get(div.module-items div.module-item)");
    var 标题规则=".get(div.module-item-style.video-name a).t()";
    var 地址规则=".get(div.module-item-style.video-name a).a(href)";
    var 图片规则=".get(img).a(data-src)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_play_from).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).get(div.module-item-text).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MX")!=-1){
    var 列表=e2Arr(源码,".get(ul.stui-vodlist.clearfix li).i(1,-1)");
    var 标题规则=".get(h3 a).a(title)";
    var 地址规则=".get(h3 a).a(href)";
    var 图片规则="http://43.140.205.222:4433/mxtheme/images/load.gif";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).get(span.time).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).get(em).t().ct(</font></p>)';
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
        var 列表=e2Arr(分类[j],列表规则);
        var LIST=[];
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
            if(类型.indexOf("网页")!=-1){
                var mode="JSOUP";
            }else{
                var mode="OKHTTP";
            }
            LIST.push({title:标题,url:地址,img:图片,from:播放源,state:状态,mode:mode});
        }
        var play_={};
        play_.list=LIST;
        play_.title=分类标题;
        items.push(play_);
    }
    res.data=items;
    return JSON.stringify(res);
}
if(类型.indexOf("xml")!=-1){
    var URL=首页地址+"?ac=videolist";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));;
    var 分类=e2Arr(源码,".c()");
    var 分类标题规则="最新";
    var 列表规则='.xml(list video)';
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
    var URL=首页地址+"?ac=videolist";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码.replace(/<.*?>/g,""),".c()");
    var 分类标题规则="最新";
    var 列表规则=".json(list)";
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_play_from).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("mc10")!=-1){
    var URL=首页地址+"?ac=videolist";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码.replace(/<.*?>/g,""),".c()");
    var 分类标题规则="最新";
    var 列表规则=".json(list)";
    var 标题规则=".json(vod_name).or().json(art_name)";
    var 地址规则=".c(?ac=videolist&ids=).json(vod_id).or().json(art_id)";
    var 图片规则=".json(vod_pic).or().json(art_pic)";
    var 播放源规则=".tx(<p style='background-color:#0997F7'><font color='white' size='40px'>).json(vod_play_from).or().json(art_from).ct(</font></p>)";
    var 状态规则=".tx(<p style='background-color:#CC00FF'><font color='white'>).json(vod_remarks).or().json(type_name).ct(</font></p>)";
    通用列表();
}else if(类型.indexOf("app")!=-1){
    var URL=首页地址+"index_video";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码.replace(/<.*?>/g,""),".json(list)");
    var 分类标题规则=".json(type_name)";
    var 列表规则=".json(vlist)";
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(video_detail?id=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("v1")!=-1){
    var URL=首页地址+"index_video";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 分类标题规则=".json(type_name)";
    var 列表规则=".json(vlist)";
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(video_detail?id=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("v2")!=-1){
    var URL=首页地址+"index_video";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码.replace(/<.*?>/g,""),".json(data)");
    var 分类标题规则=".json(name)";
    var 列表规则=".json(vlist)";
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(video_detail?id=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("vod")!=-1){
    var URL=首页地址+"/vodPhbAll";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码.replace(/<.*?>/g,""),".json(data).json(list)");
    var 分类标题规则=".json(vod_type_name)";
    var 列表规则=".json(vod_list)";
    var 标题规则=".json(vod_name)";
    var 地址规则=".c(/detail?&vod_id=).json(vod_id)";
    var 图片规则=".json(vod_pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(vod_score).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(vod_remarks).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("iptv")!=-1){
    var URL=首页地址+"?ac=list";
    var 源码=getHttp(JSON.stringify({url:URL,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码.replace(/<.*?>/g,""),".c()");
    var 分类标题规则="最新";
    var 列表规则=".json(data)";
    var 标题规则=".json(title)";
    var 地址规则=".json(nextlink)";
    var 图片规则=".json(pic)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).json(type).ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).json(state).ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MXone Pro")!=-1){
    var 源码=getHttp(JSON.stringify({url:首页地址,redirect:false,head:{"User-Agent":UA}}));
    if(源码.indexOf("追剧周表")!=-1&&源码.indexOf("label/hot.html")!=-1){
        var 分类=e2Arr(源码,".get(div.content div.module).i(1,-2)");
    }else if(源码.indexOf("追剧周表")!=-1){
        var 分类=e2Arr(源码,".get(div.content div.module).i(1,-1)");
    }else if(源码.indexOf("label/hot.html")!=-1){
        var 分类=e2Arr(源码,".get(div.content div.module).i(0,-2)");
    }else{
        var 分类=e2Arr(源码,".get(div.content div.module)");
    }
    var 分类标题规则=".get(h2).t()";
    var 列表规则=".get(div.module-items a)";
    var 标题规则=".get(a).a(title)";
    var 地址规则=".get(a).a(href)";
    var 图片规则=".get(img).a(data-original)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).get(div.module-item-douban).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).get(div.module-item-note).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MX Pro")!=-1){
    var 源码=getHttp(JSON.stringify({url:首页地址,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码,".get(div.content div.module.module-wrapper)");
    var 分类标题规则=".get(h2).t()";
    var 列表规则=".get(div.module-item)";
    var 标题规则=".get(a).a(title)";
    var 地址规则=".get(a).a(href)";
    var 图片规则=".get(img).a(data-src)";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).get(psan.video-class).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).get(div.module-item-text).t().ct(</font></p>)';
    通用列表();
}else if(类型.indexOf("MX")!=-1){
    var 源码=getHttp(JSON.stringify({url:首页地址,redirect:false,head:{"User-Agent":UA}}));
    var 分类=e2Arr(源码,".get(ul.stui-vodlist.clearfix)");
    var 分类标题规则="最新";
    var 列表规则=".get(li).i(1,-1)";
    var 标题规则=".get(h3).a(title)";
    var 地址规则=".get(h3 a).a(href)";
    var 图片规则="http://43.140.205.222:4433/mxtheme/images/load.gif";
    var 播放源规则='.c(<font color=\"#0997F7\"><b>).get(span.time).t().ct(</b></font><br>)';
    var 状态规则='.tx(<p style=\"background-color:#CC00FF\"><font color=\"#FFFFFF\">).get(em).t().ct(</font></p>)';
    通用列表();
}
######重组搜索8

######重组选集9
var 类型=getVar("类型");
var 首页地址=getVar("首页地址");
var URL=getVar("地址");
function 选集列表(){
    var res={};var items=[];var detail=[];
    for(var i=0;i<分类.length;i++){
        var 分类CODE=分类[i];
        var 列表=e2Arr(分类CODE,列表规则);
        if(线路){
            var 标题=e2Rex(线路[i],标题规则);
        }else{
            var 标题=e2Rex(分类CODE,标题规则);
        }
        if(类型.indexOf("vod")!=-1){
            var PARSE=e2Rex(分类CODE,".json(player_info).json(parse)").split(",");
            var PARSE2=e2Rex(分类CODE,".json(player_info).json(parse2)").split(",");
            var 总接口=PARSE2.concat(PARSE).filter(item => item.search(/\/.+\?.+=/)!=-1);
            var 过滤规则=[
                /jx\.+huimaojia\.+com\/player/,/py\.+789pan\.+cn\/player\/tm\.php\?url=/,/ztys\.+waruanzy\.+com\/player\/\?url=/,/yingshi\.+waruanzy\.+com\/789pan\/\?url=/,/vip\.+parwix\.+com:4433\/player\/\?url=/,/api\.+cxitco\.+cn/,/\/vip\.+renrenmi.cc/,/yanbing\.+parwix\.+com:4433\/player/,/json\.+cantin\.+cc\/apijson\.php/,/ffdm\.+miaoletv\.+com\/\?url=/,/vip\.+sylwl\.+cn\/api\/\?key=/,/jx\.+dikotv\.+com\/\?url=/,/zly\.+xjqxz\.+top\/player\/\?url=/,/5znn\.+xyz\/m3u8\.+php/,/uid=1735&my=/,/api\.+xkvideo\.+design\/m3u8\.+php\?url=/,/play\.+szbodankyy\.+com\/xxoocnmb/,/vip\.+fj6080\.+xyz\/player\/\?url=/,/a\.+dxzj88\.+com\/jiexi/,/host\.+q-q\.+wang\/api/,/qpsvipr\.+naifeimi\.+com/,/mogai_api\.+php/,/lvdou_api\.+php/,/nfuxs\.+com/,/vip123kan\.+vip/,/zjmiao\.+com/,/nfuxs\.+club/,/cygc\.+xyz/,/vip6488502121\.+bibilili\.+vip/,/lg\.+umkan/,/yuml\.+vip/,/newjiexi\.+gotka\.+top/,/保佑/
            ];
            var 可用接口=总接口.filter(function (text) {return !过滤规则.some(function (regex) {return regex.test(text);});});
            if(JSON.stringify(可用接口).indexOf("=")!=-1){
                if(可用接口[0].indexOf("http")!=-1){
                    var 接口=可用接口[0].match(/.*(url|v|vid|php\?id)=/)[0].replace("..",".").replace("vip.aotian.love","vip.gaotian.love");
                }else if(可用接口[0].indexOf("//")!=-1){
                    var 接口="http:"+可用接口[0].match(/\/\/.*(url|v|vid|php\?id)=/)[0].replace("..",".");
                }else{
                    var 接口=URL.match(/https?:\/\/[^\/]*/)[0]+可用接口[0].match(/\/.*(url|v|vid|php\?id)=/)[0].replace("..",".");
                }
            }else{
                var 接口="";
            }
        }else if(类型.indexOf("app")!=-1||类型.indexOf("v1")!=-1||类型.indexOf("v2")!=-1){
            var 接口=e2Rex(分类CODE,".json(parse_api)");
        }else{
            var 接口="";
        }
        var LIST=[];
        for(var j=0;j<列表.length;j++){
            if(类型.indexOf("CMS")!=-1){
                var 选集=e2Rex(列表[j],选集规则);
                var 选集地址=e2Rex(列表[j],选集地址规则);
                var 接口="";
                if(列表[j].indexOf("$")!=-1){
                    选集=e2Rex(列表[j],选集规则);
                    if(选集==""){
                        选集=j+1;
                    }
                }else{
                    选集=j+1;
                }
            }else if(类型.indexOf("接口")!=-1){
                if(类型.search("iptv")!=-1){
                    var 选集=e2Rex(列表[j],选集规则);
                    var 选集地址=e2Rex(列表[j],选集地址规则);
                    if(选集地址.match(/.*(url|v|vid|php\?id)=/)){
                        var 接口=选集地址.match(/.*(url|v|vid|php\?id)=/)[0];
                        var 选集地址=选集地址.split(接口)[1];
                        接口="";
                    }else{
                        var 选集地址=选集地址;
                        var 接口="";
                    }
                }else{
                    var 选集=e2Rex(列表[j],选集规则);
                    var 选集地址=e2Rex(列表[j],选集地址规则);
                    var 接口=接口;
                }
            }else if(类型.indexOf("网页")!=-1){
                var 选集=e2Rex(列表[j],选集规则);
                var 选集地址=首页地址+e2Rex(列表[j],选集地址规则);
                var 接口="";
            }
            if(接口.indexOf("cache.tegouys.com")!=-1||接口.indexOf("lswwe.com")!=-1||接口.indexOf("x-n.cc")!=-1||接口.indexOf("20.239.162.68")!=-1||接口.indexOf("jhsj.manduhu.com")!=-1||接口.indexOf("v.jhdyw.vip/nhdz666")!=-1||接口.indexOf("svip.jhyun.jx.cn")!=-1||接口.indexOf("svip.jhdyw.vip")!=-1||接口.indexOf("api.xvtt.cn")!=-1||接口.indexOf("svip.jiexi.de")!=-1){
                接口="";
            }else{
                接口=接口;
            }
            if(选集地址.indexOf("m3u8.cache.suoyo.cc")==-1&&选集地址.indexOf(".m3u8")!=-1||选集地址.indexOf(".mp4")!=-1||选集地址.indexOf("/obj/tos")!=-1){
                var 接口="";
            }else if(接口.indexOf("http")!=-1){
                var 接口=接口;
            }else{
                var AddJX=readStr("解析.txt");
                var AddJXCode=String(AddJX);
                eval(AddJXCode);
            }
            if(readStr('解析模式.txt').indexOf("自定义")!=-1){
                var AddJX=readStr("自定义解析.txt");
                var AddJXCode=String(AddJX);
                eval(AddJXCode);
            }else{
                var 接口=接口;
            }
            if(选集地址.indexOf("CMV-")!=-1){
                接口="";
                选集地址=选集地址.replace("CMV-","https://cokemv.me/vodplay/")+".html";
            }else if(类型.indexOf("网页")!=-1){
                接口="";
                选集地址=选集地址;
            }else{
                接口=接口;
                选集地址=选集地址;
            }
            LIST.push({title:选集,url:接口+选集地址});
        }
        var play_={};
        play_.from=URL;
        play_.title=标题;
        play_.list=LIST;
        items.push(play_);
    }
    detail.push({desc:简介});
    res.data=items;
    res.desc=detail;
    return JSON.stringify(res);
}
var 源=getVar("源");
if(类型.indexOf("xml")!=-1){
    var 简介=e2Rex(源,".c(类型:).xml(type).c(<br>演员表:).xml(actor).c(<br>简介:).xml(des)");
    var 分类=e2Arr(源,".get(dd)");
    var 标题规则=".a(flag)";
    var 列表规则=".z2(CDATA\\[\\([\\s\\S]*?\\)[#]*?\\]).fg(#)";
    var 选集规则=".tz($)";
    var 选集地址规则=".z2(\\$\\([^\$|&]*\\)).or().z(.*)";
    选集列表();
}else if(类型.indexOf("飞飞")!=-1){
    var 简介=e2Rex(源,".c(演员表:).json(data).json(vod_actor).c(<br>简介:).json(data).json(vod_content)");
    var 分类=e2Arr(源.replace(/<.*?>/g,""),".json(data).json(vod_url).fg(\\$\\$\\$)");
    var 线路=e2Arr(源,".json(data).json(vod_play).fg(\\$\\$\\$)");
    var 标题规则=".t()";
    var 列表规则=".fg(#)";
    var 选集规则=".tz($)";
    var 选集地址规则=".z2(\\$\\(.*\\)).or().z(.*)";
    选集列表();
}else if(类型.indexOf("json")!=-1||类型.indexOf("mc10")!=-1){
    var 简介=e2Rex(源,".c(演员表:).json(list).json(vod_actor).c(<br>简介:).json(list).json(vod_content)");
    var 分类=e2Arr(源.replace(/<.*?>/g,""),".json(list).json(vod_play_url).fg(\\$\\$\\$)");
    var 线路=e2Arr(源.replace(/<.*?>/g,""),".json(list).json(vod_play_from).fg(\\$\\$\\$)");
    var 标题规则=".t()";
    var 列表规则=".fg(#)";
    var 选集规则=".tz($)";
    var 选集地址规则=".z2(\\$\\(.*\\)).or().z(.*)";
    选集列表();
}else if(类型.indexOf("app")!=-1){
    var 简介=e2Rex(源,'.json(data).json(vod_content)');
    var 分类=e2Arr(源,'.json(data).json(vod_url_with_player)');
    var 标题规则='.json(name).c(-).json(code)';
    var 列表规则='.json(url).ct(#).z(.*?\\$.*?#)';
    var 选集规则='.z2(\\(.+?\\)\\$)';
    var 选集地址规则='.z2(\\$\(.+?\\)[#|\"])';
    选集列表();
}else if(类型.indexOf("v1")!=-1||类型.indexOf("v2")!=-1){
    var 简介=e2Rex(源,'.json(data).json(vod_info).json(vod_content)');
    var 分类=e2Arr(源,'.json(data).json(vod_info).json(vod_url_with_player)');
    var 标题规则='.json(name).c(-).json(code)';
    var 列表规则='.json(url).ct(#).z(.*?\\$.*?#)';
    var 选集规则='.z2(\\(.+?\\)\\$)';
    var 选集地址规则='.z2(\\$\\(.+?\\)[#|\"])';
    选集列表();
}else if(类型.indexOf("vod")!=-1){
    var 简介=e2Rex(源,'.json(data).json(vod_content)');
    var 分类=e2Arr(源.replace(/\s+/g,""),'.json(data).json(vod_play_list)');
    var 标题规则='.json(player_info).json(show).c(-).json(player_info).json(from)';
    var 列表规则='.json(url).ct(#).z(.*?\\$.*?#)';
    var 选集规则='.z2(\\(.+?\\)\\$)';
    var 选集地址规则='.z2(\\$\\(.+?\\)[#|\"])';
    选集列表();
}else if(类型.search("iptv")!=-1){
    var 简介=e2Arr(源,'.json(intro)');
    var 分类=e2Arr(源,'.json(videolist).z(\".*?\\])');
    var 标题规则='.z2(\"\\(.*?\\)\")';
    var 列表规则='.z(\\{.*?\\})';
    var 选集规则='.json(title)';
    var 选集地址规则='.json(url)';
    选集列表();
}else if(类型.indexOf("MXone Pro")!=-1){
    var 简介=e2Arr(源,'.get(div.module-info-introduction-content).t()');
    var 分类=e2Arr(源,'.get(div[id~=panel.*])');
    var 线路=e2Arr(源,'.z(data-dropdown-value=".+?")');
    var 标题规则='.ty(").tz(")';
    var 列表规则='.get(a[href~=/vodplay/.+]).or().get(a[href~=/vod/play/.+])';
    var 选集规则='.get(a).t()';
    var 选集地址规则='.get(a).a(href)';
    选集列表();
}else if(类型.indexOf("MX Pro")!=-1){
    var 简介=e2Arr(源,'.get(div.video-info-items).t()');
    var 分类=e2Arr(源,'.get(div[id~=glist.*])');
    var 线路=e2Arr(源,'.z(data-dropdown-value=".+?")');
    var 标题规则='.ty(").tz(")';
    var 列表规则='.get(a[href~=/vodplay/.+]).or().get(a[href~=/vod/play/.+])';
    var 选集规则='.get(a).t()';
    var 选集地址规则='.get(a).a(href)';
    选集列表();
}else if(类型.indexOf("MX(采集站)")!=-1){
    var 简介=e2Arr(源,'.get(div[id~=desc.*]).t()');
    var 分类=e2Arr(源,'.get(div[id~=playlist.*])');
    var 标题规则='.get(h3).t()';
    var 列表规则='.get(li)';
    var 选集规则='.get(a.copy_text).t().tz($)';
    var 选集地址规则='.get(a).a(href)';
    选集列表();
}
######播放规则10
var uu=getVar("地址");
var 类型=getVar("类型");
if(uu.indexOf("wd=")!=-1){
    uu=uu.split("wd=")[1];
}else{
    uu=uu;
}
if(类型.indexOf("接口")!=-1){
    if(uu.indexOf("player.4kya.com")!=-1||uu.indexOf("netflixvip.4kya.com")!=-1){
        "web="+uu+'@{"Referer":"https://netflix.mom/"}';
    }else if(uu.indexOf("www.meiju11.com")!=-1){
        'web='+uu+'@{"Referer":"https://www.meiju11.com/"}';
    }else if(uu.indexOf("dmplay.xyz/d?url=")!=-1){
        "web="+uu+'@{"Referer":"https://zy.hikan.xyz/","sec-ch-ua-platform":"Windows","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.50"}';
    }else if(uu.indexOf("magnet:?xt=")!=-1){
        JSON.stringify({name:"真实播放地址",url:uu});
    }else if(uu.indexOf("api.m3u8.tv:5678")!=-1){
        var resp=JZ(JSON.stringify({url:uu,head:{"User-Agent":"Mozilla/5.0 Android","Cookie":""}}));
        if(e2Rex(resp.code,".json(url)").length>1){
            var realurl=JSON.parse(resp.code).url;
            if(uu.indexOf("mgtv.com")!=-1){
                JSON.stringify({name:"真实播放地址",url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
            }else{
                JSON.stringify({name:"真实播放地址",url:realurl});
            }
        }else{
            "web=http://1.117.152.239:39000/?url="+uu.split("url=")[1];
        }
    }else if(uu.indexOf("ruifenglb.com")!=-1){
        var resp=JZ(JSON.stringify({url:"https://jx.yjhan.com:4488/home/api?type=ys&uid=243669&key=adnqrtwyFJLOW04444&url="+uu}));
        var realurl=e2Rex(resp.code,".json(url)");
        JSON.stringify({name:"真实播放地址",url:realurl});
    }else if(uu.match(/.*(url|v|u|vid|pid|php\?id)=/)){
        var resp=JZ(JSON.stringify({url:uu,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
        if(resp.code.indexOf("<html")!=-1){
            if(resp.code.search(/<div class="video"/)!=-1||resp.code.search(/<div id="video"/)!=-1||resp.code.search(/<div id="[^"]*?player"/)!=-1||resp.code.search(/\/\/视频链接/)!=-1||resp.code.search(/<iframe[\s\S]*?src="[^"]+?"/)!=-1||resp.code.search(/<video[\s\S]*?src="[^"]+?"/)!=-1||resp.code.search(/<div id="jx-content"/)!=-1){
                "web="+uu;
            }else{
                if(uu.match(/.*(url|v|u|vid|pid|php\?id)=/)){
                    var uuu=uu.match(/.*(url|v|u|vid|pid|php\?id)=/)[0];
                    var uuuu=uu.split(uuu)[1];
                    "web=http://43.140.205.222/jiexi.php?url="+uuuu;
                }else{
                    "web=http://43.140.205.222/jiexi.php?url="+uu;
                }
            }
        }else if(resp.code.indexOf('\"code\":')!=-1&&resp.code.indexOf('\"url\":')!=-1){
            var realurl=e2Rex(resp.code,".json(url).or().json(data).json(url)");
            if(uu.indexOf("mgtv.com")!=-1){
                JSON.stringify({name:"真实播放地址",url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
            /*}else if(resp.code.indexOf("header")!=-1){
                var realhead=e2Rex(resp.code,".json(data).json(header)");
                JSON.stringify({name:"真实播放地址",url:realurl+"@"+realhead});*/
            }else{
                JSON.stringify({name:"真实播放地址",url:realurl});
            }
        }else{
            if(uu.match(/.*(url|v|u|vid|pid|php\?id)=/)){
                var uuu=uu.match(/.*(url|v|u|vid|pid|php\?id)=/)[0];
                var uuuu=uu.split(uuu)[1];
                "web=http://43.140.205.222/jiexi.php?url="+uuuu;
            }else{
                "web=http://43.140.205.222/jiexi.php?url="+uu;
            }
        }
    }else if(uu.indexOf("dxcc.meijutt.top")!=-1){
        JSON.stringify({name:"真实播放地址",url:uu,head:{"User-Agent":"Mozilla/5.0","Referer":"https://www.psinu.com/"}});
    }else if(uu.indexOf(".m3u8")!=-1||uu.indexOf(".mp4")!=-1||uu.indexOf("/obj/tos")!=-1||uu.indexOf("gw.crustapps.net")!=-1){
        JSON.stringify({name:"真实播放地址",url:uu});
    }else{
        "web="+uu;
    }
}else{
    "web="+uu;
}
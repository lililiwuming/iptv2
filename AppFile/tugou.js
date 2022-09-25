######首页轮播图1
{
    "data":[
        {
        "url":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/教程.txt",
        "title":"本地规则教程，请认真看",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/封印者1.jpg"
        },
        {
        "url":"https://7cc7cc.com/thread-902.htm",
        "title":"轻创社区反馈",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/封印者3.jpg"
        },
        {
        "url":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/声明.txt",
        "title":"声明/更新日志",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/封印者4.jpg"
        }
    ]
    }
######APP影视首页图标2
{
"data":[
    {
    "list":[
        {
        "url":"q:本地.mk",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/规则.png"
        },
        {
        "url":"q:豆瓣片库.mk",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/豆瓣.png"
        },
        {
        "url":"q:订阅.mk",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/订阅.png"
        },
        {
        "url":"q:豆瓣片单.mk",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/片单.png"
        },
        {
        "url":"q:写入.mk",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/写入.png"
        },
        {
        "url":"q:豆瓣榜单.mk",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/榜单.png"
        },
        {
        "url":"mqqwpa://im/chat?chat_type=wpa&uin=272775028",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/反馈.png"
        },
        {
        "url":"q:搜狗片库.mk",
        "img":"https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/Icon/搜狗.png"
        }
    ]
    }
]
}
######首页版本判断3
var index=getVar("首页图标");
e2Rex(index,".json(data).i(0)");
######UA4
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1||URL.indexOf("freekan")!=-1){
    "Dart/2.14 (dart:io)";
}else if(URL.indexOf(".vod")!=-1){
    if(URL.indexOf("vod.9e03.com")!=-1){
        "";
    }else{
        "okhttp/4.1.0";
    }
}else if(URL.indexOf("豆瓣")!=-1){
    "Rexxar-Core/0.1.3 api-client/1 com.douban.frodo/6.36.0(186) Android/23 product/cancro vendor/HUAWEI model/Mate 10 rom/android network/wifi platform/mobile com.douban.frodo/6.36.0(186) Rexxar/1.2.151 platform/mobile 1.2.151";
}else{
    "Dalvik/2.1.0";
}
######POST5
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("豆瓣")!=-1){
    "host=frodo.douban.com&accept=*/*";
}else{
    "";
}
######cookie6
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("搜狗")!=-1){
    "ABTEST=3|1615358299|v1; IPLOC=CN4403; SUV=00F0551665E97E5C6048695B5B6E5290; VIDEO_DEBUG=off";
}else{
    "";
}
######本地规则批量搜索7
var SubName=getVar("标题");
var filename=SubName+'.json';
var 原=readStr(filename);
var KEY=getVar("KEY");
var 分类=e2Arr(原,".json()");
var res=[];
for(var j=0;j<分类.length;j++){
    var list={};
    var 列表=e2Arr(分类[j],".json(data)");
    var items=[];
    for(var i=0;i<列表.length;i++){
        var 标题=e2Rex(列表[i],".json(title)");
        var 地址=e2Rex(列表[i],".json(url)");
        if(地址.indexOf(".vod")!=-1){
            var 地址=地址+"?wd="+KEY+"&page=";
        }else if(地址.indexOf("api.php/app")!=-1||地址.indexOf("xgapp")!=-1){
            var 地址=地址+"search?text="+KEY+"&pg=";
        }else if(地址.search(/api\.php\/.*?\/vod/)!=-1){
            if(地址.indexOf("jpsb")!=-1||地址.indexOf("hyddys")!=-1||地址.indexOf("ddmym")!=-1||地址.indexOf("esellauto")!=-1||地址.indexOf("1.14.63.101")!=-1||地址.indexOf("zjys")!=-1||地址.indexOf("tv.cttv")!=-1||地址.indexOf("dcd")!=-1||地址.indexOf("lxue")!=-1||地址.indexOf("weetai.cn")!=-1||地址.indexOf("haokanju1")!=-1||地址.indexOf("fit:8")!=-1||地址.indexOf("zjj.life")!=-1||地址.indexOf("love9989")!=-1||地址.indexOf("8d8q")!=-1||地址.indexOf("lk.pxun")!=-1||地址.indexOf("hgyx")!=-1||地址.indexOf("521x5")!=-1||地址.indexOf("lxyyy")!=-1||地址.indexOf("0818tv")!=-1||地址.indexOf("diyoui")!=-1||地址.indexOf("diliktv")!=-1||地址.indexOf("ppzhu")!=-1||地址.indexOf("aitesucai")!=-1||地址.indexOf("zz.ci")!=-1||地址.indexOf("chxjon")!=-1||地址.indexOf("watchmi")!=-1||地址.indexOf("vipbp")!=-1||地址.indexOf("bhtv")!=-1||地址.indexOf("xfykl")!=-1||地址.indexOf("cccvvv")!=-1||地址.indexOf("vipdytv")!=-1||地址.indexOf("hfys8")!=-1||地址.indexOf("tvzy.cc")!=-1||地址.indexOf("sztuotai")!=-1||地址.indexOf("aacc.tv")!=-1||地址.indexOf("175.178.7.35")!=-1||地址.indexOf("0009988")!=-1||地址.indexOf("106.13.10.156")!=-1||地址.indexOf("n293.ngys")!=-1||地址.indexOf("809394")!=-1||地址.indexOf("xhdj.vip")!=-1){
                var word="wd";
            }else{
                var word="zm";
            }
            var 地址=地址+"?ac=list&"+word+"="+KEY+"&page=";
        }
        items.push(标题+"="+地址);
    }
    var 合并=items.join("\n");
    var 分类标题=e2Rex(分类[j],".json(title)");
    list.url=合并;list.title=分类标题;
    res.push(list);
}
JSON.stringify(res);
######单一搜索搜索地址8
var 地址=getVar("地址");
var KEY=getVar("KEY");
if (地址.indexOf(".vod") != -1) {
  "?wd="+KEY+"&page=";
} else if (地址.indexOf("api.php/app") != -1 || 地址.indexOf("xgapp") != -1) {
  "search?text="+KEY+"&pg=";
} else {
  if (地址.indexOf("jpsb") != -1 || 地址.indexOf("hyddys") != -1 || 地址.indexOf("ddmym") != -1 || 地址.indexOf("esellauto") != -1 || 地址.indexOf("1.14.63.101") != -1 || 地址.indexOf("zjys") != -1 || 地址.indexOf("tv.cttv") != -1 || 地址.indexOf("dcd") != -1 || 地址.indexOf("lxue") != -1 || 地址.indexOf("weetai.cn") != -1 || 地址.indexOf("haokanju1") != -1 || 地址.indexOf("fit:8") != -1 || 地址.indexOf("zjj.life") != -1 || 地址.indexOf("love9989") != -1 || 地址.indexOf("8d8q") != -1 || 地址.indexOf("lk.pxun") != -1 || 地址.indexOf("hgyx") != -1 || 地址.indexOf("521x5") != -1 || 地址.indexOf("lxyyy") != -1 || 地址.indexOf("0818tv") != -1 || 地址.indexOf("diyoui") != -1 || 地址.indexOf("diliktv") != -1 || 地址.indexOf("ppzhu") != -1 || 地址.indexOf("aitesucai") != -1 || 地址.indexOf("zz.ci") != -1 || 地址.indexOf("chxjon") != -1 || 地址.indexOf("watchmi") != -1 || 地址.indexOf("vipbp") != -1 || 地址.indexOf("bhtv") != -1 || 地址.indexOf("xfykl") != -1 || 地址.indexOf("cccvvv") != -1 || 地址.indexOf("vipdytv") != -1 || 地址.indexOf("hfys8") != -1 || 地址.indexOf("tvzy.cc") != -1 || 地址.indexOf("sztuotai") != -1 || 地址.indexOf("aacc.tv") != -1 || 地址.indexOf("175.178.7.35") != -1 || 地址.indexOf("0009988") != -1 || 地址.indexOf("106.13.10.156") != -1 || 地址.indexOf("n293.ngys") != -1 || 地址.indexOf("809394") != -1 || 地址.indexOf("xhdj.vip") != -1) {
    var word="wd";
  } else {
    var word="zm";
  }
  "?ac=list&"+word+"="+KEY+"&page=";
}
######批量搜索播放器前缀地址9
var Ktimes=e2Rex(getVar("TIME_"),".t()");
var Ktime=e2Rex(Ktimes,".time(MMdd)");
var URLS=getVar("urls");
if(URLS.indexOf("api.php/app")!=-1||URLS.indexOf("xgapp")!=-1){
    var URL=URLS.split("search?")[0];
    URL+"video_detail?id="; 
}else if(URLS.indexOf(".vod")!=-1){
    var URL=URLS.split("?wd=")[0];
    URL+"/detail?key="+Ktime+"&keytime="+Ktimes+"&vod_id=";
}else{
    "";
}
######单一搜索播放器前缀地址10
var Ktimes=e2Rex(getVar("TIME_"),".t()");
var Ktime=e2Rex(Ktimes,".time(MMdd)");
var URLS=getVar("地址");
if(URLS.indexOf("api.php/app")!=-1||URLS.indexOf("xgapp")!=-1){
    var URL=URLS.split("search?")[0];
    URL+"video_detail?id="; 
}else if(URLS.indexOf(".vod")!=-1){
    var URL=URLS.split("?wd=")[0];
    URL+"/detail?key="+Ktime+"&keytime="+Ktimes+"&vod_id=";
}else{
    "";
}
######APP轮播图地址11
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"advert?position=2";
}else if(URL.indexOf(".vod")!=-1){
    URL+"?level=9";
}else{
    "";
}
######获取分类地址12
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"nav";
}else if(URL.indexOf(".vod")!=-1){
    URL+"/types";
}else{
    "";
}
######分类筛选前缀地址13
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"video?tid=";
}else if(URL.indexOf(".vod")!=-1){
    URL+"?type=";
}else if(URL.indexOf("豆瓣片单")!=-1){
    "https://frodo.douban.com/api/v2/subject_collection/";
}else{
    URL;
}
######分类筛选后缀地址14
var Ktimes=e2Rex(getVar("TIME_"),".t()");
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    "&class=#筛选class#&area=#筛选area#&lang=#筛选lang#&year=#筛选year#&limit=9&pg=#PN#";
}else if(URL.indexOf(".vod")!=-1){
    "&class=#筛选class#&area=#筛选area#&lang=#筛选lang#&year=#筛选year#&by=排序&limit=9&page=#PN#";
}else if(URL.indexOf("豆瓣片单")!=-1){
    "/items?apikey=0dad551ec0f84ed02907ff5c42e8ec70&start=#PN#&count=20&items_only=0";
}else{
    "";
}
######筛选内容15
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
}else if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
  str;
}else if(URL.indexOf("搜狗片库")!=-1){
    "分类+全部=+电影=film+连续剧=teleplay+综艺=tvshow+动漫=cartoon+纪录片=documentary\n类型+全部=+古装+剧情+喜剧+爱情+动作+恐怖+科幻+警匪+惊悚+犯罪+奇幻+战争+悬疑+动画+文艺+传记+歌舞+其它\n地区+全部=+内地+香港+台湾+韩国+泰国+日本+美国+英国+新加坡+其他\n年份+全部=+2021+2020+2019+2018+2017+2016+2015+2014+2013+2012+2011+2010+2009+2008+2007+2006+2005+2004+更早\n排序+最新=time+热门=hits+评分=score";
}else if(URL.indexOf("豆瓣片库")!=-1){
    "分类+全部=+电影+电视剧+综艺+动漫+纪录片+短片+冷门\n类型+全部=+剧情+喜剧+动作+爱情+科幻+动画+悬疑+惊悚+恐怖+犯罪+同性+音乐+歌舞+传记+历史+战争+西部+奇幻+冒险+灾难+武侠+情色+三级\n地区+全部=+中国大陆+欧美+美国+中国香港+中国台湾+日本+韩国+英国+法国+德国+意大利+西班牙+印度+泰国+俄罗斯+伊朗+加拿大+澳大利亚+爱尔兰+瑞典+巴西+丹麦\n年份+全部=+2021+2020+2019+2018+2017+2016+2015+2014+2013+2012+2011+2010年代+2000年代+90年代+80年代+70年代+60年代+更早\n特色+全部=+经典+青春+文艺+搞笑+励志+魔幻+感人+女性+黑帮+黑客+治愈+美食+宗教+小说改编+超级英雄\n排序+默认=U+热度=T+评分=S+最新=R";
}else if(URL.indexOf("豆瓣片单")!=-1){
    "分类+全部=all+片单=official+获奖=prize+高分=high_score+榜单=movie_list+冷门佳片=dark_horse+主题=topic+导演=director+演员=actor+系列=series+华语=chinese+欧美=western+日本=japanese\n类型+全部=+电影=movie+连续剧=tv";
}else if(URL.indexOf("豆瓣榜单")!=-1){
    "分类+电影=movie_real_time_hotest+电视剧=tv_real_time_hotest+口碑=movie_weekly_best+top250=movie_top250";
}else{
    "分类+全部=+电影=movie+连续剧=tvplay+综艺=tvshow+动漫=comic+4K=movie_4k+体育=tiyu\n类型+全部=+喜剧+爱情+恐怖+动作+科幻+剧情+战争+警匪+犯罪+动画+奇幻+武侠+冒险+枪战+恐怖+悬疑+惊悚+经典+青春+文艺+微电影+古装+历史+运动+农村+惊悚+惊悚+伦理+情色+福利+三级+儿童+网络电影\n地区+全部=+大陆+香港+台湾+美国+英国+法国+日本+韩国+德国+泰国+印度+西班牙+加拿大+其他\n年份+全部=+2021+2020+2019+2018+2017+2016+2015+2014+2013+2012+2011+2010+2009+2008+2007+2006+2005+2004+2003+2002+2001+2000";
}
######推荐地址16
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"index_video";
}else if(URL.indexOf(".vod")!=-1){
    URL+"/vodPhbAll";
}else{
    "";
}
######播放器前缀地址17
var Ktimes=e2Rex(getVar("TIME_"),".t()");
var Ktime=e2Rex(Ktimes,".time(MMdd)");
var code=getVar("源");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"video_detail?id=";
}else if(URL.indexOf(".vod")!=-1){
    URL+"/detail?key="+Ktime+"&keytime="+Ktimes+"&vod_id=";
}else{
    "";
}
######选集18
var URL=getVar("地址");
function 选集列表(){
    var res={};var items=[];var detail=[];
    for(var i=0;i<分类.length;i++){
        var 分类CODE=分类[i];
        var 列表=e2Arr(分类CODE,列表规则);
        var 标题=e2Rex(分类CODE,标题规则);
        if(URL.indexOf(".vod")!=-1){
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
        }else if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
            var 接口=e2Rex(分类CODE,".json(parse_api)");
        }else{
            var 接口="";
        }
        if(接口.indexOf("cache.tegouys.com")!=-1||接口.indexOf("lswwe.com")!=-1||接口.indexOf("x-n.cc")!=-1||接口.indexOf("20.239.162.68")!=-1||接口.indexOf("jhsj.manduhu.com")!=-1||接口.indexOf("v.jhdyw.vip/nhdz666")!=-1||接口.indexOf("svip.jhyun.jx.cn")!=-1||接口.indexOf("svip.jhdyw.vip")!=-1||接口.indexOf("api.xvtt.cn")!=-1||接口.indexOf("svip.jiexi.de")!=-1){
            var 接口="";
        }else{
            var 接口=接口;
        }
        var LIST=[];
        for(var j=0;j<列表.length;j++){
            var 选集=e2Rex(列表[j],选集规则);
            var 选集地址=e2Rex(列表[j],选集地址规则);
            if(URL.indexOf("xgapp")!=-1||URL.indexOf("api.php/app")!=-1||URL.indexOf(".vod")!=-1){
                if(选集地址.indexOf(".m3u8")!=-1||选集地址.indexOf(".mp4")!=-1){
                    var 接口="";
                }else if(接口.indexOf("http")!=-1){
                    var 接口=接口;
                }else if(接口.indexOf("http")==-1){
                    var AddJX=getHttp("https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/js/add-jx.txt");
                    var AddJXCode=String(AddJX);
                    eval(AddJXCode);
                }
            }else if(URL.search(/api\.php\/.*?\/vod/)!=-1){
                if(选集地址.match(/.*(url|v|vid|php\?id)=/)){
                    var 接口=选集地址.match(/.*(url|v|vid|php\?id)=/)[0];
                    var 选集地址=选集地址.split(接口)[1];
                    if(URL.indexOf("8.142.23.147")!=-1||URL.indexOf("zjj.life")!=-1||URL.indexOf("yhzy")!=-1||URL.indexOf("zhenfy")!=-1||URL.indexOf("cztv")!=-1||URL.indexOf("1.14.63.101")!=-1||URL.indexOf("fit:8")!=-1||URL.indexOf("diliktv.xyz")!=-1||URL.indexOf("ppzhu.vip")!=-1||URL.indexOf("api.8d8q.com")!=-1||URL.indexOf("haokanju1.cc")!=-1||URL.indexOf("cztv")!=-1){
                        var 选集地址=选集地址+"&app=10000&account=272775028&password=qq272775028";
                    }else if(URL.indexOf("175.178.7.35")!=-1&&选集地址.indexOf("LT-")!=-1){
                        var 接口="http://q.blssv.com/bfq/?url=";
                        var 选集地址=选集地址;
                    }else{
                        var 选集地址=选集地址;
                    }
                }else{
                    var 接口="";
                    var 选集地址=选集地址;
                }
            }
            if(接口.indexOf("http")==-1&&选集地址.indexOf("http")==-1){
                var 接口="http://ip111.cn/?wd="+接口;
            }else{
                var 接口=接口;
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
if(URL.indexOf("api.php/app/")!=-1){
    var 简介=e2Rex(getVar("源码"),'.json(data).json(vod_content)');
    var 分类=e2Arr(getVar("源码"),'.json(data).json(vod_url_with_player)');
    var 标题规则='.json(name).c(-).json(code)';
    var 列表规则='.json(url).ct(#).z(.*?\\$.*?#)';
    var 选集规则='.z2(\\(.+?\\)\\$)';
    var 选集地址规则='.z2(\\$\(.+?\\)[#|\"])';
    选集列表();
}else if(URL.indexOf("xgapp")!=-1){
    var 简介=e2Rex(getVar("源码"),'.json(data).json(vod_info).json(vod_content)');
    var 分类=e2Arr(getVar("源码"),'.json(data).json(vod_info).json(vod_url_with_player)');
    var 标题规则='.json(name).c(-).json(code)';
    var 列表规则='.json(url).ct(#).z(.*?\\$.*?#)';
    var 选集规则='.z2(\\(.+?\\)\\$)';
    var 选集地址规则='.z2(\\$\\(.+?\\)[#|\"])';
    选集列表();
}else if(URL.indexOf(".vod")!=-1){
    var 简介=e2Rex(getVar("源码"),'.json(data).json(vod_content)');
    var 分类=e2Arr(getVar("源码").replace(/\s+/g,""),'.json(data).json(vod_play_list)');
    var 标题规则='.json(player_info).json(show).c(-).json(player_info).json(from)';
    var 列表规则='.json(url).ct(#).z(.*?\\$.*?#)';
    var 选集规则='.z2(\\(.+?\\)\\$)';
    var 选集地址规则='.z2(\\$\\(.+?\\)[#|\"])';
    选集列表();
}else if(URL.search(/api\.php\/.*?\/vod/)!=-1){
    var 简介=e2Arr(getVar("源码"),'.json(intro)');
    var 分类=e2Arr(getVar("源码"),'.json(videolist).z(\".*?\\])');
    var 标题规则='.z2(\"\\(.*?\\)\")';
    var 列表规则='.z(\\{.*?\\})';
    var 选集规则='.json(title)';
    var 选集地址规则='.json(url)';
    选集列表();
}
######免嗅探19
var uu=getVar("地址");
if(uu.indexOf("wd=")!=-1){
    uu=uu.split("wd=")[1];
}else{
    uu=uu;
}
var 视频信息=getVar("重组选集");
if(uu.indexOf("player.4kya.com")!=-1||uu.indexOf("netflixvip.4kya.com")!=-1){
    "web="+uu+'@{"Referer":"https://netflix.mom/"}';
}else if(uu.indexOf("www.meiju11.com")!=-1){
    'web='+uu+'@{"Referer":"https://www.meiju11.com/"}';
}else if(uu.indexOf("m3u8.cache.suoyo.cc")==-1&&uu.indexOf(".m3u8")!=-1||uu.indexOf(".mp4")!=-1||uu.indexOf("/obj/tos")!=-1){
    if(uu.indexOf("url=")!=-1){
        var resp=uu.split("url=")[1];
        JSON.stringify({name:"真实播放地址",url:resp});
    }else{
        JSON.stringify({name:"真实播放地址",url:uu});
    }
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
}else if(uu.indexOf("php?pid=")!=-1||uu.indexOf("?u=http")!=-1||uu.indexOf("url=")!=-1||uu.indexOf("v=http")!=-1||uu.indexOf("php?id=")!=-1||uu.indexOf("=http")!=-1){
    var resp=JZ(JSON.stringify({url:uu,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
    var AddJX=getHttp("https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/js/add-jx.txt");
    var AddJXCode=String(AddJX);
    if(resp.code.indexOf("网页无法打开")==-1||resp.code.indexOf("301")==-1||resp.code.indexOf("404")==-1){
        if(resp.code.indexOf('\{\"code\"')!=-1||resp.code.indexOf('\"code\"\:')!=-1&&resp.code.indexOf('\"url\"')!=-1){
            var realurl=e2Rex(resp.code,".json(url).or().json(data).json(url)");
            if(uu.indexOf("mgtv.com")!=-1){
                JSON.stringify({name:"真实播放地址",url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
            }else if(resp.code.indexOf("header")!=-1){
                var realhead=e2Rex(resp.code,".json(data).json(header)");
                JSON.stringify({name:"真实播放地址",url:realurl+"@"+realhead});
            }else{
                JSON.stringify({name:"真实播放地址",url:realurl});
            }
        }else if(resp.code.search(/player=new/)!=-1||resp.code.search(/<div id="video"/)!=-1||resp.code.search(/<div id="[^"]*?player"/)!=-1||resp.code.search(/\/\/视频链接/)!=-1||resp.code.search(/<iframe[\s\S]*?src="[^"]+?"/)!=-1||resp.code.search(/<video[\s\S]*?src="[^"]+?"/)!=-1){
            "web="+uu;
        }else{
            var URL=e2Rex(视频信息,".json(data).json(from)");
            var 选集地址=e2Rex(视频信息,".json(data).json(list).json(url)");
            var 标题=e2Rex(视频信息,".json(data).json(title)");
            var 接口="";
            var 原解析=选集地址.match(/.*(url|v|u|vid|pid|php\?id)=/)[0];
            eval(AddJXCode);
            var uu=接口+选集地址.split(原解析)[1];
            var resps=JZ(JSON.stringify({url:uu,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
            if(resps.code.indexOf('\{\"code\"')!=-1||resp.code.indexOf('\"code\"\:')!=-1&&resp.code.indexOf('\"url\"')!=-1){
                var realurl=e2Rex(resps.code,".json(url).or().json(data).json(url)");
                if(uu.indexOf("mgtv.com")!=-1){
                    JSON.stringify({name:"真实播放地址",url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
                }else if(resp.code.indexOf("header")!=-1){
                    var realhead=e2Rex(resp.code,".json(data).json(header)");
                    JSON.stringify({name:"真实播放地址",url:realurl+"@"+realhead});
                }else{
                    JSON.stringify({name:"真实播放地址",url:realurl});
                }
            }else{
                "web="+uu;
            }
        }
    }else{
        var URL=e2Rex(视频信息,".json(data).json(from)");
        var 选集地址=e2Rex(视频信息,".json(data).json(list).json(url)");
        var 标题=e2Rex(视频信息,".json(data).json(title)");
        var 接口="";
        var 原解析=选集地址.match(/.*(url|v|u|vid|pid|php\?id)=/)[0];
        eval(AddJXCode);
        var uu=接口+选集地址.split(原解析)[1];
        var resps=JZ(JSON.stringify({url:uu,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
        if(resps.code.indexOf('\{\"code\"')!=-1||resp.code.indexOf('\"code\"\:')!=-1&&resp.code.indexOf('\"url\"')!=-1){
            var realurl=e2Rex(resps.code,".json(url).or().json(data).json(url)");
            if(uu.indexOf("mgtv.com")!=-1){
                JSON.stringify({name:"真实播放地址",url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
            }else if(resp.code.indexOf("header")!=-1){
                var realhead=e2Rex(resp.code,".json(data).json(header)");
                JSON.stringify({name:"真实播放地址",url:realurl+"@"+realhead});
            }else{
                JSON.stringify({name:"真实播放地址",url:realurl});
            }
        }else{
            "web="+uu;
        }
    }
}else{
    "web="+uu;
}
######写入规则20
var key=getVar("KEY");
var code=getVar("源码");
var 记录=[];
//更新订阅
if(code.indexOf('\{\"title')!=-1&&code.indexOf(",http")!=-1&&code.indexOf("本地,#")==-1){
    var SubUrl=e2Rex(code,".json(url).ty(,).tz(#)");
    var SubTitle=e2Rex(code,".json(url).tz(,)");
    var filename=SubTitle+".json";
    var rule=getHttp(JSON.stringify({url:SubUrl}));
    if(rule.indexOf("api.php/app")!=-1||rule.indexOf("xgapp")!=-1||rule.indexOf(".vod")!=-1||rule.search(/api\.php\/.+?\/vod\//)!=-1){
        var 输入条目=rule.match(/.+=http.+/g);
        for(var j in 输入条目){
            var title=e2Rex(输入条目[j],".ty(@).tz(=)");
            var url=e2Rex(输入条目[j],".ty(=).tz(#)");
            var img=e2Rex(输入条目[j],".ty(#)");
            if(img.indexOf("http")!=-1){
                var img=img;
            }else if(img==""){
                var img="https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/AppIcon/通用图标.png"
            }else{
                var img="https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/AppIcon/"+img+".png";
            }
            if(url.search(/api\.php\/.*?\/vod/)!=-1){
                var murl="q:TV影视.mk";
            }else{
                var murl="q:APP影视.mk";
            }
            if(e2Rex(输入条目[j],".tz(@)")!=""){
                var type=e2Rex(输入条目[j],".tz(@)");
            }else if(url.indexOf("api.php/app")!=-1||url.indexOf("xgapp")!=-1){
                var type="小龟";
            }else if(url.indexOf(".vod")!=-1){
                var type="萝卜/白菜/木白/绿豆";
            }else if(url.search(/api\.php\/.+?\/vod\//)!=-1){
                var type="神马";
            }
            记录.push({title:title,url:url,img:img,murl:murl,type:type});
        }
        if(readStr(filename)){
            var 新记录=JSON.parse(readStr(filename));
        }else{
            var 新记录=[];
        }
        for(var i in 记录){
            var 当前条目=[];当前条目.push(记录[i]);
            if(新记录.length==0) {
                新记录.push({title:记录[i].type,data:当前条目});
            }else{
                let res=新记录.some(item=>{
                //判断类型，有就添加到当前项
                    if(item.title == 记录[i].type){
                        item.data=当前条目.concat(item.data.filter(d=>d.url!=记录[i].url));
                        return true
                    }
                });
                if (!res) {
                //如果没找相同类型添加一个类型
                    新记录.push({title:记录[i].type,data:当前条目});
                }
            }
        }
        writeStr(filename,JSON.stringify(新记录));
        alert(SubTitle+"\n订阅更新成功");
        readStr(filename);
    }
}else if(code.indexOf('\{\"title')!=-1&&code.indexOf("本地,#")!=-1){
    alert("本地规则为手动写入，无远程更新。")
//写入模块
}else if(key.length>10){
    if(key.indexOf(",http")!=-1&&key.indexOf("#")!=-1){
        var SubTitle=e2Rex(key,".tz(,)");
        var subfilename='远程订阅索引.txt';
        var 订阅记录=key.match(/.+?,http.+/g);
        if (readStr(subfilename)){
            var 订阅旧记录=readStr(subfilename).match(/.+?,http.+/g);
            var 订阅新记录=订阅记录.concat(订阅旧记录.filter(item=>item!=订阅记录[0]));
        } else {
            var 订阅新记录=订阅记录;
        }
        writeStr(subfilename,订阅新记录.join("\n"));
        var SubUrl=e2Rex(key,".ty(,).tz(#)");
        var filename=SubTitle+".json";
        var rule=getHttp(JSON.stringify({url:SubUrl}));
        if(rule.indexOf("api.php/app")!=-1||rule.indexOf("xgapp")!=-1||rule.indexOf(".vod")!=-1||rule.search(/api\.php\/.+?\/vod\//)!=-1){
            var 输入条目=rule.match(/.+=http.+/g);
            for(var j in 输入条目){
                var title=e2Rex(输入条目[j],".ty(@).tz(=)");
                var url=e2Rex(输入条目[j],".ty(=).tz(#)");
                var img=e2Rex(输入条目[j],".ty(#)");
                if(img.indexOf("http")!=-1){
                    var img=img;
                }else if(img==""){
                    var img="https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/AppIcon/通用图标.png"
                }else{
                    var img="https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/AppIcon/"+img+".png";
                }
                if(url.search(/api\.php\/.*?\/vod/)!=-1){
                    var murl="q:TV影视.mk";
                }else{
                    var murl="q:APP影视.mk";
                }
                if(e2Rex(输入条目[j],".tz(@)")!=""){
                    var type=e2Rex(输入条目[j],".tz(@)");
                }else if(url.indexOf("api.php/app")!=-1||url.indexOf("xgapp")!=-1){
                    var type="小龟";
                }else if(url.indexOf(".vod")!=-1){
                    var type="萝卜/白菜/木白/绿豆";
                }else if(url.search(/api\.php\/.+?\/vod\//)!=-1){
                    var type="神马";
                }
                记录.push({title:title,url:url,img:img,murl:murl,type:type});
            }
            if(readStr(filename)){
                var 新记录=JSON.parse(readStr(filename));
            }else{
                var 新记录=[];
            }
            for(var i in 记录){
                var 当前条目=[];当前条目.push(记录[i]);
                if(新记录.length==0) {
                    新记录.push({title:记录[i].type,data:当前条目});
                }else{
                    let res=新记录.some(item=>{
                    //判断类型，有就添加到当前项
                        if(item.title == 记录[i].type){
                            item.data=当前条目.concat(item.data.filter(d=>d.url!=记录[i].url));
                            return true
                        }
                    });
                    if (!res) {
                    //如果没找相同类型添加一个类型
                        新记录.push({title:记录[i].type,data:当前条目});
                    }
                }
            }
            writeStr(filename,JSON.stringify(新记录));
        }else{
            alert(SubTitle+"\n订阅内容没有符合的规则或订阅地址失效");
        }
        alert("成功订阅："+SubTitle+"\n已写入本地");
        readStr(subfilename);
    }else if(key.indexOf("@")!=-1&&key.indexOf("=")!=-1&&key.indexOf("#")!=-1){
        if(key.indexOf("api.php/app")!=-1||key.indexOf("xgapp")!=-1||key.indexOf(".vod")!=-1||key.search(/api\.php\/.+?\/vod\//)!=-1){
            var filename='本地.json';
            var 输入条目=key.match(/.+=http.+/g);
            for(var j in 输入条目){
                var title=e2Rex(输入条目[j],".ty(@).tz(=)");
                var url=e2Rex(输入条目[j],".ty(=).tz(#)");
                var img=e2Rex(输入条目[j],".ty(#)");
                if(img.indexOf("http")!=-1){
                    var img=img;
                }else if(img==""){
                    var img="https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/AppIcon/通用图标.png"
                }else{
                    var img="https://gitcode.net/InMemory/iptv/-/raw/master/AppFile/AppIcon/"+img+".png";
                }
                if(url.search(/api\.php\/.*?\/vod/)!=-1){
                    var murl="q:TV影视.mk";
                }else{
                    var murl="q:APP影视.mk";
                }
                if(e2Rex(输入条目[j],".tz(@)")!=""){
                    var type=e2Rex(输入条目[j],".tz(@)");
                }else if(url.indexOf("api.php/app")!=-1||url.indexOf("xgapp")!=-1){
                    var type="小龟";
                }else if(url.indexOf(".vod")!=-1){
                    var type="萝卜";
                }else if(url.search(/api\.php\/.+?\/vod\//)!=-1){
                    var type="神马";
                }
                记录.push({title:title,url:url,img:img,murl:murl,type:type});
            }
            if(readStr(filename)){
                var 新记录=JSON.parse(readStr(filename));
            }else{
                var 新记录=[];
            }
            for(var i in 记录){
                var 当前条目=[];当前条目.push(记录[i]);
                if(新记录.length==0){
                    新记录.push({title:记录[i].type,data:当前条目});
                }else{
                    let res=新记录.some(item=>{
                        if(item.title==记录[i].type){
                            item.data=当前条目.concat(item.data.filter(d=>d.url!=记录[i].url));
                            return true
                        }
                    });
                    if(!res){
                        新记录.push({title:记录[i].type,data:当前条目});
                    }
                }
            }
            writeStr(filename,JSON.stringify(新记录));
            alert(title+"\n规则写入成功");
            readStr(filename);
        }else{
            alert("不是有效的接口规则，请重新输入");
        }
    }else{
        alert("请输入以下格式\n\n1.[订阅名,订阅地址#图片地址]格式的网络订阅\n2.[分类名@APP名称=APP接口地址#图片地址]格式的规则\n详情请查看首页轮播内的教程");
    }
}else{
    alert("请输入以下格式\n\n1.[订阅名,订阅地址#图片地址]格式的网络订阅\n2.[分类名@APP名称=APP接口地址#图片地址]格式的规则\n详情请查看首页轮播内的教程");
}
######订阅21
var url=getVar("地址");
var key=getVar("KEY");
var filename='远程订阅索引.txt';
var localjson="本地.json";
var items=[];
if(url.indexOf("订阅")!=-1||key.length>0){
    if(readStr("远程订阅索引.txt").indexOf(",")!=-1){
        var filecode=readStr("远程订阅索引.txt");
    }else if(readStr(localjson)){
        "";
    }else{
        "无,#";
        alert("暂无订阅，请添加订阅");
        var filecode=readStr("远程订阅索引.txt");
    }
    if(readStr(localjson)){
        var addcode="本地,#\n"+filecode;
        var code=addcode.match(/.+?,.+/g);
    }else{
        var code=filecode.match(/.+?,.+/g);
    }
    for (var i in code){
        var title=e2Rex(code[i],".tz(,)");
        var Fname=title+".json";
        var url=e2Rex(code[i],".t()");
        var img=e2Rex(code[i],".ty(#)");
        if(img){
            var img=img;
        }else{
            var img="http://1.117.152.239:39000/tupian.php?text="+title;
        }
        if(readStr(Fname)){
            var Curl=JSON.parse(readStr(Fname));
            items.push({title:title,img:img,url:url,Curl:Curl});
        }else{
            items.push({title:title,img:img,url:url});
        }
    }
    JSON.stringify(items);
}else if(url.indexOf("本地")!=-1){
    var ff="本地,#\n"+readStr(filename);
    var code=ff.match(/.+?,.+/g);
    for (var i in code){
        var title=e2Rex(code[i],".tz(,)");
        var Fname=title+".json";
        var url=e2Rex(code[i],".ty(,).tz(#)");
        var img=e2Rex(code[i],".ty(#)");
        if(img){
            var img=img;
        }else{
            var img="http://1.117.152.239:39000/tupian.php?text="+title;
        }
        if(readStr(Fname)){
            var Curl=JSON.parse(readStr(Fname));
            items.push({title:title,img:img,url:url,Curl:Curl});
        }
        JSON.stringify(items);
    }
}
######删除规则22
var SubRule=getVar("订阅名");
if(SubRule.indexOf(",")!=-1&&SubRule.indexOf("#")!=-1){
    var SubUrl=e2Rex(SubRule,".ty(,).tz(#)");
    var SubName=e2Rex(SubRule,".tz(,)");
}else{
    var SubUrl="";
    var SubName=SubRule;
}
if(SubUrl.indexOf("http")!=-1&&SubName.indexOf("本地")==-1){
    var filename='远程订阅索引.txt';
    var 新记录=readStr(filename).match(/.+?,.+/g).filter(item=>item!=SubRule);
    writeStr(filename,新记录.join("\n"));
    alert(SubName+"\n订阅移除成功，轻站内还包含相关文件，请手动删除。\n路径：data/file/"+SubName+".json");
    readStr(filename);
}else if(SubRule.indexOf("本地,")!=-1){
    alert("本地规则不是订阅，无法删除订阅，请在轻站内删除文件。\n路径：data/file/"+SubName+".json");
}else{
    var filename=SubName+'.json';
    var 记录=getVar("源");
    var 新记录=JSON.parse(readStr(filename));
    let res=新记录.some(item=>{
        if(item.title == JSON.parse(记录).type){
            item.data=item.data.filter(a=>a.url!=JSON.parse(记录).url);
            return true
        }
    });
    var AppName=e2Rex(记录,".json(title)");
    writeStr(filename,JSON.stringify(新记录));
    alert(AppName+"\n删除成功");
    readStr(filename);
}
######读取本地解析模式23
var filename="解析模式.txt";
var mode=readStr(filename);
if(mode.indexOf("本地")!=-1){
    var text="自定义模式，配置的解析将生效";
}else if(mode.indexOf("自带")!=-1){
    var text="自带解析模式，配置的解析不生效";
}else if(mode.indexOf("InMemory")!=-1){
    var text="使用作者的解析，奔放吧";
}else{
    var text="当前未设置解析模式，默认自带的解析";
}
text;
######写入解析代码24
var jkurl=getVar("JKURL");
var jxurl=getVar("JXURL");
var bftitle=getVar("BFTITLE");
var bfurl=getVar("BFURL");
var thurl=getVar("THURL");
var filename="解析接口.txt";
if(jkurl.length>1&&thurl.indexOf("http")!=-1){
    var 记录="if(URL.indexOf(\""+jkurl+"\")!=-1)\{接口=\""+thurl+"\";\}";
}else if(jxurl.length>1&&thurl.indexOf("http")!=-1){
    var 记录="if(接口.indexOf(\""+jxurl+"\")!=-1)\{接口=\""+thurl+"\";\}";
}else if(bftitle.length>1&&thurl.indexOf("http")!=-1){
    var 记录="if(标题.indexOf(\""+bftitle+"\")!=-1)\{接口=\""+thurl+"\";\}";
}else if(bfurl.length>1&&thurl.indexOf("http")!=-1){
    var 记录="if(选集地址.indexOf(\""+bfurl+"\")!=-1)\{接口=\""+thurl+"\";\}";
}else{
    var 记录="";
}
if(记录.indexOf("http")!=-1){
    if(readStr(filename)){
        var 旧记录=readStr(filename).match(/.+http.+/g);
        var 新记录=记录.concat("else "+旧记录.filter(item=>item!=记录[0]));
        writeStr(filename,新记录);
        alert("解析规则添加成功，退出轻站重新进入才生效")
        记录+"\n添加成功";
    }else{
        var 新记录=记录;
        writeStr(filename,新记录);
        alert("解析规则添加成功，退出轻站重新进入才生效")
        记录+"\n添加成功";
    }
}else{
    alert("解析规则添加失败，请输入最终解析接口以及前四个输入框选择一个输入")
}

######模板列表
网页-MXone Pro
网页-Mx Pro
网页-MX(采集站)
接口-CMS(json)
接口-CMS(xml)
接口-CMS(mc10)
接口-APP(vod)
接口-APP(app)
接口-APP(v1)
接口-APP(v2)
接口-APP(iptv)
######UA列表
网页-Mozilla/5.0
接口(cms/iptv)-Dalvik/2.1.0
接口(vod)-okhttp/4.1.0
接口(app/v1/v2)-Dart/2.14 (dart:io)
######本地新增
var key=getVar("输入内容");
var 记录=[];
if(key.indexOf("==http")!=-1&&key.indexOf("#KEY#")!=-1&&(key.indexOf("网页-MXone Pro")!=-1||key.indexOf("网页-MX Pro")!=-1||
key.indexOf("网页-MX(采集站)")!=-1||key.indexOf("接口-CMS(json)")!=-1||key.indexOf("接口-CMS(xml)")!=-1||
key.indexOf("接口-CMS(mc10)")!=-1||key.indexOf("接口-APP(vod)")!=-1||key.indexOf("接口-APP(app)")!=-1||key.indexOf("接口-APP(v1)")!=-1||
key.indexOf("接口-APP(v2)")!=-1||key.indexOf("接口-APP(iptv)")!=-1)){
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
######站源分类

######站源筛选

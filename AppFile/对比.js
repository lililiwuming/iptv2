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
        var subfilename='远程订阅索引.txt';
        var SubTitle=e2Rex(key,".tz(,)");
        var filename=SubTitle+".json";
        var SubUrl=e2Rex(key,".ty(,).tz(#)");
        var 订阅记录=key.match(/.+?,http.+/g);
        if (readStr(subfilename)){
            var 订阅旧记录=readStr(subfilename).match(/.+?,http.+/g);
            var 订阅新记录=订阅记录.concat(订阅旧记录.filter(item=>item!=订阅记录[0]));
        } else {
            var 订阅新记录=订阅记录;
        }
        writeStr(subfilename,订阅新记录.join("\n"));
        var rule=getHttp(JSON.stringify({url:SubUrl}));
        if(SubUrl.indexOf("egwang186")!=-1){
            rule=e2Rex(rule,".t().dn64()");
        }else{
            rule=rule;
        }
        if(rule.indexOf("http")!=-1){
            if(rule.indexOf("=http")!=-1){
                var 输入条目=rule.match(/.+http.+/g);
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
            }else if(rule.indexOf(",http")!=-1){
                for(var k=0;k<rule.length;k++){
                    var 分类=e2Rex(rule[k],'.z(#[\\s\\S]+?#)');
                    var 分类标题=e2Rex(分类,'.z2(#\\(.+\\))');
                    var 输入条目=分类.match(/.+,http.+/g);
                    for(var j=0;j<输入条目.length;j++){
                        var title=e2Rex(输入条目[j],".tz(,)");
                        var url=e2Rex(输入条目[j],".ty(,)");
                        var img="http://1.117.152.239:39000/tupian.php?text="+title;
                        var murl="q:资源采集.mk";
                        var type=分类标题;
                        记录.push({title:title,url:url,img:img,murl:murl,type:type});
                    }
                }
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
                    //判断类型，有就添加到当前项
                        if(item.title == 记录[i].type){
                            item.data=当前条目.concat(item.data.filter(d=>d.url!=记录[i].url));
                            return true
                        }
                    });
                    if(!res){
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
    }else if(key.indexOf(",http")!=-1){
        var filename='本地CMS.txt';
        var 输入条目=key.match(/.+=http.+/g);
        for(var j in 输入条目){
            var 单条=输入条目[j];
            记录.push(单条);
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
        }else{
            alert("不是有效的接口规则，请重新输入");
        }
    }else{
        alert("请输入以下格式\n\n1.[订阅名,订阅地址#图片地址]格式的网络订阅\n2.[分类名@APP名称=APP接口地址#图片地址]格式的规则\n详情请查看首页轮播内的教程");
    }
}else{
    alert("请输入以下格式\n\n1.[订阅名,订阅地址#图片地址]格式的网络订阅\n2.[分类名@APP名称=APP接口地址#图片地址]格式的规则\n详情请查看首页轮播内的教程");
}

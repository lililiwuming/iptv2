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
if(key.indexOf("==http")!=-1&&key.indexOf("@@")!=-1&&key.indexOf("--")!=-1&&key.indexOf("**")!=-1){
    var filename='站源.json';
    var 输入条目=key.match(/.+==http.+/g);
    for(var j=0;j<输入条目.length;j++){
        var name=e2Rex(输入条目[j],".tz(==)");
        var index=e2Rex(输入条目[j],".ty(==).tz(@@)");
        var search=e2Rex(输入条目[j],".ty(@@).tz(--)");
        var type=e2Rex(输入条目[j],".ty(--).tz(**)");
        var UA=e2Rex(输入条目[j],".tz(**)");
        记录.push({name:name,index:index,search:search,type:type,UA:UA});
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
    alert("输入格式错误，请重新输入");
}
######导入订阅


######搜索

######站源首页推荐

######站源分类

######站源筛选

######站源选集

######qjs
ZXZhbChmdW5jdGlvbihwLGEsYyxrLGUscil7ZT1mdW5jdGlvbihjKXtyZXR1cm4oYzw2Mj8nJzplKHBhcnNlSW50KGMvNjIpKSkrKChjPWMlNjIpPjM1P1N0cmluZy5mcm9tQ2hhckNvZGUoYysyOSk6Yy50b1N0cmluZygzNikpfTtpZignMCcucmVwbGFjZSgwLGUpPT0wKXt3aGlsZShjLS0pcltlKGMpXT1rW2NdO2s9W2Z1bmN0aW9uKGUpe3JldHVybiByW2VdfHxlfV07ZT1mdW5jdGlvbigpe3JldHVybicoWzIzNS05cUMtWl18MVxcdyknfTtjPTF9O3doaWxlKGMtLSlpZihrW2NdKXA9cC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcYicrZShjKSsnXFxiJywnZycpLGtbY10pO3JldHVybiBwfSgnKDMoKXsyIF89e307MiBtPTEuMDsyIHI9MTAub3MuRW52aXJvbm1lbnQuZ2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5KCk7MiBzPTEwLndlYmtpdC5NaW1lVHlwZU1hcC5nZXRTaW5nbGV0b24oKTsyIHQ9TS5pbzsyIHU9TS4xbjsyIHY9dC5OLnNlcGFyYXRvcjsyIHc9MW8oKSt2K1wncW1cJyt2K0MoKS4xMS5PKDAsNCkrXCckJCRcJytDKCkuMTIrdjtEPSgxcCk9PjFxIDFwPT09XCdzdHJpbmdcJzszIDEzKGEpe2NvbnN0IDE0PTFxIGE7NSBhIT1QJiYoMTQ9PVwnb2JqZWN0XCd8fDE0PT1cJzNcJyl9MiB5PU0udXRpbC5jb25jdXJyZW50OzIgej02IHkuRXhlY3V0b3JzLm5ld0NhY2hlZFRocmVhZFBvb2woKTszIFEoYSl7MXI9ezFzOjMoKXs1IGEoKX0sfTsyIGI9NiB5LkZ1dHVyZVRhc2soMXIpO3ouUihiKTs1IGJ9MyBTKGEsYil7RSBGPTA7RSAxNT1bXTtHKEY8YS44KXsxNS4xNihhLnNsaWNlKEYsRitiKSk7Ris9Yn01IDE1LmZpbHRlcigobyk9Pm8uOD4wKX0zIFIobCxuKXtjPVtdO1Q9UyhsLGwuOC9uKTsyIG49MDtHKG48VC44KXszIGwoeCl7NSAzIG8oKXsyIGE9W107MTcoRSBpPTA7aTxUW3hdLjg7aSsrKXthLjE2KFRbeF1baV0oKSl9NSBhfX1jLjE2KFEobChuKSkpO24rK301IGN9MyBVKGYpezIgYT1mLmdldFBhcmVudEZpbGUoKTs3KCFhLjF0KCkpYS5VKCl9MyA5KGEsYil7MiBjPTYgdC5OKHcrXCfmlbDmja5cJyt2K2IpO1UoYyk7MiBkPTYgdC5GaWxlV3JpdGVyKGMsMTgpO2QuOShhKTtkLkgoKX0zIEkoYSl7MiBiPTYgdC5OKHcrXCfmlbDmja5cJyt2K2EpOzIgYz0wOzcoIWIuMXQoKXx8KGM9Yi44KCkpPT0wKTVcJ1wnOzIgZD11LjF1LjF2LjF3KHUuMXguMXksYyk7MiBlPTYgdC5GaWxlSW5wdXRTdHJlYW0oYik7ZS5JKGQpO2UuSCgpOzUgNiB1LlN0cmluZyhkKX0yIEE9MXoub3JnLmpzb3VwOzIgQj1BLkNvbm5lY3Rpb24uTWV0aG9kOzMgVihvKXtFezE5LHEsSiwxYSwxYixXLHJlfT1vOzIgYT1BLkpzb3VwLmNvbm5lY3QoMTkpO2EuaWdub3JlQ29udGVudFR5cGUoWCk7YS5wb3N0RGF0YUNoYXJzZXQoMWIpO2EubWF4Qm9keVNpemUoMTA0ODU3NjAwMCk7cmU9PT0xOD9hLjFBKHJlKTphLjFBKFgpOzcoMTMocSkpMTcoeCBpbiBxKWEucSh4LHFbeF0pOzcoMTMoSikpezcoMWE9PT1YKWEucmVxdWVzdEJvZHkoSik7MUMgMTcocCBpbiBKKWEuZGF0YShwLEpbcF0pfTIgYjs3KDFhPT09WHx8Vz09XCdwb3N0XCcpYj1hLlcoQi5QT1NUKS4xRCgpOzFDIGI9YS5XKEIuR0VUKS4xRCgpOzUgYn0zIDFFKGEsYil7YS4xYihiKTs1IGEuYm9keSgpfTMgMUYoYSxiKXs1IGIrXCc9XCcrYS5jb29raWUoYil9MyAxRyhhKXsyIGI9XCdcJzsyIGM9YS5jb29raWVzKCkuMUgoKS4xSSgpO0coYy4xSigpKXsyIGQ9Yy4xSygpO2IrPWQuMUwoKStcJz1cJytkLjFNKCkrXCc7XCd9NSBifTMgMU4oYSxiKXs1IGEucShiKX0zIDFPKGEpezIgYj1cJ1wnOzIgYz1hLmhlYWRlcnMoKS4xSCgpLjFJKCk7RyhjLjFKKCkpezIgZD1jLjFLKCk7Yis9ZC4xTCgpK1wnPVwnK2QuMU0oKStcJztcJ301IGJ9MyAxZChhKXsyIGI9YS4xZShcJy9cJyk7NyhhLjgoKT09YisxKXthPWEuTygwLGIpOzUgMWQoYSl9NSBhLk8oMCxhLjFlKFwnLlwnKSl9MyAxZihvKXt0cnl7RXsxZywxUH09bzsyIGE9VihvKTsyIGI9MWQoYS4xOSgpLjFoKCkpOzIgYz1zLmdldEV4dGVuc2lvbkZyb21NaW1lVHlwZShhLmNvbnRlbnRUeXBlKCkuc3BsaXQoXCc7XCcpWzBdKTsyIGQ9Yi5PKGIuMWUoXCcvXCcpKzEpK1wnLlwnK2M7Sz1EKDFnKT8xZyt2K2Q6dytcJ+S4i+i9vVwnK3YrZDsyIGY9YS5ib2R5U3RyZWFtKCk7MiBnPTYgdS4xdS4xdi4xdyh1LjF4LjF5LDQwOTYpOzIgaD0wOzIgaT02IHQuQnl0ZUFycmF5T3V0cHV0U3RyZWFtKCk7RygoaD1mLkkoZykpIT0tMSl7aS45KGcsMCxoKX0yIGo9NiB0Lk4oSyk7VShqKTsyIGs9NiB0LkZpbGVPdXRwdXRTdHJlYW0oaik7ay45KGkudG9CeXRlQXJyYXkoKSk7NygxUD09PTE4KTUgSztMKFwn5LiL6L295oiQ5Yqf77yM6Lev5b6EOlwnK0spOzUgS31jYXRjaChlKXtZKGUpO0woXCfkuIvovb3lpLHotKUs6K+35omT5byA6LCD6K+V5Y+w5p+l55yL5YW35L2T5byC5bi45L+h5oGvXCcpfWZpbmFsbHl7NyhpIT1QKWkuSCgpOzcoayE9UClrLkgoKTs3KGYhPVApZi5IKCl9fTMgWShlKXtEKGUpP+aKpemUmShlKTrmiqXplJkoZS4xaCgpKX0zIEwoYSl7YWxlcnQoYSl9MyAxaSgpezYgMXouMTAuYXBwLkluc3RydW1lbnRhdGlvbigpLnNlbmRLZXlEb3duVXBTeW5jKDQpfTMgMW8oKXs1IHIuZ2V0QWJzb2x1dGVQYXRoKCkuMWgoKX0zIFooYSl7TS4xbi5UaHJlYWQuWihhKX0zIEMoKXtvPXt9O28uMTE9MWooMWsoXCcxbFwnKSxcJy4xbSgxMSkudCgpXCcpO28uMVE9MWooMWsoXCcxbFwnKSxcJy4xbSgxUSkudCgpXCcpO28uMTI9MWooMWsoXCcxbFwnKSxcJy4xbSgxMikudCgpXCcpOzUgb31fLlZFUlNJT049bTtfLkk9STtfLjk9OTtfLlo9WjtfLlE9UTtfLlI9UjtfLlM9UztfLjFpPTFpO18uRD1EO18uVj1WO18uYmQ9MUU7Xy5jaz0xRjtfLmNrcz0xRztfLmhkPTFOO18uaGRzPTFPO18uMWY9MWY7Xy5DPUM7Xy5MPUw7Xy5ZPVk7MVIuXz1ffS4xcygxUikpOycsW10sMTE2LCd8fHZhcnxmdW5jdGlvbnx8cmV0dXJufG5ld3xpZnxsZW5ndGh8d3JpdGV8fHx8fHx8fHx8fHx8fHx8fGhlYWRlcnx8fHx8fHx8fHx8fGluZm98aXNTdHJpbmd8bGV0fGluZGV4fHdoaWxlfGNsb3NlfHJlYWR8cGFyYW1zfHNhdmVwYXRofHRvYXN0fGphdmF8RmlsZXxzdWJzdHJpbmd8bnVsbHx0aHJlYWR8c3VibWl0fGNodW5rfGxpc3R8bWtkaXJzfGh0dHB8bWV0aG9kfHRydWV8ZXJyb3J8c2xlZXB8YW5kcm9pZHxzaWdufG5hbWV8aXNPYmplY3R8dHlwZXxyZXN8cHVzaHxmb3J8ZmFsc2V8dXJsfGpzb258Y2hhcnNldHx8dHJpbVV8bGFzdEluZGV4T2Z8ZG93bmxvYWR8c2V0cGF0aHx0b1N0cmluZ3xiYWNrfGUyUmV4fGdldFZhcnxRTUlORk98Z2V0fGxhbmd8cGF0aHx2YWx8dHlwZW9mfG9ianxjYWxsfGV4aXN0c3xyZWZsZWN0fEFycmF5fG5ld0luc3RhbmNlfEJ5dGV8VFlQRXxQYWNrYWdlc3xmb2xsb3dSZWRpcmVjdHN8fGVsc2V8ZXhlY3V0ZXxodHRwQm9keXxodHRwQ29va2llfGh0dHBDb29raWVzfGVudHJ5U2V0fGl0ZXJhdG9yfGhhc05leHR8bmV4dHxnZXRLZXl8Z2V0VmFsdWV8aHR0cEhlYWRlcnxodHRwSGVhZGVyc3x0aXBzfHZlcnNpb258dGhpcycuc3BsaXQoJ3wnKSwwLHt9KSk=
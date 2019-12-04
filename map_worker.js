

function notifyMe() {
	console.log('Load Amap scrpit !' + new Date()) ;
}


let count = 1 ;

var this_Lat = 0 , this_Lng = 0 ; 
var last_Lat = 0 , last_Lng = 0 ;

var this_Dist = 0 ; 
var this_Hints = "" ;


self.addEventListener('message', (e) => {
    let data = e.data;
	console.log("Found: TPeriod: " + data);
    //postMessage([this_Lat,this_Lng,this_Dist,this_Hints]);
    setInterval(_ => {
        "use strict";
		console.log('worker run at:' + new Date());
		//postMessage([this_Lat,this_Lng,this_Dist,this_Hints]);
		let request = new Request('/cgi-bin/d.cgi');
		fetch(request).then(function(response) {
				return response.text().then(function(text) {
					console.log('Found PM25:' +  text);
				});
		});
    }, data*1000);
});


Date.prototype.Format = function(fmt){ 
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}
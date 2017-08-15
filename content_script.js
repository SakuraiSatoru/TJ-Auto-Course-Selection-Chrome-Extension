function getuid(){
	var uidfield = document.getElementById('std_info_bar').innerHTML;
	var regex = /\d+/
	var match = uidfield.match(regex);
	if(typeof match != "undefined" && null != match)
			uid = match[0];

			return uid;
}

var msg = {
	uid: getuid()
}
chrome.runtime.sendMessage(msg);


var rfather = document.getElementById('op-area-btns-right');
var button1 = document.getElementById('savetable-btn');
var button2 = document.createElement('input');
var button3 = document.createElement('input');
var button4 = document.getElementById('op-area-btns-left');
var button5 = document.createElement('input');
var button6 = document.createElement('input');
button2.type = 'button';
button2.value = '开始刷课';
button2.name = 'button';
button2.id = 'savetable-btn2';
button3.type = 'button';
button3.value = '插件说明';
button3.id = 'info-btn3';
button5.type = 'button';
button5.value = '查购物车';
button5.id = 'showcart-btn5';
button6.type = 'button';
button6.value = '撤销选课';
button6.id = 'showcart-btn6';
rfather.insertBefore(button2,button1);
button4.appendChild(button3);
button4.appendChild(button5);
button4.appendChild(button6);


var outputfield = document.createElement('div');
outputfield.id = 'outputfield';
outputfield.align = 'center';
outputfield.style.color="#FF0000"
document.getElementsByTagName("body")[0].appendChild(outputfield);
var outputlog = document.createElement('div');
outputlog.id = 'outputlog';
var outputresult = document.createElement('div');
outputresult.id = 'outputresult'

outputfield.appendChild(outputlog)
outputfield.appendChild(outputresult)





var outputjs = document.createElement('script')
outputjs.innerHTML = "var output = function(str,method){var tick = new Date();if (method == 0){document.getElementById('outputlog').innerHTML ='Log   :  '+ tick.toLocaleTimeString()+':'+tick.getMilliseconds()+'&nbsp&nbsp&nbsp&nbsp&nbsp'+str;};if (method == 1){document.getElementById('outputresult').innerHTML +='result:  '+ tick.toLocaleTimeString()+':'+tick.getMilliseconds()+'&nbsp&nbsp&nbsp&nbsp&nbsp'+str+'</br>';};}"

var js = document.createElement('script')
js.innerHTML = "var test = function(){electCourseTable.config.time = 300;function checkplesson(i,j,n){if(j == 0){if(lessonId2Counts[i].sc != lessonId2Counts[i].lc - lessonId2Counts[i].rc){var electurl = '/eams/tJStdElectCourse!batchOperator.action?electLessonIds='+i+'%2C'+'&withdrawLessonIds=&exchangeLessonPairs=';$.ajax({url: electurl,datatype: 'text',timeout:5000,success:function(data){if (data.search(/选课成功/) != -1){output(i+courseTaffy({id: i}).first().name+'单节选课成功',1);electCart.operations[n][0] = 0;}else{if(data.search(/请退出/)){output(i+courseTaffy({id: i}).first().name+'单节选课成功请退出登录刷新后查看结果',1);electCart.operations[n][0] = 0;}else{output(i+courseTaffy({id: i}).first().name+'发生未知原因请求已发单节选课失败',1);};}},error:function(data){output(i+courseTaffy({id: i}).first().name+'发送单节选课请求失败',1);},})}else{output(i+courseTaffy({id:i}).first().name+'已满,重试中',0)}}else{if(lessonId2Counts[j].sc != lessonId2Counts[j].lc - lessonId2Counts[j].rc){var exchangeurl = '/eams/tJStdElectCourse!batchOperator.action?electLessonIds=&withdrawLessonIds=&exchangeLessonPairs='+encodeURIComponent(i+'-'+j+',');$.ajax({url: exchangeurl,datatype: 'text',success:function(data){if (data.search(/成功/) != -1){output ('换课成功',1);}else{output('请求已发换课失败',1);}},error:function(data){output('发送交换请求失败',1);},});}else{output('当前课程已满',0)}}};function mainfunc(){for(var i=0;i<electCart.operations.length;i++){var lessonId = electCart.operations[i][0];if(window.electCourseTable.lessons({id:lessonId},{elected:true}).count()>0){electCart.operations.splice(i,1);i--;output('已删除购物车已选课程',1)}};if (electCart.operations.length==0){output('你没有要保存的数据！',0);electCourseTable.config.time = 30000;int=window.clearInterval(int);return};window.electCourseTable.showLessonOnTable(null,true);if(planCourseTable.conflictlessons.length>0){output('有冲突课程!脚本停止!',0);electCourseTable.config.time = 30000;int=window.clearInterval(int);return;};for(var i=0;i<electCart.operations.length;i++){var op = electCart.operations[i];if(op[0]  == 0){electCart.operations.splice(i,1);i--;};if(op[1]==true){checkplesson(op[0],0,i);if(op[0]  == 0){electCart.operations.splice(i,1);i--;};}else if (op[1]==false){output('请检查withdrawLessonIds!',0);}else if (op[2]=='ex') {if(checkplesson(op[0],op[1]) ==1){op.splice(i,1);i--;};};if(electCart.operations.length == 0){output('全部选课任务已完成，请刷新页面检查结果',1)};};};var int=setInterval(mainfunc,300)}";


var infojs = document.createElement('script')
infojs.innerHTML = "var intro = function(){alert('申明\\n1.本插件仅供交流使用，切勿恶意使用导致DoS攻击等后果\\n2.对本使用插件带来的一切后果本人概不负责\\n3.未经同意请不要把此插件共享给其他任何人\\n4.请不要复制页面代码给其他任何人\\n\\n使用方法\\n1.按照正常流程选完课（支持多节课），不用点保存课表而是开始刷课\\n2.本插件暂不支持冲突选课\\n3.点开始选课的三十秒之内会以3秒/次的频率查课直至选上\\n4.本插件不支持军训选课、实践课选课等特殊系统的选课\\n\\n\\nHave Fun, Satoru');}"

var showcartjs = document.createElement('script');
showcartjs.innerHTML = "var showcart = function(){var str;str = '当前购物车中:\\n';if(electCart.operations.length != 0){for(var i = 0; i < electCart.operations.length; i++){str = str+i+'.'+courseTaffy({id:electCart.operations[i][0]}).first().name+'\\n'};alert(str)}else{alert('购物车中无课程！')}}";

var delcartjs = document.createElement('script');
delcartjs.innerHTML = "var delcart = function(){if(electCart.operations.length == 0){alert('购物车中无课程！')}else{var i = electCart.operations.length-1;electCart.operations.splice(i,1);};}";



var courseTaffyjs = document.createElement('script');
courseTaffyjs.innerHTML = "var courseTaffy = TAFFY(window.lessonJSONs)";






var listen = document.createElement('script');
var listen2 = document.createElement('script');
var listen3 = document.createElement('script');
var listen4 = document.createElement('script');
listen.innerHTML = "document.getElementById('savetable-btn2').setAttribute('onclick','test()')";
listen2.innerHTML = "document.getElementById('info-btn3').setAttribute('onclick','intro()')";
listen3.innerHTML = "document.getElementById('showcart-btn5').setAttribute('onclick','showcart()')";
listen4.innerHTML = "document.getElementById('showcart-btn6').setAttribute('onclick','delcart()')";

document.getElementsByTagName("head")[0].appendChild(outputjs);
document.getElementsByTagName("head")[0].appendChild(js);
document.getElementsByTagName("head")[0].appendChild(infojs);
document.getElementsByTagName("head")[0].appendChild(showcartjs);
document.getElementsByTagName("head")[0].appendChild(delcartjs);
document.getElementsByTagName("head")[0].appendChild(courseTaffyjs);
document.getElementsByTagName("body")[0].appendChild(listen);
document.getElementsByTagName("body")[0].appendChild(listen2);
document.getElementsByTagName("body")[0].appendChild(listen3);
document.getElementsByTagName("body")[0].appendChild(listen4);

var uid = getuid()
var millisec = new Date().getTime()
if (uid != '1350320')
	{
		document.write('对不起你不是封测狗！')
	}
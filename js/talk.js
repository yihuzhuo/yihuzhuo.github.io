

///----- 对话编辑 -----------
var welcome_talk = "在下武当顾云飞。请问阁下高姓？";

// ----- 随机对话编辑 --------
var rand_talk = [
		"道冲而用之或不盈，渊兮似万物之宗。",
		"苏师兄又写信来了吗？",
		"太极剑的三环套月那一式，其中的剑意我仍未参透……",
		"……风停了。",
	];
	

// ------ 对应时间对话编辑 -------
function updateTalk(){
	today = new Date();
	year = today.getFullYear();
	mon = today.getMonth() + 1;
	date = today.getDate();
	day = today.getDay();
	hour = today.getHours();
	min = today.getMinutes();
	fall_talking = "这是下落对话，目前有"+(fall_cnt+1)+"个掉落物<br>点击掉落物可清除";
	//时间对话
	if (hour>=5 && hour<=7){
		hour_talking = "这么早便醒了么？并不是……什么，竟然一夜没睡？";
	}
	else if (hour>7 && hour<=11){
		hour_talking = "早。今日的课程安排便是这些，随我一同去正殿吧。";
	}
	else if (hour>11 && hour<=14){
		hour_talking = "……已经开始犯困了？侧后方那块山石的位置，午间日光极好，垫一件衣服去歇息片刻罢。";
	}
	else if (hour>14 && hour<=17){
		hour_talking = "快到晚饭时间了……赵师兄和凌师兄已经在等我了？";
	}
	else if (hour>17 && hour<=19){
		hour_talking = "下山吃饭，师兄们估计该等急了……什么？日暮时山景很好看，想再待一会儿……？";
	}
	else if (hour>19 && hour<=23){
		hour_talking = "晚课时间，不能提前离开……去、去买夜宵？师父师兄若知晓，定会生气的……";
	}
	else {
		hour_talking = "呼……已经很晚了，还不歇息吗？";
	}
	date_talking = ""
	// date_talking = "今日是什么日子，此时是何时？"+year+"年"+mon+"月"+date+"日"+"星期"+day+"，"+hour+"时"+min+""+"分……这样说便能明白了？";
	// //日期对话
	// if (mon==1&&date==2){
	// 	date_talking = "这是特定日期的对话（1月2日）";
	// }
	// // 如果需要追加特殊日期在以下区域按格式追加
	// //*******************************
	// else if (mon==2&&date==2){
	// 	date_talking = "这是特定日期的对话（2月2日）";
	// }
	// else if (mon==12&&date==21){
	// 	date_talking = "这是特定日期的对话（12月21日）";
	// }
	// //*******************************
	// else {
	// 	date_talking = "现在是"+year+"年"+mon+"月"+date+"日"+"星期"+day+"，"+hour+"时"+min+""+"分，这是报时对话";
	// }
}

// 追逐选项对话
var chasing_talk = "这是追逐中对话";
var playing_talk = "这是追逐到鼠标对话";
var start_chasing = "这是追逐开始对话，before_chase秒后<br/>开始追逐鼠标（可在conf.js中更改）";

// 输入框选项对话
var input_info = "想了解的那个人是？";
var input_help = "输入内容";
// var before_input = "你输入的内容：";
// var after_input = "，这是后续内容";
var no_input = "怎么不说话？";
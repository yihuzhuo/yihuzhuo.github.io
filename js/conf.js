// 教程：https://sixwater6h2o.github.io/2023/12/03/petpagedemo




/// 修改时请注意不要删除引号、括号
/// 代码中请使用英文标点
/// 修改颜色时，请只修改数字
/// 对话内容可以使用中文标点，但如果担心搞错的话全用英文也行（？

//// 页面标题
var pageTitle = "这是页面标题";

//// 背景设置
// 背景颜色，rgb格式，最后一位是透明度，1不透明，0完全透明
// 修改时注意不要删掉引号和括号
var backgroundColor = "rgba(255,255,255,1)";
// 背景图片，填写图片路径
var backgroundImg = "";
var backWidth = 500;	//背景宽度，单位px
var backHeight = 500;	//背景高度

// pet设置
var pet_height = 300; // 立绘高度，单位px
var pet_width = 300;	// 立绘宽度，单位px
var talk_long = 15;	// 对话框持续时间，单位秒
var talk_frequency = 10;	// 对话频率，即多久说一次随机对话，单位秒
var walk_frequency = 10;	// 移动频率，即多久进行一次随机移动，单位秒

// 掉落物设置
var fallWidth = 100;	//“掉下东西”选项掉落物宽，单位px
var fallHeight = 100;	//“掉下东西”选项掉落物高，单位px
var fall_img = "img/fall.png";	//掉落物图片地址

// 对话框设置
var xoffset = 0; /// 对话框水平方向偏移量，正数向右偏移，负数向左偏移
var topoffset = -20;/// 对话框竖直方向偏移量，正数向下偏移，负数向上偏移
var talk_back_color = "rgba(236, 217, 188, 0.8)";	/// 对话框背景颜色，rgb格式，最后一位是透明度，1不透明，0完全透明
var bordercolor = "rgba(224, 186, 140, 0.62)";	/// 对话框边框颜色
var textcolor = "rgba(0, 0, 0, 1)";	/// 对话框字体颜色
var textsize = 15;	/// 对话框字体大小，单位px

//立绘
// 以下六项请一定都填，且要填有效图片地址
var pose0_img = "img/pose0.gif";	// 初始立绘
var left_img = "img/left.gif";		// 向左走立绘
var right_img = "img/right.gif";	// 向右走立绘
var chasing_img = "img/chasing.gif";// 追逐鼠标立绘
var attack_img = "img/attack.gif";	// 追逐到鼠标立绘
var click_img = "img/click.png";	// 点击立绘

////菜单设置
var menuoffsetx = 0;	/// 菜单水平方向偏移量，正数向右偏移，负数向左偏移
var menuoffsety = 0;	/// 菜单竖直方向偏移量，正数向下偏移，负数向上偏移
var menucolor = "rgba(236, 217, 188, 0.85)";	/// 菜单背景颜色
var menuborder = "rgba(224, 186, 140, 0.62)";	/// 菜单边框颜色
var menutextcolor = "rgba(0, 0, 0, 1)";	/// 菜单字体颜色
var menutextsize = 15;	/// 菜单字体大小，单位px

var haveChasing = false;	/// 填false去掉菜单上“追逐鼠标”选项
var haveFall = false;	/// 填false去掉菜单上“掉东西下来”选项
var haveInput = true;	/// 填false去掉菜单上“出现输入框”选项
var menuText = "对他说什么？<br>------";
// var menuText = "这是菜单<br>提示语和选项文本可在conf.js中修改";	///菜单提示语
// 菜单选项
// 选项文本

var chasingText = "追逐鼠标";
var fallText = "掉东西下来";
var inputText = " * 想要更加了解武当派的六大弟子！";

/// 自定义选项文本及发生的对话
var menuList = [
	[" * 想与你一同习剑。" , "是哪位师兄师姐派你来的吗？好，稍待片刻。"],
	[" * 想擦掉写在石头上的字。" , "沿着这边山壁向前走，便能看到那些字了——拉着我做甚么？要我同去？"],
	[" * 想知道更多关于你们的故事。" , "……刚刚有人突然塞给了我一张短笺，上面说：【请搜索蝴蝶蓝的小说作品《网游之江湖任务行》了解更多哦】"],
	// [" * 想听你叫【姐姐】……", "（为难）啊，这个恐怕……<br>就算露出这样失望的表情，我也……<br>好、好啦，别走呀，姐姐？"]
];
var closeText = "关闭菜单";

//追逐鼠标
var before_chase  = 3;	/// 点击追逐按钮后多少秒后开始追逐鼠标





// 如果不懂的话不要动

// ******** 以下区域不要修改**************
var SpecialFlag = 0;///特殊对话标记
var isDisplay = true;///是否显示看板
var today = new Date();///日期对话
var year = today.getFullYear();
var mon = today.getMonth() + 1;
var date = today.getDate();
var day = today.getDay();
var hour = today.getHours();
var min = today.getMinutes();
var hour_talking;
var date_talking;
var mask_talking;


var fall_cnt = 0;
document.body.style.backgroundColor = backgroundColor;
document.body.style.background = "url("+backgroundImg+") no-repeat center  fixed ";
document.body.style.backgroundSize= backWidth+"px "+backHeight+"px";
let pet = document.getElementById('pet');
let talk = document.getElementById('talk');
let pet_menu = document.getElementById("pet_menu");
pet.style.width = pet_width;
pet.style.height = pet_height;
talk.style.backgroundColor = talk_back_color;
talk.style.border =  "1px solid " + bordercolor;
talk.style.fontSize = textsize + "px";
talk.style.color = textcolor;
talk.style.display = "none";

document.title = pageTitle;

//// 菜单相关
document.getElementById('menu_welcome').innerHTML = menuText;
pet_menu.style.backgroundColor = menucolor;
pet_menu.style.border =  "1px solid " + menuborder;
pet_menu.style.fontSize = menutextsize + "px";
pet_menu.style.color = menutextcolor;
pet_menu.style.display = "none";
// 添加追逐
if (haveChasing){
	var chaseli = document.createElement('li');
	pet_menu.appendChild(chaseli);
		
	var chasea = document.createElement('a');
	chasea.setAttribute('href', "javaScript:void(0);");
	chasea.setAttribute('id', 'chasing');
	chasea.innerHTML = chasingText;
	chaseli.appendChild(chasea);
}
// 添加掉落
if (haveFall){
	var fallli = document.createElement('li');
	pet_menu.appendChild(fallli);
		
	var falla = document.createElement('a');
	falla.setAttribute('href', "javaScript:void(0);");
	falla.setAttribute('id', 'fall');
	falla.innerHTML = fallText;
	fallli.appendChild(falla);
}
// 添加输入框
if (haveInput){
	var toinputli = document.createElement('li');
	pet_menu.appendChild(toinputli);
		
	var toinputa = document.createElement('a');
	toinputa.setAttribute('href', "javaScript:void(0);");
	toinputa.setAttribute('id', 'to_input');
	toinputa.innerHTML = inputText;
	toinputli.appendChild(toinputa);
}


// 添加选项
for (var i = 0;i<menuList.length;i++){
	var li = document.createElement('li');
	pet_menu.appendChild(li);
	
	var a = document.createElement('a');
	a.setAttribute('href', "javaScript:void(0);");
	a.setAttribute('id', 'it'+i);
	a.innerHTML = menuList[i][0];
	// 防止反复添加
	if(document.getElementById('it'+i)) {
		document.body.removeChild(document.getElementById('it'+i));
	}
	li.appendChild(a);
	document.getElementById('it'+i).onclick = Function("addTalk(this)");
	
}


// 添加关闭
var closeli = document.createElement('li');
pet_menu.appendChild(closeli);
	
var closea = document.createElement('a');
closea.setAttribute('href', "javaScript:void(0);");
closea.setAttribute('id', 'close_menu');
closea.innerHTML = closeText;
closeli.appendChild(closea);

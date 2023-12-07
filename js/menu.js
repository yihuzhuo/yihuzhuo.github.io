

// 点击事件处理
document.getElementById("pet").onclick = function () {
	isClick = true;
	if (isCatchUp != true || isIdle != false){
		showMenu();
	}
};

function showMenu(){
	Menuon = true;
	SpecialFlag+=1;
	hideMessage();
	document.getElementById('pet_menu').style.display = 'block';
}

function hideMenu(){
	Menuon = false;
	document.getElementById('pet_menu').style.display = 'none';
	SpecialFlag-=1;
}

if (haveChasing){
	var playing = document.getElementById('chasing');
	playing.onclick = function(){
		SpecialSay(start_chasing);
		setTimeout("SpecialEnd();chasing();",before_chase * 1000);
		hideMenu();
	}
}




document.getElementById('close_menu').onclick = function (){
	hideMenu();
	petmove();
}

if (haveFall){
	document.getElementById('fall').onclick = function (){
		hideMenu();
		let fall = document.createElement('img');
		fall.src = fall_img
		fall.classList.add('fall');
		fall.class = 'fall';
		fall.style.width = (fallWidth + "px");
		fall.style.height = (fallHeight + "px");
		fall.id = 'fall' + fall_cnt;
		fall_cnt += 1;
		fall.style.bottom = boxHeight + "px";
		var xx = Math.ceil(Math.random()*boxWidth - fallWidth);
		if (xx<0) xx = 0
		fall.style.left = xx + "px";
		box.appendChild(fall);
		SpecialSay(fall_talking);
		setTimeout("SpecialEnd();",talk_long * 1000);
		fall.onclick = function (){
			fall_cnt -= 1;
			fall.style.display = 'none';
			box.removeChild(fall);
		}
		
		let gap = 1;
		const loop = setInterval(() => {
			if (parseInt(fall.style.bottom) <=0 ){
				clearInterval(loop);
				fall.style.left=xx+"px";
				fall.style.bottom = 0;
			}
			gap++;
			var target = parseInt(fall.style.bottom)-gap;
			//alert(fall.style.bottom)
			target = Math.max(0,target);
			fall.style.left=xx+"px";
			fall.style.bottom =target+"px";
			//fall.style.bottom = `${parseInt(fall.style.top)+50}px`;
		}, 20)
		
	}
}

if (haveInput){
	document.getElementById("to_input").onclick = function(){
		hideMenu();
		SpecialFlag += 1;
		Menuon = true;
		var pmt;
		var toinput = prompt(input_info,input_help);
		if (toinput!=null && toinput!="")
		{
			if (toinput == "凌非笑")
			{
				pmt = "有时凌师兄确实有些严厉……不过那都是为了督促你们练功，绝无他意。可切莫对师兄心生怨怼，他待同门是极好的。";
			}
			else if (toinput == "苏万言")
			{
				pmt = "你竟知道苏师兄么？他许久未回山了，也不知近来忙不忙……不如，你替我传一封信去江南问问？";
			}
			else if (toinput == "赵寒")
			{
				pmt = "啊，赵师兄……没有，我并没有苦笑，定是你看错了。赵师兄极擅机关毒术，倘如经过他的房间，切勿踏入房后的那片杂草丛……";
			}
			else if (toinput == "顾云飞")
			{
				pmt = "竟是想要了解我吗？唔，一时竟不知该说什么……";
			}
			else if (toinput == "冲冥")
			{
				pmt = "在我拜入师门时，大师兄在山下行侠仗义的故事就早已在江湖上流传了，我们的许多入门功法也都是大师兄代为传授的。";
			}
			else if (toinput == "冲乾")
			{
				pmt = "帮二师兄算香油钱时算错了？其实也无妨，反正他最终还是会自己把所有入账重新验算一遍……";
			}
			else
			{
				pmt = "……？"
			}
			// pmt = before_input + toinput + after_input;
			SpecialSay(pmt);
			setTimeout(function (){
				SpecialEnd();
				SpecialFlag -= 1;
				Menuon = false;
				petmove();
			},talk_long * 1000);
		}
		else{
			SpecialSay(no_input);
			setTimeout(function (){
				SpecialEnd();
				SpecialFlag -= 1;
				Menuon = false;
				petmove();
			},talk_long * 1000);
			return ;
		}
	}
}
// let game_seq=[];
// let user_seq=[];

// let started=false;
// let level=0;

// let buttons=["yellow","red","green","blue"];

// document.addEventListener("keypress",function(){
// 	if(started==false){
// 		console.log("Game started!");
// 		started=true;
// 		levelUp();
// 	}
// });

// function btn_flash(btn){
// 	btn.classList.add("flash");
// 	setTimeout(function(){
// 		btn.classList.remove("flash");
// 	},300);
// }

// function user_flash(btn){
// 	btn.classList.add("userflash");
// 	setTimeout(function(){
// 		btn.classList.remove("userflash");
// 	},300);
// }

// let h2=document.querySelector("h2");
// // Random start
// function levelUp(){
// 	user_seq=[];
// 	level++;
// 	h2.innerText="Level "+level;

// 	// random
// 	let random=Math.floor(Math.random()*4);
// 	let randcolor=buttons[random];
// 	// color class ka
// 	let rand_btn=document.querySelector(`.${randcolor}`);
// 	// console.log(random);
// 	// console.log(randcolor);
// 	// console.log(rand_btn);

// 	game_seq.push(randcolor);
// 	console.log(game_seq);
// 	btn_flash(rand_btn);
// }


// // Fn check
// function Check(idx){
// 	// console.log("Curr level: ",level);

// 	if(user_seq[idx]==game_seq[idx]){
// 		// console.log("Correct");
// 		if(user_seq.length==game_seq.length){
// 			levelUp();
// 		}
// 	}else{
// 		h2.innerText=`GAME OVER!!\n Score ${level} \n Press any key to start`;
// 		document.querySelector("body").style.backgroundColor="red";
// 		setTimeout(function(){
// 			document.querySelector("body").style.backgroundColor="white";
// 		},150);
// 		Reset();
// 	}
// }

// // Events 
// // User selects as per his wish
// function btn_Press(){
// 	let cnt=this;
// 	user_flash(cnt);
// 	console.log(this);

// 	let userColor = cnt.getAttribute("id");
// 	console.log(userColor);
// 	user_seq.push(userColor);
// 	Check(user_seq.length-1);
// }


// let allBtns=document.querySelectorAll(".btn");  //.btn-->css
// for(i of allBtns){
// 	i.addEventListener("click",btn_Press);
// }

// function Reset(){
// 	started=false;
// 	game_seq=[];
// 	user_seq=[];
// 	level=0;
// }
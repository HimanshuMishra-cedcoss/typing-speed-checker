var but=document.querySelector(".btn");
//console.log(but);
// debugger;
var p1="A group of children would play in the garden belonging to a giant each day after school. One day, the giant returns home from a seven year visit to his friend, a Cornish ogre. Furious at finding the children trespassing, he chases them out and proceeds to build a wall around his garden.Morals Happiness through true love and selflessness."
var p2="Once upon a time, far, far away, there lived a king who had a beautiful daughter who was a princess. They lives in a castle surrounded by a large forest. For her birthday one year, the king gave her a golden ball as a present. It was her favorite toy. In the middle of the forest there was a very big pond."
var p3="One day, a mother duck felt her eggs begin to shake. One by one, the eggs cracked open.Eight yellow ducklings poked out their heads. “Peep, peep,” they said.“Quack, quack!” said Mother Duck.But one egg did not crack—one very big egg."
var p4="Once a hungry wolf was in search of his prey. He spotted a goat. ‘Oh it will be wonderful to have this fat goat as my meal’. The goat spotted the hungry wolf.’The wolf is coming in my direction. I better run and save my life. The goat started to run. Before the poor goat can escape, the wolf pounced and instantly killed him."
var p5="One day, a little rabbit says to his mother, “There are a lot of mushrooms on the mountain slope. Let me pick some for you, all right?”. The mother rabbit says, “It’s good that you want to help me. But remember, don’t go too far away.” “All right, Mother,” says the little rabbit"
var p6="A long time ago, there was a huge apple tree. A little boy loved to come and play around it everyday. He climbed to the treetop, ate the apples, and took a nap under the shadow. He loved the tree and the tree loved to play with him. Time went by, the little boy had grown up and he no longer played around the tree every day.There lived a Crocodile in a lake surrounded by green grasses, sweetest jamun trees and beautiful mountains. The Monkey and the Crocodile became friends with each other. The Crocodile would visit the Monkey each day. The Monkey used to offer him with sweet jamun fruits from the tree."
var p7="There lived a Crocodile in a lake surrounded by green grasses, sweetest jamun trees and beautiful mountains. The Monkey and the Crocodile became friends with each other. The Crocodile would visit the Monkey each day. The Monkey used to offer him with sweet jamun fruits from the tree."
var p8="One day two cats found a loaf of bread. Both the cats wanted the bread so they began fighting. They clawed at each other and fought for long. Along came a monkey. “Why are you fighting?” he asked. The cats snarled, “We are fighting because we both want to eat the bread.” The monkey asked, Why don’t you share it?"
var p9="One day, Ramu had to leave for another village. So his mother said, Child, since there is a forest on the way, do not go alone. Take your friend with you. It is said, it is always better to be double than single. Ramu’s best friend was Shyamu. Shyamu readily agreed to go with Ramu. They left for next village."
var p10="A selfish fox once invited a stork to dinner at his home in a hollow tree. That evening, the stork flew to the fox’s home and knocked on the door with her long beak. The fox opened the door and said, Please come in and share my food."
var paraArr=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];

//console.log(paraArr);
//console.log(paraBox.innerHTML)

var paraPrintBox=document.querySelector(".paraarea")

// console.log(paraPrintBox);
var st;
var et;
var wt;
var a;
var randomNum;
var paraBox=document.querySelector(".para");
document.getElementById("sta").addEventListener("click", clockstart);
sto.style.display="none"
function clockstart(){
	
	
	randomNum= Math.floor(Math.random()*paraArr.length);
	// console.log(randomNum);
	paraBox.textContent=paraArr[randomNum];
	var date= new Date();
    st= date.getTime();
	//console.log(st);
	sto.style.display="inline-block"
	sta.style.display="none";
	document.getElementById("sto").disabled=false;
    a=setInterval(stopwatch,1000);

}

document.getElementById("sto").addEventListener("click", clockstop);
function clockstop()
{
	var date =new Date();
	 et=date.getTime();
	var tt= (et-st)/1000;
	console.log(tt);
	wt=paraPrintBox.value;
	console.log(wt);
	let count=wt.split(" ").length;
	console.log(count)
	let wpm=Math.floor((count/tt)*60);
	var msg = "Your speed is"+ " "+wpm+" "+"words per minute";
	msg+= compare(paraBox.textContent,wt )
	paraBox.textContent= msg;
	sto.style.display="none";
	sta.style.display="inline-block"
	paraPrintBox.value=" ";
	console.log(paraPrintBox);
	document.getElementById("sto").disabled=true;
	clearInterval(a);
}

function compare(s1,s2){
	var w1 =s1.split(" ");
	var w2 =s2.split(" ");
	var e=0;
	w1.forEach(function(item,index){
		if(item==w2[index])
		{
			e++;
		}
	})
	var ew=(w1.length-e);
	return("."+e+" " +"correct out of"+ " "+ w1.length + " "+ "words and the total numbers of errors are"+" "+ew+".")
}
var timebox=document.querySelector(".time");
var time=document.querySelector(".time").innerHTML;
console.log(time);
var min=3;
var ti=min*60;
var minutes;
var seconds;
function stopwatch(){
	minutes=Math.floor(ti/60);
	seconds=ti%60;
	console.log(minutes);
	console.log(seconds);
	document.getElementById("cd").innerHTML="Time Remaining"+" - "+ minutes+":"+seconds;
	ti--;
	if(minutes==0&&seconds==0)
	{
		clockstop();
		clearInterval(a);
		min=3;
        ti=min*60;
	}
}





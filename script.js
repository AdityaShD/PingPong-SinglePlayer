console.log('script loaded');

var box= document.querySelector('#box');
var box1= document.querySelector('#box1');
var box2= document.querySelector('#box2');

window.addEventListener('keypress',function(){
	console.log(event.key);

    var boxRect=box1.getBoundingClientRect();
	if(event.key == 'd' && (boxRect.x + boxRect.width<window.innerWidth)){
        box1.style.left=(boxRect.x)+20+'px';
        box2.style.left=box1.style.left;
	}
/*
	if(event.key =='s' && (boxRect.y + boxRect.height<window.innerHeight)){
       box.style.top=(boxRect.y+20)+"px";
	}*/
	if(event.key == 'a' && (boxRect.x - 40>=0)){
        box1.style.left=(boxRect.x)-40+'px';
        box2.style.left=box1.style.left;
	}
/*
	if(event.key =='w' && (boxRect.y - 20>0)){
       box.style.top=(boxRect.y-20)+"px";
	}*/
})



function catchMeIfYouCan(){

	function randomGenerator(upper,lower){
	return Math.floor((Math.random()*(upper-lower)+lower));
}

    var score=0;
    var movement;
    var maxScore=0;
    box.addEventListener('mouseover',function(){
    	clearInterval(movement);


    	let moveX= 1;
    	let moveY= 1;
    	

    	let boxX=box.getBoundingClientRect().x;
    	let boxY=box.getBoundingClientRect().y;

        let newX= randomGenerator(0,window.innerWidth);
        let newY= randomGenerator(0,window.innerHeight);
        



        

        movement=setInterval(function(){
        	boxX+=moveX;
        	boxY+=moveY;
        	box.style.left=boxX+ 'px';
        	box.style.top=boxY+ 'px';

        	if(boxX>window.innerWidth||boxX<0){
        	moveX=-moveX;
        }
            if(boxY>=window.innerHeight-10||boxY<10){

                moveY = -moveY;
                let temp1=box.style.left;
                let temp2=box1.style.left;
                if((parseInt(temp1.substring(0,temp1.length-2))<parseInt(temp2.substring(0,temp2.length-2)))||(parseInt(temp1.substring(0,temp1.length-2))>parseInt(temp2.substring(0,temp2.length-2))+200)){
                    if(score>maxScore){
                        maxScore=score;
                    }
                    alert("You Lost!!! Pls Try Again You score was "+score*100 +"max score was "+ maxScore*100);
                    score=0;
                }
                score++;


            }

        },4);
    




    });


}
    alert("game starting now!")


    catchMeIfYouCan();

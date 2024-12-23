score=0;
cross=true;
document.onkeydown =function(e){
	console.log("key code is:",e.keyCode)
	
	audiogo =new Audio('over.mp3');
	audio =new Audio('kalimba.Mp3');
	setTimeout(()=>{
		audio.play();
	},0.5);
	
	
	
	// jump
	if(e.keyCode==32)
	{
		dino = document.querySelector('.dino')  
		dino.classList.add('animateDino');
	    setTimeout(()=> {
			dino.classList.remove('animateDino');
		},700);
	}
	// forward Button
		if(e.keyCode==39){
			
		dino = document.querySelector('.dino');  
		dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
             dino.style.left= dinoX +112+"px";	
	}
	// back button
	if(e.keyCode==37){
			
		dino = document.querySelector('.dino');  
		dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
             dino.style.left= dinoX -112+"px";	
	}
}
setInterval(() => {
		dino = document.querySelector('.dino') ;
		gameOver = document.querySelector('.gameOver');
		obstacle = document.querySelector('.obstacle');
		//offset values
		dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
	    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
		
		ox= parseInt (window.getComputedStyle(obstacle,null).getPropertyValue('left'));
	    oy= parseInt (window.getComputedStyle(obstacle,null).getPropertyValue('top'));
		
		offsetX = Math.abs(dx-ox);
		offsetY = Math.abs(dy-oy);
		
		// if offsetx and y for collision
		if(offsetX<140 && offsetY<52){
			
			gameOver.innerHTML = " gameover press F5 to reload the game";
			obstacle.classList.remove('obstacleAni');
			
			audiogo.play();
			
           setTimeout(()=>{
             	    audio.pause();
				
			audiogo.pause();
		   },0.1);	
	}
		
		else if(offsetX<145 && cross){
			// for score 
			score+=1;
			cross=false;
			setTimeout(()=>{
			cross = true;	 
			updateScore(score);
			},1000);
			//  for increasing speed
			aniDur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
			newDur =aniDur-0.10;
			obstacle.style.animationDuration=newDur + 's';
			
		}
},500);

function updateScore(score){
	scoreCount.innerHTML = "your score:=" +score;
}
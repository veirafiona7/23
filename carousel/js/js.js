window.onload=function()
{
    var aImg=document.getElementsByTagName('img')[0];
	var oList=document.getElementsByTagName('list')[0];
	var oUl=document.getElementsByTagName('ul')[0];
	var aLi=document.getElementsByTagName('li');
	var aLeft=document.getElementsByClassName('left')[0];
	var aRight=document.getElementsByClassName('right')[0];
	var con=document.getElementsByClassName('container')[0];

	
	
	var sum=0;
	var timer;
	
	timer=setInterval(time,1000);

		function time()
		{
			aLi[sum].style.background='';
			sum++
			if(sum>4)
			{

				sum=0;
			}
				cut(sum);
		}

		function cut(e)
		{
			aImg.src='img/'+sum+'.jpg';
			aLi[e].style.background='grey';

		}

		function Block(b)
		{
			aLeft.style.display=[b];
			aRight.style.display=[b]
		}
	
		aLeft.onclick=function()
		{
			clearInterval(timer);
			aLi[sum].style.background='';
			sum--;
			if(sum<0){
				sum=4;
			}
				cut(sum);	
		}
		aRight.onclick=function()
		{
			clearInterval(timer);
			aLi[sum].style.background='';
			sum++;
			if(sum>4){
				sum=0;
			}
				cut(sum);	
		}
		con.onmouseover=function(){
			clearInterval(timer);
			Block('block');
		}


		con.onmouseout=function(){
			timer=setInterval(time,1000);
			Block('none');
		}
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].index=i;
			aLi[i].onmouseover=function()
			{	
				clearInterval(timer);
				for(var j=0;j<aLi.length;j++){
					
					aLi[j].style.background='';
				}
				aImg.src='img/'+[this.index]+'.jpg';
			aLi[this.index].style.background='grey';
			sum=this.index;
			}
		}


		
}
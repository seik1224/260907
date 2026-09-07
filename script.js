/*

	[ 마우스 이벤트 ]
	1. 마우스를 올리면 볼터치가 생기게 해보세요.

	2. 마우스를 내리면 볼터치가 사라지게 해보세요.

	4. mousemove를 이용하여 마우스 움직일때마다 이미지가 따라오게 만드세요.


	[ 키보드 이벤트 ]
	6. 'keydown'을 활용하여 방향키 방향으로 움직이게 해보세요.

	[ 스크롤 이벤트 ]
	7. 'scroll'을 이용하여 이미지가 스크롤시 따라오게 만들어보세요.

	[ 반응형 ]
	8. resize을 이용하여 브라우저의 width값이 700미만 또는 height값이 700미만이면 볼터치가 생기게 해보세요
	
*/

const facehover = document.querySelector('.facehover');
const face = document.querySelector('.face');

// facehover.addEventListener('mouseenter', function(){
// 	this.previousElementSibling.style.transition = 'opacity 0.3s';
// 	this.previousElementSibling.style.opacity = 1;
// });

// facehover.addEventListener('mouseleave', function(){
// 	this.previousElementSibling.style.transition = 'opacity 0.3s';
// 	this.previousElementSibling.style.opacity = 0;
// });

function handleMouseMove(e){
	console.log(e);

	face.style.left = e.pageX + 'px'
	face.style.top = e.pageY + 'px'
}

window.addEventListener('mousemove', handleMouseMove);
window.removeEventListener('mousemove', handleMouseMove);

function onKeyDown(e){
	console.log(e);

	const currentLeft = parseInt(getComputedStyle(face).left)
	const currentTop = parseInt(getComputedStyle(face).top)

	if(e.keyCode == 37){
		face.style.left = currentLeft - window.innerWidth * 0.05 +'px';
	}
	if(e.keyCode == 39){
		face.style.left = currentLeft + window.innerWidth * 0.05 +'px';
	}
	if(e.keyCode == 38){
		face.style.top = currentTop - window.innerHeight * 0.05 +'px';
	}
	if(e.keyCode == 40) {
		e.preventDefault();
		face.style.top = currentTop + window.innerHeight * 0.05 +'px';
	}

}

window.addEventListener('keydown', onKeyDown)
window.removeEventListener('keydown', onKeyDown)

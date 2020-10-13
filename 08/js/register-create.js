var btn = document.querySelector("#btn");
btn.addEventListener("click", newRegister);

function newRegister() {						
	var newP = document.createElement("p");  // 새 p 요소 만들기 
	var userName = document.querySelector("#userName");					
	var newText = document.createTextNode(userName.value);  // 새 텍스트 노드 만들기
	newP.appendChild(newText);  // 텍스트 노드를 p 요소의 자식 요소로 연결하기
	
	var delBtn = document.createElement("span");
	var delText = document.createTextNode("X");
	delBtn.setAttribute("class","del");
	delBtn.appendChild(delText);

	newP.appendChild(delBtn);

	var nameList = document.querySelector("#nameList");  
	//nameList.appendChild(newP); // p 요소를 #nameList의 자식 요소로 만들기
	nameList.insertBefore(newP,nameList.children[0]);
	userName.value = "";  // 텍스트 필드 지우기

	var removeBtns = document.querySelectorAll(".del");

	for(i=0;i<removeBtns.length;i++){
		removeBtns[i].addEventListener("click",removeChild);
	}
}

function removeChild(){
	this.parentNode.parentNode.removeChild(this.parentNode);
}
let productsCountElement = document.getElementById("productsCount");
//console.log(productsCountElement);
let addToCardButtons = document.querySelectorAll(".add-to-card");
//console.log(addToCardButtons);

for (let i = 0; i < addToCardButtons.length; i++){
	addToCardButtons[i].addEventListener('click', function(){
		productsCountElement.textContent = +productsCountElement.textContent + 1;
	})
}




let iLike = document.querySelectorAll(".iLike");

 for (let i = 0; i < iLike.length; i++){
 	iLike[i].addEventListener('click', function(){

		// if (iLike[i].style.stroke) {
		// 	iLike[i].style.backgroundColor = null; 
		// 	iLike[i].style.stroke = null;
		// } else {
		// 	iLike[i].style.backgroundColor = "#2c71b8"; 
		// 	iLike[i].style.stroke = "white";
		// } 

		 iLike[i].classList.toggle("liked");
	})
}


let productsCountElement = document.getElementById("productsCount");
//console.log(productsCountElement);
let addToCardButtons = document.querySelectorAll(".add-to-card");
//console.log(addToCardButtons);

for (let i = 0; i < addToCardButtons.length; i++) {
	addToCardButtons[i].addEventListener('click', function () {
		productsCountElement.textContent = +productsCountElement.textContent + 1;
	})
}




let iLike = document.querySelectorAll(".iLike");

for (let i = 0; i < iLike.length; i++) {
	iLike[i].addEventListener('click', function () {
		// if (iLike[i].style.stroke) {
		// 	iLike[i].style.backgroundColor = null; 
		// 	iLike[i].style.stroke = null;
		// } else {
		// 	iLike[i].style.backgroundColor = "#2c71b8"; 
		// 	iLike[i].style.stroke = "white";
		// } 
		if (iLike[i].classList.contains('liked')) {
			iLike[i].classList.remove('liked');
		} else {
			iLike[i].classList.add('liked');
		}
		// iLike[i].classList.toggle("liked");
	})
}

//Slider
$('.slider').slick({
	dots: true,
	nextArrow: '.slider-next',
	prevArrow: '.slider-prev'
	// autoplay:true,
	// autoplaySpeed: 3000
})


let incBtns = document.querySelectorAll(".inc");
// console.log(incBtn);
let decBtns = document.querySelectorAll(".dec");
// console.log(decBtn);
let productQuantities = document.querySelectorAll(".product-quantity");
// console.log(productQuantity);
//Добавление и убывание товаров

//Проверка на количество товаров: минимальное количество

function updMinBtnState(count, i) {
	if (count <= 1) {
		decBtns[i].disabled = true;
		decBtns[i].classList.add("disabled");
		decBtns[i].style.color = 'rgba(255, 255, 255, 0.1)';
	} else {
		decBtns[i].disabled = false;
		decBtns[i].classList.remove("disabled");
		decBtns[i].style.color = 'white';


	}
}

//Проверка на количество товаров: максимальное количество
function updMaxBtnState(count, i) {
	if (count >= 10) {
		incBtns[i].disabled = true;
		incBtns[i].classList.add("disabled");
		incBtns[i].style.color = 'rgba(255, 255, 255, 0.1)';

	} else {
		incBtns[i].disabled = false;
		incBtns[i].classList.remove("disabled");
		incBtns[i].style.color = 'white';

	}
}


//цикл на увеличения количества товаров
for (let i = 0; i < incBtns.length; ++i) {
	const curVal = +productQuantities[i].value;
	//вызываем функуции на проверку количество товаров
	updMinBtnState(curVal, i);
	updMaxBtnState(curVal, i);
	incBtns[i].addEventListener('click', function () {
		let curVal = +productQuantities[i].value;
		let nextVal = curVal + 1;

		productQuantities[i].value = nextVal;
		updMinBtnState(nextVal, i);
		updMaxBtnState(nextVal, i);
	})
	decBtns[i].addEventListener('click', function () {
		let curVal = +productQuantities[i].value;
		let nextVal = curVal - 1;

		productQuantities[i].value = nextVal;
		updMinBtnState(nextVal, i);
		updMaxBtnState(nextVal, i);
	})
}

//цикл на уменьшение количества товаров

let detailBtns = document.querySelectorAll('.detail');
let detailModals = document.querySelectorAll('.detail-modal');
let closeBtns = document.querySelectorAll('.close-button');
let overlay = document.getElementById('overlay');

overlay.addEventListener('click', function (event) {
	if (event.target !== overlay) return
	for (let i = 0; i < detailModals.length; ++i){
		detailModals[i].classList.remove('active');
	}
	overlay.classList.remove('active');
})

for (let i = 0; i < detailBtns.length; ++i) {
	detailBtns[i].addEventListener('click', function () {
		detailModals[i].classList.add('active');
		overlay.classList.add('active');
	})
	closeBtns[i].addEventListener('click', function () {
		detailModals[i].classList.remove('active');
		overlay.classList.remove('active');
	})
}
// let openModalButtons = document.querySelectorAll('[data-modal-target]')
// let closeModalButtons = document.querySelectorAll('[data-close-button]')
// let overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.detail-modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.detail-modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }





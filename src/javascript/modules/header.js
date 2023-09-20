const headerSearchInput = document.querySelector(".header__search-input");

const boxShadowStyleObject = {
	withBoxShadow: "0px 0px 30px -10px rgba(0, 0, 0, 0.5)",
	withoutBoxShadow: ""
}

handleFocusInput("focus", boxShadowStyleObject.withBoxShadow)
handleFocusInput("blur", boxShadowStyleObject.withoutBoxShadow)

function handleFocusInput(eventType, boxShadowStyle){
	headerSearchInput.addEventListener(eventType, (event) => {
		const isHeaderSearchBlock = event.target.closest(".header__search-block");
		isHeaderSearchBlock.style.boxShadow = boxShadowStyle;
	})
}
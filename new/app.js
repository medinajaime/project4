const images = ["url(images/background3.jpg)","url(images/background1.jpg)", "url(images/background4.jpg)","url(images/background5.jpg)", "url(images/background6.jpg)"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundImage = images[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() *images.length);
}
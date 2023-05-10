const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const vinculo = document.querySelector("#vinculo");
menuToggle.onclick = function () {
	navigation.classList.toggle("open");
};
const list = document.querySelectorAll(".list");

function activarLink() {
	list.forEach((item) => item.classList.remove("active"));
	this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activarLink));

function link() {
	location.replace("https://open.spotify.com/track/0qvzXomUDJVaUboy2wMfiS");
}

vinculo.onclik = vinculo.addEventListener("click", link);

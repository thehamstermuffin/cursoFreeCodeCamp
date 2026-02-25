var likebtns = document.getElementsByClassName("favorite-icon")

for (var i = 0; i < likebtns.length; i++) {
    likebtns[i].addEventListener("click", function () {
        toggleHearth(this)
        });
}

function toggleHearth(btn) {
    if (btn.classList.contains("filled")) {
        btn.innerHTML = "&#9825;" 
        btn.classList.remove("filled");
    } else {
        btn.innerHTML = "&#10084;" 
        btn.classList.add("filled");
    }
}



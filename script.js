document.getElementById("surpriseButton").addEventListener("click", function () {
    const surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");
    if (!surprise.classList.contains("hidden")) {
        alert("Fuzee, this page is from my heart. I hope it makes you smile. ❤️");
    }
});

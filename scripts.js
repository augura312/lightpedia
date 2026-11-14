function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString([], {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
             minute: "2-digit"
});
}
function example() {
    alert("example the lightpedia version is v2.1");
    console.log("example shown");
}
function linux() {
    alert("linux is a free and open-source os with alot of distros and desktop enviroments. best linux distros that are good for beginners: linux mint, ubuntu, lubuntu. best linux desktom enviroments: KDEplasma, cinamon, xfce...");
    console.log("linux info shown");
}
function openwordexplain() {
    alert("you are gonna open word explaner");
    console.log("going to wordexplaner.html");
}
function opencredits() {
    alert("you are gonna open credits");
    console.log("going to credits.html");
}
let clicks = 0;
let name = "";

document.getElementById("click").onclick = function click() {
    clicks++;
    document.getElementById("clicks").textContent = `clicks: ${clicks}`;
    name = document.getElementById("name").value; 
    document.getElementById("title").textContent = `Hello ${name}`;
    if (name == "AUTOCLICKER") {
        clicks += 9999999999
        document.getElementById("clicks").textContent = `clicks: ${clicks}`;
    }
}

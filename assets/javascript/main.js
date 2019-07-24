


const text = {
    introText: "Hi my name is Jesse Schimmel. Welcome to my portfolio.",
    name: "Jesse Schimmel",
    title: "Full-Stack Web Developer"
}

const elementIds = {
    intro: "intro",
    name: "name",
    title: "title",
    portrait: "portrait"

}



var i = 0;
var speed = 60;

function typeWriter() {
    if (i < text.introText.length) {
        document.getElementById(elementIds.intro).innerHTML += text.introText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function toggleDisplay() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("name").style.display = "block";
    document.getElementById("title").style.display = "block";
    document.getElementById("portrait").style.display = "block";
    
    
}



typeWriter(text.introText, elementIds.intro);
setTimeout(toggleDisplay, 3500);



const images = ["1","2","3"];
const back = document.querySelector("#background video");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("source");
const backVideo=back.appendChild(backgroundImage);
backVideo.setAttribute("src",`./image/${chosenImage}.mp4`);
backVideo.setAttribute("type","video/mp4");

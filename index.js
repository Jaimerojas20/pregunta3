const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () {
    alert("sabia que ibas a decir que si jaja , te dedico esta cancion reina: https://www.youtube.com/watch?v=OuSNzkdyd-8&ab_channel=angeelsauro")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover",function() {
    const ramdomx = parseInt(Math.random()*100);
    const ramdomy = parseInt(Math.random()*100);
    noBtn.style.setProperty("top" ,ramdomy+"%");
    noBtn.style.setProperty("left",ramdomx+"%");
    noBtn.style.setProperty("transform",`translate(-${ramdomx}$,-${ramdomy}%,)`);
})
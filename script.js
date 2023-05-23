let userName = prompt("Ismini gir");

let isim = document.getElementById("greet");
isim.innerHTML=`Merhaba, hosgeldin ${userName}`;


let tarih = document.getElementById("gununTarihi");

const date = new Date();
const yil = date.getFullYear();
const ay = date.getMonth();
const saat = date.getHours();
const dakika = date.getMinutes();

console.log(`yil su ${yil} saat su ${saat}`)

tarih.innerHTML=`${yil} yılının ${ay}. ayında ${saat}:${dakika} saatindeyiz.`;


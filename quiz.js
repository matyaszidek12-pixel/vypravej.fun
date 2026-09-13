
const questions=[
["Kdy začíná příběh Vyprávěj?","1964",["1964","1958","1972","1989"]],
["Kdo hraje Karla Dvořáka?","Roman Vojtek",["Roman Vojtek","Svatopluk Skopal","David Prachař","Jaromír Nosek"]],
["Kdo hraje Evu Dvořákovou?","Andrea Kerestešová",["Andrea Kerestešová","Veronika Freimanová","Lucie Štěpánková","Hana Vagnerová"]],
["Kolik dílů má I. řada?","26",["16","22","26","30"]],
["Jak se jmenuje první díl?","Od začátku",["Od začátku","Svatba","21. srpen","Shledání"]],
["Která událost je tématem dílu 21. srpen?","Invaze vojsk v roce 1968",["Invaze vojsk v roce 1968","Sametová revoluce","Rozdělení republiky","Kuponová privatizace"]],
["Kdo režíroval Vyprávěj?","Biser A. Arichtev",["Biser A. Arichtev","Jan Hřebejk","Dušan Klein","Jiří Strach"]],
["Kdo je vedoucím scenáristou?","Rudolf Merkner",["Rudolf Merkner","David Solař","Michal Hrůza","Filip Bobiňski"]],
["Kdo hraje Josefa Dvořáka?","Svatopluk Skopal",["Svatopluk Skopal","Roman Vojtek","Tomáš Töpfer","Jiří Štěpnička"]],
["Kdo hraje Tondou Sovu?","Jaromír Nosek",["Jaromír Nosek","David Kraus","Ján Jackuliak","Ondřej Veselý"]],
["Jak se jmenuje první díl IV. řady?","Shledání",["Shledání","Sametová revoluce","Miss","Havel na Hrad!"]],
["Co je tématem dílu Rozdělení republiky?","Rozdělení Československa",["Rozdělení Československa","Invaze 1968","Volby 1990","Expo 1967"]],
["Jak se jmenuje závěrečný díl seriálu?","Něco končí, jiné začíná",["Něco končí, jiné začíná","Konec vyprávění","Poslední svatba","Nový začátek"]],
["Kdo složil hudbu k seriálu?","David Solař",["David Solař","Michal Hrůza","Rudolf Merkner","Emil Pawinger"]],
["Kdo vytvořil titulní píseň?","Michal Hrůza",["Michal Hrůza","David Solař","Roman Vojtek","Biser A. Arichtev"]],
["Kolik dílů má II. řada?","16",["16","22","26","18"]],
["Kolik dílů má V. řada?","22",["16","22","24","26"]],
["Kdo hraje Janu Dvořákovou?","Veronika Freimanová",["Veronika Freimanová","Veronika Žilková","Mahulena Bočanová","Nina Divíšková"]],
["Kdo hraje babičku Bětu?","Nina Divíšková",["Nina Divíšková","Veronika Freimanová","Hana Vagnerová","Milka Minichová"]],
["Který díl se odehrává při Sametové revoluci?","Sametová revoluce",["Sametová revoluce","21. srpen","DDR","Fitness"]]
];
let quiz=[],i=0,score=0;
function startQuiz(){quiz=[...questions].sort(()=>Math.random()-.5).slice(0,15);i=0;score=0;showQ()}
function showQ(){let q=quiz[i],box=document.querySelector("#quiz");box.innerHTML=`<div class="pill">Otázka ${i+1} / 15</div><h2>${q[0]}</h2><div>${q[2].map(a=>`<button class="btn quizopt" data-a="${a}">${a}</button>`).join("")}</div>`;document.querySelectorAll(".quizopt").forEach(b=>b.onclick=()=>{if(b.dataset.a===q[1])score++;i++;i<15?showQ():finish()})}
function finish(){document.querySelector("#quiz").innerHTML=`<h2>Hotovo!</h2><p>Skóre: <b>${score} / 15</b></p><p>${score>=13?"Výborně!":"Dobrá práce — dej si ještě jedno kolo a zkus překonat skóre."}</p><button class="btn" onclick="startQuiz()">Hrát znovu</button>`}
document.addEventListener("DOMContentLoaded",startQuiz);

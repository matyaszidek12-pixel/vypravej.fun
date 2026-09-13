
const DATA = [
 ["Vyprávěj","Seriál","serial.html"],["1. řada","1964–1969","rady.html#r1"],["2. řada","70. léta","rady.html#r2"],
 ["3. řada","konec 70. let–1989","rady.html#r3"],["4. řada","1989–1990","rady.html#r4"],["5. řada","90. léta","rady.html#r5"],
 ["Karel Dvořák","Roman Vojtek","postavy.html#karel"],["Eva Dvořáková","Andrea Kerestešová","postavy.html#eva"],
 ["Josef Dvořák","Svatopluk Skopal","postavy.html#josef"],["Jana Dvořáková","Veronika Freimanová","postavy.html#jana"],
 ["Honza Dvořák","Matěj Hádek / Branislav Holiček / Jiří Novák / Zdeněk Piškula","postavy.html#honza"],
 ["Lucka Francová","Lucie Štěpánková / Eliška Křenková / Eliška Zbranková","postavy.html#lucka"],
 ["Tonda Sova","Jaromír Nosek","postavy.html#tonda"],["Zuzka Sovová","Hana Vagnerová / Andrea Nováková","postavy.html#zuzka"],
 ["Od začátku","1/26 · I. řada","epizody.html#s1e1"],["Je to ten pravý?","2/26 · I. řada","epizody.html#s1e2"],
 ["Svatba","3/26 · I. řada","epizody.html#s1e3"],["21. srpen","7/26 · I. řada","epizody.html#s1e7"],
 ["Sedmdesátá léta","1/16 · II. řada","epizody.html#s2e1"],["DDR","2/16 · II. řada","epizody.html#s2e2"],
 ["Na rozcestí","1/26 · III. řada","epizody.html#s3e1"],["Dušičky","7/26 · III. řada","epizody.html#s3e7"],
 ["Shledání","1/16 · IV. řada","epizody.html#s4e1"],["Sametová revoluce","8/16 · IV. řada","epizody.html#s4e8"],
 ["Kuponová privatizace","1/22 · V. řada","epizody.html#s5e1"],["Rozdělení republiky","4/22 · V. řada","epizody.html#s5e4"],
 ["Něco končí, jiné začíná","22/22 · V. řada","epizody.html#s5e22"],
 ["Album seriálu Vyprávěj","oficiální fotky a bonusy","bonusy.html"]
];
function setupSearch(){
 const input=document.querySelector("#siteSearch"), out=document.querySelector("#results"); if(!input||!out)return;
 function render(){
  const q=input.value.trim().toLowerCase(); out.innerHTML="";
  if(!q){out.innerHTML='<div class="result">Začni psát — hledej postavu, herce, díl, řadu nebo pojem.</div>';return}
  DATA.filter(x=>x.join(" ").toLowerCase().includes(q)).slice(0,12).forEach(x=>{
   const a=document.createElement("a");a.className="result";a.href=x[2];a.innerHTML=`<b>${x[0]}</b><br><small>${x[1]}</small>`;out.appendChild(a)
  });
  if(!out.children.length)out.innerHTML='<div class="result">Nic jsem nenašel. Zkus jiné slovo.</div>';
 }
 input.addEventListener("input",render);render();
}
document.addEventListener("DOMContentLoaded",setupSearch);

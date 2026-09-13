
const quizPool={
easy:[
['Kdy začíná příběh seriálu?',['1964','1968','1975','1989'],0],
['Jak se jmenuje hlavní mužská postava?',['Karel Dvořák','Josef Hora','Tonda Sova','Hynek Kupsa'],0],
['Kdo hraje Karla Dvořáka?',['Roman Vojtek','Svatopluk Skopal','David Prachař','Tomáš Töpfer'],0],
['Kdo hraje Evu Dvořákovou?',['Andrea Kerestešová','Veronika Freimanová','Hana Vagnerová','Zuzana Kajnarová'],0],
['Kolik řad má seriál Vyprávěj?',['5','3','7','10'],0],
['Jak se jmenuje první díl?',['Od začátku','Svatba','Rozhodnutí','Na rozcestí'],0],
['Kdo režíroval seriál?',['Biser A. Arichtev','Rudolf Merkner','David Solař','Roman Vojtek'],0],
['Kdo napsal titulní píseň?',['Michal Hrůza','David Solař','Rudolf Merkner','Radoslav Brzobohatý'],0],
['Kdo hraje Josefa Dvořáka?',['Svatopluk Skopal','Roman Vojtek','Jan Šťastný','Tomáš Töpfer'],0],
['Kdo je Babička Běta?',['Nina Divíšková','Veronika Žilková','Mahulena Bočanová','Nela Boudová'],0],
['Co se stane v díle 21. srpen?',['Přijíždějí okupační vojska','Rodina odjíždí do Paříže','Koná se svatba','Probíhá privatizace'],0],
['Kolik přehratelných dílů uvádí aktuálně ČT?',['123','52','100','126'],0]
],
medium:[
['Kdo hraje Honzu Dvořáka v různých věkových obdobích?',['Matěj Hádek, Branislav Holiček, Jiří Novák, Zdeněk Piškula','Roman Vojtek, Matěj Hádek','Štěpán Benoni, Filip Antonio','David Prachař, Pavel Trávníček'],0],
['Který díl je 3. řadou?',['Na rozcestí','Sedmdesátá léta','Kuponová privatizace','Rozhodnutí'],0],
['Co řeší díl Ode mě to nemáte!?',['Josef čelí udání a Tonda vyloučení ze školy','Rozvod Karla a Evy','Povodně','Rozdělení republiky'],0],
['Kdo hraje Zuzku Sovovou?',['Hana Vagnerová, Andrea Nováková','Lucie Štěpánková, Eliška Křenková','Jana Bernášková','Lenka Zahradnická'],0],
['Kdo složil hudbu seriálu?',['David Solař','Michal Hrůza','Rudolf Merkner','Martin Schinabek'],0],
['Jak se jmenuje první díl 5. řady?',['Kuponová privatizace','Sedmdesátá léta','Na rozcestí','Fitness'],0],
['Kdo hraje Tondy Sovu?',['Jaromír Nosek','David Kraus','Ján Jackuliak','Jan Šťastný'],0],
['Jak se jmenuje závěrečný díl 5. řady?',['Něco končí, jiné začíná','Rozhodnutí','Povodně','Svatba'],0],
['Kdo je autorem konceptu a producentem?',['Filip Bobiňski','Biser A. Arichtev','Rudolf Merkner','David Solař'],0],
['Který bonus se věnuje kostýmům?',['Kostýmy v seriálu Vyprávěj','Střih a postprodukce','Práce skriptky','Lokace'],0],
['Kdo hraje Hyneka Kupsu?',['Josef Polášek','Jiří Štěpnička','Jan Šťastný','David Prachař'],0],
['Která událost je v seriálu zachycena jako zásadní historický zlom?',['21. srpen 1968','Bitva u Bílé hory','Vstup do EU 2004','Pražské jaro 1848'],0]
],
hard:[
['Který z těchto tvůrců je vedoucím scenáristou a vedoucím projektu?',['Rudolf Merkner','Filip Bobiňski','Martin Schinabek','Emil Pawinger'],0],
['Kdo hraje Matěje Dvořáka v různých věkových obdobích?',['Štěpán Benoni, Štěpán Krtička, Filip Antonio','Matěj Hádek, Jiří Novák','Hana Vagnerová, Andrea Nováková','Lucie Šteflová'],0],
['Kdo hraje Katarínu Martinákovou?',['Milka Minichová','Marta Sládečková','Alžběta Stanková','Olga Lounová'],0],
['Kdo hraje Veroniku Francovou, rozenou Malou?',['Alžběta Stanková','Jana Bernášková','Nela Boudová','Veronika Žilková'],0],
['Který bonus má stopáž 12 minut a věnuje se režii Bisera Arichteva?',['Režisér Biser Arichtev – Jak se dělá Vyprávěj','Jak vznikalo Vyprávěj','Lokace','Střih a postprodukce'],0],
['Který díl 1. řady je 26/26?',['Rozhodnutí','Promoce','Ode mě to nemáte!','Velká očekávání'],0],
['Jaký rok uvádí ČT u vzniku dílu Na rozcestí?',['2011','2009','2010','2013'],0],
['Kdo je kameramanem seriálu?',['Martin Schinabek','Emil Pawinger','David Solař','Jan Potměšil'],0],
['Kdo stál u střihu?',['Emil Pawinger','Martin Schinabek','Rudolf Merkner','Renata Vlčková'],0],
['Který seriálový bonus má název O zájezdu do Moskvy?',['samostatný videobonus','1. díl 5. řady','medailonek Evy','epizoda 26'],0],
['Kdo hraje Miladu Dvořákovou?',['Mahulena Bočanová','Lenka Zahradnická','Nina Divíšková','Hana Vagnerová'],0],
['Kdo hraje Věru Nedbalovou?',['Veronika Žilková','Nela Boudová','Zuzana Kajnarová','Jana Bernášková'],0]
]
};
function makeQuiz(level='medium'){
  const arr=[...quizPool[level]].sort(()=>Math.random()-.5).slice(0,15);
  let i=0,score=0;
  const root=document.querySelector('#quizRoot');
  function render(){
    if(i>=arr.length){
      const pct=Math.round(score/arr.length*100);
      root.innerHTML=`<div class="quiz"><div class="eyebrow">Výsledek</div><h2>${score} / ${arr.length}</h2><p class="score">${pct}% správně</p><p>${pct>=90?'Seriálový znalec.':pct>=70?'Velmi dobrý výsledek.':'Ještě jedno kolo a budeš znát Dvořákovy skoro jako vlastní rodinu.'}</p><button class="btn" onclick="makeQuiz('${level}')">Hrát znovu</button></div>`;
      return;
    }
    const q=arr[i];
    root.innerHTML=`<div class="quiz"><div class="meta">Otázka ${i+1} / 15</div><h2>${esc(q[0])}</h2><div class="answers">${q[1].map((a,n)=>`<button onclick="answer(${n})">${esc(a)}</button>`).join('')}</div></div>`;
    window.answer=(n)=>{if(n===q[2])score++;i++;render()};
  }
  render();
}

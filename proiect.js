const info = [
    {
      title: "BAC DE 10 CONTINUĂ TRADIȚIA ȘI ÎN ACEST AN!",
      short_description: "Dacă iei nota 10 la Bac, vei primi un abonament gratuit pentru 4 zile la ediția UNTOLD 2021. Pe lângă participarea gratuită la unul dintre cele mai bune festivaluri de muzică din Europa, UNTOLD, absolvenții cu 10 vor primi fiecare un voucher de cumpărături în valoare de 500 ron, din partea Kaufland România.",
      
    },
    {
      title: "VOLUNTARI UNTOLD 2022",
      short_description: "The #LandOfMagic este în căutarea celei mai mari echipe de voluntari - UNTOLD 2022.Așadar, dacă vrei să contribui și tu la crearea magiei UNTOLD, ai ajuns în locul potrivit. Contacteaza-ne pe mail pentru mai multe detalii.",
      
    },
    {
      title: 'CALLING ALL MAGIC DESIGNERS',
      short_description: "Căutăm designeri talentati care vor să aduca spiritul modei la festival. Dacă vrei să îți comercializezi produsele la UNTOLD trimite-ne un mail.",
      
    }
  ];
  
  let i = 0;

  window.onload = () => {
    document.getElementById('adauga').onclick = adaugaInfo;
    document.getElementById('sterge').onclick = stergeInfo;
    document.getElementById('shopU').addEventListener('click',aa);
  }

   
function preventF(event) {
    const check=document.getElementById('check');
    if(!check.checked){
    event.preventDefault();
    }
  }



  
  function adaugaInfo() {
    const articol = info[i];
    const infoElement = document.createElement('div');
    infoElement.classList.add('informatii');
    
  
    const infoContinut = document.createElement('div');
    infoContinut.classList.add('continut');
  
    const h1 = document.createElement('h1');
    h1.textContent = articol.title;
  
    const p = document.createElement('p');
    p.textContent = articol.short_description;
  
    infoContinut.append(h1, p);
    infoElement.append(infoContinut);
  
    document.querySelector('#infoContainer').append(infoElement);
  
    i = (i + 1) % info.length;
  }
  
  function stergeInfo() {
    document.querySelector('#infoContainer').lastChild?.remove();
  }
  
 
  window.onload = () => {
    const schimbaB = document.querySelector('.stocare #schimba');
    const stergeB = document.querySelector('#sterge');
    const refreshB = document.getElementById('refresh');
    schimbaB.addEventListener('click', schimbaDetalii);
    stergeB.addEventListener('click', stergeDetalii);
    refreshB.addEventListener('click', () => {
      window.location.reload();
    });
    FunctieMare();
  }
  
  function FunctieMare() {
    const MesajB = document.querySelector('.stocare .mesaj');
    const ButonB = document.querySelector('.stocare #schimba');
    let detaliiUser = null;
    try {
      detaliiUser = JSON.parse(localStorage.getItem('detaliiUser'));
    } catch (error) {
      detaliiUser = null;
    }
    if(detaliiUser) {
      MesajB.innerHTML = `Hey, ${detaliiUser.name}!`;
      ButonB.innerHTML = "Schimba detaliile";
    } else {
      MesajB.innerHTML = "Hey! What's your name?";
      ButonB.innerHTML = "Adauga detalii";
    }
  }
  
  function schimbaDetalii() {
    const name = prompt('Tell us your name...');
    if(!name) return;
    const detaliiUser = {name};
    localStorage.setItem('detaliiUser', JSON.stringify(detaliiUser));
    FunctieMare();
  }
  
  function stergeDetalii() {
    localStorage.removeItem('detaliiUser');
    FunctieMare();
  }

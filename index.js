const tabellone = document.getElementById("Tabellone");
for (let i = 0; i < 76; i++) {
  const divNum = document.createElement("div");
  divNum.classList.add("divNum");
  const num = document.createElement("h3");
  num.innerText = i + 1;
  divNum.appendChild(num);
  tabellone.appendChild(divNum);
}

const estrazione = () => {
  const numEstratti = [];
  let estratto = Math.ceil(Math.random() * 76);

  for (let k = 0; k < numEstratti.length; k++) {
    if (numEstratti[k] === estratto) {
      estratto = Math.ceil(Math.random() * 76);
      break;
    }
    numEstratti.push(estratto);
  }
  console.log(estratto);
  let allN = document.querySelectorAll(".divNum h3");
  let allD = document.querySelectorAll(".divNum");
  for (let j = 0; j < allN.length; j++) {
    if (allN[j].innerText === estratto.toString()) {
      allD[j].classList.add("estratto");
    }
  }
};

btnEstrazione = document.querySelector("button");
btnEstrazione.onclick = estrazione;
const generaCard = () => {
  const tabUser = document.getElementById("tab-user");
  for (let y = 0; y < 3; y++) {
    for (let c = 0; c < 24; c++) {
      const divNumUser = document.createElement("div");
      divNumUser.classList.add("divNum");
      const numUser = document.createElement("h3");
      numUser.innerText = Math.ceil(Math.random() * 76);
      divNumUser.appendChild(numUser);
      tabUser.appendChild(divNumUser);
    }
  }
};
btnCard = document.getElementById("scegli");
console.log(btnCard);
inp = document.getElementById("valore");
btnCard.onclick = generaCard;

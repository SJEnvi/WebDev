let pierwszy_poziom = new Promise((pierwszy_poziom_sie_udal, pierwszy_poziom_sie_nie_udal) => {
  let udalo_sie = true
  if (udalo_sie){
    pierwszy_poziom_sie_udal("pierwszy przeszedł");
  } else {
    pierwszy_poziom_sie_nie_udal("pierwszy nie przeszedł");
  }
  });

function drugi_poziom(argumenty){
  console.log(argumenty)
  function drugi_poziom(drugi_poziom_sie_udal, drugi_poziom_sie_nie_udal){
    let a_teraz_sie_udalo = true
    if (a_teraz_sie_udalo){
      drugi_poziom_sie_udal("drugi przeszedł");
    } else {
      drugi_poziom_sie_nie_udal("drugi nie przeszedł");
    }
  }
  return new Promise(drugi_poziom)
}

function trzeci_poziom(argumenty){
  console.log(argumenty)
  function trzeci_poziom(trzeci_poziom_sie_udal, trzeci_poziom_sie_nie_udal){
    let ostatnia_proba = false
    if (ostatnia_proba){
      trzeci_poziom_sie_udal("trzeci przeszedł")
    } else {
      trzeci_poziom_sie_nie_udal("Trzeci padł");
    }
  }
  return new Promise(trzeci_poziom)
}

function padlo_w_trakcie(argumenty){
  console.log(argumenty)
}

pierwszy_poziom.then(drugi_poziom, padlo_w_trakcie)
               .then(trzeci_poziom, padlo_w_trakcie)
               .catch(padlo_w_trakcie)
               .finally(() => {console.log("KONIEC POKAZU")});

console.log("po obietnicy?")

/*
getValue = new Promise((resolve) => resolve(5));

getValue
  .then((v) => {console.log(v); return v*5})
  .then((v) => {console.log(v); return v/7})
  .then(console.log);

  function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
  }
  
checkMail().then((mail) => {
      console.log(mail);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Experiment completed');
    });
*/
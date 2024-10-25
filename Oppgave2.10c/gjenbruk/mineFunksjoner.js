// Oppgave 2.10 c) s. 124

//Funksjon tar imot talltekst hvor tallene er separert med komma "1,2,3"
export let gjsnittTallene = (tall) => {
  let sum = 0;
  // Tomt array for å lagre tallene
  let tallene = [];
  let gjsnitt = 0;
  //console.log(tall)

  // Splitter input-strengen til et array se s.
  let inputTall = tall.split(",");
  //console.table(inputTall)

  for (let i = 0; i < inputTall.length; i++) {
    // Konverterer og legger til i det nye arrayet som tall
    tallene.push(Number(inputTall[i]));
    //console.table(tallene)
    //går gjennom hvert element i arrayet[i] og legger det til sum
    sum += tallene[i];
    //Regner ut gjennomsnitt av tallene i array
    gjsnitt = sum / tallene.length;
  }
  return gjsnitt;
};

<script>
    let brukernavn = "";
    let passord = "";
    let pinkode = "";

    const sendPin = () => {
        if (passord.length < 8) {
            pinkode = "Passordet er for kort!";
        } else {
            /* Kjør logging med console.log(9999 * Math.random()). 
            JS fjerner overflødig 0-tegn fra starten av et tall. 
            Ved å omgjøre tallet til streng unngår vi dette. Se s. 118*/

            /* Endret tidligere kode: 
            pinkode = "Pinkode: " + Math.round(9999*Math.random()) 
            Skalerer tallet til å være mellom 0 og 9999 med (9999 * Math.random()) */
            pinkode = Math.round(9999 * Math.random());

            // Konverter tallet til streng
            pinkode = String(pinkode);

            /* Bruker metoden padStart() for å sikre at strengen alltid har fire siffer 
            https://www.w3schools.com/jsref/jsref_string_padstart.asp */
            pinkode = pinkode.padStart(4, "0");
        }

        if (brukernavn == "" || passord == "") {
            pinkode = "Skriv inn både brukernavn og passord.";
        }
        console.log("Pinkode:" + pinkode);
    };
</script>

<h1>PIN-kodegenerator</h1>
<p>Skriv inn brukernavn og passord (minst 8 tegn) for å lage en PIN-kode.</p>
Brukernavn:<input bind:value={brukernavn} /> <br />
Passord: <input bind:value={passord} /> <br />
<button on:click={sendPin}> LAG PINKODE </button>

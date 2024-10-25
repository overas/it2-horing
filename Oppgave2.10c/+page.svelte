<script>
    import { gjsnittTallene } from "./gjenbruk/mineFunksjoner.js";
    let tall = "";
</script>

<label>
    <h3>Program for å regne ut gjennomsnitt av flere tall:</h3>
    Skriv tallene separert med komma:
    <input bind:value={tall} />
</label>

<p>Gjennomsnitt av tallene er: {gjsnittTallene(tall)}</p>

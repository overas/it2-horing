<script>
    import { gjsnittTallene } from "./gjenbruk/mineFunksjoner.js";
    let gjsnitt = 0;
    let tall = "";
</script>

<label>
    <h3>Program for å regne ut gjennomsnitt av flere tall:</h3>
    Skriv tallene separert med komma:
    <input bind:value={tall} />
    <button on:click={() => (gjsnitt = gjsnittTallene(tall)})>Regn ut gjennomsnitt</button>
</label>

<p>Gjennomsnitt av tallene er: {gjsnittTallene(tall)}</p>

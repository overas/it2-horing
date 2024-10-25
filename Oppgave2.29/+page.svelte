<script>
    import Pinkode from "./gjenbruk/Pinkode.svelte";

    let brukernavn = "";
    let passord = "";
</script>

<h1>PIN-kodegenerator</h1>

<p>Skriv inn brukernavn og passord (minst 8 tegn) for å lage en PIN-kode.</p>

Brukernavn: <input bind:value={brukernavn} /> <br />
Passord: <input bind:value={passord} /> <br />

<Pinkode bind:brukernavn bind:passord />

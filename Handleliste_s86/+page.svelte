<!-- handleliste/+page.svelte -->
<script>
    import Teller from "./komponent/Teller.svelte";

    let varer = [];
    let vare = "";
</script>

<h1>Handleliste</h1>
<label>Legg til ny vare: <input bind:value={vare} /></label>

<ul>
    {#each varer as vare}
        <li><Teller bind:navn={vare.navn} bind:verdi={vare.antall} /></li>
    {/each}

    <li>
        <button
            on:click={() => {
                varer = [...varer, { navn: vare, antall: 0 }];
            }}
        >
            Legg til vare
        </button>
    </li>
</ul>

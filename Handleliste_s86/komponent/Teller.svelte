<!-- komponent/Teller.svelte -->
<script> 
    export let navn; 
    export let verdi = 0;

</script>

<span>
    {navn}:
    <button on:click={() => (verdi = verdi - 1)}>-</button>
    {verdi}
    <button on:click={() => (verdi = verdi + 1)}>+</button>
</span>

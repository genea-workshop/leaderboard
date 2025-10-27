<script lang="ts">
  
  let team = "";
  let model = "";
  let file: File | null = null;
  function onFile(e) { file = e.target.files?.[0] ?? null; }

  let loading = false;
  let message = "";
</script>

{#if message}
  <p class="feedback">{message}</p>
{/if}

<main class="subcontainer">
  <div class="leaderboard-preview card">
    <h1>The submissions will be available at a later date</h1>
    <!-- <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLScwTIR43liXvuN0oF0OB0muLLjBa8t04UwuEJHj1XN8fykmtw/viewform?embedded=true">Loading…
    </iframe> -->
  </div>
</main>
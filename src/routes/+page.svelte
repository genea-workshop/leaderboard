<script lang="ts">
  import { onMount } from 'svelte';
  import { resolve } from '$app/paths';
  import { goto } from '$app/navigation';
  import LeaderboardTable from '$lib/components/LeaderboardTable.svelte';
  import { PUBLIC_SUPABASE_ANON_KEY, type LeaderboardRow } from '$lib/types';

  let rows: LeaderboardRow[] = [];
  let loading = true;

  onMount(async () => {
    try {
      const res = await fetch(
        'https://ctwfyjhvheylawtxrvdq.supabase.co/functions/v1/get-leaderboard',
        {
          headers: { Authorization: `Bearer ${PUBLIC_SUPABASE_ANON_KEY}` }
        }
      );
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const json = await res.json();
      rows = json.data ?? [];
    } catch (err) {
      console.error('Failed to fetch leaderboard:', err);
    } finally {
      loading = false;
    }
  });

  function goToLeaderboard() {
    goto(resolve('/leaderboard'));
  }
</script>

<main class="home-page subcontainer">
  <div class="home-split-hor">
    <div class="home-text home-text-extra card">
      <h1 class="h1">What is GENEA?</h1>
      <p class="lead">
        Welcome to the <strong>GENEA Leaderboard</strong> project!  
        This platform provides a unified evaluation hub for gesture generation and animation research.
        Here you can explore state-of-the-art models, compare team results, and discover available datasets
        to help you get started.
      </p>
      <p>
        Whether you're a researcher or a developer, our mission is to make gesture evaluation
        more open, transparent, and comparable across projects.
      </p>
    </div>

    <!-- Right column: Mini leaderboard -->
    <div class="leaderboard-preview card">
      <h2 class="h2">Top 10 Leaderboard</h2>
      <div class="leaderboard-wrapper">
        {#if loading}
          <div class="loading-container">
            <div class="spinner"></div>
            <p>Loading leaderboard...</p>
          </div>
        {:else}
          <LeaderboardTable rows={rows.slice(0, 10)} showSearch={false} />
        {/if}
      </div>
      <a class="see-full" on:click={goToLeaderboard}>
        See expanded leaderboard →
      </a>
    </div>
  </div>
</main>

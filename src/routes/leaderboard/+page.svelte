<script lang="ts">
  import { onMount } from 'svelte';
  import { resolve } from '$app/paths';
  import LeaderboardTable from '$lib/components/LeaderboardTable.svelte';
  import { PUBLIC_SUPABASE_ANON_KEY, type LeaderboardRow } from '$lib/types';

  let rows: LeaderboardRow[] = [];
  let loading = true;

  onMount(async () => {
    try {
      const res = await fetch(
        'https://ctwfyjhvheylawtxrvdq.supabase.co/functions/v1/get-leaderboard',
        {
          headers: {
            Authorization: `Bearer ${PUBLIC_SUPABASE_ANON_KEY}`
          }
        }
      );
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const json = await res.json();
      console.log('Leaderboard raw data:', json);
      rows = (json.data ?? []).map((row: LeaderboardRow) => ({
        ...row
      }));
    } catch (err) {
      console.error('Failed to fetch leaderboard:', err);
    } finally {
      loading = false;
    }
  });
</script>


<main class="subcontainer">
  <div class="home-split-ver">
    <div class="leaderboard-table card">
      <h1 class="h1">Leaderboard</h1>
      <p style="font-size: 0.9em;">To better understand the metrics - 
        <a href="https://arxiv.org/abs/2410.06327" target="_blank"><strong>Paper</strong></a> 
        <br> To find videos of the systems - <strong>Zenodo</strong>
      </p>
      <div class="leaderboard-wrapper">
        {#if loading}
          <div class="loading-container">
            <div class="spinner"></div>
            <p>Loading leaderboard...</p>
          </div>
        {:else}
          <LeaderboardTable rows={rows}/>
        {/if}
      </div>
    </div>

    <div class="image-gallery card">
      <img
        src="{resolve('/motion_realism_elo_results.jpg' as any)}"
        alt="Motion realism results"
      >
      <img
        src="{resolve('/mismatching_pref_results_split_ties.jpg' as any)}"
        alt="Mismatching preference results"
      >
    </div>
  </div>
</main>
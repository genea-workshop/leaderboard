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
      <p style="font-size: 0.9em;">For details on our evaluation, please view our new preprint - 
        <a href="https://github.com/genea-workshop/leaderboard/blob/main/static/GENEA_benchmark_preprint.pdf" target="_blank"><strong>Gesture Generation (Still) Needs Improved Human Evaluation Practices: Insights from a Community-Driven State-of-the-Art Benchmark</strong></a> 
        <br> To view rendered videos from the models and from the dataset, see <a href="https://drive.google.com/drive/folders/1fnCOaUyvpfId6UfF8gVafwoB_fCH_AxK?usp=sharing" target="_blank"><strong>this Google Drive folder</strong></a>
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
  </div>
</main>
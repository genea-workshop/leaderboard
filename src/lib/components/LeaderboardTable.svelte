<script lang="ts">
  import type { LeaderboardRow } from '$lib/types';

  export let rows: LeaderboardRow[] = [];
  export let limit: number | null = null;
  // export let columns: (keyof LeaderboardRow)[] = [
  //   'rank', 'name', 'fgd', 'fd_g', 'fd_k', 'ba', 'srgr', 'div_pose', 'div_sample', 'paper_venue', 'elo_hl', 'mismatch'
  // ];

  export let columnsA: (keyof LeaderboardRow)[] = [
    'name', 'paper_venue', 'acceptance_year' , 'elo_hl', 'mismatch'
  ];

  export let columnsB: (keyof LeaderboardRow)[] = [
    'name', 'fgd', 'ba', 'srgr', 'div_pose', 'div_sample'
  ];

  let sortKey: keyof LeaderboardRow | null = null;
  let ascending = true;
  let q = '';
  export let showSearch: boolean = true;

  let showAlt = false;

  $: columns = showAlt ? columnsB : columnsA;

  function sortBy(key: keyof LeaderboardRow) {
    if (sortKey === key) {
      ascending = !ascending;
    } else {
      sortKey = key;
      ascending = true;
    }
  }

  $: sortedRows = [...rows]
  .filter(r =>
      [r.name].some(v => (v || '').toLowerCase().includes(q.toLowerCase()))
    )
  .sort((a, b) => {
    if (!sortKey) return 0;

    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return ascending ? valueA - valueB : valueB - valueA;
    }

    const strA = String(valueA).toLowerCase();
    const strB = String(valueB).toLowerCase();

    if (strA < strB) return ascending ? -1 : 1;
    if (strA > strB) return ascending ? 1 : -1;
    return 0;
  });

  $: displayedRows = limit ? sortedRows.slice(0, limit) : sortedRows;

  const columnInfo: Record<string, { label: string; tooltip: string }> = {
    rank: { label: '#', tooltip: 'Ranking position' },
    name: { label: 'Name', tooltip: 'Model or participant name' },
    fgd: { label: 'FGD', tooltip: 'Frechet Gesture Distance' },
    fd_g: { label: 'FD-G', tooltip: 'Frechet Distance (Gestures)' },
    fd_k: { label: 'FD-K', tooltip: 'Frechet Distance (Keypoints)' },
    ba: { label: 'BA', tooltip: 'Beat Alignment score' },
    srgr: { label: 'SRGR', tooltip: 'Speech-to-Gesture Relevance' },
    div_pose: { label: 'Div-P', tooltip: 'Pose Diversity' },
    div_sample: { label: 'Div-S', tooltip: 'Sample Diversity' },
    paper_venue: { label: 'Venue', tooltip: 'Publication venue' },
    acceptance_year: { label: 'Year', tooltip: 'Publication year' },
    elo_hl: { label: 'Elo-HL', tooltip: 'Human-likeness score from Elo rating' },
    mismatch: { label: 'MM', tooltip: 'Mismatch preference' }
  };

  const columnLabels: Record<string, string> = {
    rank: '#',
    name: 'Name',
    fgd: 'FGD',
    fd_g: 'FD-G',
    fd_k: 'FD-K',
    ba: 'BA',
    srgr: 'SRGR',
    div_pose: 'Div-Pose',
    div_sample: 'Div-Sample',
    paper_venue: 'Venue',
    acceptance_year: 'Year',
    elo_hl: 'Elo-HL',
    mismatch: 'Mismatch'
  };
</script>

{#if showSearch}
  <div class="leaderboard-table-controls">
    <div class="leaderboard-table-search">
        <input class="leaderboard-search" placeholder="Search..." bind:value={q} />
    </div>
    <div class="leaderboard-buttons">
      <button
        class:selected={!showAlt}
        on:click={() => (showAlt = false)}
      >
        Subjective
      </button>
      <button
        class:selected={showAlt}
        on:click={() => (showAlt = true)}
      >
        Objective
      </button>
    </div>
  </div>
{/if}
<table class="leaderboard-table-inner">
<thead>
    <tr>
        {#each columns as col}
        <th title={columnInfo[col]?.tooltip} class="" on:click={() => sortBy(col)}>
          <span class="sort-arrow">
            <text class="leaderboard-header-text">
              {columnLabels[col] || col}
            </text> {sortKey === col ? (ascending ? '▲' : '▼') : '-'}
          </span>
        </th>
      {/each}
    </tr>
</thead>
<tbody>
    {#each displayedRows as row, i}
    <tr>
        {#each columns as col}
        <td
          class:name={col === 'name'}
        >
          {#if col === 'name' && row.link}
            <a href={row.link} target="_blank" rel="noopener noreferrer" class="leaderboard-name-link">
              {row.name}
            </a>
          {:else}
            {row[col]}
          {/if}
        </td>
        <!-- <td>{row[col]}</td> -->
        {/each}
    </tr>
    {/each}
</tbody>
</table>
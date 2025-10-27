<script lang="ts">
  import '../styles/app.css';
  import { resolve } from '$app/paths';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark');
  }

  function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement | null;
      if (!scrollProgress) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      scrollProgress.style.width = `${scrolled}%`;
    });
  }
</script>

<svelte:head>
  <link rel="icon" href={favicon} />

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y8YVY5DTXK"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Y8YVY5DTXK');
  </script>

</svelte:head>

<div class="navbar-wrap">
  <nav class="navbar">
    <div class="nav-left">
      <a href="{resolve('/')}" class="site-logo-link">
        <div class="site-logo"></div>
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-link" href="{resolve('/leaderboard')}">Leaderboard</a>
      <a class="nav-link" href="{resolve('/blogs')}">Blog</a>
      <a class="nav-link" href="{resolve('/tools')}">Tools</a>
      <!-- <a class="nav-link" href="{resolve('/rules')}">Rules</a> -->
      <a class="nav-link nav-link-extra" href="{resolve('/submit')}">Submit</a>
      <a class="nav-link" href="{resolve('/about_us')}">About Us</a>
    </div>

    <div class="nav-right nav-split-layout">
      <a
        href="mailto:genea-leaderboard@googlegroups.com"
        class="github-link"
        aria-label="Send us an email"
      >
        <img
          src="{resolve('/email.svg' as any)}"
          alt="Email icon"
          class="github-icon"
        />
      </a>

      <a
        href="https://twitter.com/genea_workshop"
        target="_blank"
        rel="noopener noreferrer"
        class="github-link"
        aria-label="GitHub repository"
      >
        <img
          src="{resolve('/twitter-logo.svg' as any)}"
          alt="GitHub"
          class="github-icon"
        />
      </a>

      <button class="theme-toggle" on:click={toggleTheme}>
        🌙 / ☀️
      </button>
    </div>

  </nav>
  <div class="scroll-progress"></div>
</div>

<main class="container">
  {@render children?.()}
</main>
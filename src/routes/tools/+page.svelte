<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<main class="subcontainer">
  <div class="home-split-ver">
    <div class="card">
      <h1 class="h1">Visualization Tools</h1>
      <div class="home-split-ver">
        <div class="card with-image">
          <div class="text-content">
            <a href="{resolve('/BVHView/bvhview.html' as any)}" target="_blank" class="links"><h1 class="h1">BVHView</h1></a>
            <p class="lead">
              <strong>BVHView</strong> is an open-source WebGL-based motion visualization tool designed to display motion capture data stored in BVH (Biovision Hierarchy) format. It allows users to load, inspect, and analyze skeletal animations directly in the browser, making it useful for researchers, animators, and developers working with motion data, gesture generation, or character animation systems.
            </p>
          </div>
          <img
            src={resolve('/bvhview.png' as any)}
            alt="Blender visualizer preview"
            class="card-image"
          />
        </div>

        <div class="card with-image">
          <div class="text-content">
            <a href="https://github.com/TeoNikolov/genea_visualizer/tree/dev-2025" target="_blank" class="links"><h1 class="h1">Blender</h1></a>
            <p class="lead">
              This tool can visualize or render .mp4 videos from your .npz files. <br> This is tool that is used for the user studies.
            </p>
          </div>
          <img
            src={resolve('/blender.png' as any)}
            alt="Blender visualizer preview"
            class="card-image"
          />
        </div>
      </div>
    </div>
  </div>
</main>
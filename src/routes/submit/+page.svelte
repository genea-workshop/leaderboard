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
  <div class="home-split-ver">
  <div class="card">
    <h1 class="h1" style="text-align: center;">The submissions will be available after <text style="font-size: larger;">17th</text> of November</h1>
    <!-- <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLScwTIR43liXvuN0oF0OB0muLLjBa8t04UwuEJHj1XN8fykmtw/viewform?embedded=true">Loading…
    </iframe> -->
  </div>
  <div class="card">
    <h1 class="h1" style="color: #3979c0">Submission process</h1> 
      <h2 class="h2">Rules for participation</h2> 
      <p>The main goal of the GENEA Leaderboard is to advance the scientific field of automated gesture generation. To best achieve this, we have a few requirements for participation:</p> 
      <ol style="display: grid; gap: 10px"> 
        <li>We are primarily looking to evaluate established gesture generation systems (e.g., already published models). In practice, this means that we maintain the right to filter out submissions that do not have prior evaluation results, or are clearly far below the state-of-the-art.</li> 
        <li>By participating in the leaderboard, you allow us to share your submitted motion clips with the scientific community, alongside with the videos we render from them and the human preference data collected during the evaluation.</li> 
        <li>You may train your model on any dataset that is publicly available for research purposes, except for the test set of BEAT-2, or the corresponding files in the original BEAT dataset. Training on any data not publicly available for research purposes is strictly prohibited.</li> 
        <li>In order to be included in the evaluation, you will have to provide a technical report describing the details of your system and how you trained it. Note that if your submission is based on an already published system, you will only have to write about how you adapted it for the leaderboard.</li> 
      </ol> 
      <h2 class="h2">How to participate</h2> 
      <ol style="display: grid; gap: 10px"> 
        <li> <b>Pre-screening</b>: Send an e-mail to our <a href="mailto:%20genea-leaderboard@googlegroups.com">contact address</a>, including the following information: 
          <ul> 
            <li>which model you intend to submit to the evaluation,</li> 
            <li>a link to a document describing said model (e.g., a paper),</li> 
            <li>a rough outline of planned changes to the original model (if any),</li> 
            <li>a list of team members contributing to your adaptation of the model, and</li> 
            <li>the name of a main responsible for the team.</li> 
          </ul> We will get back to you within a few days, confirming whether we can commit to evaluating your future submission.
        </li> 
        <li> <b>Prepare your model</b>: Train your model on the official training split of the BEAT-2 dataset and/or any other publicly available mocap data, except for the BEAT-2 test set. Given an arbitrarily long speech recording, your model must be able to generate an equally long motion sequence. Speaker ID, emotion labels, and the SMPL-X body shape vector will always be available as inputs, but you are not required to use them.</li> 
        <li> <b>Generate your synthetic motion</b>: For each speech recording in the BEAT-2 English test set, generate corresponding synthetic movements in the SMPL-X format. If your model is probabilistic (i.e., nondeterministic), please generate 5 samples for each input file, so that we can measure diversity.</li> 
        <li> <b>Submit your motion data and write a technical report:</b> Send your motion data to us, either through e-mail or on the submission page we will prepare for you. In order for your submission to be included on the leaderboard, you have to commit to writing a technical report about your submission, including but not limited to details about data, model architecture, training methods and generation process.</li> 
      </ol> 
      <h2 class="h2">What happens after your submission</h2> 
      <ol style="display: grid; gap: 10px"> 
        <li> <b>Submission screening</b>: Our team will inspect your submitted motion in order to validate whether your results are suitable for the leaderboard. We will get back to you within a week, and we will only reject submission in exceptional cases (e.g., if the movements are extremely jerky or still). </li> 
        <li> <b>Clip segmentation</b>: We will split your submitted motion sequences into short evaluation clips (roughly 10-15 seconds each). We will take care that the evaluation clips are aligned with full speaking turns. The timestamps of the evaluation clips will be kept private in order to prevent cherry-picking.</li> 
        <li> <b>Video rendering</b>: Our research engineers will create high-quality close-up video renders of the evaluation clips, using a standardised 3D scene and a textured SMPL-X character model. </li> 
        <li> <b>Crowd-sourced evaluations</b>: Once we have received enough submissions, we will conduct rigorous large-scale user studies, as detailed below on this page, and perform statistical analysis on the results. </li> 
        <li> <b>Release of data and evaluation results</b>: We will update the leaderboard based on the statistical results, and publish all of your rendered videos alongside your technical report. </li> 
        <li> <b>State-of-the-art report</b>: Periodically, we will invite participating teams to co-author a detailed state-of-the-art report, based on a snapshot of the leaderboard, in the style of the GENEA Challenge papers.</li> 
      </ol> 
  </div>
</div>
</main>
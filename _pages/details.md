---
layout: default
title: "Details"
date: 2024-05-17 10:00:00
permalink: /details
description: An overview of the leaderboard initiative
related_posts: false
nav: true
nav_order: 1
toc: 
  sidebar: left
---
<h1 style="color: #3979c0"> About the Leaderboard</h1>
The GENEA Gesture Generation Leaderboard is an upcoming living benchmark for gesture generation models. It allows researchers to test and showcase their models' performance on a standardised dataset and evaluation methodology.

Initially, the leaderboard will feature results from existing models that have been adapted to the BEAT-2 dataset. Following this initial phase, we’ll open the leaderboard to all researchers interested in submitting and evaluating new models. 


<h2>Our goals</h2>
<ul>
    <li>Establish a continuously updated <b>definitive ranking</b> of state-of-the-art models <b>on the most common</b> speech-gesture <b>motion capture datasets</b>, based on human evaluation.</li>
    <li> Raise the standards for <b>reproducibility</b> by releasing all collected model outputs, human ratings, and scripts for motion visualisation, conducting user-studies, and more. </li>
    <li> Use the collected human ratings to develop <b>better objective metrics</b> that are aligned with human perception of motion; </li>
    <li> <b>Unify gesture-generation researchers</b> from computer vision, computer graphics, machine learning, NLP, HCI, and robotics. </li>
    <li> <b>Evolve with the community</b> as new datasets, evaluations, and methodologies become available. </li>
</ul>         
<h2>Outcomes</h2>
Once the Leaderboard is operational, you will be able to:
<ul>
  <li> <b>Submit</b> your gesture-generation model's outputs, and <b>receive human evaluation results in 2-4 weeks for free</b>, managed by our expert team; </li> 
  <li> <b>Compare</b> to any state-of-the-art method on the Leaderboard using our comprehensive collection of rendered video outputs, <b>without having to reproduce baselines</b>; </li>  
  <li> <b>Visualise</b> your generated motion and <b>conduct our user studies</b> on your own <b>using our easy-to-use open-source tools</b>; </li>   
  <li> ...and much more! </li>   
</ul>


<h1 style="color: #3979c0">Setup and development timeline</h1>
To construct the leaderboard, we are inviting authors of gesture-generation models published in recent years to participate in a large-scale evaluation. We will conduct comprehensive evaluation of the submitted systems, primarily based on human evaluation, which will then be published on our website, alongside all collected outputs, ratings, and scripts necessary for reproducing the evaluation. 

Afterwards, the leaderboard will become open to the public in **June 2025**, and we will be updating it continuously as we receive new model submissions.

<h1 style="color: #3979c0">Dataset</h1>
<h3>BEAT-2 in the SMPL-X Format</h3>
The leaderboard will initially evaluate models using the English recordings in the test split of the [BEAT-2 dataset](https://pantomatrix.github.io/EMAGE/). Submissions will be required to be in the same SMPL-X format as the dataset, but we will <b>hide facial expressions</b> in order to focus on the hand- and body movements.
<figure style="text-align: center; margin-bottom: 2em;">
<video width="80%" controls>
<source src="https://genea-workshop.github.io/leaderboard/assets/video/smplx_render_example.mp4" type="video=mp4"> ERROR: Your browser could not load the example video.
</video>
<figcaption><i>An example video clip rendered from the BEAT-2 dataset. The avatar is a textured  <a href="https://smpl-x.is.tue.mpg.de/">SMPL-X mesh</a>.</i></figcaption>
</figure>

We think this data is the best candidate for an initial benchmark dataset for several reasons:
1. It’s the largest public mocap dataset of gesturing (with 60 hours of data in total).
2. BEAT, its predecessor, is one of the most commonly used gesture-generation datasets in recent years.
3. It has a high variety of speakers and emotions, and it includes semantic gesture annotations.
4. The SMPL-X format is compatible with many other mocap datasets, the majority of pose estimation models, and includes potential extensions (e.g., facial expressions for future iterations).

Being a living leaderboard, the dataset used for benchmarking is expected to change in the future as better mocap datasets become available.

<h1 style="color: #3979c0">Submission process</h1>
<h2>Rules for participation</h2>
The main goal of the GENEA Leaderboard is to advance the scientific field of automated gesture generation. To best achieve this, we have a few requirements for participation:

<ol style="display: grid; gap: 10px">
  <li>We are primarily looking to evaluate established gesture generation systems (e.g., already published models). In practice, this means that we maintain the right to filter out submissions that do not have prior evaluation results, or are clearly far below the state-of-the-art.</li>

  <li>By participating in the leaderboard, you allow us to share your submitted motion clips with the scientific community, alongside with the videos we render from them and the human preference data collected during the evaluation.</li>

  <li>You may train your model on any dataset that is publicly available for research purposes, except for the test set of BEAT-2, or the corresponding files in the original BEAT dataset. Training on any data not publicly available for research purposes is strictly prohibited.</li>

  <li>In order to be included in the evaluation, you will have to provide a technical report describing the details of your system and how you trained it. Note that if your submission is based on an already published system, you will only have to write about how you adapted it for the leaderboard.</li>
</ol>


<h2>How to participate</h2>

<ol style="display: grid; gap: 10px">
<li> <b>Pre-screening</b>:
Send an e-mail to our <a href= "mailto: genea-leaderboard@googlegroups.com">contact address</a>, including the following information:
<ul>
<li>which model you intend to submit to the evaluation,</li>
<li>a link to a document describing said model (e.g., a paper),</li>
<li>a rough outline of planned changes to the original model (if any),</li>
<li>a list of team members contributing to your adaptation of the model, and</li>
<li>the name of a main responsible for the team.</li>
</ul>
We will get back to you within a few days, confirming whether we can commit to evaluating your future submission.</li>

<li> <b>Prepare your model</b>: 
Train your model on the official training split of the BEAT-2 dataset and/or any other publicly available mocap data, except for the BEAT-2 test set. Given an arbitrarily long speech recording, your model must be able to generate an equally long motion sequence. Speaker ID, emotion labels, and the SMPL-X body shape vector will always be available as inputs, but you are not required to use them.</li>

<li> <b>Generate your synthetic motion</b>:
For each speech recording in the BEAT-2 English test set, generate corresponding synthetic movements in the SMPL-X format. If your model is probabilistic (i.e., nondeterministic), please generate 5 samples for each input file, so that we can measure diversity.</li>

<li>  <b>Submit your motion data and write a technical report:</b>
Send your motion data to us, either through e-mail or on the submission page we will prepare for you. In order for your submission to be included on the leaderboard, you have to commit to writing a technical report about your submission, including but not limited to details about data, model architecture, training methods and generation process.</li>
</ol> 

<!-- 
Use the SMPL-X format for your motion data. Each output file should align with the naming of the input audio files (e.g., input_sample_name.npy).
Submit individual NPY files for each test input. Do not submit a zip file; each NPY file should be uploaded individually. -->
<h2>What happens after your submission</h2>
<ol style="display: grid; gap: 10px">
  <li><b>Submission screening</b>: Our team will inspect your submitted motion in order to validate whether your results are suitable for the leaderboard. We will get back to you within a week, and we will only reject submission in exceptional cases (e.g., if the movements are extremely jerky or still).  </li>
    
  <li><b>Clip segmentation</b>: We will split your submitted motion sequences into short evaluation clips (roughly 10-15 seconds each). We will take care that the evaluation clips are aligned with full speaking turns. The timestamps of the evaluation clips will be kept private in order to prevent cherry-picking.</li>

  <li><b>Video rendering</b>: Our research engineers will create high-quality close-up video renders of the evaluation clips, using a standardised 3D scene and a textured SMPL-X character model. </li>

  <li><b>Crowd-sourced evaluations</b>: Once we have received enough submissions, we will conduct rigorous large-scale user studies, as detailed below on this page, and perform statistical analysis on the results. </li>

  <li><b>Release of data and evaluation results</b>: We will update the leaderboard based on the statistical results, and publish all of your rendered videos alongside your technical report. </li>
  
  <li><b>State-of-the-art report</b>: Periodically, we will invite participating teams to co-author a detailed state-of-the-art report, based on a snapshot of the leaderboard, in the style of the GENEA Challenge papers.</li>
</ol>
<!-- 
Navigate to the Submission page
Log in via GitHub to access the submission portal.
Upload your generated NPY files in the designated submission section. Make sure your filenames match the input file names.
Provide a link to your paper or include a brief technical report that describes your model. If you are submitting an already published model, document any adjustments made specifically for the BEAT-2 dataset. -->

<h1 style="color: #3979c0">Evaluation methodology</h1>
We will recruit large numbers of evaluators to conduct best-practices human evaluation. Our perceptual user studies will be designed to carefully disentangle key aspects of gesture evaluation, following what we learned from organising the <a href="https://linktr.ee/genea_workshop">2020–2023 GENEA challenges</a>.

<h2 style="color: #3979c0">Evaluation tasks</h2>
<h3>Motion quality</h3>
The first evaluation task will measure motion quality, in other words, to what degree do the evaluators perceive the overall movements to be natural-looking gesturing, without considering the speech. For this evaluation, the stimuli will be <b>silent videos</b>, and we will perform pairwise comparisons of motions from different sources (e.g., gesture-generation systems, baselines, or mocap data). 

The statistical analysis will use an Elo-style ranking system, in particular the Bradley-Terry model, similar to the methodology of <a href="https://lmarena.ai/">Chatbot Arena</a>. You can read more about Elo scores and the Bradley-Terry model in <a href="https://lmsys.org/blog/2023-12-07-leaderboard/#transition-from-online-elo-rating-system-to-bradley-terry-model">this blog post</a>; the key point is that 1) Elo-like systems naturally work well in a leaderboard setting where scores are continuously updated and the comparisons are not necessarily exhaustive; 2) the difference between the Elo scores of two systems directly expresses the probability that users prefer the output of one system over the output of the other.

 We believe that this approach will prove to be a highly scalable and efficient method, with interpretable results, that allows us to conduct sustainable recurring evaluations for each future submission separately.

<figure style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/hemvip_gui.png" style="border: 1px solid black;" width="100%"/>
<figcaption><i>A preview of the evaluation interface used in our studies.</i></figcaption>
</figure>

<h3>Motion specificity to speech</h3>
The second evaluation task will measure whether the outputs of the gesture-generation system are <i>somehow related</i> to the speech input. As discussed in the <a href="https://dl.acm.org/doi/10.1145/3656374">GENEA challenge 2022 paper</a>, a naive evaluation of this question – e.g., directly asking evaluators to choose which of two systems generated movements that are more appropriate for the speech – has significant risk of confounding with other factors such as motion quality.

Therefore, we will use a mismatching procedure based on the [GENEA Challenges](https://arxiv.org/abs/2308.12646). In a nutshell, our approach will be to show two clips from the same system, one with correctly paired speech and motion, and the other with independent, intentionally misaligned motion and speech signals. Evaluators then will be tasked with indicating which of the two videos has better connection between speech and motion. 

This is also a pairwise comparison, but unlike the motion quality assessment, it can be performed for each system independently, therefore it avoids the confounding factor of motion quality.

<h3>Future evaluations</h3>
After the leaderboard becomes established, we will include new evaluation tasks based on what datasets become available, and what challenges become more important in the field. Some possibilities, already compatible with the BEAT2 dataset, are to evaluate facial expressions or emotion expressivity. For future datasets, it might become possible to test motion specificity to the meaning of the speech, and other types of grounding information. (See our <a href="/leaderboard/position_paper">position paper for more ideas.)

<h1 style="color: #3979c0">Tooling</h1>
<h2>Standardised visualisation</h2>
Visualisation is one of the most important design choices for perceptual user studies that evaluate motion synthesis. Currently, almost every gesture-generation paper uses a different character model and 3D scene configuration due to difficulties of using animation software, as well as the lack of shared 3D assets. Because character appearence and other environmental factors can have a subtle but important effect on the evaluation, this means that human evaluation results are largely incomparable to each other.

We will use a standardised visualisation setup, containining a textured SMPl-X mesh as a human character model, and a minimal 3D scene with lighting. There will be an option to hide the face in the videos, since our first evaluations will only be based on hand- and body motion. **The videos shown above on this page are previews of our visualisation setup.**

We are currently working on an open-source, automated pipeline for rendering videos for our user studies, based on our previous <a href="https://github.com/TeoNikolov/genea_visualizer/">GENEA Blender visualiser</a>. The updated pipeline will be shared with the community after we release the leaderboard. 

<h2>User-study automation</h2>

To standardise the human evaluation process, we are rewriting the <a href="https://github.com/genea-workshop/hemvip">HEMVIP codebase</a>, which was originally developed for the GENEA challenges, with an emphasis on stability and ease of use. This software will also be open-sourced -- our vision is to enable independent replication of our evaluations, and to lower the barriers for crowd-sourced evaluations.

<h2>Objective evaluation</h2>
The leaderboard will also feature many commonly used objective metrics (e.g., FGD and beat consistency), and we are planning to develop new automated evaluation methods based on the collected human preference data. Each of these will be open-sourced with the release of the leaderboard.


<h1 style="color: #3979c0">Frequently Asked Questions</h1>
<details>
    <summary>Why do we need a leaderboard?</summary>
    <ul>
      <li>Gesture generation research is currently fragmented across different datasets and evaluation protocols.</li>
      <li>Objective metrics are inconsistently applied, and their validity is not sufficiently established in the literature.</li>
      <li>At the same time, subjective evaluation methods often have low reproducibility, and their results are impossible to directly compare to each other.</li>
      <li>This leads to a situation where it is impossible to know what is the state of the art, or to know which method works better for which purpose when comparing two publications.</li>
      <li>The leaderboard is designed to directly counter these issues.</li>
    </ul>
</details>

<details>
    <summary>How are the evaluations funded?</summary>
    <p>We currently have academic funding for running the leaderboard for a period of time. Having your system evaluated by the leaderboard will be free of charge. However, if there are a lot of systems submitted, we might not be able to evaluate all of them.</p>
</details>
<br>

<h1 align=left style="color: #3979c0">Contact address</h1>
<p style=" font-size: 2em; text-align: center"><a style="color: #000000" href="mailto: genea-leaderboard@googlegroups.com">genea-leaderboard@googlegroups.com</a></p>


<!-- 
---

In the first study, participants will rate the human-likeness of the gestures by comparing two videos side by side. For each test, both videos will show gesture motion paired with the same speech segment but generated under different conditions. The videos won’t have any audio, so participants can focus purely on the gestures. They’ll choose which of the two videos has more human-like gestures, letting us directly compare the naturalness of different motion generation methods.

The second study will focus on how well gestures fit the speech. Here, we’ll introduce a “mismatch” condition: participants will again view two side-by-side videos with identical gesture motion but different speech audio. One video will use the original speech that matches the gestures, while the other will have mismatched speech. Participants will then rate how appropriate the gestures are in each video, helping us see if the gestures effectively convey the communicative intent of the spoken words.

These two studies together will give us insights into both the natural quality of the gestures and their appropriateness in context with the speech.

Below you can find an overview of all submitted responses from the evaluation study:

<h1 style="color: #3979c0">Submission process</h1>
To participate in the evaluation, you will need to:
1. Train your model on the [BEAT-2](https://pantomatrix.github.io/EMAGE/) dataset, with the official test set held out. 
2. Generate motion for the leaderboard’s test set (a superset of the BEAT-2 test set; will be provided at a later time).
3. Submit the generated motion to the leaderboard organisers, alongside your paper or brief technical report describing the details of your model. If submitting an already published model, you only need to document the adaptations you made for the new dataset.

We are currently reaching out to potential participants for the first evaluation. We will share more details in the upcoming months. 

<br>
Welcome to the submission page for the Gesture Generation Leaderboard! Here, we’ll walk you through the steps to upload your model's output for evaluation. Please read through the instructions carefully to ensure a smooth submission process.

## Submission Requirements:
1. Generate Gesture Motion Data
We have provided input speech audio files from the BEAT-2 test set.
Your task is to generate corresponding gesture motion data for each input.
The output motion data should be in SMPL-X format with the following specifications:
File Format: .npy (NumPy array format)
Naming Convention: Each output file should exactly match the name of its corresponding input audio file, for example:
Input: sample_001_audio.wav
Output: sample_001_motion.npy
Note: The test set provided by the leaderboard includes a superset of the original BEAT-2 test data. Please generate gesture outputs for all files in the provided test set.

2. Format and Structure
Upload individual NPY files for each test input.
Do not compress or bundle the files (e.g., avoid .zip or .tar files); each NPY file should be uploaded separately to facilitate streamlined processing and evaluation.
Ensure that each output file contains the gesture data generated by your model in the SMPL-X format without facial expressions (since this is currently excluded from the evaluation).

## Uploading Your Files
* Login: Use your GitHub account to log in to the submission portal. This login will enable us to track and organize submissions more effectively.
* Upload Section: In the upload section below, select your NPY files for each test input. Make sure you verify file names before uploading to avoid mismatches with the input audio files.
* Confirmation: After uploading, double-check that all files have been correctly named and uploaded. Misnamed files may lead to errors during evaluation or result in incomplete assessments.
* Documentation: Provide a brief description of your model or a link to a published paper or preprint describing your approach. If you are adapting an already published model for the BEAT-2 dataset, include a note on any modifications made.

## After Submission
Once your files are submitted:
* Evaluation Queue: Your submission will enter our evaluation queue. Evaluations will be processed as quickly as possible, and results will be posted to the leaderboard when ready.
* Results: Upon completion, your model's performance metrics will be listed on the leaderboard, alongside human evaluation scores and objective metrics
* Resubmissions: You are welcome to submit updated versions of your model over time. Please ensure each new submission is uniquely identified in your documentation (e.g., Model 2). -->

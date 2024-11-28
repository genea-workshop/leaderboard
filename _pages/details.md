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
To construct the leaderboard, we are inviting authors of gesture-generation models published in recent years to participate in a large-scale evaluation. The organisers will conduct a comprehensive evaluation of the submitted systems, based on online crowd-sourcing, which will then be published on our website, alongside all collected outputs, ratings, and scripts necessary for reproducing the evaluation. 

Afterwards, the leaderboard will become open to new submissions, and will be continuously updated by the GENEA team. Our current plan is to release the leaderboard alongside our first state-of-the-art report, co-authored with submitting teams, in **March 2025**.

<h1 style="color: #3979c0">Dataset</h1>
<h3>BEAT-2 in the SMPL-X Format</h3>
The leaderboard will evaluate models based on the English recordings in the test split of the [BEAT-2 dataset](https://pantomatrix.github.io/EMAGE/) in the SMPL-X format, initially without facial expressions. We think this data is the best candidate for an initial benchmark dataset for several reasons:
1. It’s the largest public mocap dataset of gesturing (with 60 hours of data in total)
2. BEAT, its predecessor, has been one of the most commonly used datasets in recent years for gesture-generation research
3. It has a high variety of speakers and emotions, and it includes semantic gesture annotations
4. The SMPL-X format is compatible with many other mocap datasets, the majority of pose estimation models, and includes potential extensions (e.g., facial expressions for future iterations).

<figure style="text-align: center; margin-bottom: 2em;">
<img src="https://pantomatrix.github.io/EMAGE/assets/video_t.gif" alt="Official BEAT dataset gif that shows several animated speaking avatars." width="90%"/>
<figcaption><i>Speaking characters from BEAT-2 visualised with the SMPL-X body model.</i></figcaption>
</figure>

Being a living leaderboard, the dataset used for benchmarking is expected to change in the future as better mocap datasets become available.

<br>
<h1 style="color: #3979c0">Submission process</h1>
<h2>How to participate</h2>
1. <b>Pre-screening</b>:
Send an e-mail to our <a href= "mailto: genea-leaderboard@googlegroups.com">contact address</a>, indicating which of your published models you intend to participate with in the evaluation. We will get back to you within a few days, confirming whether we can commit to evaluating your future submission. 

2. <b>Prepare your model</b>: 
Train your model on the official training split of the BEAT-2 dataset and/or any other publicly available mocap data. Given an arbitrarily long speech recording, your model must be able to generate an equally long motion sequence. Speaker ID, emotion labels, and the body shape vector will always be available as inputs, but you are not required to use them.

3. <b>Generate your synthetic motion</b>:
For each speech recording in the BEAT-2 English test set, generate corresponding synthetic movements in the SMPL-X format. If your model is probabilistic (i.e., nondeterministic), please generate 5 samples for each input file.
<!-- 
Use the SMPL-X format for your motion data. Each output file should align with the naming of the input audio files (e.g., input_sample_name.npy).
Submit individual NPY files for each test input. Do not submit a zip file; each NPY file should be uploaded individually. -->

4. <b>Submit your motion data and write a technical report:</b>
Send your motion data to us, either through e-mail or on the submission page we will prepare for you. In order for your submission to be included on the leaderboard, you have to commit to writing a technical report about your submission, including but not limited to details about data, model architecture, training methods and generation process.

<h2>What happens after your submission</h2>

1. <b>Submission screening</b>: Our team will inspect your submitted motion in order to validate whether your results are suitable for the leaderboard. We will get back to you within a week, and we will only reject submission in exceptional cases (e.g., if the movements are extremely jerky or still).  
  
2. <b>Clip segmentation</b>: We will split your submitted motion sequences into short evaluation clips (roughly 10-15 seconds each). We will take care that the evaluation clips are aligned with full speaking turns. The timestamps of the evaluation clips will be kept private in order to prevent cherry-picking.

3. <b>Video rendering</b>: Our research engineers will create high-quality close-up video renders of the evaluation clips, using a standardised 3D scene and a textured SMPL-X character model. 

4. <b>Crowd-sourced evaluations</b>: Once we have received enough submissions, we will conduct rigorous large-scale user studies, as detailed below on this page, and perform statistical analysis on the results. 

5. <b>Release of data and evaluation results</b>: We will update the leaderboard based on the statistical results, and publish all of your rendered videos alongside your technical report. 
 
6. <b>State-of-the-art report</b>: Periodically, we will invite participating teams to co-author a detailed state-of-the-art report, based on a snapshot of the leaderboard, in the style of the GENEA Challenge papers.
<!-- 
Navigate to the Submission page
Log in via GitHub to access the submission portal.
Upload your generated NPY files in the designated submission section. Make sure your filenames match the input file names.
Provide a link to your paper or include a brief technical report that describes your model. If you are submitting an already published model, document any adjustments made specifically for the BEAT-2 dataset. -->

<h1 style="color: #3979c0">Evaluation methodology</h1>
We will recruit large numbers of evaluators to conduct best-practices human evaluation. Our perceptual user studies will be designed to carefully disentangle key aspects of gesture evaluation, following what we learned from organising the 2020–2023 GENEA challenges.

<h2 style="color: #3979c0">Evaluation tasks</h2>
<h3>Motion quality</h3>
The first evaluation task will measure motion quality, in other words, to what degree do the evaluators perceive the overall movements as the motion of a real human, without considering the speech. For this evaluation, the stimuli will be silent videos, and we will perform pairwise comparisons of motions from different sources (e.g., gesture-generation systems, baselines, or mocap data). 

The statistical analysis will be based on an ELO-style (Bradley-Terry) ranking system, similar to the methodology of <a href="https://lmsys.org/blog/2023-12-07-leaderboard/#transition-from-online-elo-rating-system-to-bradley-terry-model">Chatbot Arena</a>. We believe that this will prove to be a highly scalable and efficient method, with interpretable results, that allows us to conduct recurring evaluations for each future submission separately.

<figure style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/user_study_interface.png" width="50%"/>
<figcaption><i>A sketch of the evaluation interface for the user studies.</i></figcaption>
</figure>

<h3>Motion specificity to speech</h3>
The second evaluation task will measure whether the outputs of the gesture-generation system are <i>somehow related</i> to the speech input. As shown in the GENEA 2020 challenge report, a naive evaluation question  

Therefore, we will use a mismatching procedure based on the [GENEA Challenges](https://arxiv.org/abs/2308.12646). In a nutshell, our approach will be to test whether evaluators can identify which of two speech clips was used to generate the motion. This is also a pairwise comparison, but unlike the motion quality assessment, it will be performed for each system independently.

<h3>Future evaluations</h3>
After the leaderboard becomes established, we will include new evaluation tasks based on what datasets become available, and what challenges become more important in the field. Some possibilities are to evaluate facial expressions, emotion expressivity, motion specificity to the meaning of the speech, and so on. (See our <a href="/leaderboard/position_paper">position paper for more details.)

<h2 style="color: #3979c0">Standardised visualisation</h2>
Visualisation is one of the most important design choices for perceptual user studies that evaluate motion synthesis. 

Currently, almost every gesture-generation paper uses a different character model and 3D scene configuration. This can greatly influence the evaluation results.

We are developing an open-source automated Unreal Engine pipeline for rendering videos for the user study, which will be shared with the community when the leaderboard gets published. 


<figure style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/render_snapshot.png" width="50%"/>
<figcaption><i><b>TODO UPDATE</b> A preview of our renders.</i></figcaption>
</figure>

We will create a realistic, but minimal 3D scene with lighting, and we will use a textured SMPL-X mesh as a high-quality human character model. There will be an option to hide the face in the videos, since our first evaluations will only be based on hand- and body motion.


To standardise human evaluation, our tooling for running experiments will be released alongside the necessary visualisation scripts and 3D models.

The leaderboard will also feature many commonly used objective metrics (e.g., FGD and beat consistency) as well as model properties such as size, memory usage, etc.


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
* Resubmissions: You are welcome to submit updated versions of your model over time. Please ensure each new submission is uniquely identified in your documentation (e.g., Model 2).

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
# About the Leaderboard
The Gesture Generation Leaderboard is a living benchmark for gesture generation models. It allows researchers to test and showcase their models' performance on a standardized dataset and evaluation methodology. Initially, the leaderboard will feature results from existing models that have been adapted to the BEAT-v2 dataset. Following this initial phase, we’ll open the leaderboard to all researchers interested in submitting and evaluating new models.


<h1 style="color: #3979c0">Leaderboard setup and timeline</h1>
The leaderboard will be released in two stages.

To construct the leaderboard, we are inviting authors of a selection of already published gesture-generation models to participate in a large-scale evaluation. The organisers will conduct a comprehensive evaluation of the submitted systems, which will then be published on our website, alongside all collected outputs, ratings, and scripts necessary for reproducing the evaluation. 

Afterwards, the leaderboard will become open to new submissions, and will be continuously updated by the GENEA team. Our current plan is to release the leaderboard **by the end of the year**.


# Dataset: BEAT-v2 (SMPL-X Format)
<h3 style="color: #3979c0">Dataset</h3>
The leaderboard is going to use the English recordings of the [BEAT-v2 dataset](https://pantomatrix.github.io/EMAGE/) in the SMPL-X format, without facial expressions. We think this data is the best candidate for an initial benchmark dataset for several reasons:
1. It’s the largest public mocap dataset of gesturing (with 60 hours of data)
2. It has a high variety of speakers and emotions
3. It includes semantic gesture annotations
4. The SMPL-X format is compatible with many other datasets
5. It also includes facial expressions (a possible future addition for the leaderboard)

<figure style="text-align: center; margin-bottom: 2em;">
<img src="https://pantomatrix.github.io/EMAGE/assets/video_t.gif" alt="Official BEAT dataset gif that shows several animated speaking avatars." width="90%"/>
<figcaption><i>Speaking BEAT dataset avatars.</i></figcaption>
</figure>

Being a living leaderboard, the dataset used for benchmarking is expected to evolve in the future as newer datasets become available.

<br>

All models on the leaderboard will be evaluated on the BEAT-v2 dataset, specifically its English-language recordings in the SMPL-X format (without facial expressions). This dataset was chosen because:
* It contains 60 hours of gesturing data, offering extensive diversity across speakers, emotions, and gestures.
Semantic gesture annotations make it a versatile choice for initial benchmarking.
* The SMPL-X format supports compatibility with various other mocap datasets and includes potential extensions (e.g., facial expressions for future iterations).
* The leaderboard dataset may evolve over time, incorporating newer datasets as they become available.

We welcome researchers with novel gesture-generation models trained on the BEAT-v2 dataset to join the leaderboard. 

Here are the steps to get started:
1. Prepare Your Model for the BEAT-v2 Dataset
Train your model using the BEAT-v2 dataset, ensuring you hold out the official test set.
Generate gesture motion predictions for each entry in the leaderboard's test set (a superset of the BEAT-v2 test set, which will be provided).

2. Format Your Submission
Use the SMPL-X format for your motion data. Each output file should align with the naming of the input audio files (e.g., input_sample_name.npy).
Submit individual NPY files for each test input. Do not submit a zip file; each NPY file should be uploaded individually.

3. Submit Your Motion Data and Report
Navigate to the Submission page
Log in via GitHub to access the submission portal.
Upload your generated NPY files in the designated submission section. Make sure your filenames match the input file names.
Provide a link to your paper or include a brief technical report that describes your model. If you are submitting an already published model, document any adjustments made specifically for the BEAT-v2 dataset.


# User-study methodology:
<h1 style="color: #3979c0">Evaluation methodology</h1>
We will recruit a large number of evaluators on a crowd-sourcing platform to conduct best-practises human evaluation on three aspects:
1. Motion naturalness
2. Motion appropriateness for the speech
3. Emotional expression


For **motion naturalness** and **emotional expression**, we will use an ELO-style ranking system based on pairwise comparisons (Bradley-Terry), similar to [Chatbot Arena](https://lmsys.org/blog/2023-12-07-leaderboard/#transition-from-online-elo-rating-system-to-bradley-terry-model).

To accurately quantify **motion appropriateness**, we will use a mismatching procedure based on the [GENEA Challenges](https://arxiv.org/abs/2308.12646).


<figure style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/user_study_interface.png" alt="Gif of the genea challenge 2023 visualizer." width="80%"/>
<figcaption><i>A possible evaluation interface for the user studies.</i></figcaption>
</figure>

To standardise human evaluation, our tooling for running experiments will be released alongside the necessary visualisation scripts and 3D models.

The leaderboard will also feature many commonly used objective metrics (e.g., FGD and beat consistency) as well as model properties such as size, memory usage, etc.

In the first study, participants will rate the human-likeness of the gestures by comparing two videos side by side. For each test, both videos will show gesture motion paired with the same speech segment but generated under different conditions. The videos won’t have any audio, so participants can focus purely on the gestures. They’ll choose which of the two videos has more human-like gestures, letting us directly compare the naturalness of different motion generation methods.

The second study will focus on how well gestures fit the speech. Here, we’ll introduce a “mismatch” condition: participants will again view two side-by-side videos with identical gesture motion but different speech audio. One video will use the original speech that matches the gestures, while the other will have mismatched speech. Participants will then rate how appropriate the gestures are in each video, helping us see if the gestures effectively convey the communicative intent of the spoken words.

These two studies together will give us insights into both the natural quality of the gestures and their appropriateness in context with the speech.

Below you can find an overview of all submitted responses from the evaluation study:


# Submission:

<h1 style="color: #3979c0">How to participate</h1>
To participate in the evaluation, you will need to:
1. Train your model on the [BEAT-v2](https://pantomatrix.github.io/EMAGE/) dataset, with the official test set held out. 
2. Generate motion for the leaderboard’s test set (a superset of the BEAT-v2 test set; will be provided at a later time).
3. Submit the generated motion to the leaderboard organisers, alongside your paper or brief technical report describing the details of your model. If submitting an already published model, you only need to document the adaptations you made for the new dataset.

We are currently reaching out to potential participants for the first evaluation. We will share more details in the upcoming months. 

<br>
Welcome to the submission page for the Gesture Generation Leaderboard! Here, we’ll walk you through the steps to upload your model's output for evaluation. Please read through the instructions carefully to ensure a smooth submission process.

## Submission Requirements:
1. Generate Gesture Motion Data
We have provided input speech audio files from the BEAT-v2 test set.
Your task is to generate corresponding gesture motion data for each input.
The output motion data should be in SMPL-X format with the following specifications:
File Format: .npy (NumPy array format)
Naming Convention: Each output file should exactly match the name of its corresponding input audio file, for example:
Input: sample_001_audio.wav
Output: sample_001_motion.npy
Note: The test set provided by the leaderboard includes a superset of the original BEAT-v2 test data. Please generate gesture outputs for all files in the provided test set.

2. Format and Structure
Upload individual NPY files for each test input.
Do not compress or bundle the files (e.g., avoid .zip or .tar files); each NPY file should be uploaded separately to facilitate streamlined processing and evaluation.
Ensure that each output file contains the gesture data generated by your model in the SMPL-X format without facial expressions (since this is currently excluded from the evaluation).

## Uploading Your Files
* Login: Use your GitHub account to log in to the submission portal. This login will enable us to track and organize submissions more effectively.
* Upload Section: In the upload section below, select your NPY files for each test input. Make sure you verify file names before uploading to avoid mismatches with the input audio files.
* Confirmation: After uploading, double-check that all files have been correctly named and uploaded. Misnamed files may lead to errors during evaluation or result in incomplete assessments.
* Documentation: Provide a brief description of your model or a link to a published paper or preprint describing your approach. If you are adapting an already published model for the BEAT-v2 dataset, include a note on any modifications made.

## After Submission
Once your files are submitted:
* Evaluation Queue: Your submission will enter our evaluation queue. Evaluations will be processed as quickly as possible, and results will be posted to the leaderboard when ready.
* Results: Upon completion, your model's performance metrics will be listed on the leaderboard, alongside human evaluation scores and objective metrics
* Resubmissions: You are welcome to submit updated versions of your model over time. Please ensure each new submission is uniquely identified in your documentation (e.g., Model v2).

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

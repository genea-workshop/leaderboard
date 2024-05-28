---
layout: post
title: Towards an online leaderboard for gesture generation
date: 2024-05-17 10:00:00
permalink: /
description: An overview of the leaderboard initiative
related_posts: false
---

<div style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/genea-logo.png" alt="The GENEA Leaderboard logo" width="100%"/>
</div>

> To improve benchmarking of speech-driven gesture generation, we are developing the online GENEA Leaderboard. This is a cross between the previous [GENEA Challenges in gesture generation](https://svito-zar.github.io/GENEAchallenge2023/) and recent leaderboards in NLP and computer vision, such as [Chatbot Arena](https://chat.lmsys.org/?leaderboard) and [HEIM](https://crfm.stanford.edu/helm/heim/v1.0.0/#/).

## Our goals
* Establish a **living benchmark** of gesture-generation models using **human evaluation**
* Ensure **high reproducibility** by releasing all collected model outputs, human ratings, and scripts for motion visualisation, conducting user-studies, and more
* Develop **better objective metrics** based on the collected human ratings
* **Unify gesture-generation** researchers from computer vision, computer graphics, machine learning, NLP, and HCI
* Evolve with the community

## Leaderboard setup
Gesture-generation models are currently scattered across different datasets, and it is often difficult to successfully retrain someone else’s model on new data. 

To populate the leaderboard, we are currently inviting authors of up to 15 recent gesture-generation models to participate in a large-scale evaluation. The organisers will conduct a comprehensive evaluation of the submitted systems, which will then be published on our website, alongside all collected outputs, ratings, and scripts necessary for reproducing the evaluation.

After this initial evaluation is completed, the leaderboard will become open to public submissions, and will be continuously updated by the GENEA team.

### Dataset
The leaderboard is going to use the [BEAT-v2 dataset](https://pantomatrix.github.io/EMAGE/) in the SMPL-X format, without facial expressions. We think this data is the best candidate for an initial benchmark dataset for several reasons:
1. It’s the largest public mocap dataset of gesturing (with 60 hours of data)
2. High variety, with 8 emotions, 25 speakers, and 4 languages
3. It includes semantic gesture annotations
4. The SMPL-X format is compatible with many other datasets
5. It also includes facial expressions (a possible future addition for the leaderboard)

<figure style="text-align: center; margin-bottom: 2em;">
<img src="https://pantomatrix.github.io/EMAGE/assets/video_t.gif" alt="Official BEAT dataset gif that shows several animated speaking avatars." width="90%"/>
<figcaption><i>Speaking BEAT dataset avatars.</i></figcaption>
</figure>

Being a living leaderboard, the dataset used for benchmarking is expected to evolve in the future as newer datasets become available.

## How to participate
To participate in the evaluation, you will need to:
1. Train your model on the [BEAT-v2](https://pantomatrix.github.io/EMAGE/) dataset, with the official test set held out. 
2. Generate motion for the leaderboard’s test set (a superset of the BEAT-v2 test set; will be provided at a later time).
3. Submit the generated motion to the leaderboard organisers, alongside your paper or brief technical report describing the details of your model. If submitting an already published model, you only need to document the adaptations you made for the new dataset.

## Evaluation methodology

<figure style="text-align: center; margin-bottom: 2em;">
<img src="https://genea-workshop.github.io/2023/challenge/visualiser.gif" alt="Gif of the genea challenge 2023 visualizer." width="80%"/>
<figcaption><i>Example stimulus used in the GENEA Challenge 2023 dyadic speech appropriateness evaluation.</i></figcaption>
</figure>

We will recruit a large number of evaluators on a crowd-sourcing platform to conduct best-practises human evaluation on three aspects:
1. Motion naturalness
2. Motion appropriateness for the speech
3. Emotional expression

The human evaluation will use a standardised visualisation with a free and open-source mesh (i.e., not the SMPL-X mesh).

For **motion naturalness**, we will use an ELO-based system with pairwise comparisons (Bradley-Terry), similar to [Chatbot Arena](https://lmsys.org/blog/2023-12-07-leaderboard/#transition-from-online-elo-rating-system-to-bradley-terry-model).

<figure style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/human-likeness_gui.png" alt="Image shows the HEMVIP interface for evaluating human-likeness (motion naturalness) used in GENEA Challenge 2023." width="80%"/>
<figcaption><i>HEMVIP interface for evaluating human-likeness (motion naturalness) in GENEA Challenge 2023.</i></figcaption>
</figure>

To accurately quantify **motion appropriateness**, we will use a mismatching procedure based on the [GENEA Challenges](https://arxiv.org/abs/2308.12646).

<figure style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/speech_approp_gui.png" alt="Image shows the HEMVIP interface for evaluating speech-appropriateness (motion appropriateness) used in GENEA Challenge 2023." width="80%"/>
<figcaption><i>HEMVIP interface for evaluating speech appropriateness (motion appropriateness) in GENEA Challenge 2023.</i></figcaption>
</figure>

The leaderboard will also include all commonly used objective metrics and model properties such as size, memory usage, etc.

## Timeline
Our current plan is to gather submissions for the first evaluation until the **end of October**, and to launch the leaderboard by the end of the year.

## Frequently asked questions
* How are the evaluations funded?
    * We currently have academic funding for running the leaderboard for a period of time. Having your system evaluated by the leaderboard will be free of charge. However, if there are a lot of systems submitted, we might not be able to evaluate all of them.

* Why do we need a leaderboard?
    * Gesture generation research is currently fragmented across different datasets and evaluation protocols. 
    * Objective metrics are inconsistently applied, and their validity is not sufficiently established in the literature. 
    * At the same time, subjective evaluation methods often have low reproducibility, and their results are impossible to directly compare to each other. 
    * This leads to a situation where it is impossible to know what is the state of the art, or to know which method works better for which purpose when comparing two publications.
    * The leaderboard is designed to directly counter these issues.

## Organisers
…


---
layout: post
title: "Announcing the GENEA Leaderboard: an upcoming online benchmark for gesture generation"
date: 2024-05-17 10:00:00
permalink: /
description: An overview of the leaderboard initiative
related_posts: false
---

<div style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/genea-logo_16.png" alt="The GENEA Leaderboard logo" width="100%"/>
</div>

<p style="font-size:1.2em;">
<b>TL;DR:</b> To improve benchmarking of speech-driven gesture generation, we are developing the online GENEA Leaderboard based on large-scale human evaluation. This is a cross between the previous <a href="https://svito-zar.github.io/GENEAchallenge2023/" rel="external nofollow noopener" target="_blank">GENEA Challenges in gesture generation</a> and recent leaderboards in NLP and computer vision, such as <a href="https://chat.lmsys.org/?leaderboard" rel="external nofollow noopener" target="_blank">Chatbot Arena</a> and <a href="https://crfm.stanford.edu/helm/heim/v1.0.0/#/" rel="external nofollow noopener" target="_blank">HEIM</a>.
</p>
<br>

<h2 style="color: #3979c0">Update</h2>
We have released a new position paper about the problems of gesture-generation evaluation, and the details of the GENEA leaderboard initiative! It is currently available [on this link](https://drive.google.com/file/d/171eMLx6VbdpHRoa438EW1s7l8yt3RqtD/view). 

<h2 style="color: #3979c0">Our goals</h2>
* Establish a **living benchmark** of gesture-generation models using **human evaluation**
* Ensure **high reproducibility** by releasing all collected model outputs, human ratings, and scripts for motion visualisation, conducting user-studies, and more
* Develop **better objective metrics** based on the collected human ratings
* **Unify gesture-generation researchers** from computer vision, computer graphics, machine learning, NLP, and HCI
* Evolve with the community

<br>

<h2 style="color: #3979c0">Leaderboard setup and timeline</h2>
The leaderboard will be released in two stages.

To construct the leaderboard, we are inviting authors of a selection of already published gesture-generation models to participate in a large-scale evaluation. The organisers will conduct a comprehensive evaluation of the submitted systems, which will then be published on our website, alongside all collected outputs, ratings, and scripts necessary for reproducing the evaluation. 

Afterwards, the leaderboard will become open to new submissions, and will be continuously updated by the GENEA team. Our current plan is to release the leaderboard **by the end of the year**.

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

<h2 style="color: #3979c0">Evaluation methodology</h2>
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

<br>

<h2 style="color: #3979c0">How to participate</h2>
To participate in the evaluation, you will need to:
1. Train your model on the [BEAT-v2](https://pantomatrix.github.io/EMAGE/) dataset, with the official test set held out. 
2. Generate motion for the leaderboard’s test set (a superset of the BEAT-v2 test set; will be provided at a later time).
3. Submit the generated motion to the leaderboard organisers, alongside your paper or brief technical report describing the details of your model. If submitting an already published model, you only need to document the adaptations you made for the new dataset.

We are currently reaching out to potential participants for the first evaluation. We will share more details in the upcoming months. 

<br>

<h2 style="color: #3979c0">Frequently Asked Questions</h2>
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

<h2 style="color: #3979c0">Organisers</h2>

The evaluations will be managed by the GENEA team:

<div class="row row-cols-2 projects pt-3 pb-3">
  {% include people_horizontal.html name="Rajmund Nagy" affiliation="KTH Royal Institute of Technology, Sweden" url="https://nagyrajmund.github.io/" img="/assets/img/people/rajmund.png" %}
  {% include people_horizontal.html name="Youngwoo Yoon" affiliation="ETRI, South Korea" img="assets/img/people/youngwoo.jpg" url="https://sites.google.com/view/youngwoo-yoon/" %}
  {% include people_horizontal.html name="Hendric Voß" affiliation="Bielefeld University, Germany" url="https://techfak.uni-bielefeld.de/~hvoss/" img="/assets/img/people/hendric.jpg" %}
  {% include people_horizontal.html name="Teodor Nikolov" affiliation="motorica.ai, Sweden" url="https://www.linkedin.com/in/teodor-nikolov/" img="/assets/img/people/teodor.png" %}
  {% include people_horizontal.html name="Mihail Tsakov" affiliation="PixelPool, Netherlands" url="https://www.linkedin.com/in/mihailtsakov/" img="/assets/img/people/mihail.png" %}
  {% include people_horizontal.html name="Thanh Hoang-Minh" affiliation="VNUHCM - University of Science, Vietnam" url="https://www.linkedin.com/in/hmthanh/" img="assets/img/people/thanh.png" %}
  {% include people_horizontal.html name="Taras Kucherenko" affiliation="Electronic Arts - SEED, Sweden" url="https://svito-zar.github.io/" img="assets/img/people/taras.jpg" %}
  {% include people_horizontal.html name="Gustav Eje Henter" affiliation="KTH Royal Institute of Technology and motorica.ai, Sweden" img="assets/img/people/gustav.jpeg" url="https://people.kth.se/~ghe/" %}
</div>
<br>
<h2 style="color: #3979c0">Scientific advisors</h2>

<div class="row row-cols-2 projects pt-3 pb-3">
{% include people_horizontal.html name="Rachel McDonnell" affiliation="Trinity College Dublin, Ireland" url="https://www.scss.tcd.ie/Rachel.McDonnell/" img="assets/img/people/rachel.jpg" %}
{% include people_horizontal.html name="Stefan Kopp" affiliation="Bielefeld University, Germany" img="assets/img/people/stefan.jpeg" url="https://www.techfak.uni-bielefeld.de/~skopp/" %}
{% include people_horizontal.html name="Michael Neff" affiliation="University of California, Davis, USA" img="assets/img/people/michael.jpg" url="https://www.cs.ucdavis.edu/~neff/"%}
</div>
<br>

<h2 style="color: #3979c0">Contact</h2>
If you have any questions, please feel free to contact us at <a href= "mailto: genea-leaderboard@googlegroups.com">genea-leaderboard@googlegroups.com</a>.
---
layout: default
title: "Home"
date: 2024-05-17 10:00:00
permalink: /
description: An overview of the leaderboard initiative
---
<div style="text-align: center; margin-bottom: 2em;">
<img src="./assets/img/genea-logo_16.png" alt="The GENEA Leaderboard logo" width="100%"/>
</div>
<h1 align=center>&#9993; Contact address: <a href= "mailto: genea-leaderboard@googlegroups.com">genea-leaderboard@googlegroups.com</a> &#9993;</h1> .

<blockquote style="font-size:1.5em;text-align: justify;"><b>Summary:</b> To improve benchmarking of <b>speech-driven gesture generation</b>, we are developing the online GENEA Leaderboard based on <b>large-scale human evaluation</b>.
This is a cross between the previous <a href="https://svito-zar.github.io/GENEAchallenge2023/" rel="external nofollow noopener" target="_blank">GENEA Challenges in gesture generation</a>
and recent leaderboards in NLP and computer vision, such as <a href="https://chat.lmsys.org/?leaderboard" rel="external nofollow noopener" target="_blank">Chatbot Arena</a>
and <a href="https://crfm.stanford.edu/helm/heim/v1.0.0/#/" rel="external nofollow noopener" target="_blank">HEIM</a>.
</blockquote>

<h1 style="color: #3979c0">Our goals and vision</h1>
<h5>In this project, we are aiming to:</h5>
* Establish a continuously updated **definitive ranking** of state-of-the-art models **on the most common** speech-gesture **motion capture datasets**, based on human evaluation.
* Raise the standards for **reproducibility** by releasing all collected model outputs, human ratings, and scripts for motion visualisation, conducting user-studies, and more.
* Use the collected human ratings to develop **better objective metrics** that are aligned with human perception of motion;
* **Unify gesture-generation researchers** from computer vision, computer graphics, machine learning, NLP, HCI, and robotics.
* **Evolve with the community** as new datasets, evaluations, and methodologies become available.

<h5>Once the Leaderboard is operational, you will be able to:</h5>
* **Submit** your gesture-generation model's outputs, and **receive human evaluation results in 2-4 weeks for free**, managed by our expert team;
* **Compare** to any state-of-the-art method on the Leaderboard using our comprehensive collection of rendered video outputs, **without having to reproduce baselines**;
* **Visualise** your generated motion and **conduct our user studies** on your own **using our easy-to-use open-source tools**;
* ...and much more!

<h1 style="color: #3979c0">Leaderboard setup and timeline</h1>
**(For comprehensive details regarding our current evaluation, please visit our [Details](/leaderboard//details) page.)**

As a living benchmark, the GENEA Leaderboard will be developed in an iterative manner over time.

Our current plans for the very first public release are the following:
* The Leaderboard will be based on the body movements of the BEAT-2 dataset in the SMPL-X format. Facial expressions will not be considered for now.
* We will accept model submissions, in the form of synthetic SMPL-X motion data generated from the test inputs of the above dataset, until the end of **2025 January**.
* The human evaluation methodology will initially only measure **motion quality** and **motion-speech appropriateness**, as defined in the GENEA Challenge 2023.
* The first set of evaluation results will be released in **2025 March**.

After the first results are published, we will keep the Leaderboard open for submissions throughout the year, and we will continuously update the ranking and publish new resources (e.g., votes and rendered videos).

<br>
<h1 style="color: #3979c0">Who are we?</h1>
Our international team includes **leading experts on the evaluation of gesture-generation models**, as well as **experienced model developers** and **research engineers** with experience in deploying gesture-generation models.
Together, we are developing the leaderboard and its associated tooling, and we will be responsible for managing and funding year-round crowdsourced human evaluations.

Our cumulative experience covers **all major aspects of gesture-generation research**, including:
* <b>crowdsourced evaluation</b>: e.g., organising the GENEA Challenges in 2020-2024 (the leading large-scale human evaluation efforts in gesture generation to date!)
* <b>data collection</b>: e.g., <i>TED Gesture dataset</i>
* <b>model development</b>: e.g., <i>Gesticulator</i> (ICMI 2020 Best paper), <i>Gesture Generation from Trimodal Context</i> (SIGGRAPH Asia 2020), <i>StyleGestures</i> (EUROGRAPHICS 2020 Honourable mention), <i>Listen, Denoise, Action!</i> (SIGGRAPH 2023), <i>AQ-GT</i> (ICMI 2023 Best paper)
* <b>visualisation tooling</b>: e.g., Blender, Maya, and Unreal Engine development


<br>
<h3 style="color: #3979c0">Organising team</h3>
<!-- Picture row 1 -->
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
  {% include figure.liquid loading="eager" path="assets/img/people/youngwoo.jpg" title="Youngwoo Yoon" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
        <h5>Youngwoo Yoon</h5>
        <h6>Principal Researcher</h6>
        <h6>ETRI, South Korea</h6>
    </div>
  </div>

  <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="assets/img/people/taras.jpg" title="Taras Kucherenko" class="img-fluid rounded z-depth-1" %}
      <div class="caption">
          <h5>Taras Kucherenko</h5>
          <h6>Research Scientist</h6>
          <h6>Electronic Arts - SEED, Sweden</h6>
      </div>
  </div>


  <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="assets/img/people/gustav.jpeg" title="Gustav Eje Henter" class="img-fluid rounded z-depth-1" %}
      <div class="caption">
          <h5>Gustav Eje Henter</h5>
          <h6>Assistant Professor and CTO</h6>
          <h6>KTH Royal Institute of Technology and motorica.ai, Sweden</h6>
      </div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/people/rajmund.png" title="example image" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
        <h5>Rajmund Nagy</h5>
        <h6>Doctoral Student</h6>
        <h6>KTH Royal Institute of Technology, Sweden</h6>
    </div>
</div>
</div>
<!-- Picture row 2 -->
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/people/hendric.jpg" title="Hendric Voß" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <h5>Hendric Voß</h5>
            <h6>Doctoral Student</h6>
            <h6>Bielefeld University, Germany</h6>
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/people/thanh.png" title="Thanh Hoang-Minh" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <h5>Thanh Hoang-Minh</h5>
            <h6>MSc Student</h6>
            <h6>VNUHCM - University of Science, Vietnam</h6>
        </div>
    </div>
  
    <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="/assets/img/people/teodor.png" title="Teodor Nikolov" class="img-fluid rounded z-depth-1" %}
      <div class="caption">
          <h5>Teodor Nikolov</h5>
          <h6>Research Engineer</h6>
          <h6>motorica.ai, Sweden</h6>
      </div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="/assets/img/people/mihail.png" title="Mihail Tsakov" class="img-fluid rounded z-depth-1" %}
      <div class="caption">
          <h5>Mihail Tsakov</h5>
          <h6>Unreal Engine Developer</h6>
          <h6>PixelPool, Netherlands</h6>
      </div>
  </div>
  </div>


<h3 style="color: #3979c0">Scientific advisors</h3>
Three leading experts of <i>nonverbal communication, visual perception, human-agent interaction, and motion capture</i> are also heavily involved in key strategic decisions, as well as the <b>design of the evaluation methodology</b>:
  
<div class="row">

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/people/rachel.jpg" title="Rachel McDonnell" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
        <h5>Rachel McDonnell</h5>
        Trinity College Dublin, Ireland
    </div>
</div>
<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/people/stefan.jpeg" title="Stefan Kopp" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
        <h5>Stefan Kopp</h5>
        Bielefeld University, Germany
    </div>
</div>
<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/people/michael.jpg" title="Michael Neff" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
        <h5>Michael Neff</h5>
        University of California, Davis, USA
    </div>
</div>
</div>


<h1 style="color: #3979c0">Sponsors</h1>
The GENEA leaderboard project is currently funded by ...........



<h1 align=center>&#9993; Contact address: <a href= "mailto: genea-leaderboard@googlegroups.com">genea-leaderboard@googlegroups.com</a> &#9993;</h1> .
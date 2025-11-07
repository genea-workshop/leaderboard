import React from 'react';

// Reusable components for consistent styling
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl font-bold text-brand-text mt-8 mb-4">{children}</h3>
);

const OrderedList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ol className="list-decimal list-outside space-y-4 pl-6 text-brand-text-muted leading-relaxed">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ol>
);

const SubmitPage: React.FC = () => {
  const rulesForParticipation = [
    "We are primarily looking to evaluate established gesture generation systems (e.g., already published models). In practice, this means that we maintain the right to filter out submissions that do not have prior evaluation results, or are clearly far below the state-of-the-art.",
    "By participating in the leaderboard, you allow us to share your submitted motion clips with the scientific community, alongside with the videos we render from them and the human preference data collected during the evaluation.",
    "You may train your model on any dataset that is publicly available for research purposes, except for the test set of BEAT-2, or the corresponding files in the original BEAT dataset. Training on any data not publicly available for research purposes is strictly prohibited.",
    "In order to be included in the evaluation, you will have to provide a technical report describing the details of your system and how you trained it. Note that if your submission is based on an already published system, you will only have to write about how you adapted it for the leaderboard."
  ];

  const howToParticipate = [
    <><strong>Prepare your model:</strong> Train your model on the official training split of the BEAT-2 dataset and/or any other publicly available mocap data, except for the BEAT-2 test set. Given an arbitrarily long speech recording, your model must be able to generate an equally long motion sequence. Speaker ID, emotion labels, and the SMPL-X body shape vector will always be available as inputs, but you are not required to use them.</>,
    <><strong>Generate your synthetic motion:</strong> For each speech recording in the BEAT-2 English test set, generate corresponding synthetic movements in the SMPL-X format. If your model is probabilistic (i.e., nondeterministic), please generate 5 samples for each input file, so that we can measure diversity.</>,
    <><strong>Submit your motion data and write a technical report:</strong> Send your motion data to us, through this submission form. In order for your submission to be included on the leaderboard, you have to commit to writing a technical report about your submission, including but not limited to details about data, model architecture, training methods and generation process.</>,
    <><strong>We will get back to you within a few days, confirming whether we can commit to evaluating your future submission.</strong></>
  ];
  
  const afterSubmission = [
    <><strong>Submission screening:</strong> Our team will inspect your submitted motion in order to validate whether your results are suitable for the leaderboard. We will get back to you within a week, and we will only reject submission in exceptional cases (e.g., if the movements are extremely jerky or still).</>,
    <><strong>Clip segmentation:</strong> We will split your submitted motion sequences into short evaluation clips (roughly 10-15 seconds each). We will take care that the evaluation clips are aligned with full speaking turns. The timestamps of the evaluation clips will be kept private in order to prevent cherry-picking.</>,
    <><strong>Video rendering:</strong> Our research engineers will create high-quality close-up video renders of the evaluation clips, using a standardised 3D scene and a textured SMPL-X character model.</>,
    <><strong>Crowd-sourced evaluations:</strong> Once we have received enough submissions, we will conduct rigorous large-scale user studies, as detailed below on this page, and perform statistical analysis on the results.</>,
    <><strong>Release of data and evaluation results:</strong> We will update the leaderboard based on the statistical results, and publish all of your rendered videos alongside your technical report.</>,
    <><strong>State-of-the-art report:</strong> Periodically, we will invite participating teams to co-author a detailed state-of-the-art report, based on a snapshot of the leaderboard, in the style of the GENEA Challenge papers.</>
  ];

  return (
    <div className="bg-brand-surface p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-brand-text mb-6">Submission process</h2>

      <div className="bg-blue-50 border border-blue-200 text-blue-900 px-6 py-4 rounded-lg text-center my-8">
          <p>
            The submissions will be available after <span className="font-bold">17th of November</span>.
          </p>
          <p className="mt-1">
            Any submissions before the end of November will be evaluated until the <span className="font-bold">12th of December</span>.
          </p>
      </div>

      <SectionTitle>Rules for participation</SectionTitle>
      <p className="text-brand-text-muted leading-relaxed mb-4">
        The main goal of the GENEA Leaderboard is to advance the scientific field of automated gesture generation. To best achieve this, we have a few requirements for participation:
      </p>
      <OrderedList items={rulesForParticipation} />

      <SectionTitle>How to participate</SectionTitle>
      <OrderedList items={howToParticipate} />

      <SectionTitle>What happens after your submission</SectionTitle>
      <OrderedList items={afterSubmission} />
    </div>
  );
};

export default SubmitPage;
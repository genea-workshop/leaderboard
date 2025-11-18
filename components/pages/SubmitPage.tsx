import React, { useState } from 'react';

// Reusable components for consistent styling
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl font-bold text-brand-text mt-8 mb-4">{children}</h3>
);

const Par: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-brand-text-muted leading-relaxed mb-4">{children}</p>
);

const OrderedList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ol className="list-decimal list-outside space-y-4 pl-6 text-brand-text-muted leading-relaxed">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ol>
);

const UnorderedList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc list-outside space-y-4 pl-6 text-brand-text-muted leading-relaxed">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

const UnorderedListSmall: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc list-outside space-y-1 pl-6 text-brand-text-muted leading-relaxed">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

const SubmitPage: React.FC = () => {
  // const [showForm, setShowForm] = useState(false);
  const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScwTIR43liXvuN0oF0OB0muLLjBa8t04UwuEJHj1XN8fykmtw/viewform?embedded=true';

  return (
    <div className="bg-brand-surface p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-brand-text mb-6">Submission process</h2>

      <div className="bg-blue-50 border border-blue-200 text-blue-900 px-6 py-4 rounded-lg text-center my-8">
        <p><strong>Please read the rules, before submitting!</strong></p>
        <p>The submission form is at the bottom of the page.</p>
        <p className="mt-4">
          If you submit before the end of November and your submission is accepted, it will be evaluated by the <strong>12th of December</strong>.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-brand-text mb-6">Rules</h2>
      <Par><strong>Please ensure that you have read these rules before submitting to the leaderboard. By submitting to the leaderboard, you agree to fully comply with these rules.</strong></Par>
      <Par>This is version 2025-11-17 of the rules, governing initial submissions to the leaderboard until a newer version is published by the leaderboard organisers. The rules are likely to evolve over time.</Par>

      <SectionTitle>Goal of the leaderboard</SectionTitle>
      <Par>The GENEA Leaderboard seeks to advance scientific knowledge relating to automatic gesture generation, by means of open science and large-scale, best-practices human evaluations presented in a leaderboard format. It is not a competition, and the point is not to find who does best, but what works best.The rules of the leaderboard have been designed with the intent of best furthering this goal.</Par>

      <SectionTitle>Data and materials</SectionTitle>
      <strong>Training data and pre-trained models</strong>
      <Par>To ensure reproducibility and a level playing field, you may only use data and pre-trained model weights that are open and non-proprietary (or that will become open and non-proprietary upon publication) to create submissions to the leaderboard. For this leaderboard, open and non-proprietary means:</Par>
      <UnorderedListSmall
        items={[
          "Publicly available and findable.",
          "Released under an open license that permits research use (including academic research as well as research performed by/at companies).",
        ]}
      />
      <br></br>
      <Par>If you use machine-learning models, e.g., foundation models, to initialise and/or train your system, these models must be open and non-proprietary as well. This requirement for example includes machine-learning models of text, audio, and/or 2D/3D motion. You may still use proprietary components in your data processing pipeline if the data resulting from that processing is released as open and non-proprietary data.</Par>
      <Par>Data processing and model training that integrate trained machine-learning models available through publicly available APIs, including paid APIs like ChatGPT, is permitted, both at training time and at synthesis time. However, you must publicly disclose the date(s) you queried these APIs and the prompts you used for doing so, for example in your system description and its appendices.</Par>
      <Par>Note that we do not require that you release the weights of your gesture-generation model we evaluate on the leaderboard. If you would like to be evaluated on the leaderboard even though you cannot be fully compliant with the requirements on open and non-proprietary data and models, please contact us. We are also open to adjusting these rules in the future.</Par>
      <Par>You must not train your system on:</Par>
      <UnorderedListSmall
        items={[
          "Any data from the BEAT2 test or validation sets, or the corresponding material in the original BEAT dataset.",
          "Any data derived from the BEAT2 test or validation sets, or from the corresponding material in the original BEAT dataset. This includes, e.g., augmented versions of the data in question, or output from any model trained on that data.",
        ]}
      />
      <br></br>
      <Par>As a remark, you are not required to train your system on any BEAT2 training data.</Par>
      <Par><strong>It is your responsibility to respect the licences of data and models you use, and to give proper attribution (including citations) to any datasets and models you have used to build your system.</strong></Par>

      <strong>Synthesising motion for the test set</strong>
      <Par>Synthetic gesture motion must be submitted in the same format as that used by the leaderboard dataset (SMPL-X, same frame rate, etc.). The organisers take no responsibility for any effects that may occur if the submitted motion is not in the correct format.</Par>
      <Par>Systems that require a motion input at synthesis time to produce output motion, such as few-shot systems with motion “prompting”, or variational autoencoders, may only use training data as synthesis-time input.</Par>
      <Par>Since the idea is to evaluate how systems would perform in an unattended setting, manually tweaking the test inputs or the generated output motion is not allowed. For systems with stochastic output, it is similarly not permitted to manually cherry pick which random samples are submitted for evaluation. Only automated processing is permitted at synthesis time.</Par>
      <Par>Non-deterministic systems, i.e., ones that use random-number generators to produce different output motion for the same input speech, must submit five random samples for each speech file in the test set.</Par>
    
      <strong>Retention and distribution of submitted materials</strong>
      <Par>All motion and other materials (e.g., form responses and system-description documents) that you submit to the leaderboard will be retained by the organisers for future use. You retain ownership and still have the right to do whatever you like with your data and your documents.</Par>
      {/* <div className='bg-gray-200'> */}
      <Par><strong>By submitting motion and other materials to the leaderboard, you agree to the following terms and conditions:</strong></Par>
      <OrderedList
        items={[
          "You certify that you have all rights and permissions necessary to submit these materials and to grant the rights described below, and that the rights granted do not conflict with any other agreement to which you are bound.",
          "For submitted motion and form responses, you grant us a perpetual, worldwide, non-exclusive, irrevocable, royalty-free, transferable license to distribute these materials under a CC-BY-NC license, labelled as coming from your system. The same goes for any system-description documents that are not already permanently publicly available through the arXiv and/or open-access publishing.",
          "You agree not to seek indemnity or other recovery from us for any claims, losses, liabilities, costs, or expenses arising out of use of the data consistent with the license granted above. The same applies to third‑party claims related to permitted use of the data, except for claims resulting from gross negligence or willful misconduct on our part.",
        ]}
      />
      {/* </div> */}

      <SectionTitle>How to participate</SectionTitle>
      <strong>Documentation and reproducibility</strong>
      <Par>Since the GENEA Leaderboard seeks to advance scientific knowledge, we place substantial emphasis on reproducibility. To submit to the leaderboard, you must complete a form with accurate information about the general technical specification of your system and various meta-information, to facilitate easy cross-system comparisons. We also require a future-proof email address so that we can obtain complementary information about your submission if necessary.</Par>
      <Par>Each submission must be also associated with a system description – a published paper, preprint, or technical report that describes the system and contains enough detail to allow replication. This must include a clear specification of which resources and datasets were used, as well as architecture and training hyperparameters.</Par>
      <Par>If your paper or preprint is not sufficiently detailed to permit replication, you may not be able to participate in the leaderboard without providing complementary information, either by updating your paper, or through a brief supplementary pdf that simply lists the necessary information missing from the paper.</Par>

      <strong>Limits on participation</strong>
      <Par>We want the leaderboard to provide as good a service to the community as possible, but we have limited resources, and being evaluated on the leaderboard is a privilege, not a right. In addition to not evaluating submissions that do not fulfill the above documentation requirements, we reserve the right to filter out submissions that are clearly below the state-of-the-art, as well as duplicates or excessively frequent submissions from the same group.</Par>
      <Par>We typically only evaluate and place on the leaderboard the final proposed system (i.e., no ablations or other system variants) from either an existing publication or an intended publication (work of yours that is yet to be accepted). If you have good reasons why the leaderboard should make an exception in your case, please reach out to us.</Par>
 
      <strong>Anonymity and identification</strong>
      <Par>Leaderboard submissions and associated system descriptions are generally not anonymous. Team names, members, and affiliations will be publicly visible through the leaderboard together with the motion you submitted, your system description, and subjective and objective evaluation results. You agree that once we have evaluated your submission, the results are ours to share and you cannot make us hide, change, or anonymise them.</Par>
      <Par>We encourage using the leaderboard to benchmark new and proposed systems in manuscripts you submit for publication. If obligations due to a peer-review anonymity period require that your identity not be disclosed on the leaderboard, you can apply for time-limited anonymity on the leaderboard. In that case, your submission will temporarily only be identified by an alphanumeric code (later to be de-anonymised). In this case, you must submit both an anonymised and a non-anonymous version of your system description document(s), and we will make the former one available during your period of anonymity. Please contact the organisers if you wish to make an anonymous submission.</Par>

      <SectionTitle>Final words</SectionTitle>
      <strong>How are these rules enforced?</strong>
      <Par>The leaderboard is designed to advance scientific knowledge, and is not a competition. The point is not to find who does best, but what works best. Therefore, we depend on your honesty in preparing your entry.</Par>
      <Par>If issues with rules compliance are uncovered with submissions to the leaderboard, a publicly visible note describing the issues may be added to your submission. Blatant rules violations and behaviour that goes against the spirit of the leaderboard – for example training on the test data, deliberately misleading system descriptions, or scientific fraud – may result in team members being blacklisted from submitting to the leaderboard.</Par>
      <strong>Contact information</strong>
      <Par>Please contact the organisers at <a href="mailto:genea-leaderboard@googlegroups.com" className="font-semibold text-brand-primary hover:text-brand-secondary">genea-leaderboard@googlegroups.com</a> if you have any questions about these rules.</Par>
      
      {/* <label className="inline-flex items-center gap-3 cursor-pointer select-none text-brand-text">
        <input
          type="checkbox"
          className="h-5 w-5 rounded border-gray-300 text-brand-primary focus:ring-brand-secondary"
          checked={showForm}
          onChange={(event) => setShowForm(event.target.checked)}
        />
        <span className="font-semibold">Accept the rules</span>
      </label> */}

      <SectionTitle>Submit your system</SectionTitle>
      <Par>Please fill out the embedded Google Form below to start the submission process. If you cannot see the form, please contact us.</Par>
   
      {/* {showForm && ( */}
        <div className="rounded-2xl border border-gray-200 shadow-inner overflow-hidden mb-10">
          <iframe
            title="GENEA Leaderboard submission form"
            src={GOOGLE_FORM_EMBED_URL}
            className="w-full"
            height="1200"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      {/* )} */}
    </div>
  );
};

export default SubmitPage;

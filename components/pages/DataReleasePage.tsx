import React from 'react';
import { useState } from 'react';
import { BASE_PATH } from '../../constants';

const dataReleases = [
  {
    title: 'Evaluation segment timestamps',
    description: 'Timestamps for the 108 evaluation segments used in our evaluation, manually selected to be free of major motion-capture artifacts. Each segment is a full phrase with durations ranging between 7.7 and 12 seconds.',
    uses: 'Independent evaluations that benefit from a standardised evaluation set.',
    isReleased: true,
  },
  {
    title: 'Rendered evaluation videos',
    description: 'All user-study videos used to in the leaderboard evaluation.',
    uses: 'Independent evaluation of new gesture-generation models, without having to reproduce baselines. Testing the effects of isolated evaluation design choices, or perhaps a completely new methodology.',
    isReleased: true,
  },
  {
    title: 'SMPL-X motion files',
    description: 'Test-set motion for the BEAT-2 dataset, as well as 5 hours of generated motion for all evaluated models, in the standardised SMPL-X format.',
    uses: 'Acquiring new visualisations (e.g., on a different character model), or training motion representations with synthetic data. Comparison to the state of the art without having to reproduce baselines.',
    isReleased: false,
  },
  {
    title: 'Human preference votes',
    description: 'We will release 16 000 crowdsourced human preference votes collected in our evaluation thus far.',
    uses: 'Developing a new automated metric, or fine-tuning a generative model using, e.g., reinforcement learning from human feedback (RLHF).',
    isReleased: false,
  },
];


const DataReleasePage: React.FC = () => {
  const bibtex = `@misc{nagy2025gesture,
      title={Gesture Generation (Still) Needs Improved Human Evaluation Practices: Insights from a Community-Driven State-of-the-Art Benchmark}, 
      author={Rajmund Nagy and Hendric Voss and Thanh Hoang-Minh and Mihail Tsakov and Teodor Nikolov and Zeyi Zhang and Tenglong Ao and Sicheng Yang and Shaoli Huang and Yongkang Cheng and M. Hamza Mughal and Rishabh Dabral and Kiran Chhatre and Christian Theobalt and Libin Liu and Stefan Kopp and Rachel McDonnell and Michael Neff and Taras Kucherenko and Youngwoo Yoon and Gustav Eje Henter},
      year={2025},
      eprint={2511.01233},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2511.01233}, 
}`;

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy BibTeX:', e);
    }
  };
  return (
    <div className="bg-brand-surface p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-brand-text mb-4">Data Release</h2>
      <div className="space-y-4 text-brand-text-muted mb-8">
        <p>
          We believe in transparent and reproducible research. Full details on the metrics, user study design, and data processing are described in our preprint.
        </p>
        <p>
          To support open research on gesture generation, we release the following data from the GENEA Leaderboard:
        </p>
      </div>
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-1/2 px-6 py-4 text-left text-sm font-semibold text-brand-text uppercase tracking-wider">
                Data Type
              </th>
              <th scope="col" className="w-1/2 px-6 py-4 text-left text-sm font-semibold text-brand-text uppercase tracking-wider">
                Example Uses
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataReleases.map((item) => (
              <tr key={item.title}>
                <td className="px-6 py-4 align-top">
                  <div className="flex items-center mb-2">
                    <p className="text-base font-bold text-brand-text">{item.title}</p>
                    {!item.isReleased && (
                      <span className="ml-3 text-xs font-semibold text-gray-600 bg-gray-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-brand-text-muted">
                    {item.description}
                  </p>
                  {item.title === 'Evaluation segment timestamps' && (
                    <div className="mt-2">
                      <a
                        href={`${BASE_PATH}assets/evaluation_segment_timestamps.csv`}
                        download="evaluation_segment_timestamps.csv"
                        className="inline-flex items-center text-sm font-semibold text-brand-primary hover:underline"
                        aria-label="Download CSV file"
                      >
                        <span>Download</span>
                        <span className="ml-2 text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          CSV
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  )}
                  {item.title === 'Rendered evaluation videos' && (
                    <div className="mt-2">
                      <a
                        href="https://drive.google.com/drive/folders/1fnCOaUyvpfId6UfF8gVafwoB_fCH_AxK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-brand-primary hover:underline"
                        aria-label="View rendered evaluation videos on Google Drive"
                      >
                        <span>View on Google Drive</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 align-top text-sm text-brand-text-muted leading-relaxed">
                  {item.uses}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Citation section */}
      <br />
      <div className="space-y-4 text-brand-text-muted mb-8">
        <h3 className="text-2xl font-bold text-brand-text mb-2">Citation</h3>
        <p className="text-sm text-brand-text-muted mb-3">
          If you use our data, evaluation protocol, or results, please cite the preprint (<a href="https://arxiv.org/abs/2511.01233" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">arXiv link</a>):
        </p>
        <div className="relative">
          <pre className="whitespace-pre-wrap break-words bg-gray-50 text-xs md:text-sm text-brand-text p-4 rounded-lg border border-gray-200 overflow-x-auto">
            {bibtex}
          </pre>
          <button
            type="button"
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1.5 text-xs font-semibold rounded-md bg-brand-primary text-white hover:opacity-90 focus:outline-none"
            aria-label="Copy BibTeX to clipboard"
            title="Copy BibTeX"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataReleasePage;
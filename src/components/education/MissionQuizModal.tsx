'use client';

import { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, HelpCircle, ArrowRight } from 'lucide-react';
import { useEducation } from '../../context/EducationContext';

const quizQuestions = [
  {
    id: 'q1',
    question: 'Why does the Apollo 11 Laser Retroreflector (LRRR) still work today after 55+ years?',
    options: [
      'It has a nuclear RTG generator that never runs out of power.',
      'It requires zero electricity—it is a passive mirror array of 100 glass corner-cubes.',
      'Astronauts replace its batteries during regular maintenance flights.',
      'It recharges using solar panel energy stored underground.'
    ],
    correctIndex: 1,
    explanation: 'Correct! LRRR is entirely passive. It consists of 100 fused silica glass corner cubes mounted in an aluminum frame that reflect Earth-launched laser pulses straight back without any electrical power.'
  },
  {
    id: 'q2',
    question: 'How far did Opportunity Rover drive on Mars compared to its original 90-sol design goal?',
    options: [
      'Original goal: 600 meters; Actual driven: 45.16 km (75x goal!).',
      'Original goal: 100 km; Actual driven: 45.16 km.',
      'Original goal: 5 km; Actual driven: 5 km.',
      'Original goal: 10 meters; Actual driven: 1 km.'
    ],
    correctIndex: 0,
    explanation: 'Correct! Opportunity exceeded its 600-meter prime mission goal by 75 times, driving a total of 45.16 km over 14.5 Earth years.'
  },
  {
    id: 'q3',
    question: 'What did the InSight lander seismometer (SEIS) discover about Mars internal structure?',
    options: [
      'Mars has a solid iron core with no mantle layer.',
      'Mars crust is 20–40 km thick and its metallic core is liquid.',
      'Mars is completely hollow inside.',
      'Mars has active plate tectonics identical to Earth.'
    ],
    correctIndex: 1,
    explanation: 'Correct! InSight seismic data provided new constraints showing Martian crust thickness is 20 to 40 km and its core is liquid metal.'
  },
  {
    id: 'q4',
    question: 'What happened to the Perseverance Skycrane descent stage after lowering the rover?',
    options: [
      'It landed next to Perseverance and turned into a weather station.',
      'It executed a planned controlled flyaway maneuver to impact the surface ~700 meters away.',
      'It flew back into orbit around Mars.',
      'It burned up completely in the atmosphere without leaving any surface hardware.'
    ],
    correctIndex: 1,
    explanation: 'Correct! After tethers were cut, the descent stage rocket thrusters flew it away to crash at a safe distance (~700m NW) from Perseverance.'
  },
  {
    id: 'q5',
    question: 'What unique historic milestone did Apollo 12 astronauts achieve at the Surveyor 3 site?',
    options: [
      'They refueled Surveyor 3 and launched it back to Earth.',
      'They retrieved Surveyor 3 TV camera and scoop to bring back to Earth for space weathering analysis.',
      'They buried Surveyor 3 under lunar regolith.',
      'They converted Surveyor 3 into a lunar communications relay.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Apollo 12 astronauts Pete Conrad and Alan Bean unbolted Surveyor 3 TV camera and scoop in 1969, bringing them back to Earth for the only human study of long-term space weathering.'
  }
];

export default function MissionQuizModal() {
  const { isEducationMode } = useEducation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const q = quizQuestions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);
    if (idx === q.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setIsAnswered(false);
    setIsFinished(false);
  };

  return (
    <div className="bg-[#0b101d] border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-space-border/60 pb-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-amber-400 font-bold uppercase">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Interactive NASA Science Quiz</span>
        </div>

        <div className="text-slate-400">
          Question <span className="text-amber-400 font-bold">{currentIdx + 1}</span> of {quizQuestions.length}
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          {/* Question Text */}
          <h3 className="font-mono text-lg sm:text-xl font-bold text-slate-100 leading-snug">
            {q.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 font-sans text-xs sm:text-sm">
            {q.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              const isCorrect = idx === q.correctIndex;

              let btnStyle = 'bg-slate-950 border-space-border/80 text-slate-300 hover:border-amber-500/50';
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                } else {
                  btnStyle = 'bg-slate-950 border-space-border/40 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner when answered */}
          {isAnswered && (
            <div className={`p-4 rounded-xl border font-mono text-xs space-y-1 ${
              selectedOpt === q.correctIndex ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300' : 'bg-rose-950/40 border-rose-500/50 text-rose-300'
            }`}>
              <div className="font-bold uppercase flex items-center gap-1.5">
                {selectedOpt === q.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>NASA Fact Verified!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>Not Quite!</span>
                  </>
                )}
              </div>
              <p className="font-sans text-slate-300 text-xs leading-relaxed">
                {q.explanation}
              </p>
            </div>
          )}

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-space-border/40 font-mono text-xs">
            <div className="text-slate-400">
              Current Score: <span className="text-amber-400 font-bold">{score}</span> / {quizQuestions.length}
            </div>

            {isAnswered && (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold uppercase hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                <span>{currentIdx + 1 === quizQuestions.length ? 'See Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Final Score Screen */
        <div className="text-center py-8 space-y-6 font-mono">
          <Award className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />

          <div className="space-y-2">
            <h3 className="text-2xl font-bold uppercase text-slate-100">
              Quiz Completed!
            </h3>
            <p className="text-slate-400 text-sm font-sans">
              You scored <span className="text-amber-400 font-bold text-lg">{score}</span> out of {quizQuestions.length} questions correctly.
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-space-border/80 max-w-md mx-auto text-xs text-slate-300 font-sans">
            {score === 5
              ? '🏆 Master Space Archaeologist! You possess expert knowledge of NASA off-world hardware.'
              : score >= 3
              ? '🚀 Great Job! You have a solid grasp of planetary exploration engineering.'
              : '📡 Keep Exploring! Re-visit the Mission Explorer to learn more hardware facts.'}
          </div>

          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg bg-slate-900 border border-amber-500/40 text-amber-400 font-bold uppercase hover:bg-slate-800 transition-colors inline-flex items-center gap-2 text-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
}

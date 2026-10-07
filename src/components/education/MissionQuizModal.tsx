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
    explanation: 'Correct! LRRR is 100% passive. It consists of 100 fused silica glass corner cubes mounted in an aluminum frame that reflect Earth-launched laser pulses straight back without any electrical power.'
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
    question: 'What caused the InSight Lander mission to end in December 2022?',
    options: [
      'A meteoroid directly hit the lander body.',
      'Heavy atmospheric dust accumulated on its solar arrays, dropping power generation below survival levels.',
      'The lander fell into a deep Martian ravine.',
      'Its thrusters ran out of rocket fuel during scientific operations.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Dust accumulation reduced daily energy production from ~5,000 Wh/sol at landing down to <300 Wh/sol, which was insufficient to power survival heaters.'
  },
  {
    id: 'q4',
    question: 'What historic event happened on November 19, 1969 regarding Surveyor 3?',
    options: [
      'Surveyor 3 launched from Cape Canaveral.',
      'Apollo 12 astronauts landed 180m away and retrieved Surveyor 3’s TV camera to bring back to Earth.',
      'Surveyor 3 discovered liquid water oceans under Oceanus Procellarum.',
      'Surveyor 3 crashed into the Moon at high speed.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Apollo 12 astronauts Pete Conrad and Alan Bean physically visited Surveyor 3, unbolting its TV camera and scoop arm to return them to Earth for engineering space-weathering analysis.'
  },
  {
    id: 'q5',
    question: 'What sample discovered by Apollo 15 LRV crew proved the Moon once had a global magma ocean?',
    options: [
      'The Genesis Rock (Sample 15415) — a 4.1-billion-year-old pure anorthosite crust sample.',
      'A titanium meteoroid fragment.',
      'A piece of frozen water ice from Hadley Rille.',
      'A synthetic metal alloy left by an earlier probe.'
    ],
    correctIndex: 0,
    explanation: 'Correct! The Genesis Rock (ferroan anorthosite) formed 4.1 billion years ago during the crystallization of the primordial Lunar Magma Ocean.'
  }
];

export default function MissionQuizModal() {
  const { markQuizCompleted } = useEducation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizQuestions[currentIdx];

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return; // Prevent double select
    setSelectedOption(index);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
      markQuizCompleted('space-graveyard-master-quiz');
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="bg-[#0b101d] border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-space-border/60 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-600/50 text-amber-400 font-mono text-xs font-bold uppercase">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>INTERACTIVE KNOWLEDGE CHALLENGE</span>
          </div>

          <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase text-slate-100">
            Space Apps Mission Quiz
          </h3>
        </div>

        {!isFinished && (
          <div className="font-mono text-xs text-amber-400 bg-slate-950 border border-amber-500/30 px-3 py-1.5 rounded font-bold">
            Question {currentIdx + 1} of {quizQuestions.length}
          </div>
        )}
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="font-mono text-base sm:text-lg font-bold text-slate-100 leading-snug">
              {currentQ.question}
            </h4>
          </div>

          {/* Options List */}
          <div className="space-y-3 font-sans text-xs sm:text-sm">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const showResult = selectedOption !== null;

              let btnStyle = 'bg-slate-950 border-space-border/80 text-slate-200 hover:border-amber-500';

              if (showResult) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-300';
                } else {
                  btnStyle = 'bg-slate-950 border-space-border/40 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-xl border font-mono transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-amber-400 text-xs mt-0.5">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <span className="font-sans leading-relaxed">{opt}</span>
                  </div>

                  {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {selectedOption !== null && (
            <div className="p-4 rounded-xl bg-slate-950 border border-space-border/80 space-y-2 font-mono text-xs">
              <div className="text-amber-400 font-bold uppercase flex items-center gap-1">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>NASA Scientific Explanation:</span>
              </div>
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                {currentQ.explanation}
              </p>

              <div className="pt-3 flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold uppercase text-xs hover:bg-amber-400 transition-colors shadow-lg"
                >
                  <span>{currentIdx + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Final Score Certificate */
        <div className="text-center py-8 space-y-6 max-w-md mx-auto font-mono">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/60 flex items-center justify-center mx-auto text-amber-400 shadow-xl">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl font-bold text-slate-100 uppercase">
              Quiz Completed!
            </h4>
            <div className="text-amber-400 text-lg font-bold">
              Your Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
            </div>
            <p className="text-slate-300 text-xs font-sans leading-relaxed pt-1">
              {score >= 4
                ? '⭐ Excellent! You have achieved NASA Junior Science Communicator Status.'
                : 'Great effort! Review the mission stories to master the history of NASA discarded hardware.'}
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-amber-500/40 text-amber-400 font-bold text-xs uppercase hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Mission Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

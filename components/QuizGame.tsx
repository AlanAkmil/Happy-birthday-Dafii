"use client";

import { useState } from "react";
import SystemWindow from "./SystemWindow";

type Question = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

const questions: Question[] = [
  {
    q: "Kalau ada 'Sistem' dateng ke hidup lu kayak di novel xianxia, hal pertama yang bakal lu lakuin?",
    options: [
      "Langsung grinding tanpa mikir",
      "Cek dulu ada tutorial-nya apa nggak",
      "Curiga ini prank",
      "Tidur dulu, besok aja",
    ],
    answer: 3,
    explain: "Jawaban benar atau nggak, yang penting jujur sama diri sendiri.",
  },
  {
    q: "Skill wajib buat naik level tahun ini menurut lu?",
    options: [
      "Rejeki anti tanggung",
      "Sabar level dewa",
      "Refleks kilat",
      "Semuanya sekaligus",
    ],
    answer: 3,
    explain: "Aman, semua jawaban benar. Cuma butuh niat.",
  },
  {
    q: "Kalau ulang tahun itu quest, reward-nya harusnya apa?",
    options: [
      "Umur panjang + sehat",
      "Rejeki lancar",
      "Temen-temen makin solid",
      "Semua di atas",
    ],
    answer: 3,
    explain: "Betul. Ambil paket komplit aja.",
  },
];

export default function QuizGame() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const current = questions[step];

  function pick(i: number) {
    if (selected !== null) return;
    setSelected(i);
  }

  function next() {
    if (step + 1 < questions.length) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setStep(0);
    setSelected(null);
    setDone(false);
  }

  return (
    <SystemWindow label="Side Quest // Kuis Naik Level">
      {!done ? (
        <>
          <div className="tag mb-4 text-xs text-smoke">
            Pertanyaan {step + 1} / {questions.length}
          </div>
          <p className="mb-5 text-base text-bone">{current.q}</p>

          <div className="space-y-2">
            {current.options.map((opt, i) => {
              const isAnswer = i === current.answer;
              const isSelected = selected === i;
              const showState = selected !== null;
              return (
                <button
                  key={opt}
                  onClick={() => pick(i)}
                  className={`w-full rounded-sm border px-4 py-3 text-left text-sm transition-colors ${
                    showState && isAnswer
                      ? "border-violet-bright bg-violet/20 text-bone"
                      : showState && isSelected
                      ? "border-magenta/60 bg-magenta/10 text-bone"
                      : "border-panelEdge bg-panel text-bone hover:border-violet-bright/60"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="mt-5 border-t border-panelEdge pt-4">
              <p className="text-xs text-smoke">{current.explain}</p>
              <button
                onClick={next}
                className="tag mt-4 rounded-sm border border-violet-bright/60 bg-violet/10 px-4 py-2 text-xs text-violet-bright"
              >
                {step + 1 < questions.length ? "Lanjut" : "Lihat Hasil"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <p className="text-base text-bone">
            Kuis selesai. Semua jawaban lu otomatis lolos, soalnya ini bukan
            tentang bener atau salah — cuma alesan buat ngerayain hari lu.
          </p>
          <button
            onClick={restart}
            className="tag mt-5 rounded-sm border border-panelEdge px-4 py-2 text-xs text-smoke hover:border-violet-bright/60"
          >
            Ulangi Kuis
          </button>
        </div>
      )}
    </SystemWindow>
  );
}
export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="tag mb-6 flex items-center gap-2 text-xs text-smoke">
        <span className="h-1.5 w-1.5 animate-flicker rounded-full bg-violet-bright" />
        Sistem &middot; Notifikasi Tahunan Terdeteksi
      </div>

      <h1 className="font-display text-5xl font-700 leading-[0.95] tracking-tight text-bone sm:text-7xl">
        DAFI
        <br />
        <span className="text-violet-bright">NAIK LEVEL</span>
      </h1>

      <p className="mt-6 max-w-md font-body text-base text-smoke sm:text-lg">
        Satu tahun lagi berhasil dilewati. Statmu naik, tapi kebiasaan begadangnya
        sepertinya masih versi lama.
      </p>

      <div className="tag mt-10 rounded-sm border border-panelEdge bg-panel/60 px-5 py-2 text-xs text-violet-bright animate-pulseGlow">
        + 1 LEVEL UNLOCKED
      </div>

      <div className="mt-16 animate-flicker text-smoke">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="mx-auto"
        >
          <path
            d="M12 4v16m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}

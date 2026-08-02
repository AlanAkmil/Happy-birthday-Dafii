import SystemWindow from "./SystemWindow";

export default function QuestLog() {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-6 py-8">
      <SystemWindow label="Quest Log // Pesan Dari Alan">
        <p className="font-body text-base leading-relaxed text-bone sm:text-lg">
          Woy Dafi. Happy birthday, njir. Gokil juga udah setahun lagi kelewat,
          padahal rasanya baru kemarin gua ledekin lu soal hal-hal receh.
        </p>
        <p className="mt-4 font-body text-base leading-relaxed text-bone sm:text-lg">
          Makasih udah jadi temen yang asik diajak ngobrol maupun nge-game,
          semoga tahun ini makin banyak rejeki, makin jarang begadang gak
          jelas, dan tetep jadi orang yang bisa diandelin kayak sekarang.
        </p>
        <p className="mt-4 font-body text-base leading-relaxed text-bone sm:text-lg">
          Anggep aja web receh ini kado dari gua. Selamat naik level, bro.
        </p>

        <div className="mt-6 flex items-center gap-2 border-t border-panelEdge pt-4">
          <span className="tag text-xs text-smoke">Status:</span>
          <span className="tag text-xs text-violet-bright">
            Quest Selesai &middot; Reward Diterima
          </span>
        </div>
      </SystemWindow>
    </section>
  );
}

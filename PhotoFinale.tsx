import Image from "next/image";
import SystemWindow from "./SystemWindow";

export default function PhotoFinale() {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-6 py-10">
      <SystemWindow label="Achievement Unlocked" className="text-center">
        <p className="tag mb-6 text-xs text-smoke">
          Karakter mencapai satu tahun lebih kuat
        </p>

        <div className="mx-auto w-56 overflow-hidden rounded-sm border border-panelEdge sm:w-64">
          <Image
            src="/dafi-photo.jpg"
            alt="Dafi"
            width={512}
            height={512}
            className="h-auto w-full"
            priority
          />
        </div>

        <p className="font-display mt-6 text-xl font-600 text-violet-bright">
          Selamat Ulang Tahun, Dafi
        </p>

        <p className="mt-2 text-sm text-smoke">Dari Alan</p>
      </SystemWindow>
    </section>
  );
}

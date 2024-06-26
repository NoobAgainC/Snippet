import Image from 'next/image';
import cover from '@/assets/laptop-mobile.png';
import AnimatedText from '@/ui/AnimatedText';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main>
      <div
        className={`flex-1 flex flex-col justify-end p-4 w-full absolute bottom-0 text-slate-800 dark:text-slate-100 ${inconsolata.className}`}
      >
        <AnimatedText
          textArray={['Code', 'Execute', 'Share']}
          className="text-[12vw] font-bold -mb-2 md:-mb-4 lg:-mb-10"
        />
        <p className="text-xl">
          Anytime, Anywhere, <br /> and on any device with Snippets
        </p>
      </div>
      <div className="flex flex-wrap-reverse">
        <div className="flex-1"></div>
        <div className="min-h-[70vh] flex items-center">
          <Image
            src={cover}
            alt=""
            width={1200}
            height={1200}
            className="flex-1"
          />
        </div>
      </div>
    </main>
  );
}

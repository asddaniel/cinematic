
import { WavyBackground } from "./WavyBackground";
import { ProgressBar } from "./ProgressBar";

type paramsType = {
  onFinish: () => void
}

export function AnimatedHero(params:paramsType) {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Modern UI/UX for your website
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        contact us for the best user experience for your website
      </p>
      <div className="py-3 w-full flex justify-center">
        <ProgressBar onComplete={params.onFinish} />
      </div>
    </WavyBackground>
  );
}

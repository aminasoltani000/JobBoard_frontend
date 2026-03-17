import { Link } from 'react-router-dom'
import heropic from '../assets/pictures/hero11.png'
import { Search, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-gradient-to-br from-[#8B87F9] via-[#A78BFA] to-[#7C6EF7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          <div className="flex flex-col gap-6">

            <div className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/15">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-white" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white">
                +500 offres disponibles
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
              Trouvez votre{' '}
              <span className="relative inline-block text-white/85">
                emploi idéal
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8.5C50 3 100 1 150 3.5C200 6 250 8 298 5"
                    stroke="white" strokeWidth="3" strokeLinecap="round" className="opacity-50" />
                </svg>
              </span>{' '}
              plus vite
            </h1>

            <p className="text-lg leading-relaxed max-w-lg text-white/75">
              Jobly connecte les talents aux meilleures entreprises. Des offres vérifiées,
              une candidature en quelques clics et un suivi en temps réel.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-[#7C6EF7] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              >
                <Search className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" />
                Explorer les offres
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/40 bg-white/12 text-white transition-all duration-300 hover:bg-white/22 active:scale-95"
              >
                Créer un compte
                <ArrowRight className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" />
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-2 pt-4 border-t border-white/20">
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold border-white/50 bg-white/20 text-white"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/70">
                <span className="font-bold text-white">+2 000</span> candidats nous font déjà confiance
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center w-full">
            <img
              src={heropic}
              alt="hero"
              className="max-w-3xl object-contain"
            />
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full leading-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-[60px] sm:h-[80px] md:h-[100px]"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 S900,80 1080,40 S1350,0 1440,30 L1440,80 L0,80 Z"
            fill="#F5F3FF"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
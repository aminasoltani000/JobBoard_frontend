import pic1 from '../assets/pictures/11.jpg'
import pic2 from '../assets/pictures/222.png'
import pic3 from '../assets/pictures/333.png'

const cards = [
  {
    img: pic1,
    tag: '01',
    title: 'Offres vérifiées',
    desc: "Accédez à des opportunités sélectionnées et mises à jour quotidiennement.",
  },
  {
    img: pic2,
    tag: '02',
    title: 'Recherche intelligente',
    desc: "Trouvez rapidement l'emploi idéal grâce à notre moteur avancé.",
  },
  {
    img: pic3,
    tag: '03',
    title: 'Candidature simplifiée',
    desc: "Postulez en quelques clics et suivez vos candidatures facilement.",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-jaune">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex flex-col items-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 border border-blue-400/20 bg-blue-500/8">
              <span className="w-1.5 h-1.5 rounded-full bg-bleuclair" />
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                Pourquoi Jobly
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-blue-900">
              Pourquoi choisir{' '}
              <span className="text-bleuclair">Jobly</span> ?
            </h2>
            <p className="text-base max-w-lg mx-auto leading-relaxed text-blue-900/50">
              Une plateforme moderne qui connecte les talents aux meilleures opportunités.
            </p>
          </div>
        </div>
             <div className="grid md:grid-cols-3 gap-7">
  {cards.map((card, i) => (
    <div
      key={i}
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border border-blue-500/12"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F3A]/55 to-transparent" />
        <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-white/90 text-blue-900">
          {card.tag}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2 text-bleufoncer">{card.title}</h3>
        <p className="text-sm leading-relaxed flex-1 text-blue-900/55">{card.desc}</p>
        <div className="mt-5 h-0.5 rounded-full w-10 bg-blue-500/40" />
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}

export default FeaturesSection
import { Globe, Phone, Mail, Clock } from 'lucide-react'

const ContactUs = () => {
    const items = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: 'Adresse',
            content: <>123 Rue de la Paix, Bureau 100<br />Alger, Algérie 16000</>
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Téléphone',
            content: '+213 555 123 456'
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            content: 'contact@jobly.dz'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Disponibilité',
            content: <>Lundi - Vendredi : 9h à 18h<br />Samedi : 10h à 14h<br />Dimanche : Fermé</>
        },
    ]

    return (
        <div className="bg-jaune py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                        Contact
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        On est là pour vous
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Une question sur une offre, un problème avec votre compte ou simplement envie d'en savoir plus sur Jobly ?
                        Notre équipe vous répond dans les plus brefs délais.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {items.map(({ icon, title, content }) => (
                            <div key={title} className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        {icon}
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        {title}
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        {content}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
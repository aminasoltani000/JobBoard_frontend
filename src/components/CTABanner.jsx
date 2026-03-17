import { Link } from 'react-router-dom'

const CTABanner = () => {
  return (
      <section className=" dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center bg-cta " >
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
            <div className="lg:w-1/2">
                <div
                    className="h-64 bg-cover lg:h-full"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}
                />
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                   Lancez votre carrière avec<span className="text-blue-500">JOBLY</span>
                </h2>

                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  une description courte et convaincante qui parle des offres vérifiées, de la candidature rapide et du suivi en temps réel
                </p>

                <div className="inline-flex w-full mt-6 sm:w-auto">
                    <Link to="/register" className="btn-primary bg-mauve text-lg text-white px-5 py-2 rounded-lg shadow hover:bg-mauve transition">
                        Commencer maintenant
                    </Link>
                </div>
            </div>
        </div>
      </section>
  )
}

export default CTABanner
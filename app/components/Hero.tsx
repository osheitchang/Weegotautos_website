import react from 'react';

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
            <img
                src="../assets/images/weegot-hero.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100 mix-blend-multiply"
            />
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                            Conoce los especiales del mes.{' '}
                            <a href="#" className="font-semibold text-white">
                                <span className="absolute inset-0" aria-hidden="true" />
                                {' '} Más información <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Ahorra tiempo y dinero en tu próximo auto nuevo
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                        Hacemos que la compra de tu auto sea un proceso fácil: <span className="font-extrabold">solo elige el auto que quieras y nosotros nos encargamos del resto.</span>
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-[#cd4e64] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#b4485a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >
                                Agendar asesoría
                            </a>
                            <a href="#feature_1" className="text-sm font-semibold leading-6 text-white">
                            Conocer más <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:-mt-4 lg:mb-4">
                    <img
                        className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                        src="../assets/images/toyota-logo.png"
                        alt="Toyota Logo"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                        src="../assets/images/nissan-logo.png"
                        alt="Nissan Logo"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                        src="../assets/images/honda-logo.png"
                        alt="Honda Logo"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="../assets/images/lexus-logo.png" 
                        alt="Lexus Logo"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="../assets/images/hyundai-logo.png"
                        alt="Hyundai Logo"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}
"use client";

import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  BoltIcon,
  ChatBubbleBottomCenterIcon,
  TruckIcon,
  UserCircleIcon,
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
} from "@heroicons/react/20/solid";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";





const navigation = [
  { name: "Servicios", href: "#service" },
  { name: "Compania", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contacto", href: "#" },
];
const features = [
  {
    name: "Asesoría Integral.",
    description:
      "Para nosotros es importante explicar todos los aspectos de la compra de auto para que nuestros clientes puedan tomar la mejor decision a la hora de comprar.",
    icon: BoltIcon,
  },
  {
    name: "Gestión Completa.",
    description:
      "Sabemos que ir a un concesionario implica comprometer tiempo que pudieras usar en otras cosas, por eso ofrecemos un servicio que abarca todo el proceso de compra para que no tengas que pasar ni un minuto negociando o esperando por aprobación.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Atención Personalizada.",
    description:
      "Atención personalizada que se centra en sus requerimientos únicos, proporcionando soporte y soluciones diseñados específicamente para usted.",
    icon: UserCircleIcon,
  },
  {
    name: "Entrega a la puerta de tu casa.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: TruckIcon,
  },
  {
    name: "Proceso Transparente.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: CubeTransparentIcon,
  },
  {
    name: "Disponibilidad 24/7",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: DevicePhoneMobileIcon,
  },
];

const featuresSecond = [
  {
    name: "Asesoría.",
    description:
      "Escoge el vehículo que mejor se adapte a tus necesidades.",
    icon: BoltIcon,
  },
  {
    name: "Gestión.",
    description:
      "Sigue con tu día a día sabiendo que te tenemos cubierto en todo el trámite del auto.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Entrega.",
    description:
      "Recibe tu auto en la puerta de tu casa y sin tener que haber ido a un concesionario.",
    icon: TruckIcon,
  },
];

const tiers = [
  {
    name: "Asesoria Personalizada",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$99",
    description:
      "Una asesoria integral de todo el proceso de compra de autos nuevos",
    features: [
      "Como saber si calificas",
      "Marcas con los mejores incentivos",
      "Guia de como calificar con los mejores terminos",
      "Evaluacion de Lease vs Compra",
    ],
    featured: true,
  },
  // {
  //   name: "Enterprise",
  //   id: "tier-enterprise",
  //   href: "#",
  //   priceMonthly: "$49",
  //   description: "Dedicated support and infrastructure for your company.",
  //   features: [
  //     "Unlimited products",
  //     "Unlimited subscribers",
  //     "Advanced analytics",
  //     "Dedicated support representative",
  //     "Marketing automations",
  //     "Custom integrations",
  //   ],
  //   featured: false,
  // },
];
const faqs = [
  {
    question: "¿Qué puedo esperar de la asesoría?",
    answer:
      "Entender cómo funciona el mercado de los autos, saber los trucos y estrategia de los vendedores, conocer tus posibilidades según tu situación para que puedas negociar con propiedad delante de un vendedor de autos. Conocer sobre los incentivos y programas más convenientes del mercado, aprenderás a conocer tu crédito y que tipo de financiamiento se ajusta más a tu situación.",
  },
  {
    question: "¿Qué precio tiene la asesoría?",
    answer: "La asesoría tiene un precio de $99",
  },
  {
    question: "¿Hay otro costo por ayudarme a conseguir el auto?",
    answer: "No, la negociación o el soporte no tiene ningún costo adicional.",
  },
  {
    question: "¿Puedo recibir asesoría si estoy fuera del estado de Florida?",
    answer: "Claro que sí, tendríamos una asesoría online.",
  },
  {
    question: "¿También me ayudan con la negociación del vehículo?",
    answer:
      "Sí, si te encuentras en el estado de la Florida nuestros asesores se encargaran personalmente de negociar la adquisición de tu vehículo. Si te encuentras fuera, contarás con nuestro soporte virtual en todo momento durante el proceso de la negociación. ",
  },
  {
    question: "¿Trabajan con autos usados?",
    answer: "Sí, trabajamos con autos nuevos y usados.",
  },
  {
    question: "¿Pueden ayudarme a refinanciar mi auto?",
    answer:
      "Podemos evaluar tu contrato y ver si tienes costos adicionales que se puedan eliminar o mejorar, de ser necesario podemos direccionarte a ciertas entidades bancarias que pueden refinanciar tu deuda con un % de interés más bajo, siempre y cuando cumplas con ciertos requisitos.",
  },
  {
    question: "¿Hacen delivery a otros estados?",
    answer:
      "Sí, hacemos delivery a otros estados y también dentro del estado de la Florida.  ",
  },
  {
    question: "¿Me ayudan con la cobertura y seguro necesario para mi auto?",
    answer:
      "¡Claro que sí! Ya sea que hayas comprado tu auto con nuestro apoyo o no, te ayudamos a encontrar la cobertura ideal para tu vehículo, tanto personal como comercial.",
  },
  {
    question: "¿Pueden ayudarme a refinanciar mi auto?",
    answer:
      "Podemos evaluar tu contrato y ver si tienes costos adicionales que se puedan eliminar o mejorar, de ser necesario podemos direccionarte a ciertas entidades bancarias que pueden refinanciar tu deuda con un % de interés más bajo, siempre y cuando cumplas con ciertos requisitos.",
  },
  // More questions...
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const stats = [
  { label: "Entregas", value: "1000+" },
  { label: "Marcas", value: "23" },
  { label: "Ciudades", value: "37" },
  { label: "Aprobacion", value: "86%" },
];




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Weegot Autos</span>
              <img
                className="h-8 w-auto fill-white stroke-white"
                src="../assets/images/logo-weegot-white.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/*Navbar disabled */}
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div> */}
          {/*Log in option */}
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Weegot Autos</span>
                <img
                  className="h-8 w-auto"
                  src="../assets/images/logo-weegot.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <Hero />
        {/* Introduction */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  <img
                    className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                    src="../assets/images/feature_1.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                    aria-hidden="true"
                  >
                    <div
                      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                    />
                  </div>
                  <figure className="relative isolate">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="0ef284b8-28c2-426e-9442-8655d393522e"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#0ef284b8-28c2-426e-9442-8655d393522e"
                        x={86}
                      />
                    </svg>
                    <img
                      src="../assets/images/Logo-weegot-white.png"
                      alt=""
                      className="h-12 w-auto"
                    />
                    <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                      <p>
                        "¡Estoy muy contenta de haber encontrado a Weegot! El
                        hecho de que se hayan encargado de todo vale muchísimo.
                        ¡Gracias chicos, de verdad!"
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                      <strong className="font-semibold text-white">
                        Tahilyn S.
                      </strong>{" "}
                    </figcaption>
                  </figure>
                </div>
                <div
                  className="absolute bottom-0 overflow-hidden z-100"
                  aria-hidden="true"
                ></div>
              </div>
              <div>
                <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-[#cd4e64]">
                    Compra con confianza
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Transacción transparente hasta el final
                  </h1>
                  <div className="max-w-xl">
                    <p className="mt-6">
                      Actualmente, si decides comprar un auto nuevo, la mayoría
                      de las veces necesitarás visitar un concesionario. Muchas
                      personas no están familiarizadas con el proceso interno de
                      financiamiento en estos lugares, lo que lamentablemente te
                      poneen una posición de desventaja al negociar el precio o
                      la tasa de interés del auto que deseas adquirir.
                    </p>
                    <p className="mt-8">
                      Por esta razón, en Weegot hemos adoptado la misión de
                      educar y asistir a nuestros clientes que están en la
                      búsqueda de un nuevo vehículo. Ponemos a disposición toda
                      nuestra experiencia y conocimiento para asegurar que
                      nuestros clientes obtengan el mejor negocio posible.
                    </p>
                    <p className="mt-8">
                      Desde negociar tasas de interés hasta aprovechar
                      promociones e incentivos de ciertos modelos de autos,
                      utilizamos todas nuestras herramientas para garantizar que
                      ahorres tiempo y dinero al momento de tu compra. Se
                      requiere un conocimiento profundo del mercado automotriz y
                      asesores profesionales que sepan cómo manejar los
                      distintos escenarios que cada cliente presenta; en Weegot,
                      ponemos ambas a tu disposición.{" "}
                    </p>
                  </div>
                </div>
                <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                  {stats.map((stat, statIdx) => (
                    <div key={statIdx}>
                      <dt className="text-sm font-semibold leading-6 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {/* <div className="mt-10 flex">
                  <a
                    href="#"
                    className="text-base font-semibold leading-7 text-indigo-600"
                  >
                    Learn more about our company{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Sub section */}
        <div className="bg-white py-24" id="service">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                <div className="lg:row-start-2 lg:max-w-md">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Una servicio completamente
                    <br />
                    "Manos libre"
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Esto significa que la gestión que recibes va más allá de solo guiarte hacia la mejor opción, sino que nos encargamos de todo, desde ayudarte a elegir hasta el momento en que hacemos la entrega.
                  </p>
                </div>
                <img
                  src="/assets/images/feature_2.jpg"
                  alt="Product screenshot"
                  className="trasnform relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                  width={2432}
                  height={1442}
                />
                <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                  <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    {featuresSecond.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt className="ml-9 inline-block font-semibold text-white">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-[#cd4e64]"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div
                className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Feature section */}
        <div className="mt-32 sm:mt-56" id="feature_1">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#cd4e64]">
                Un proceso simplificado
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                En manos de expertos
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Creamos un proceso de compra totalmente diferente al modo
                tradicional de comprar autos en Estados Unidos.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 border-solid">
              <img
                src="../assets/images/WeegotCollage2.png"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          {/* Benefits */}
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-[#cd4e64]"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* Testimonial section */}
        <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl ">
              {" "}
              {/*Just add "blut-3xl" */}
              <div
                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src="../assets/images/delivery.png"
                  alt="Car delivery Weegot"
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    Realmente hacen el proceso muy fácil a la hora de comprar. Ya he tenido malas experiencias a la hora de comprar y el hecho de que ellos se encarguen de todo el proceso hace que toda la transacción sea muy cómoda.
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Tahilyn D.</div>
                  <div className="mt-1 text-gray-400">Cliente Weegot</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <Testimonials />
        {/* FAQ section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Preguntas Frecuentes
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
        {/* CTA */}

        <div className="bg-white mt-28">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 ">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Obtén una asesoría gratuita hoy
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Recibe toda la información que necesitas para obtener el mejor negocio posible en tu próximo auto.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#cd4e64] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#cd4e64]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Obtener Asesoría
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Más información <span aria-hidden="true">→</span>
                </a>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
              >
                <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#cd4e64" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer
        className="mt-32 bg-gray-900 sm:mt-56"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              className="h-12"
              src="../assets/images/Logo-Weegot-white.png"
              alt="Weegot Autos"
            />
            {/* <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

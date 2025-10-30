import type { Route } from "./+types/_index";
import { generateMeta, generateStructuredData, schemas } from "../utils/seo";
import { ThemeToggle } from "../components/theme-toggle";

export function meta({}: Route.MetaArgs) {
  return [
    ...generateMeta({
      title: "Kasper Stück - Webudvikler med fokus på E-handelsløsninger",
      description:
        "Jeg skræddersyer webshops, der nøje opfylder kundernes unikke behov og visioner. Ved at kombinere teknisk avancerede løsninger med brugervenlighed sikrer jeg hurtig loadtid og optimal SEO.",
      url: "/",
    }),
    generateStructuredData(
      schemas.person(
        "Kasper Stück",
        "https://kasperstuck.dk",
        "Web Developer specializing in e-commerce solutions"
      )
    ),
  ];
}

export default function Home() {
  return (
    <div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
      {/* Background decoration */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative flex w-full flex-col">
        {/* Header with avatar and theme toggle */}
        <header className="pointer-events-none relative z-50 flex flex-none flex-col">
          <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
          <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative">
                    <a
                      href="/"
                      aria-label="Home"
                      className="block h-16 w-16 origin-left pointer-events-auto"
                    >
                      <img
                        src="/images/kasper-stuck.webp"
                        alt="Kasper Stück"
                        className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme toggle */}
          <div className="top-0 z-10 h-16 pt-6">
            <div className="sm:px-8 w-full">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="relative flex gap-4">
                      <div className="flex flex-1"></div>
                      <div className="flex justify-end md:flex-1">
                        <div className="pointer-events-auto">
                          <ThemeToggle />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-auto">
          {/* Hero section */}
          <div className="sm:px-8 mt-9">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      Webudvikler med fokus på{" "}
                      <span className="whitespace-nowrap">
                        E-handelsløsninger
                      </span>
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      Jeg skræddersyer webshops, der nøje opfylder kundernes
                      unikke behov og visioner. Ved at kombinere teknisk
                      avancerede løsninger med brugervenlighed sikrer jeg hurtig
                      loadtid og optimal SEO. Med et dybdegående kendskab til
                      integrationer garanterer jeg, at din webshop ikke kun vil
                      se godt ud, men også vil fungere fejlfrit, automatiseret
                      og effektivt.
                    </p>

                    {/* Social links */}
                    <div className="mt-6 flex flex-wrap gap-6">
                      <a
                        className="group -m-1 p-1 flex items-center"
                        target="_blank"
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/in/kasperstuck/"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 mr-1 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          LinkedIn
                        </span>
                      </a>

                      <a
                        className="group -m-1 p-1 flex items-center"
                        target="_blank"
                        aria-label="Eagle Media"
                        href="https://eaglemedia.dk/"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 mr-1 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Eagle Media
                        </span>
                      </a>

                      <a
                        className="group -m-1 p-1 flex items-center"
                        target="_blank"
                        aria-label="LavEnWebshop"
                        href="https://lavenwebshop.dk/"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 mr-1 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                        >
                          <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                          <path
                            fillRule="evenodd"
                            d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          LavEnWebshop
                        </span>
                      </a>

                      <a
                        className="group -m-1 p-1 flex items-center"
                        target="_blank"
                        aria-label="Vendino"
                        href="https://vendino.com/"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 mr-1 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                        >
                          <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                          <path
                            fillRule="evenodd"
                            d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Vendino
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo gallery */}
          <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                  src="/images/websites/munkstore-mobile.webp"
                  alt="Munkstore website"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img
                  src="/images/websites/hunterspoint-mobile.webp"
                  alt="Hunterspoint website"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                  src="/images/websites/lydspecialisten-mobile.webp"
                  alt="Lydspecialisten website"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                  src="/images/websites/mollyogmy-mobile.webp"
                  alt="Molly og My website"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img
                  src="/images/websites/inkpartner-mobile.webp"
                  alt="Inkpartner website"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Experience and Education sections */}
          <div className="sm:px-8 mt-24 md:mt-28">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                    {/* Experience section */}
                    <div className="lg:w-1/2 rounded-2xl border border-zinc-300 p-6 dark:border-zinc-700/40">
                      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none"
                        >
                          <path
                            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                          />
                          <path
                            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                            className="stroke-zinc-400 dark:stroke-zinc-500"
                          />
                        </svg>
                        <span className="ml-3">Erfaring</span>
                      </h2>

                      <ol className="mt-6 space-y-2">
                        {/* Eagle Media */}
                        <li className="flex flex-wrap gap-4">
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Firma</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              Eagle Media ApS
                            </dd>
                            <dt className="sr-only">Rolle</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Stifter, Webudvikler
                            </dd>
                            <dt className="sr-only">Dato</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-500"
                              aria-label="01-2016 until Nuværende"
                            >
                              <time dateTime="01-2016">01-2016</time>{" "}
                              <span aria-hidden="true">—</span>{" "}
                              <time dateTime="1970">Nuværende</time>
                            </dd>
                          </dl>
                          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                            Som stifter og primære udvikler hos Eagle Media har
                            jeg dedikeret mig til at udforme brugervenlige
                            webshops, der er præcist skræddersyet til at matche
                            hver enkelt kundes unikke krav og visioner. Jeg
                            optimerer hver webshop med en dybdegående fokus på
                            at sikre en fremragende brugeroplevelse, lynhurtig
                            loadtid og optimal søgemaskineoptimering (SEO). Mit
                            omfattende kendskab til forskellige integrationer
                            gør det muligt for mig at skabe tilpassede
                            løsninger, der både er teknisk avancerede og
                            brugervenlige. Jeg tager hånd om hele processen,
                            lige fra det indledende design til implementering af
                            specialiserede integrationer, der automatiserer og
                            effektiviserer webshoppens daglige drift. På denne
                            måde sikrer jeg, at hver webshop ikke kun ser godt
                            ud, men også fungerer fejlfrit og effektivt.
                          </p>
                        </li>

                        {/* Imeno */}
                        <li className="flex flex-wrap gap-4">
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Firma</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              Imeno
                            </dd>
                            <dt className="sr-only">Rolle</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Webudvikler - Praktikant
                            </dd>
                            <dt className="sr-only">Dato</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-500"
                              aria-label="01-2015 until 03-2015"
                            >
                              <time dateTime="01-2015">01-2015</time>{" "}
                              <span aria-hidden="true">—</span>{" "}
                              <time dateTime="03-2015">03-2015</time>
                            </dd>
                          </dl>
                          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                            Mens Søren, ejeren, var hovedansvarlig for
                            designprocessen, påtog jeg mig opgaven med at
                            realisere hans designvisioner på DanDomain
                            webshop-platformen. Jeg arbejdede tæt sammen med
                            Søren for at sikre, at designet blev realiseret
                            korrekt og fungerede fejlfrit. Dette krævede nøje
                            tilpasning af skabeloner og omhyggelig testning for
                            at garantere, at hver webshop ikke bare var visuelt
                            imponerende. Vores samarbejde resulterede i en
                            perfekt balance mellem kreativt design og solid
                            teknik.
                          </p>
                        </li>

                        {/* JoeDex */}
                        <li className="flex flex-wrap gap-4">
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Firma</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              JoeDex
                            </dd>
                            <dt className="sr-only">Rolle</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Webudvikler
                            </dd>
                            <dt className="sr-only">Dato</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-500"
                              aria-label="03-2011 until 06-2011"
                            >
                              <time dateTime="03-2011">03-2011</time>{" "}
                              <span aria-hidden="true">—</span>{" "}
                              <time dateTime="06-2011">06-2011</time>
                            </dd>
                          </dl>
                          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                            Som webudvikler hos Joedex var mit primære ansvar at
                            opsætte kundernes websites ved hjælp af
                            Webspire-CMS, Joedex's egenudviklede CMS. Trods
                            systemets specifikke karakter og kompleksitet var
                            jeg hurtigt i stand til effektivt at mestre og
                            optimere dets funktioner. Jeg dykkede dybt ned i
                            teknologierne PHP, MySQL, CSS og Javascript, hvor
                            jeg demonstrerede en betydelig kompetence.
                          </p>
                        </li>
                      </ol>
                    </div>

                    {/* Education section */}
                    <div className="lg:w-1/2 rounded-2xl border border-zinc-300 p-6 dark:border-zinc-700/40">
                      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none"
                        >
                          <path
                            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                          />
                          <path
                            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                            className="stroke-zinc-400 dark:stroke-zinc-500"
                          />
                        </svg>
                        <span className="ml-3">Uddannelse</span>
                      </h2>

                      <ol className="mt-6 space-y-2">
                        {/* UCN */}
                        <li className="flex flex-wrap gap-4">
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Firma</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              UCN - University College of Northern Denmark
                            </dd>
                            <dt className="sr-only">Rolle</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Multimediedesigner
                            </dd>
                            <dt className="sr-only">Dato</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-500"
                              aria-label="08-2013 until 06-2015"
                            >
                              <time dateTime="08-2013">08-2013</time>{" "}
                              <span aria-hidden="true">—</span>{" "}
                              <time dateTime="06-2015">06-2015</time>
                            </dd>
                          </dl>
                          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                            I løbet af min tid på UCN specialiserede jeg mig som
                            Multimediedesigner Jeg opnåede dybdegående kendskab
                            til og praktiske færdigheder inden for HTML5, CSS3,
                            JavaScript, MSSQL og ASP.NET. Jeg gennemførte med
                            succes projekter og opgaver, der involverede design
                            og udvikling af multimedieindhold på tværs af
                            forskellige platforme.Min uddannelse har udstyret
                            mig med de nødvendige kompetencer til at skabe
                            visuelt tiltalende og interaktive digitale
                            oplevelser.
                          </p>
                        </li>

                        {/* Tradium */}
                        <li className="flex flex-wrap gap-4">
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Firma</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              Tradium
                            </dd>
                            <dt className="sr-only">Rolle</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              HG
                            </dd>
                            <dt className="sr-only">Dato</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-500"
                              aria-label="08-2011 until 06-2013"
                            >
                              <time dateTime="08-2011">08-2011</time>{" "}
                              <span aria-hidden="true">—</span>{" "}
                              <time dateTime="06-2013">06-2013</time>
                            </dd>
                          </dl>
                          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                            I løbet af min tid på HG har jeg opnået erfaring fra
                            både butiksklassen og traderklassen. I butiksklassen
                            håndterede vi alt fra indkøb og opbygning af
                            butikken til salg af varer. Dette har givet mig et
                            indgående kendskab til, hvordan en detailbutik
                            fungerer. I traderklassen, havde vi fokus på at
                            starte vores egen virksomhed. Jeg startede en
                            virksomhed, hvor jeg arbejdede som freelanceudvikler
                            og havde nogle få kunder undervejs.
                          </p>
                        </li>

                        {/* Medieskolerne */}
                        <li className="flex flex-wrap gap-4">
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Firma</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              Medieskolerne - Media College Denmark
                            </dd>
                            <dt className="sr-only">Rolle</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Webudvikler / Web-Integrator
                            </dd>
                            <dt className="sr-only">Dato</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-500"
                              aria-label="08-2008 until 06-2010"
                            >
                              <time dateTime="08-2008">08-2008</time>{" "}
                              <span aria-hidden="true">—</span>{" "}
                              <time dateTime="06-2010">06-2010</time>
                            </dd>
                          </dl>
                          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                            I løbet af min tid på Medieskolerne - Media College
                            Denmark specialiserede jeg mig som webudvikler. Jeg
                            opnåede dybdegående kendskab til og praktiske
                            færdigheder inden for XHTML, CSS2, PHP5 og MySQL.
                            Min uddannelse har udstyret mig med de nødvendige
                            kompetencer til at forstå og imødekomme unikke
                            webudviklingsbehov. Jeg gennemførte med succes
                            projekter, hvor jeg udviklede hjemmesider baseret på
                            specifikke ønsker.
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-4">
          <div className="sm:px-8">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="py-4">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <a
                          href="https://eaglemedia.dk/"
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          Eagle Media ApS
                        </a>
                        <a
                          href="https://lavenwebshop.dk/"
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          LavEnWebshop
                        </a>
                        <a
                          href="https://vendino.com/"
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          Vendino
                        </a>
                      </div>
                      <a
                        href="https://kasperstuck.dk/"
                        className="text-sm text-zinc-500"
                      >
                        © {new Date().getFullYear()} - Kasper Stück
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

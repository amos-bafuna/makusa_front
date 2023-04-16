import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { TbTruckDelivery } from 'react-icons/tb';
import { SlWallet } from 'react-icons/sl';
import { MdOutlinePriceChange } from 'react-icons/md';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Makusa</title>
        <meta
          name="description"
          content="Une application pour la livraison de nourriture"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_makusa.png" />
      </Head>
      <main className="">
        <div className="bg-[url('/bg.png')] h-screen mb-3">
          <div className="bg-[url('/banner.png')] h-screen overflow-hidden">
            <div className="h-screen mx-12">
              <Header connectBtn={true} />
              <div className="flex items-center">
                <div className="md:block hidden">
                  <Image
                    height={400}
                    width={400}
                    src="/mobile_app.png"
                    alt="mobile app"
                  />
                </div>
                <div className="flex flex-col justify-center items-center m-auto">
                  <div className="flex flex-col items-center">
                    <div className="text-baseColor items-center font-bold text-4xl">
                      Maintenant vous pouvez
                    </div>
                    <br />
                    <div className="text-3xl text-center">
                      manger ce que vous voulez, où vous voulez avec
                      <span>Makusa</span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button className="bg-baseColor text-white hover:opacity-70 py-2 transition ease-in-out rounded-full px-4">
                      Passer une commande
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="my-7">
            <h1 className="text-2xl font-bold text-center text-baseColor ">
              Fonctionnalités
            </h1>
            <p className="text-center text-gray-600">
              Une solution complète pour faciliter la livraison de toutes vos
              commandes
            </p>
          </div>
          <div className="mx-12">
            <div className="flex justify-evenly flex-wrap">
              <div className="flex flex-col justify-evenly h-64 w-56 px-2 mt-2 bg-gradient-to-r from-baseColor to-yellow-500 hover:opacity-70 transition rounded">
                <div className="flex justify-center text-9xl text-white text-center">
                  <TbTruckDelivery />
                </div>
                <p className="text-white text-center font-medium">
                  Livraison rapide
                </p>
                <p className="text-xs text-center text-white">
                  Livraison rapide de vos plats directement chez vous...
                </p>
              </div>

              <div className="flex flex-col justify-evenly h-64 w-56 px-2 mt-2 bg-gradient-to-r from-baseColor to-yellow-500 hover:opacity-70 transition rounded">
                <div className="flex justify-center text-9xl text-white text-center">
                  <SlWallet />
                </div>
                <p className="text-white text-center font-medium">
                  Paiement à la livraision
                </p>
                <p className="text-xs text-center text-white">
                  Payer seulement quand vous êtes servi...
                </p>
              </div>

              <div className="flex flex-col justify-evenly h-64 w-56 px-2 mt-2 bg-gradient-to-r from-baseColor to-yellow-500 hover:opacity-70 transition rounded">
                <div className="flex justify-center text-9xl text-white text-center">
                  <MdOutlinePriceChange />
                </div>
                <p className="text-white text-center font-medium">
                  Prix abordable
                </p>
                <p className="text-xs text-center text-white">
                  Faites des économies avec un plat de qualité à moindre coût...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <h1 className="text-2xl font-bold text-center my-6 text-baseColor">
            Nos valeurs
          </h1>
          <div className="flex sm:flex-col sm:flex-no-wrap flex-wrap items-center">
            <div className="flex flex-col md:h-60 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
              <Image
                height={400}
                width={400}
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="/livraison.jpeg"
                alt="livraison"
              />
              <div className="flex flex-col justify-center p-6">
                <h5 className="mb-2 text-xl font-medium text-baseColor">
                  Rapidité
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Chez nous, nous nous engageons à fournir un service de
                  livraison rapide et fiable à tous nos clients. Nous
                  travaillons étroitement avec des transporteurs de tous types
                  pour garantir que vos produits arriveront toujours à temps.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:h-60 sm:my-10 my-0 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
              <Image
                height={400}
                width={400}
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="/qualite.jpg"
                alt="qualité"
              />
              <div className="flex flex-col justify-center p-6">
                <h5 className="mb-2 text-xl font-medium text-baseColor">
                  Qualité
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Notre site offre une qualité de repas exceptionnelle pour vous
                  aider à satisfaire votre faim. Les ingrédients utilisés dans
                  tous nos repas sont de qualité supérieure et très frais. Nous
                  faisons le plus gros effort pour créer des repas sains et
                  savoureux qui seront appréciés par tous.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:h-60 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
              <Image
                height={400}
                width={400}
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="/money.jpg"
                alt="Economy"
              />
              <div className="flex flex-col justify-center p-6">
                <h5 className="mb-2 text-xl font-medium text-baseColor">
                  Abordable
                </h5>
                <p className="mb-4 text-base text-neutral-600">
                  En achetant vos repas à partir de notre site, vous pourrez
                  profiter des nombreux avantages de nos offres. Nous offrons
                  des prix compétitifs et des remises attrayantes pour vous
                  aider à gagner du temps et à réaliser des économies sur vos
                  achats.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

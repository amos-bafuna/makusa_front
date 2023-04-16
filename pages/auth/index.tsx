import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function SignIn() {
  return (
    <>
      <Head>
        <title>Connexion</title>
        <meta
          name="description"
          content="Une application pour la livraison de nourriture"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_makusa.png" />
      </Head>
      <body>
        <div className="">
          <Header connectBtn={false} />
          <div className="flex justify-evenly items-center h-[90vh]">
            <div>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Adresse mail
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Votre adresse mail"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Mot de passe
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Votre mot de passe"
                  />
                  {/* <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-baseColor hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Connexion
                  </button>
                  <Link
                    className="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800"
                    href="/auth/signup"
                  >
                    Pas de compte?
                  </Link>
                </div>
              </form>
            </div>
            <div className="md:block hidden">
              <Image src="/login2.svg" alt="login" width={500} height={500} />
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
}

export default SignIn;

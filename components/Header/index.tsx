import Image from 'next/image';
import Link from 'next/link';

function Header({ connectBtn }: any) {
  return (
    <div className="flex md:justify-between items-center w-full py-3">
      <div className="md:block hidden">
        <Image src="/logo_makusa.png" alt="Logo" width={140} height={140} />
      </div>
      <nav className="flex items-center font-mono">
        <div className="mx-3">
          <Link
            href="/"
            className="hover:text-baseColor transition ease-in-out delay-150"
          >
            Accueil
          </Link>
        </div>
        <div className="mx-3">
          <Link
            href="/"
            className="hover:text-baseColor transition ease-in-out delay-150"
          >
            Contact
          </Link>
        </div>
        <div className="mx-3">
          <Link
            href="/"
            className="hover:text-baseColor transition ease-in-out delay-150"
          >
            Menu
          </Link>
        </div>
        <div className="mx-3">
          <Link
            href="/"
            className="hover:text-baseColor transition ease-in-out delay-150"
          >
            A propos
          </Link>
        </div>
        {connectBtn ? (
          <div className="">
            <Link href="/auth">
              <button className="bg-baseColor text-white px-4 py-2 rounded-full mx-3">
                Se connecter
              </button>
            </Link>
          </div>
        ) : (
          ''
        )}
      </nav>
    </div>
  );
}

export default Header;

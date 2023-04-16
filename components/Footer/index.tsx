import Link from 'next/link';
import { BsGeoAltFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';

function Footer() {
  return (
    <div className="md:flex block md:justify-between items-center px-3 mt-6 h-48 border bg-gradient-to-r from-baseColor to-yellow-500 to-90%">
      <div className="text-2xl text-white mb-2">Makusa</div>
      <div className="flex text-white mb-4">
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
      </div>
      <div className="text-white">
        <h1>Nous contacter</h1>
        <div className="flex items-center">
          <span className="mr-2">
            <BsGeoAltFill />
          </span>{' '}
          Kinshasa, Gombe
        </div>
        <div className="flex items-center">
          <span className="mr-2">
            <AiOutlineMail />
          </span>{' '}
          amosbafuna24@gmail.com
        </div>
        <div className="flex items-center">
          <span className="mr-2">
            <AiFillPhone />
          </span>{' '}
          +243 897 55 3758
        </div>
      </div>
    </div>
  );
}

export default Footer;

import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";

/**mb-6 font-sans text-3xl font-bold */
/**mb-12 flex w-full list-none flex-col md:flex-row items-center gap-3 md:gap-8 text-sm uppercase */
const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center md:items-start bg-slate-950 p-5 md:p-9 xl:p-40 pb-12 md:pb-14 xl:pb-12 pt-12 md:pt-14 xl:pt-20 text-slate-50">
      <section className="mb-12 flex flex-col gap-6 w-full xl:flex-row xl:justify-between">
        <h1 className="font-sans text-3xl font-bold text-center md:text-start">epicstore</h1>
        <div className="flex list-none flex-col md:flex-row items-center gap-3 md:gap-8 text-sm uppercase">
          <li>Home</li>
          <li>Lançamentos</li>
          <li>Outlet</li>
        </div>
      </section>
      <p className="mb-12 text-base text-slate-400 text-center md:text-left md:w-1/2">
        Explore um universo de entretenimento virtual incomparável no nosso
        E-commerce Gamer. Das últimas novidades em hardware aos jogos mais
        eletrizantes, estamos aqui para levar sua experiência gaming a
        níveis épicos. Descubra, jogue, conquiste – seu próximo nível começa
        aqui.
      </p>
      <section className="flex flex-col items-center md:justify-between md:flex-row gap-12 w-full">
        <span className="font-semibold text-slate-400">
          Copyright 2021. All Rights Reserved
        </span>
        <div className="flex justify-between list-none w-24 h-6">
          <li>
            <FaFacebookSquare className="h-6 w-6" />
          </li>
          <li>
            <FaWhatsappSquare className="h-6 w-6" />
          </li>
          <li>
            <FaInstagramSquare className="h-6 w-6" />
          </li>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

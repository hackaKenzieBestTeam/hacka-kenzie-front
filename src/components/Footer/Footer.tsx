const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center bg-slate-950 p-5 pb-12 pt-12 text-slate-50'>
      <h1 className='mb-6 font-sans text-3xl font-bold'>epicstore</h1>
      <div className='mb-12 flex w-full list-none flex-col items-center gap-3 text-sm uppercase'>
        <li>Home</li>
        <li>Lançamentos</li>
        <li>Outlet</li>
      </div>
      <div className='mb-12 text-center'>
        <p className='mb-12 text-base text-slate-400'>
          Explore um universo de entretenimento virtual incomparável no nosso
          E-commerce Gamer. Das últimas novidades em hardware aos jogos mais
          eletrizantes, estamos aqui para levar sua experiência gaming a níveis
          épicos. Descubra, jogue, conquiste – seu próximo nível começa aqui.
        </p>
        <span className='font-semibold text-slate-400'>
          Copyright 2021. All Rights Reserved
        </span>
      </div>
      <div className='flex list-none items-center gap-4'>
        <li>fc</li>
        <li>wt</li>
        <li>tw</li>
      </div>
    </footer>
  )
}

export default Footer

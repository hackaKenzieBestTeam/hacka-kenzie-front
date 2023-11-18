import Image from 'next/image'
import placaVideo from '../../../public/placa-de-video.jpg'
import React from 'react'

export default function Products() {
  return (
    <section className='pb-16 p-6 flex flex-col justify-center'>
      <div className='flex flex-col gap-10'>
        <Image
          className='box-border border-2'
          src={placaVideo}
          alt="placa-de-video"
        />
        <div className='flex flex-col gap-6 mb-20'>
          <h1 className='font-sans font-medium text-justify text-base'>
            Placa de Vídeo RTX 3060 1-Click OC Galax GeForce, 12GB GDDR6, LHR, DLSS, Ray Tracing - 36NOL7MD1VOC
          </h1>

          <span>
            R$ 3500,00
          </span>
          <div className='flex h-12 gap-6'>
            <div className='h-full w-28 border-2'>
              <button className='h-full w-8'>+</button>
              <input className='h-full w-10 focus:outline-none text-center' type="text" />
              <button className='h-full w-8'>-</button>
            </div>
            <button className='h-full w-40 bg-primary-brown uppercase text-white text-sm'>Comprar</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-20 mb-20'>
        <div className='flex flex-col gap-6'>
          <h1 className='uppercase text-lg font-bold'>Informações</h1>
          <p className='text-sm text-justify'>
            Como todas as GPUs GeForce RTX Series, a GeForce RT 3060 oferece suporte à trifeta das inovações em jogos da GeForce: NVIDIA DLSS, NVIDIA Reflex e NVIDIA Broadcast, que aceleram o desempenho e melhoram a qualidade da imagem. Juntamente com o rastreamento de raios em tempo real, essas tecnologias são a base da plataforma de jogos GeForce, que oferece desempenho e recursos incomparáveis para jogos e jogadores em todos os lugares. Equipado com ventoinhas gêmeas de 90 mm e design prático especial para dissipação de calor, a textura e aparência de carbono exclusivas trazem o máximo de frescor da placa.
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='uppercase text-lg font-bold'>Caracteristicas Técnicas</h1>
          <p className='text-sm text-justify'>
            Características:

            - Marca: GALAX

            - Modelo: 36NOL7MD1VOC



            Especificações:

            - Ray Tracing Cores de 2ª geração

            - Tensor Cores de 3ª geração

            - Microsoft DirectX Ultimate

            - Memória Gráfica GDDR6

            - NVIDIA DLSS

            - NVIDIA GeForce Experience

            - NVIDIA G-SYNC

            - NVIDIA GPU Boost

            - Game Ready Drivers

            - Vulkan RT API, OpenGL 4.6

            - DisplayPort 1.4a, HDMI 2.1

            - HDCP 2.3

            - VR pronto



            Especificações do motor GPU:

            - CUDA Cores: 3584

            - Boost Clock (MHz): 1777

            - 1-Click OC Clock (MHz): 1792 (instalando o software Xtreme Tuner Plus e usando 1-Click OC



            Especificações de memória:

            - Velocidade da memória: 15 Gbps

            - Configuração de memória padrão: 12GB

            - Largura da interface de memória: 192 bits GDDR6

            - Largura de banda da memória(GB/s): 360



            Suporte de recursos:

            - PCI-E 4.0

            - Windows 10 64 bits, Linux 64 bits



            Recurso de ventilador:

            - 2*90mm

            - Parada do ventilador @ ocioso (todos os ventiladores)



            Suporte de Exibição:

            - DisplayPort 1.4ax 3

            - HDMI 2.1



            Dimensões:

            - Dimensões (com suporte): 258 * 126 * 41,5 mm

            - Dimensões (sem suporte): 245 * 112 * 41,5 mm



            Requerimentos:

            - Placa-mãe compatível com PCI Express com um slot gráfico de largura dupla x 16

            - Espaço de sistema para cartão de 2 slots necessário

            - 1x conectores de alimentação suplementares PCIe de 8 pinos

            - Fonte de alimentação do sistema mínimo de 550 W ou superior

            - Memória de sistema de 32 GB recomendada

            - Microsoft Windows 10 de 64 bits (Build 2004 ou posterior recomendado) ou Linux de 64 bits



            Conteúdo da Embalagem:

            - Placa de Vídeo GALAX GeForce RTX 3060 36NOL7MD1VOC


            Garantia:
            12 meses de garantia

            Peso:
            1419 gramas (bruto com embalagem)
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='uppercase text-lg font-bold'>Você pode gostar</h1>
        <div className='h-72 flex flex-col border-primary-lightGray border-2 rounded-lg'>
          <div className='h-32 flex justify-center bg-white'>
            <Image
              className='w-auto h-full'
              src={placaVideo}
              alt="placa-de-video"
            />
          </div>
          <div className='bg-primary-lightGray w-full flex flex-col justify-around items-center h-40'>
            <div className='pl-4 pr-4 flex flex-col gap-4'>
              <h2 className='text-lg font-extrabold'>Nome produto</h2>
              <span>R$ 3500,00</span>
            </div>
            <div className='h-12 flex justify-center'>
              <button className='h-full w-40 bg-primary-brown text-white uppercase'>Ver mais</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        Avaliações
      </div>
    </section>
  )
}

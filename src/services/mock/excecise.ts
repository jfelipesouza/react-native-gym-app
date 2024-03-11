import AbdomenBanner from '../../assets/imgs/abdomen.png'
import BicepsBanner from '../../assets/imgs/biceps.png'
import CostasBanner from '../../assets/imgs/costas.png'
import AbdominalBanner from '../../assets/imgs/abdominal.jpg'
import AirBikeBanner from '../../assets/imgs/airbike.jpg'
import PernasBanner from '../../assets/imgs/pernasPraCima.jpg'
import PlanckBanner from '../../assets/imgs/planck.jpg'
import TorcaoBanner from '../../assets/imgs/torcaoRussa.jpg'
import MeditacaoBanner from '../../assets/imgs/yoga.jpg'
import YogaBanner from '../../assets/imgs/alongamento.jpg'
import { Excecises } from '../../@types/cards'

export const EXECECISE_MOCK: Excecises = [
  {
    category: 'Superiores',
    data: [
      {
        id: 'sdasdadsads',
        title: 'Abdomen',
        img: AbdomenBanner,
      },
      {
        id: 'asdasdasdadsd',
        title: 'Braços',
        img: BicepsBanner,
      },
      {
        id: 'asdasdadsdadsdd',
        title: 'Costas',
        img: CostasBanner,
      },
    ],
  },
  {
    category: 'Inferiores',
    data: [],
  },
  {
    category: 'Alongamento',
    data: [
      {
        id: 'asdasdadasddasd asdas ',
        title: 'Yoga',
        img: YogaBanner,
      },
      {
        id: 'das1da32sd3a1d23sd1a3a3s',
        title: 'Meditação',
        img: MeditacaoBanner,
      },
    ],
  },
]

export const ABDOMEN_MOCK = [
  {
    name: 'abdominal',
    repeat: 15,
    timer: false,
    time: 0,
    img: AbdominalBanner,
  },
  {
    name: 'Bicicleta no Ar',
    repeat: 20,
    timer: false,
    time: 0,
    img: AirBikeBanner,
  },
  {
    name: 'Elevação de Pernas',
    repeat: 20,
    timer: false,
    time: 0,
    img: PernasBanner,
  },
  {
    name: 'Prancha',
    repeat: 0,
    timer: true,
    time: 50,
    img: PlanckBanner,
  },
  {
    name: 'Torção Russa',
    repeat: 18,
    timer: false,
    time: 0,
    img: TorcaoBanner,
  },
]

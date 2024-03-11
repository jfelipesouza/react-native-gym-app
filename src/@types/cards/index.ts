export type ExceciseTrainer = {
  id: string
  title: string
  img: any
}

export type Excecise = {
  category: string
  data: ExceciseTrainer[]
}

export type Excecises = Excecise[]

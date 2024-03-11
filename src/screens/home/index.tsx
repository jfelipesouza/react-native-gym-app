import React, { useEffect, useState } from 'react'

import TrainerCards from '../../components/TrainerCards'
import HomerBanner from '../../assets/imgs/costas.png'
import {
  Container,
  TrainerTypeList,
  TrainerType,
  TrainerTypeName,
  TrainerList,
} from './styled'
import { EXECECISE_MOCK } from '../../services/mock/excecise'
import { ExceciseTrainer } from '../../@types/cards'

const HomeScreen: React.FC = () => {
  const [selectTrainer, setTrainer] = useState<ExceciseTrainer[]>(
    EXECECISE_MOCK[0].data,
  )
  const exercicesTypes = ['Superiores', 'Inferiores', 'Alongamento']

  const handleSelectType = (type: string) => {
    console.log({ type: type.toLocaleLowerCase() })
    var trainer = EXECECISE_MOCK.filter(item => {
      return item.category === type
    })
    setTrainer(trainer[0].data as any)
  }

  useEffect(() => {
    console.log({ trainers: selectTrainer })
  }, [selectTrainer])

  return (
    <Container>
      <TrainerCards
        data={{
          img: HomerBanner,
          title: 'Hoje vamos focar no treino de costas',
        }}
        variant="banner"
      />
      <TrainerTypeList>
        {exercicesTypes.map((item, index) => (
          <TrainerType onPress={() => handleSelectType(item)} key={item}>
            <TrainerTypeName>{item}</TrainerTypeName>
          </TrainerType>
        ))}
      </TrainerTypeList>
      <TrainerList
        data={selectTrainer}
        renderItem={({ item }) => (
          <TrainerCards variant="normal" data={item as any} />
        )}
        contentContainerStyle={{ gap: 25, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id as string}
      />
    </Container>
  )
}

export { HomeScreen }

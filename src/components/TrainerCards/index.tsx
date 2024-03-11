import React from 'react'

import { CardGradient, CardImage, CardName, Container } from './styled'

type TrainerCardsProps = {
  data: {
    img: any
    title: string
  }
  variant: 'small' | 'normal' | 'banner'
}
const TrainerCards: React.FC<TrainerCardsProps> = ({
  data: { img, title },
  variant = 'normal',
}) => {
  return (
    <Container variants={variant}>
      <CardImage source={img} />
      <CardGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['transparent', '#222']}
      >
        <CardName>{title}</CardName>
      </CardGradient>
    </Container>
  )
}

export default TrainerCards

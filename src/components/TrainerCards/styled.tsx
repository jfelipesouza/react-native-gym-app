import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity<{
  variants: 'small' | 'normal' | 'banner'
}>`
  width: 100%;
  height: ${({ theme, variants }) =>
    variants === 'banner'
      ? theme.screen.height * 0.25
      : variants === 'small'
      ? theme.screen.height * 0.15
      : theme.screen.height * 0.2}px;
  border-radius: ${({ theme }) => theme.padding.sm}px;
  position: relative;
`
export const CardGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.padding.sm}px;
  position: absolute;
  padding: 25px 15px;
  justify-content: flex-end;
`
export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.padding.sm}px;
`
export const CardName = styled.Text`
  color: white;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontsize.md}px;
`

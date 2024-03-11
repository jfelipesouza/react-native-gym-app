import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 ${({ theme }) => `${theme.padding.md}px`};
  padding-top: ${({ theme }) => theme.padding.lg}px;
  gap: ${({ theme }) => theme.padding.lg}px;
`
export const TrainerTypeList = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const TrainerType = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 5px 10px;
  border-radius: 5px;
`
export const TrainerTypeName = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.sm}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

export const TrainerList = styled.FlatList`
  flex: 1;
`

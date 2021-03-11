import styled from "styled-components/native";
import pencilGif from "../../assets/pencil.gif";

export const Main = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
  padding: 0px;
`;

export const BillsWrapper = styled.ScrollView`
  margin-top: 10px;
`;

export const Empty = styled.Image.attrs({
  source: pencilGif,
})`
  width: 120px;
  height: 120px;
`;

export const EmptyWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.TEXT};
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;
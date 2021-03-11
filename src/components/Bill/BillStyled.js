import styled from "styled-components/native";
import STATUS_LIST from "../../constants/status";
import COLORS from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const getStatusColor = (status) => {
  switch (status) {
    case STATUS_LIST.NOT_RECEIVED:
      return COLORS.NOT_RECEIVED;
    case STATUS_LIST.RECEIVED:
      return COLORS.RECEIVED;
    case STATUS_LIST.PAID:
      return COLORS.PAID;
    default:
      return COLORS.PRIMARY;
  }
};

export const Container = styled.View`
  align-self: stretch;
  padding: 15px 25px;
  margin: 10px 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.CARD};
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  padding: 10px 0px;
`;

export const TitleStatusWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColumnWrapper = styled.View`
  align-self: stretch;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.DISABLED};
`;

export const Amount = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.PRIMARY_ALT};
  padding-top: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.TEXT};
`;

export const BillStatus = styled.View`
  width: 13px;
  height: 13px;
  border-radius: 50px;
  background-color: ${({ status }) => getStatusColor(status)};
  margin-left: 15px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin: 10px 0px;
  color: ${({ theme }) => theme.TEXT};
`;

import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#22202C', '#402845'],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.KeyboardAvoidingView`
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
})`
  padding: 15px 25px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  margin: 10px 50px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.5);
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #f94d6a;
  width: 100%;
  align-items: center;
  padding: 15px;
  margin-top: 15px;
  border-radius: 4px;
`;

export const TextSubmitButton = styled.Text`
  color: #eee;
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
`;

export const NavigateButton = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const TextNavigateButton = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;

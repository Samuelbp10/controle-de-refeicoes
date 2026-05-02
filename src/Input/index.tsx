import { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

// Herança: Pegamos todas as propriedades que um TextInput normal tem
// (como onChangeText, value, keyboardType) para não precisar recriar tudo.
type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  // useTheme: Hook do styled-components para acessar nossas cores dentro da lógica
  const { COLORS } = useTheme();
  
  // useState: Hook do React para criar uma variável de ESTADO.
  // 'isFocused' guarda se o input está selecionado ou não. Começa como 'false'.
  const [isFocused, setIsFocused] = useState(false);

  // Função disparada quando o usuário CLICA no input
  function handleInputFocus() {
    setIsFocused(true);
  }

  // Função disparada quando o usuário CLICA FORA do input
  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container 
      isActive={isFocused}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      placeholderTextColor={COLORS.GRAY_4} // Cor do texto de dica (placeholder)
      {...rest} // O "...rest" repassa todas as outras propriedades (como onChangeText) para o Container
    />
  );
}
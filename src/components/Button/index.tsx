import { TouchableOpacityProps } from 'react-native';
import { Container, Title, ButtonTypeStyleProps } from './styles';

// Juntamos todas as props normais de um botão + o título e o tipo visual
type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
};

export function Button({ title, type = 'SOLID', ...rest }: Props) {
    return (
        <Container type={type} activeOpacity={0.7} {...rest}>
            <Title type={type}>
                {title}
            </Title>
        </Container>
    );
}
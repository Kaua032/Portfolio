import styled from 'styled-components'

export const FadeWrapper = styled.div`
    opacity: ${props => (props.$isVisible ? 1 : 0)};
    transform: translateY(${props => (props.$isVisible ? '0px' : '50px')});
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    will-change: opacity, transform;
`
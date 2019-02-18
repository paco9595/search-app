import styled from 'styled-components'
import { media } from '../utils'
export const SectionFlex = styled.section`
    display:flex;
    align-items: ${props => props.align ? props.align : 'center'}
    justify-content: ${props => props.justify ? props.justify : 'center'}
    ${props => props.bgColor ? 'background-color:' + props.bgColor : null}
    ${props => props.height ? 'height:' + props.height + 'px' : null}
    ${props => props.marign ? 'margin:' + props.marign : null}
    ${props => props.responsiveToBlock ? media.phone`display:block;` : null}

`

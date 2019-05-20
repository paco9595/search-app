import styled from 'styled-components'
import { media } from '../utils'
export const SectionFlex = styled.section`
    display: ${props => props.display ? props.display : 'flex'};
    align-items: ${props => props.align ? props.align : 'center'}
    justify-content: ${props => props.justify ? props.justify : 'center'}
    ${props => props.bgColor ? 'background-color:' + props.bgColor : null}
    ${props => props.height ? 'height:' + props.height + 'px' : null}
    ${props => props.heightPor ? 'height:' + props.height + '%' : null}
    ${props => props.width ? 'width:' + props.width + 'px' : null}
    ${props => props.vw ? 'width : ' + props.width : null}
    ${props => props.vh ? 'height : ' + props.height : null}
    ${props => props.margin ? 'margin:' + props.margin : null}
    ${props => props.bgImg ? 'background-image: url(' + props.bgImg + ');' : null}
    ${props => props.bgImg ? 'background-size: cover' : null}
    ${props => props.responsiveToBlock ? media[props.responsiveToBlock]`
        display:block;
        margin: auto;
    ` : null}
    ${props => props.shadow ? 'text-shadow: .3px .3px #ffffff;' : null}

`

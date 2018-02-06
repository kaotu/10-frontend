import styled from 'styled-components'

const Block = styled.div`
 {
	position:absolute;
	background: transparent;
  border: .1em solid #fff;
  padding: 1em;
	border-radius: 1em;
	width: 95%;
	margin-left : 0.1vw;
}
  :after, :before {
	bottom: 100%;
	left: ${props => props.left || '40%' };
  border: .1em solid #fff;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

:after {
	border-color: rgba(136, 183, 213, 0);
	border-bottom-color: #5F6164; 
	border-width: 1.8em;
  margin-left: -1.8em;
}
 :before {
	border-color: rgba(194, 225, 245, 0);
	border-bottom-color: #fff;
	border-width: 2em;
  margin-left: -2em;
}
`

export default Block

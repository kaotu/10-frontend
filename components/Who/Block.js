import styled from 'styled-components'

const Block = styled.div`
 {
	position:absolute;
	background: transparent;
  border: .1em solid #fff;
  padding: 1em;
	border-radius: 1em;
	margin-left : 0.1vw;
	width:40%;

	@media (min-width: 1024px) {
		width:34%;
	}
	@media (min-width: 1440px) {
		width:33%;
	}
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

import React from 'react'
import styled from 'styled-components'
import { purple, black } from '../lib/colors'
import { rgba } from 'polished'
import X from './icons/x-1rem.svg'
import Tabbable from './accessibility/tabbable'

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${props => props.color};
  z-index: 2;
`
const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -${props => props.height / 2}px;
  margin-left: -${props => props.width / 2}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${black};
  padding: 2rem;
  box-sizing: border-box;
  border: ${props => props.border && `2px solid ${purple}`};
  z-index: 3;
`
const Modal = ({ height, width, overlay, border, onClose, children }) => (
  <>
    <Overlay color={overlay} onClick={onClose} />
    <StyledModal height={height} width={width} border={border}>
      {children}
    </StyledModal>
  </>
)
Modal.defaultProps = {
  height: 700,
  width: 700,
  overlay: rgba(black, 0.7),
  border: true
}
const StyledClose = styled(X)`
  position: absolute;
  right: 1rem;
  top: 1rem;
`
export const Close = ({ ...props }) => (
  <Tabbable component={StyledClose} {...props} />
)

export default Modal

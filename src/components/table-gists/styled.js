import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  color: #4a4a4d;
  font: 14px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
`
export const Head = styled.thead`
  background: #395870;
  background: linear-gradient(#49708f, #293f50);
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
`

export const Th = styled.th`
  width: ${props => props.width ? props.width : "auto" };
  padding: 10px 15px;
  vertical-align: ${props => props.align ? props.align : "middle" };
`

export const Td = styled.td`
  padding: 10px 15px;
  vertical-align: middle;
`

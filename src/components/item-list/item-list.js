import styled from 'styled-components'

const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.color ? props.color : '#f1e7e7' };
  margin: 10px;
  align-items: center;
`

export default ItemList

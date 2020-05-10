import React from 'react'
import { Link } from 'react-router-dom'
import * as styled from './styled'
import spanishTexts from '../../modules/texts'
import { Image } from '../../components'

const TableGists = ({data}) => {
  if (data){
  return(
    <styled.Table>
      <styled.Head>
        <tr>
          <styled.Th scope="col" colSpan="2">{spanishTexts.nameAuthor}</styled.Th>
          <styled.Th width="70%" scope="col">{spanishTexts.description}</styled.Th>
          <styled.Th scope="col">{spanishTexts.createdAt}</styled.Th>
          <styled.Th scope="col">{spanishTexts.detail}</styled.Th>
        </tr>
      </styled.Head>
        <tbody>
          {data.map(item =>{
            return(
              <tr key={item.id}>
                <styled.Td><Image margin={5} size={50} src={item.author.image} alt="this is car image" /></styled.Td>
                <styled.Td>{item.author.name}</styled.Td>
                <styled.Td align="left">{item.description? item.description : "sin descripcion"}</styled.Td>
                <styled.Td>{item.createAt}</styled.Td>
                <styled.Td>
                  <Link
                  to={`/${item.id}`}
                >
                    {spanishTexts.more}
                </Link></styled.Td>
              </tr>
            )
          })
          }
        </tbody>
    </styled.Table>
  )
  }
  return <div>cargando...</div>
}

export default TableGists

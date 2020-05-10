import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, ItemList, Image } from '../../components'

const Detail = (props) => {
  const { detail } = props.match.params
  const dispatch = useDispatch()
  const data = useSelector(state => state.reducers.detail)

  useEffect(() => {
    dispatch({
      type: 'GET_GIST_DETAIL_REQUESTED',
      payload: { id: `${detail}` }
    })
  }, [dispatch, detail])

  const { owner } = data

  if (data.owner) {
    return (
      <Container>
        <ItemList>
          propietario foto: <Image size={50} src={owner.avatar_url}/>
        </ItemList>
        <ItemList>
          propietario nombre:
          <div>{owner.login}</div>
        </ItemList>
        <ItemList>
          description:
          <div>{data.description ? data.description : 'sin description'}</div>
        </ItemList>
        <ItemList>
          fecha creacion:
          <div>{data.created_at}</div>
        </ItemList>
        <ItemList>
          link a github:
          <a href={data.html_url}>{data.id}</a>
        </ItemList>
        <ItemList color="#d7f6c2">
          listado de links a archivos:
        </ItemList>
        <ItemList color="#d7f6c2">
          {data.files.map(item => {
              return (
                <ItemList color="white" key={item.raw_url}>- nombre del
                  archivo: <a
                    href={item.raw_url}>{' ' + item.filename}</a></ItemList>
              )
            }
          )
          }
        </ItemList>
      </Container>
    )
  }
  return <div>cargando</div>
}

export default Detail

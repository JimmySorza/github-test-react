import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {TableGists, Container} from '../../components'
import ReactPaginate from 'react-paginate';

const Home = () => {
  const [activePage, setActivePage] = useState(1)
  const [perPage, setPerPage] = useState(20)
  const [offset, setOffset] = useState(0)
  const gists = useSelector(state => state.reducers.gists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'GET_GISTS_REQUESTED',
      payload: {page: `${activePage}`}
    });
  }, [dispatch, activePage])

  const handlePageChange = (active) => {
    const selectedPage = active.selected+1;
    const newOffset = selectedPage * perPage;
    dispatch({
      type: 'GET_GISTS_REQUESTED',
      payload: {page: `${selectedPage}`}
    });
    setActivePage(selectedPage)
    setOffset(newOffset)
  }
  return(
    <Container>
      <TableGists data={gists} />
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={150}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange.bind(this)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}/>
    </Container>
  )
}

export default Home

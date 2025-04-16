import React from 'react'
import Row from '../Row/Row'
import requests from './../../../utils/request';

function Rowlist() {
  return (
    <>
      
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRate} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMov} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMov}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMov} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMov} />
        <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
        <Row title="Drama Movies" fetchUrl={requests.fetchDrama} />
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchScienceFiction} />
      {/* <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} /> */}
        <Row title="Docmentaries Movies" fetchUrl={requests.fetchDocmentaries}/>
      
    </>
  )
}

export default Rowlist

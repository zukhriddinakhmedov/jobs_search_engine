import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {Row, Col, Card } from "react-bootstrap"
import { removeFromFavouritesAction } from "../actions"
import { MdFavorite } from "react-icons/md"
// import { useSelector,useDispatch } from "react-redux"

const mapStateToProps = (state) => ({
    data: state.favourites.content,
})

const mapDispatchToProps = (dispatch) => ({
    removeFromFavouritesAction: (f) => {
        dispatch(removeFromFavouritesAction(f))
    }
})


const Favourites= ({data, removeFromFavouritesAction})=> {

useEffect(()=>{
    
})

return(
    <Row>
        <Col>
         {data &&
             data.map((f) => (
                 <Card style={{width: '18rem'}}>
                     <Card.Body>
                         <Card.Title>Company: {data.company_name}</Card.Title>
                     <MdFavorite 
                     color="red"
                     onClick={() =>removeFromFavouritesAction(f)} />
                     <span>{f}</span>
                     <Card.Subtitle>{data.category}</Card.Subtitle>
                     </Card.Body>
                 </Card>
             ))
         }
        </Col>
    </Row>
)
    }

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {Row, Col } from "react-bootstrap"
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
    console.log(data);
})

return(
    <Row>
        <Col>
         {data &&
             data.map((f) => (
                 <li>
                     <MdFavorite 
                     color="red"
                     onClick={() =>removeFromFavouritesAction(f)} />
                     <span>{f}</span>
                 </li>
             ))
         }
        </Col>
    </Row>
)
    }

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
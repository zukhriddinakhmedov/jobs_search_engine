import { connect } from "react-redux"
import {Row, Col } from "react-bootstrap"
import { removeFromFavouritesAction } from "../actions"
import React from "react"
import { MdFavorite } from "react-icons/md"
import favouritesReducer from "../reducers/favourites"

const mapDispatchToProps = (dispatch) => ({
    removeFromFavouritesAction: (f) => {
        dispatch(removeFromFavouritesAction(f))
    }
})

class Favourites extends React.Component {
    render(){
return(
    <Row>
        <Col>
         {
             this.props.favourites.content.map((f) => (
                 <li>
                     <MdFavorite onClick={() => this.props.removeFromFavouritesAction(f)} />
                 </li>
             ))
         }
        </Col>
    </Row>
)
    }
    }

export default connect((state) => state, mapDispatchToProps) (Favourites)
import React from 'react'
import {Row, Col, Button, Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import {MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md"
import { addToFavouritesAction, removeFromFavouritesAction } from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: function (jobToAdd){
        dispatch(addToFavouritesAction(jobToAdd))
    },
    removeFromFavourites: function(indexToRemove) {
        dispatch(removeFromFavouritesAction(indexToRemove))
    }
})

 function Job({data, favourites, addToFavourites, removeFromFavourites}) {
    
   //const ifFavourite = favourites.content.includes(data.company_name)
    console.log("This is favourites",  favourites)
    // const toggleFavourite = () => {
    // //     ifFavourite
    // //     ? removeFromFavourites(data.company_name)
    // //     : addToFavourites(data.company_name)
    // // }
     return (
        <Container>
            {/* <Row>
                <Col style={{marginTop: "3px"}}>
                <Card border="info" >
            <Col xs={3}><b>Company: {''}</b>
                <Link to={`/${data.company_name}`}><b>{data.company_name}</b></Link>
            </Col>
            <Col xs={9}> Role: {''}
            <a href={data.url} target='_blank' rel="noreferrer">
                 {data.title}
                </a>
                 <Col xs={3} className="d-flex">
                {
                  ifFavourite ? (
                    <MdFavorite
                    color="red"
                    size={22}
                    onClick={toggleFavourite}
                    />
                    
                  ) : (
                    <MdOutlineFavoriteBorder 
                    color="red"
                    size={22}
                    onClick={toggleFavourite}
                    />   
                  )
                }
                    </Col>
            </Col>
            
            </Card>
            </Col>
            </Row> */}
            </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Job)
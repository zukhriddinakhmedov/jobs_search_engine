import React from 'react'
import {Row, Col, Button, Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import {MdFavorite} from "react-icons/md"
import { addToFavouritesAction } from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: function (jobToAdd){
        dispatch(addToFavouritesAction(jobToAdd))
    }

})

 function Job({data, content, addToFavourites, removeFromFavourites}) {
    
    const ifFavourite = content.includes(data.company_name)
    const toggleFavourite = () => (
        ifFavourite
        ? addToFavourites(data.company_name)
        : removeFromFavourites(data.company_name)
    )



    return (
        <Container>
            <Row>
                <Col style={{marginTop: "3px"}}>
                <Card border="info" >
            <Col xs={3}><b>Company: {''}</b>
                <Link to={`/${data.company_name}`}><b>{data.company_name}</b></Link>
            </Col>
            <Col xs={9}> Role: {''}
            <a href={data.url} target='_blank' rel="noreferrer">
                 {data.title}
                </a>
                <Button style={{ display: 'flex', justifyContent: 'flex-end'}}
                onClick={() => data.addToFavourites(this.content)} >
                       {
                           ifFavourite 
                           ? <MdFavorite onClick={toggleFavourite}/>
                           : <MdFavorite onClick={toggleFavourite}/>
                       }
                </Button>
            </Col>
            
            </Card>
            </Col>
            </Row>
            </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Job)
import React from 'react'
import {Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Job({data}) {
    return (
            <Row>
            <Col xs={3}>
                <Link to={`/${data.company_name}`}><b>{data.company_name}</b></Link>
            </Col> 
            <Col xs={9}> 
            <a href={data.url} target='_blank' rel="noreferrer">
                {data.title}
                </a>
            </Col>
            </Row>
    )
}
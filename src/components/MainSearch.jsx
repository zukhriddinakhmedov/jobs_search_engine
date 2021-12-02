import  {Component} from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import uniqid from "uniqid"
import Job from "./Job"
import { Link} from 'react-router-dom';


class MainSearch extends Component {

    state = {
        query: "",
        jobs : []
    } 

     url = "https://strive-jobs-api.herokuapp.com/jobs?search="

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }
    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(this.url + this.state.query)

        if(!response.ok) {
            alert('Error while getting the jobs')
            return
        }
        const {data} = await response.json()
        
        console.log({data})
        this.setState({ jobs: data })
    }
    render() {
        return (
     <Container className="mx-auto my-2">
         <Row>
        <Col xs={10} className='mx-auto'>
        <Form onSubmit={this.handleSubmit}>
            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder="search..."/>
        </Form>
        </Col>
        <Col xs={ 10} className='mx-auto'>
        {
            this.state.jobs.map(jobData => <Job key={uniqid()} data={jobData} />)
            
        }
        </Col>
         </Row>
     </Container>
        )
    }
}

export default MainSearch
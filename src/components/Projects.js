import { Container, Row, Col } from 'react-bootstrap'

export default function Projects () {


  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 4',
      description: 'This is a description of project 4',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 5',
      description: 'This is a description of project 5',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 6',
      description: 'This is a description of project 6',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com'
    },
  ]

  return (
    <section className='projects' id='projects'>
      <Container className='projects-container'>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my projects</p>
            
          </Col>
        </Row>

      </Container>
    </section>
  )
}
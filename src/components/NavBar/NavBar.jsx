import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { useRef } from 'react';
const NavBar = ({logo , items, btn}) => {
    const nav = useRef (null)
    window.addEventListener("scroll" , ()=>{
      if (window.scrollY > 50){
        nav.current.style.background = "white"
      }else{
        nav.current.style.background = "none"
      }
    })
  return (      
    <Navbar ref={nav} expand="lg" className="bg-body-tertiary" fixed='top'>
    <Container fluid className='d-flex justify-content-evenly'>
      <Navbar.Brand   href="#" className='d-flex align-items-center fs-3'> <img src={logo?.img} alt="" style={{width:"100px", height:"30px"}}/> <h1>{logo?.text}</h1> </Navbar.Brand>
      
   <div className='order-md-3 d-flex gap-3'>
   <Button variant="primary" className='bg-my-primary '>{btn}</Button>{' '}
      <Navbar.Toggle aria-controls="navbarScroll" />
   </div>
 
      <Navbar.Collapse id="navbarScroll" className='flex-grow-0 gap-4'>
        <Nav
          className="me-auto my-2 my-lg-0 gap-4"
          style={{ maxHeight: '100px' }}
          navbarScroll
          
        >
               {items?.map((element , index)=>{
            return(
                <Nav.Link key={index} href={`#${element?.id}`}>{element?.name}</Nav.Link>
            )
          })}
         
       

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      )
    }
    
export default NavBar
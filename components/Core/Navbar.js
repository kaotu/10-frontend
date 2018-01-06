import React from 'react'
import styled from 'styled-components'

const Item = styled.nav`
    color: #b8b7ad;
    background-color: #002D40;
    padding-top: 1.5em;
    &:hover{
        color: #c94e50;
    }
    @media(max-width: 720px) {
        padding : 0em;
    }
    `
const LinkItem = styled.a`
color: #b8b7ad;
padding: 0.7vw 2.7vw;
&:hover{
    color: white;
    text-decoration:none;
    background-color: #506872;
    border: none;
    color: white;
    padding: 0.7vw 2.7vw;
}
`
const Navbar = () => (
    <Item>
        <nav class="navbar navbar-expand-lg navbar-light ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav justify-content-center">
                    <LinkItem class="nav-item nav-link btn btn-dark" href="#">Home</LinkItem>
                    <LinkItem class="nav-item nav-link btn btn-dark" href="#">What</LinkItem>
                    <LinkItem class="nav-item nav-link btn btn-dark" href="#">Who</LinkItem>
                    <LinkItem class="nav-item nav-link btn btn-dark" href="#">When</LinkItem>
                    <LinkItem class="nav-item nav-link btn btn-dark" href="#">Where</LinkItem>
                    <LinkItem class="nav-item nav-link btn btn-dark" href="#">FAQs</LinkItem>
                    <LinkItem class="nav-item nav-link btn btn-dark" href="#">Contact</LinkItem>
                                        
                </div>
            </div>
        </nav>
    </Item>
)
export default Navbar;
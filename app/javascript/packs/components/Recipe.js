import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Card = styled.div `
  border: 1px solid #efefef;
  background: #fff;
`

const RecipeLogo = styled.div `
  height: 100px;
  img {
    height: 170px;
    width: 300px;
  }
`

const RecipeName = styled.div `
  padding: 80px 0 10px 0;
`

const LinkWrapper = styled.div `
  margin: 30px 0 20px 0;
  height:50px;
  a {
    color: #fff;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;
    &:hover{
      border-color: #619a07;
      background: #619a07;
    }
  }
`

const Recipe = (props) => {

    return (
        <Card>
      <RecipeLogo>
        <img src={props.image_url} alt={props.title} width="50"/>
      </RecipeLogo>
      <RecipeName>
        {props.title}
      </RecipeName>
      <LinkWrapper>
        <Link to={"/recipes/" + props.id}>View Recipe</Link>
      </LinkWrapper>
    </Card>
    )
}

export default Recipe
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
import styled from 'styled-components'


const Home = styled.div `
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/recipes.json')
            .then(resp => setRecipes(resp.data))
            .catch(data => console.log('error', data))
    }, [])

    const grid = recipes.map((recipe, index) => {
        return (
            <Recipe 
        key={index}
        title={recipe.title}
        image_url={recipe.url}
        id={recipe.id}
      />
        )
    })

    return (
        <Home>
      <Grid>{grid}</Grid>
    </Home>
    )
}

export default Recipes
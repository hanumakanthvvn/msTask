import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Recipe = (props) => {
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const id = props.match.params.id
        axios.get('/api/v1/recipes/' + id)
            .then((resp) => setRecipe(resp.data))
            .catch(data => console.log('Error', data))
    }, [])



    return (

        <main role="main">
      <section class="jumbotron text-center">
         <div class="container">
            <p class="lead text-muted">Recipe View</p>
         </div>
      </section>
      <div class="col-md-4">
         <div class="card mb-4 box-shadow">
            <img src={recipe.url} alt="image" class="card-img-top" />
            <div class="card-body">
               <p class="card-text"><b>{recipe.title}</b></p>
               <p class="card-text"><b>About:</b>{recipe.description}</p>
               <div class="d-flex justify-content-between align-items-center">
                  <b>Tags</b>
                  <div class="btn-group">
                     <a href='#' class="btn btn-sm btn-outline-secondary">{recipe.tags}</a>  
                  </div>
               </div>
               <div class="d-flex justify-content-between align-items-center">
                  <b>Chef</b>
                  <div class="btn-group">
                     <a href="#" class="btn btn-sm btn-outline-secondary">{recipe.chef}</a>
                  </div>
                </div>
               </div>
            </div>
       </div>
</main>
    )


}

export default Recipe
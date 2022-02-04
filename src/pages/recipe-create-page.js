import React, { useState, useEffect } from "react";

import RecipeForm from "../recipes/recipe-form";

const RecipeCreatePage = (props) => {
    return (
        <div className="recipe-page-wrapper">
            <RecipeForm />
        </div>
    );
};

export default RecipeCreatePage;

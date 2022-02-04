import React from "react";
import axios from "axios";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

import NumberInput from "../form-components/number-input";
import TextInput from "../form-components/text-input";

const RecipeForm = (props) => {
    return (
        <Formik
            initialValues={{
                name: "",
                ingredients: [""],
                instructions: [],
                servings: "",
                image: "",
                time: {
                    prep: "",
                    cook: "",
                    active: "",
                    inactive: "",
                    ready: "",
                    total: "",
                },
            }}
            onSubmit={(values) => {
                console.log(values);
                axios
                    .post(`https://courtneys-chaotic-cookbook-api.herokuapp.com/recipe/add`, {
                        values,
                    })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => console.log(error.response));
            }}
        >
            {(props) => {
                const { values } = props;
                return (
                    <Form>
                        <NumberInput
                            label="Recipe name"
                            name="name"
                            divclass="form-input-wrapper"
                        />
                        <FieldArray name="ingredients">
                            {({ remove, push }) => {
                                return (
                                    <div className="array-wrapper">
                                        {values.ingredients.map((ingredient, index) => {
                                            return (
                                                <div
                                                    key={`ingredient-${index}`}
                                                    className="ingredient-wrapper"
                                                >
                                                    <TextInput
                                                        label={`Ingredient ${index + 1}`}
                                                        name={`ingredients.${index}`}
                                                        divclass="ingredient-input"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => remove(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            );
                                        })}
                                        <button type="button" onClick={() => push("")}>
                                            Add ingredient
                                        </button>
                                    </div>
                                );
                            }}
                        </FieldArray>
                        Instructions
                        <FieldArray name="instructions">
                            {({ remove, push }) => {
                                return (
                                    <div className="array-wrapper">
                                        {values.instructions.map((instruction, index) => {
                                            return (
                                                <div
                                                    key={`instruction-${index}`}
                                                    className="instruction-wrapper"
                                                >
                                                    <TextInput
                                                        label=""
                                                        name={`instructions.${index}`}
                                                        divclass="instruction-input"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => remove(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            );
                                        })}
                                        <button type="button" onClick={() => push("")}>
                                            Add Instruction
                                        </button>
                                    </div>
                                );
                            }}
                        </FieldArray>
                        <NumberInput
                            label="Servings"
                            name="servings"
                            divclass="form-input-wrapper"
                        />
                        <TextInput label="Image URL" name="image" divclass="form-input-wrapper" />
                        <NumberInput
                            label="Prep time"
                            name="time.prep"
                            divclass="form-input-wrapper"
                        />
                        <NumberInput
                            label="Cook time"
                            name="time.cook"
                            divclass="form-input-wrapper"
                        />
                        <NumberInput
                            label="Active time"
                            name="time.active"
                            divclass="form-input-wrapper"
                        />
                        <NumberInput
                            label="Inactive time"
                            name="time.inactive"
                            divclass="form-input-wrapper"
                        />
                        <NumberInput
                            label="Ready time"
                            name="time.ready"
                            divclass="form-input-wrapper"
                        />
                        <NumberInput
                            label="Total time"
                            name="time.total"
                            divclass="form-input-wrapper"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default RecipeForm;

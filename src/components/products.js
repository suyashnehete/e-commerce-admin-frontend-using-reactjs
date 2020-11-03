import React, {useState, useEffect} from "react";
import { List, Datagrid, TextField, ImageField, RichTextField, ImageInput, TextInput, NumberInput, NumberField, Create, SimpleForm, Edit, required, EditButton, SelectInput, DeleteButton } from 'react-admin';
import axios from 'axios';

export const ProductList = props => (
    <List {...props}>
        <Datagrid>
            <ImageField source="image" />
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="category" />
            <NumberField source="price" />
            <NumberField source="stock" />
            <RichTextField source="description" />
            <EditButton basePath="/products"/>
            <DeleteButton basePath="/products"/>
        </Datagrid>
    </List>
);

export const ProductCreate = (props) => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        
        async function getCategory() {
            const result = await axios.get("/api/category");
            
            setCategory(result.data);
            console.log(setCategory(result.data));

            console.log(category)

            return result;
        }

        getCategory();

        return () => {
            
        }
    }, [])

    return (
        <Create {...props}>
            <SimpleForm>
                <ImageInput source="image" label="Product Image" accept="image/*" multiple={false} validate={required()} >
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput source="name" validate={required()} />
                <SelectInput source="category" choices={category} optionText="name" optionValue="name" />
                <NumberInput source="price" validate={required()} />
                <NumberInput source="stock" validate={required()} />
                <TextInput source="description" multiline validate={required()} />
            </SimpleForm>
        </Create>
    )
};

export const ProductEdit = (props) => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        
        async function getCategory() {
            const result = await axios.get("/api/category");
            
            setCategory(result.data);

            return result;
        }

        getCategory();

        return () => {
            
        }
    }, [])

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="id" disabled />
                <ImageField source="image" title="Product Image" />
                <TextInput source="name" validate={required()} />
                <SelectInput source="category" choices={category} optionText="name" optionValue="name" />
                <NumberInput source="price" validate={required()} />
                <NumberInput source="stock" validate={required()} />
                <TextInput source="description" multiline validate={required()} />
            </SimpleForm>
        </Edit>
    )
};
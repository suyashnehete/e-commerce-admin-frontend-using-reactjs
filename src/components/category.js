import * as React from "react";
import { List, Datagrid, TextField, TextInput, Create, SimpleForm, Edit, required, EditButton } from 'react-admin';

export const CategoryList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton basePath="/Category"/>
        </Datagrid>
    </List>
);

export const CategoryCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
        </SimpleForm>
    </Create>
);

export const CategoryEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" validate={required()}/>
        </SimpleForm>
    </Edit>
);
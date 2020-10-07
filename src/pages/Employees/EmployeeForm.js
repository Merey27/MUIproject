import {  Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import {useForm, Form} from '../../components/useForm';
import Controls from "../../components/controls/Controls";
import * as employeeService from "./../../Services/employeeService";


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
]

const initialFValues = {
    id: 0,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false,

}


export default function EmployeeForm() {
    

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);


    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input 
                        name="fullName"
                        label="Full name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        size="small"
                        onChange={handleInputChange}
                        name="email"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                    name="departmentId"
                    label="Department"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={employeeService.getDepartmentCollection()}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}

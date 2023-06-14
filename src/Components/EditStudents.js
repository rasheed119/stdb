import React from 'react';
import Base from '../Base/Base';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { studentvaliationschema } from './AddStudents';


function EditStudents({ student, setstudent }) {

    const {id} = useParams();

    const studentdata = student.find(stud => stud.id === id);

    console.log(studentdata);

    const navigate = useNavigate();

    const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
      initialValues:{
        name: studentdata.name,
        batch : studentdata.batch,
        gender : studentdata.gender,
        qualification : studentdata.qualification
      },validationSchema : studentvaliationschema,
      onSubmit : (updatedstudent)=>{
        updatestudent(updatedstudent);
      }
    })
    const updatestudent = async(updatedstudent)=>{
        const responce = await fetch(`https://644e27f41b4567f4d580f5c6.mockapi.io/users/${id}`,{
            method : "PUT",
            body : JSON.stringify(updatedstudent),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const data = await responce.json();

        if(data){
            student[id] = data;
            setstudent([...student]);
        }
        navigate("/")
    }

  return (
    <>
     <Base>
        <Container fixed>
        <div className='outer'>
            <div className='container'>
            <Typography variant="h4" sx={{ m:3 , fontFamily : "roboto"}} gutterBottom>
                Edit Student
            </Typography>
            <form onSubmit={handleSubmit}>

            <TextField
            sx={{m:2}}
            style={{width : 300}}
            type='text'
            name='name'
            id="filled-required"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Name"
            variant="filled"
            />
            {touched.name && errors.name ? 
            <div style={{color:"crimson"}}>
            {errors.name}
            </div>
            :
            ""
            }

            <TextField
            sx={{m:2}}
            style={{width : 300}}
            id="filled-required"
            value={values.batch}
            label="Batch"
            variant="filled"
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            name='batch'
            />
            {touched.batch && errors.batch ? 
            <div style={{color:"crimson"}}>
            {errors.batch}
            </div>
            :
            ""
            }

            <TextField
            sx={{m:2}}
            style={{width : 300}}
            type='text'
            id="filled-required"
            value={values.qualification}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Qualification"
            variant="filled"
            name='qualification'
            />
            {touched.qualification && errors.qualification ? 
            <div style={{color:"crimson"}}>
            {errors.qualification}
            </div>
            :
            ""
            }

            <TextField
            sx={{m:2}}
            style={{width : 300}}
            id="filled-required"
            type='text'
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Gender"
            variant="filled"
            name='gender'
            />
            {touched.gender && errors.gender ? 
            <div style={{color:"crimson"}}>
            {errors.gender}
            </div>
            :
            ""
            }

            <Button variant="contained" sx={{my : 2}} color="success" type='submit'>
            Submit
            </Button>
            </form>
            </div>
        </div>
        </Container>
    </Base>
    </>
  )
}

export default EditStudents;
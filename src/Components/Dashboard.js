import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Base from '../Base/Base'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function Dashboard({student, setstudent}) {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const deletestudent = async(studidx)=>{
    
    const responce = await fetch(`https://644e27f41b4567f4d580f5c6.mockapi.io/users/${studidx}`,{
      method : "DELETE"
    })
    const data = await responce.json();


    if(data){
      const remainingstudent = student.filter((stdobj,idx)=> stdobj.id !== studidx);
      setstudent(remainingstudent);
    }
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Base>
        <React.Fragment>
          <CssBaseline />
            <Container fixed>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 12 }}>
                  {student.map((obj,index)=>(
                  <Grid item xs={2} sm={4} md={4} >
                    <Card sx={{ minWidth: 275, m :5, ":hover" : { boxShadow : 20 },textAlign : "center" }} key={index} >
                      <CardContent>
                        <Typography sx={{ fontSize:17 }} color="text.primary" variant="h5" gutterBottom>
                          Name : {obj.name}
                        </Typography>
                        <Typography sx={{ fontSize:17 }} color="text.primary" variant="h5" gutterBottom>
                          Qualification : {obj.qualification}
                        </Typography>
                        <Typography sx={{ fontSize:17 }} color="text.primary" variant="h5" gutterBottom>
                          Batch : {obj.batch}
                        </Typography>
                        <Typography sx={{ fontSize:17 }} color="text.primary" variant="h5" gutterBottom>
                          Gender : {obj.gender}
                        </Typography>
                      </CardContent>
                      <div>
                        <Button variant="outlined" color="error" sx={{m:2}} onClick={()=>deletestudent(obj.id)} >
                          Delete
                        </Button>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Student Deleted Successfully
                          </Alert>
                       </Snackbar>
                        <Button variant="outlined" color="success" sx={{m:2}} onClick={()=>navigate(`/editstudents/${obj.id}`)} >
                          Edit
                        </Button>
                      </div>
                   </Card>
                  </Grid>
                  ))}
                </Grid>
             </Box>
            </Container>
        </React.Fragment>
      </Base>
    </>
  )
}

export default Dashboard;
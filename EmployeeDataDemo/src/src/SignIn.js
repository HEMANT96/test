import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default class SignIn extends React.Component {
  render(){
  const classes = useStyles();{
  state = {
    Login:[],
     Addinng:{
       row_id:0,
       login_id:'',
       password:'',
       login_type:''
     }
      }
}  


    
getEmployee = _ => {
  fetch('http://localhost:4002/Login')         
  .then(response => response.json())
   .then(response => this.setState({ Employee:response.data }))
   .catch(err => console.error(err))
}

addAdding = _ => {
  const {Adding} = this.state;
  console.log(this.state);
  console.log(this.state.Adding.row_id)
  fetch(`http://localhost:4002/Login/add?row_id=${Adding.row_id}&emp_id=${Adding.Login_id}&emp_name=${Adding.emp_name}&emp_dob=${Adding.emp_dob}&emp_designation=${Adding.emp_designation}&emp_email=${Adding.emp_email}&emp_ctc_current=${Adding.emp_ctc_current}&emp_total_experience=${Adding.emp_total_experience}&emp_in_comp_experience=${Adding.emp_in_comp_experience}&emp_joining_date=${Adding.emp_joining_date}&emp_relieving_date=${Adding.emp_relieving_date}&emp_mobile=${Adding.emp_mobile}&emp_residence_address=${Adding.emp_residence_address}&emp_permanent_address=${Adding.emp_permanent_address}&emp_pan=${Adding.emp_pan}&emp_aadhar=${Adding.emp_aadhar}&emp_father_name=${Adding.emp_father_name}&emp_mother_name=${Adding.emp_mother_name}&emp_siblings=${Adding.emp_siblings}&emp_religion=${Adding.emp_religion}&emp_current_project=${Adding.emp_current_project}&emp_account_bank=${Adding.emp_account_bank}&emp_account_pf=${Adding.emp_account_pf}`)
  .then(response => response.json())
  .then(this.getEmployee)
  .catch(err => console.error(err))
  console.log(this.state.Adding.row_id)    }

renderAdding = ({row_id,login_id,password,login_type }) => <div key={row_id }>{login_id}</div>
const { Login, Adding } = this.state;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />  

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In  
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}
}
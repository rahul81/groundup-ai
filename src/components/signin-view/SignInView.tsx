import { Container, CssBaseline, Avatar, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { loginActionCreators } from '../../store/action-creators';
import './sign-in.scss';
import SignInForm, { SignInFormFields } from './sign-in-form/SignInForm';
import { RootState } from '../../store/reducers';
import { useEffect } from 'react';

export default function SignInView() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loginUser } = bindActionCreators(loginActionCreators, dispatch)
    const {status} = useSelector((state:RootState )=> state.login);

    useEffect(() => {
        if(status=='success'){
            history.push("/home");
        }
    }, [status]);

    const handleSubmit = (data: SignInFormFields) => {
        const {email, password} = data;
        if(email && password){
            loginUser(email, password);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className="main-container">
                <Avatar sx={{ m: 3, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h3">
                    Sign in
                </Typography>
                <SignInForm handleSubmit={handleSubmit}/>
                {status=='failed' && <Typography variant='error'> Failed to login. Please check Username and Password</Typography>}
            </Box>
        </Container>
    )
}

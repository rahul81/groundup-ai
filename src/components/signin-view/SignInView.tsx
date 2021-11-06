import { Container, CssBaseline, Avatar, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { loginActionCreators } from '../../store/action-creators';
import './sign-in.scss';
import SignInForm, { SignInFormFields } from './sign-in-form/SignInForm';

export default function SignInView() {
    const dispatch = useDispatch();
    const { loginUser } = bindActionCreators(loginActionCreators, dispatch)
    const history = useHistory();

    const handleSubmit = (data: SignInFormFields) => {
        const {email, password} = data;
        if(email && password){
            loginUser(email, password);
        }
        history.push("/home");
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
            </Box>
        </Container>
    )
}

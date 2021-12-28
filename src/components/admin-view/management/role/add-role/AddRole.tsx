import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import RoleFormValidation from './RoleFormValidation'
import { Grid, InputLabel } from '@mui/material'
import { Box } from '@mui/system';
import GCheckbox from '../../../../common/checkobx/GCheckbox';
import { priviledgesActionCreators } from '../../../../../store/action-creators';
import { priviledgesState } from '../../../../../store/reducers/priviledgesReducer';
import { RootState } from '../../../../../store/reducers';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

interface RoleFormFields {
    role: string;
}

interface AddRoleProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}

interface CheckBoxFields {
    id: string;
    label: string;
}


export default function AddRole({ open, showDialog, handleSubmit }: AddRoleProps) {
    const dispatch = useDispatch();
    const { getPriviledges } = bindActionCreators(priviledgesActionCreators, dispatch)
    const { priviledges, priviledgesError, priviledgesLoading }: priviledgesState = useSelector((state: RootState) => state.priviledges);

    const [allPriviledges, setPriviledges] = useState<CheckBoxFields[]>([]);
    const tempPriviledges: CheckBoxFields[] = []

    useEffect(() => {
        getPriviledges()
    }, [])

    
    useEffect(() => {
        console.log(priviledges);
        (priviledges || []).map((priviledge, index) => {
            tempPriviledges.push(
                { id: priviledge['_id'], label: priviledge['name'] }
            )
        })
        setPriviledges(tempPriviledges)
    }, [priviledges])

    const initialValues: RoleFormFields = {
        role: '',
    };

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: RoleFormValidation,
        onSubmit: (data) => {
            console.log(data)
            handleSubmit(data)
        },
    });

    return (
        <GDialog size='large'  title="Role Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<RoleFormFields> formik={formik} id="role" label="User Role" />
                <InputLabel id="notification">Notification</InputLabel>
                <Grid xs={12} container>

                    {allPriviledges.map((item, index) => {
                        return (
                            <Grid xs={6}>
                                <Box className="item">
                                    <GCheckbox
                                        selected={item.id}
                                        formik={formik}
                                        id={item.id}
                                        label={item.label} />
                                </Box>
                            </Grid>
                        )
                    })}

                </Grid>
            </form >
        </GDialog >
    )
}

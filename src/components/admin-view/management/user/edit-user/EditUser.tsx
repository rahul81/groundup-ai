import { Formik, useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import GDialog from '../../../../common/dialog/GDialog'
import { GFormInput } from '../../../../common/input/GInput'
import { GFormSelect } from '../../../../common/select/GSelect'
import { UserManagementRowsTypes } from '../UserManagement'

interface EditUserProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
    editUserData: any;
}

interface UserFormFields {
    username: any;
    email: any;
}

const EditUser = ({ open, showDialog, handleSubmit, editUserData }: EditUserProps) => {
    console.log(editUserData)

    const [EditUserDataState, setEditUserDataState] = useState<UserFormFields>({
        username: 'any',
        email: 'any'
    })

    const initialState = {
        username: editUserData?.username || '',
        email: editUserData?.email || '',
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: () => {
            console.log("ASS")
        },
        validateOnChange: false,
    })
    return (
        <>
            {console.log(editUserData)}
            <GDialog title="Edit User" open={open} showDialog={showDialog}>
                <form id="request-new-form" className="groundup-form" >
                    <GFormInput<UserFormFields> formik={formik} id="username" label="User Name" />
                    <GFormInput<UserFormFields> formik={formik} id="email" label="Email" />
                </form >
            </GDialog >
        </>
    )
}

export default EditUser

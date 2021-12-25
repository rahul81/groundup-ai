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
    username: string;
    email: string;
}

const EditUser = ({ open, showDialog, handleSubmit, editUserData = { username: '', email: '' } }: EditUserProps) => {

    const initialState = {
        username: editUserData.username,
        email: editUserData.email,
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: () => {
            console.log("Absfas")
        },
        validateOnChange: false,
    })
    return (
        <>
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

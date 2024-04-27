import * as yup from 'yup';

const initialValues = {
    email: '',
    password: ''
}

export const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required()
})
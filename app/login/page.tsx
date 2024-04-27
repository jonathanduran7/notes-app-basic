'use client'

import { Form, Formik } from "formik"
import { schema } from "./schema/schema";
import { useContext } from "react";
import { AuthContext } from "../context/auth/auth.context";

export default function Login() {

    const { login } = useContext(AuthContext);

    const handleSubmit = (values: { email: string, password: string }) => login(values.email, values.password)

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            </div>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={schema}
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        <div className="mt-4">
                            <div className="w-72">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Ingrese su email"
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200" />
                            </div>
                            {errors.email && touched.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                            {errors.password && touched.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
                            >
                                Ingresar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
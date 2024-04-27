import { Form, Formik } from "formik";
import { initialValues, schema } from "../schema";
import { Note } from "../page";
import CustomInput from "@/app/components/input";
import { useNotes } from "../hooks";

export const FormNotes = () => {

    const { addNote } = useNotes()

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => { addNote(values); actions.resetForm() }}
                validationSchema={schema}
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form className="flex flex-col gap-2">
                        <div>
                            <CustomInput
                                name="title"
                                type="text"
                                value={values.title}
                                placeholder="Ingrese el titulo de la nota"
                                errors={errors}
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <CustomInput
                                name="content"
                                type="text"
                                value={values.content}
                                placeholder="Ingrese el contenido de la nota"
                                errors={errors}
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
                            >
                                Guardar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
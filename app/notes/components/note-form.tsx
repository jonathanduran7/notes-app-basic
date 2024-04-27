import { Form, Formik } from "formik";
import { initialValues, schema } from "../schema";
import { Note } from "../page";

interface Props {
    addNote: (note: Omit<Note, "id">) => void
}

export const FormNotes = ({ addNote }: Props) => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => { addNote(values); actions.resetForm() }}
                validationSchema={schema}
                onReset={() => console.log('reset')}
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form className="flex flex-col gap-2">
                        <div>
                            <div className="w-72">
                                <input
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                    placeholder="Ingrese el titulo de la nota"
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200" />
                            </div>
                            {errors.title && touched.title && <div className="text-red-500 text-xs mt-1">{errors.title}</div>}
                        </div>
                        <div>
                            <div className="w-72">
                                <input
                                    type="text"
                                    name="content"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.content}
                                    placeholder="Ingrese el contenido de la nota"
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200" />
                            </div>
                            {errors.content && touched.content && <div className="text-red-500 text-xs mt-1">{errors.content}</div>}
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
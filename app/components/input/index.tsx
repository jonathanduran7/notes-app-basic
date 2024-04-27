interface ICustomInput {
    type: string;
    name: string;
    value: string;
    placeholder?: string;
    errors?: any;
    touched?: any;
    // add any props
    [x: string]: any; 
}

export default function CustomInput({ type, name, value, placeholder, errors, touched, ...props }: ICustomInput) {
    return (
        <div>
            <input
                {...props}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200" />
            {errors.title && touched.title && <div className="text-red-500 text-xs mt-1">{errors.title}</div>}
        </div>
    )
}
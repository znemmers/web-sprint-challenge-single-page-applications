import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'Username must be at least 2 characters'),
    size: yup
    ,
    topping1: yup
    ,
    topping2: yup
    ,
    topping3: yup
    ,
    topping4: yup
    ,
    topping5: yup
    ,
    special: yup
        .string()
        .trim()
        .max(200, 'maximum 200 characters')
 })

export default formSchema; 
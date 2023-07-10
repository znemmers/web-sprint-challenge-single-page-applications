import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
    ,
    topping1: yup
       .string()
    ,
    topping2: yup
        .string()
    ,
    topping3: yup
        .string()
    ,
    topping4: yup
        .string()
    ,
    topping5: yup
        .string()
    ,
    special: yup
        .string()
        .trim()
        .max(200, 'maximum 200 characters')
 })

export default formSchema; 
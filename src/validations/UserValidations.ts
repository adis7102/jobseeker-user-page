import * as yup from 'yup';
import { phoneRegExp } from '@/vars/vars';


export const userSchema = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid!').required(),
  website: yup.string().required(),
  address: yup.object({
    street: yup.string().required(),
    suite: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup.string().required(),
  }),
  company: yup.object({
    name: yup.string().required(),
    catchPhrase: yup.string().required(),
    bs: yup.string().required(),
  }),
}) 
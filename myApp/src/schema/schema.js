import * as yup from "yup";

export const basicSchema = yup.object().shape({
    name: yup.string().required("Bu alan zorunlu!").min(3, "En az 3 karekter girin!"),
    email: yup.string().email("Email formatında girin!").required("Bu alan zorunlu!"),
    message: yup.string().required("Bu alan zorunlu!").min(5,"En az 5 karekter girin!")
})
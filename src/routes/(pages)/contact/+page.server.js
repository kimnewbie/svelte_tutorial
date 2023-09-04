import { fail } from "@sveltejs/kit";
import { object, string, number, date, InferType } from "yup";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // yup 추가
        const contactFormSchema = object({
            name: string().min(2, "too short").required("We only accept named users"),
            email: string().required().email(),
            message: string().required(),
        });

        try {
            const result = await contactFormSchema.validate(
                { name, email, message },
                { abortEarly: false }
            );

            const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSesoJj6WIq5Hpm0OPxdIA8Wu_5UVWTURQyLVwFvFsxrEPBbyg/formResponse?usp=pp_url&entry.1247640065=${name}&entry.1682085500=${email}&entry.239231353=${message}&submit=Submit`;

            const res = await fetch(prefilledLink);

            return {
                success: true,
                status: "Form is submitted",
            };

        } catch (error) {
            console.log({ error });
            const errors = error.inner.reduce((acc, err) => {
                return { ...acc, [err.path]: err.message };
            }, {});

            return {
                errors,
                name,
                email,
                message,
            };
        }

        /**
         *  yup 추가하기 전에 사용 
         * 
            if (!name) return fail(400, { errors: 'name is missing', email, message });
            if (!email) return fail(400, { errors: 'email is missing', name, message });
            if (!message) return fail(400, { errors: 'message is missing', email, name });
         */

        return {
            success: true,
            status: "Form is submitted."
        }
    }
}
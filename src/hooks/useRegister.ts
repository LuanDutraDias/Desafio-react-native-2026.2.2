import { useState } from "react";
import { register } from "@/services/auth";
import { isAxiosError } from "axios";
import { router } from "expo-router";

type RegisterErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirmedPassword?: string;
  general?: string;
};

export function useRegister() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [registering, setRegistering] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [errors, setErrors] = useState<RegisterErrors>({});
    const [showModal, setShowModal] = useState(false);
    const [validatePasswordRequirements, setValidatePasswordRequirements] = useState({
        length: false,
        number: false,
        case: false,
        simbol: false,
    })
    
    function validateRegisterForm(name: string, email: string, password: string, confirmedPassword: string): RegisterErrors {
        const errors: RegisterErrors = {};

        if (!confirmedPassword.trim() && password.trim()){
          errors.confirmedPassword = "Confirmar a senha é obrigatório";
        } else if (password !== confirmedPassword){
            errors.confirmedPassword = "As senhas não coincidem";
        }

        if (!name.trim()) {

            errors.name = "O nome de usuário é obrigatório";
        }

        if (!email.trim()) {
            errors.email = "O email é obrigatório";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Informe um email válido";
        }
        
        if (!password.trim()) {
          errors.password = "A senha é obrigatória";
        }
        else if(!Object.values(validatePasswordRequirements).every(Boolean)){
          errors.password = "A senha não atende aos requisitos mínimos";
        }
        
        return errors;
    }

    function handleChangeName(text: string) {
        setName(text);
        if (errors.name || errors.general) {
        setErrors((prev) => ({ ...prev, name: undefined, general: undefined }));
        }

    }

    function handleChangeEmail(text: string) {
        setEmail(text);
        if (errors.email || errors.general) {
        setErrors((prev) => ({ ...prev, email: undefined, general: undefined }));
        }
    }
        
    function handleChangePassword(text: string) {
        setPassword(text);
        securePassword(text);
        if (errors.password || errors.general) {
        setErrors((prev) => ({ ...prev, password: undefined, general: undefined }));
        }
    }

    async function handleRegister(){

        const validationErrors = validateRegisterForm(name, email, password, confirmedPassword);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);

                return;
            }

        else {
        try {
            setErrors({});
            setRegistering(true);
            await register({
            name,
            email,
            password,
            });

            router.replace("/login");
        } catch (error) {
            if(isAxiosError(error)) {
            const status = error.response?.status;
            if (status === 422) {
                const apiMessage = error.response?.data?.message;
                const apiErrors = error.response?.data?.errors;
                setErrors({
                name: apiErrors?.name ? "O nome de usuário é obrigatório" : undefined,
                email: apiMessage == "The email field must be a valid email address." ? "Informe um email válido" : apiErrors?.email ? "Este email já está em uso" : undefined,
                password: apiErrors?.password ? "A senha é obrigatória" : undefined,
                });
            } else {
                setErrors({ general: "Não foi possível fazer login. Tente novamente."});
            }
            } else {
            setErrors({ general: "Não foi possível fazer login. Tente novamente."});
            }
        } finally {
            setRegistering(false);
        }
        }
    }    

    function securePassword(password: string){
        const regexNumber = /^(?=.*[0-9]).+$/;
        const regexUppercase = /^(?=.*[A-Z]).+$/;
        const regexLowercase = /^(?=.*[a-z]).+$/;
        const regexSimbol = /^(?=.*[^a-zA-Z0-9]).+$/;

        setValidatePasswordRequirements({
        length: password.length >= 8,
        number: regexNumber.test(password),
        case: regexUppercase.test(password) && regexLowercase.test(password),
        simbol: regexSimbol.test(password),
        })
    }

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function toggleConfirmedPassword() {
        setShowConfirmedPassword(!showConfirmedPassword);
    }

    function toggleAcceptTerms() {
        setAcceptTerms(!acceptTerms);
    }

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirmedPassword,
        setConfirmedPassword,
        showPassword,
        togglePassword,
        showConfirmedPassword,
        toggleConfirmedPassword,
        acceptTerms,
        toggleAcceptTerms,
        registering,
        setRegistering,
        passwordFocused,
        setPasswordFocused,
        handleChangeName,
        handleChangeEmail,
        handleChangePassword,
        handleRegister,
        errors,
        showModal,
        setShowModal,
        validatePasswordRequirements,
    };
}
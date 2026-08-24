import { useState } from "react";
import { isAxiosError } from "axios";
import { useAuth } from "./useAuth";

type LoginErrors = {
    email?: string;
    password?: string;
    general?: string;
};

export function useLogin() {

    const { signIn, logging, setLogging } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<LoginErrors>({});
    
    function validateLoginForm(email: string, password: string): LoginErrors {
      const errors: LoginErrors = {};
    
      if (!email.trim()) {
        errors.email = "O email é obrigatório";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Informe um email válido";
      }
    
      if (!password) {
        errors.password = "A senha é obrigatória";
      }
    
      return errors;
    }
    
    async function handleLogin() {
        const validationErrors = validateLoginForm(email, password);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        
        try {
            setErrors({});
            setLogging(true);
            await signIn(email.trim(), password);
        } catch (error) {
            if (isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 401) {
                setErrors({ general: "Email ou senha incorretos" });
            } else if (status === 422) {
                const apiErrors = error.response?.data?.errors;
                setErrors({
                email: apiErrors?.email ? "Informe um email válido" : undefined,
                password: apiErrors?.password ? "A senha é obrigatória" : undefined,
                });
            } else {
                setErrors({ general: "Não foi possível fazer login. Tente novamente." });
            }
            } else {
            setErrors({ general: "Erro inesperado. Tente novamente." });
            }
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
        if (errors.password || errors.general) {
            setErrors((prev) => ({ ...prev, password: undefined, general: undefined }));
        }
    }

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function toggleRememberMe() {
        setRememberMe(!rememberMe);
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        togglePassword,
        rememberMe,
        toggleRememberMe,
        errors,
        handleLogin,
        logging,
        handleChangeEmail,
        handleChangePassword,
    };
}
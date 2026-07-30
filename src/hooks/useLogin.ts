import { useState } from "react";

export function useLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

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
    };
}
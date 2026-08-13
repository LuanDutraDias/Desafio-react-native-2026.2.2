import { useState } from "react";

export function useRegister() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [registering, setRegistering] = useState(false);

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
    };
}
import React from "react";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";
import useRegisterInput from "../hooks/useRegisterInput";
import { register } from "../utils/network-data";

export default function RegisterPage() {
	const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext);
	const [name, handleNameChange] = useRegisterInput("");
	const [email, handleEmailChange] = useRegisterInput("");
	const [password, handlePasswordChange] = useRegisterInput("");
	const [confirmPassword, handleConfirmPasswordChange] = useRegisterInput("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const user = {
			name: name,
			email: email,
			password: password,
		}

		const { error } = await register(user);

        if(!error) {
            navigate('/');
        }
	}

    return (
        <main>
            <section className="register-page">
                <h2>
                    {locale === "id"
                        ? "Isi form untuk mendaftar akun"
                        : "Fill in the form to register an account"}
                    .
                </h2>
                <form onSubmit={handleSubmit} className="input-register">
                    <label for="name">Name</label>
                    <input
                        onChange={handleNameChange}
                        type="text"
                        id="name"
                        value={name}
                    />

                    <label for="email">Email</label>
                    <input
                        onChange={handleEmailChange}
                        type="email"
                        id="email"
                        value={email}
                    />

                    <label for="password">Password</label>
                    <input
                        onChange={handlePasswordChange}
                        type="password"
                        id="password"
                        value={password}
                    />

                    <label for="confirmPassword">Confirm Password</label>
                    <input
                        onChange={handleConfirmPasswordChange}
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                    />
                    <button type="submit">Register</button>
                </form>
                <p>
                    {locale === "id"
                        ? "Sudah punya akun"
                        : "Already have an account"}
                    ? <a href="/">{locale === "id" ? "Login di sini" : "Login here"}</a>
                </p>
            </section>
        </main>
    );
}

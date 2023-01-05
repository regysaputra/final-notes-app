import React from "react";
import LocaleContext from "../context/LocaleContext";
import useLoginInput from "../hooks/useLoginInput";
import { login } from "../utils/network-data";

export default function LoginPage(props) {
	const { locale } = React.useContext(LocaleContext);
	const [email, handleEmailChange] = useLoginInput("");
	const [password, handlePasswordChange] = useLoginInput("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { error, data } = await login({ email, password });

		if(!error) {
			props.loginSuccess(data);
		}
	}

    return (
        <main>
            <section className="login-page">
                <h2>
                    {locale === "id"
                        ? "Yuk, login untuk menggunakan aplikasi."
                        : "Come on, login to use the application."}
                </h2>
                <form onSubmit={handleSubmit} className="input-login">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleEmailChange}
                        type="email"
                        id="email"
                        value={email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handlePasswordChange}
                        type="password"
                        id="password"
                        value={password}
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    {locale === "id"
                        ? "Belum punya akun"
                        : "Don't have an account yet"}
                    ? <a href="/register">{locale === "id" ? "Daftar di sini" : "Register here"}</a>
                </p>
            </section>
        </main>
    );
}

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LocaleProvider } from "./context/LocaleContext";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPages";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import ArchivePage from "./pages/ArchivePage";

function App() {
    const lang = () => {
        let l = localStorage.getItem("locale");
        if (l) {
            return l;
        } else {
            return "id";
        }
    };

    const isDark = () => {
        let i = localStorage.getItem("theme");
        if (i) {
            return i;
        } else {
            return "light";
        }
    };

    const [initializing, setInitializing] = React.useState(true);
    const [authedUser, setAuthedUser] = React.useState(null);
    const [locale, setLocale] = React.useState(lang);
    const [theme, setTheme] = React.useState(isDark);

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            const newLocale = prevLocale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return newLocale;
        });
    };

    const localeContextValue = React.useMemo(() => {
        return {
            locale,
            toggleLocale,
        };
    }, [locale]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    const themeContextValue = React.useMemo(() => {
        return {
            theme,
            toggleTheme,
        };
    }, [theme]);

	const onLoginSuccess = async ({ accessToken }) => {
		putAccessToken(accessToken);

		const { data } = await getUserLogged();

		setAuthedUser(data)
	}

	const onLogout = () => {
		setAuthedUser(null);
		putAccessToken("");
	}

    useEffect(() => {
        getUserLogged().then(({ data }) => {
            setAuthedUser(data);
            setInitializing(false);
        });
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    if (initializing) {
        return (
            <p>Loading...</p>
        );
    }

    if (authedUser === null) {
        return (
            <LocaleProvider value={localeContextValue}>
                <ThemeProvider value={themeContextValue}>
                    <div className="app-container">
                        <Navbar logout={onLogout} auth={authedUser}/>
                        <Routes>
                            <Route
                                path="/*"
                                element={
                                    <LoginPage
                                        loginSuccess={onLoginSuccess}
                                    />
                                }
                            />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                        </Routes>
                    </div>
                </ThemeProvider>
            </LocaleProvider>
        );
    }

    return (
        <LocaleProvider value={localeContextValue}>
            <ThemeProvider value={themeContextValue}>
                <div className="app-container">
                    <Navbar logout={onLogout} auth={authedUser} />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/archives" element={<ArchivePage />} />
                            <Route path="/notes/:id" element={<DetailPage />} />
                            <Route path="/add" element={<AddPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </LocaleProvider>
    );

    // return (
    //     <LocaleProvider value={localeContextValue}>
    //         <ThemeProvider value={themeContextValue}>
    //             <div className="app-container">
    //                 <Navbar />
    //             </div>
    //         </ThemeProvider>
    //     </LocaleProvider>
    // );
}

export default App;

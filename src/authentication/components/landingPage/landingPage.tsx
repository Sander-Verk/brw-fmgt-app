import { useTranslation } from "react-i18next";
import { LogInButton } from "../loginButton/logInButton";

export const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <h1>{t("landingPage.title")}</h1>
            <p>{t("landingPage.description")}</p>
            <LogInButton></LogInButton>
        </div>
    )
}
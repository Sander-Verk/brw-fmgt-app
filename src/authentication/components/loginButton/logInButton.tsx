import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./../../authConfig";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

export const LogInButton = () => {
    const { instance } = useMsal();
    const { t } = useTranslation();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest);
    }
    return (
        <Button type="primary" onClick={handleLogin}>{t("authentication.login")}</Button>
    )
}
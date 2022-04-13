import { useAuth } from "@frontegg/react";
import * as React from "react";
import { Role } from "./roles.enum";
import "./styles.scss";

interface Props {
  minumumRole: Role;
  children: any;
}

const RoleGuard: React.FC<Props> = ({ minumumRole, children }) => {
  const { user } = useAuth();
  const userRoles: string[] = user.roles.map((role: any) => role.level);

  const roleGranted = userRoles.some(role => role >= (minumumRole as any)); // Fix any cast

  return (
    roleGranted ? children : <></>
  );
};

export default RoleGuard;
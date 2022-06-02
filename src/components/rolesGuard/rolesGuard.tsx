import { useAuth } from "@frontegg/react";
import * as React from "react";
import { Role } from "./roles.enum";
import "./styles.scss";

interface Props {
  role: Role;
  type?: RoleGuardType;
  children: any;
}

export enum RoleGuardType {
  MINIMUM_ROLE,
  MAXIMUM_ROLE,
  EXACT_ROLE
}

const RoleGuard: React.FC<Props> = ({ role, children, type = RoleGuardType.MINIMUM_ROLE }) => {
  const { user } = useAuth();
  const userRoles: string[] = user.roles.map((uRole: any) => uRole.level);

  let roleGranted = false;

  if (type === RoleGuardType.MINIMUM_ROLE) {
    roleGranted = userRoles.some(uRole => uRole >= (role as any)); //TODO Fix any cast
  } else if (type === RoleGuardType.MAXIMUM_ROLE) {
    roleGranted = userRoles.some(uRole => uRole <= (role as any)); //TODO Fix any cast
  } else if (type === RoleGuardType.EXACT_ROLE) {
    roleGranted = !!userRoles.find(uRole => uRole === (role as any)); //TODO Fix any cast
  }

  return (
    roleGranted ? children : <></>
  );
};

export default RoleGuard;
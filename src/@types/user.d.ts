type Role = "ADMIN" | "MOD" | "DONOR" | "BENEF"

type user_role = {
    user_role_id?: number,
    role_name: string
}

type roles_by_user = {
    rbu_id?: number,
    user_id?: number,
    user_role_id?: number
}

type users = {
    userId?: number,
    name: string,
    email: string,
    username: string,
    password: string,
    register_date: Date,
    roles_by_user: RolesByUser[]
}

type LoginObjectModel = {
    username: string;
    password: string;
    remember?: boolean;
  }
  
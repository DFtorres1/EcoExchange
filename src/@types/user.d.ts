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
    registerDate: string,
    rolesByUser: RolesByUser[]
}
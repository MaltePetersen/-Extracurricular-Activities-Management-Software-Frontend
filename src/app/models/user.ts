export class User {
    name: string;
    password: string;
    authData?: string;
    role?: string;
    constructor(name: string, password: string, authData: string) {
        this.name = name;
        this.password = password;
        this.authData = authData; 

    }
    setAuthData(authData: string) {
        this.authData = authData;
    }
    setRole(role: string) {
        this.role = role;
    }

}
export interface IUser {
     id?: number | null;
     name: string;
     email: string;
     password: string;
     password2?: string;
     created?: Date;
     edited?: Date;
}

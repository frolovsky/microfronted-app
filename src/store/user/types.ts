export interface IUser {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

export interface IUserState {
  userData: IUser | null;
}

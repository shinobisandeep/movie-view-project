export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface UserCredentials {
  username: string;
   password: string;
}

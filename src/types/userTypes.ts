export interface IUser {
  id: number,
  lastName: string,
  firstName: string,
  userId: number
}

export interface IRole {
  id: number,
  name: string
}

export interface IGrants {
  id: number,
  roles: IRole[]
}

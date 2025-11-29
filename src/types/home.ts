export interface User {
  id?: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: Company
  address: Address
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface ParamsType {
  userId: string
}

export interface UserPostType {
  userId: number
  id: number
  title: string
  body: string
}


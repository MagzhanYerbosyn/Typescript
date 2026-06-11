// OMIT

type TUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
};

type TPublicUser = Omit<TUser, 'password'>;

// ------------------------------------------------
// Литеральные типы

type TStatus = 'loading' | 'success' | 'error';

let reqStatus: TStatus = 'loading';

// ------------------------------------------------
// keyof

// type TUser = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   avatarUrl: string;
// };

// type TUserColumn = keyof TUser;

// let column: TUserColumn = 'name';

// ------------------------------------------------
// typeof

// const defaultUser = {
//   id: 1,
//   name: 'Ali',
//   isAdmin: false,
// };

// type TUser = typeof defaultUser;

// ------------------------------------------------
// as

// const roles = ['admin', 'user', 'guest'] as const;

// type TRole = (typeof roles)[number];

// ------------------------------------------------
// Index Type

// type TUser = {
//   id: number;
//   name: string;
//   email: string;
//   address: {
//     street: string;
//     city: string;
//   };
// };

// type TUserAddress = TUser['address'];

// ------------------------------------------------
// Utility Types

// Pick - Взять нужные  поля
// Omit - Убрать ненужные поля
// Partial - Сделать поля необязательными
// Required - Сделать поля обязательными
// Readonly - Сделать поля только для чтения
// Record - Создать объект с заранее известными полями

// type TUser = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   avatarUrl: string;
// };

// type TRegisterUser = Pick<TUser, 'name' | 'email' | 'password'>;

// const form: TRegisterUser = {
//   name: 'Ali',
//   email: '',
//   password: '',
// };

// type TUser = {
//   name: string;
//   email: string;
//   password: string;
// }

// type TUpdateUser = Partial<TUser>

// type TUserForm = {
//   name?: string;
//   email?: string;
//   password?: string;
// };

// type TValidateUser = Required<TUserForm>;

// type TUser = {
//   id: number;
//   name: string;
// };

// const user: Readonly<TUser> = {
//   id: 1,
//   name: 'Ali',
// };

// type TRole = 'admin' | 'user' | 'guest';

// type TPermissions = Record<TRole, string[]>;

// const permissions: TPermissions = {
//   admin: ['create', 'read', 'update', 'delete'],
//   user: ['read', 'update'],
//   guest: [],
// };

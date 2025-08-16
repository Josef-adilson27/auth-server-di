

export const TYPES = {
  Server: Symbol.for('Server'),
  SessionMiddleware: Symbol.for('SessionMiddleware'),

  LoginController: Symbol.for('LoginController'),
  LoginService: Symbol.for('LoginService'),

  ProfileController: Symbol.for('ProfileController'),
  ProfileService: Symbol.for('ProfileService'),

  RegisterService: Symbol.for('RegisterService'),
  RegisterController: Symbol.for('RegisterController'),

  logoutController: Symbol.for('LogoutController'),
  logoutService: Symbol.for('logoutService'),
  
  //CRUD
  NoteService: Symbol.for('NoteService'),
  NoteController: Symbol.for('NoteController'),

  //repositories
    UserRepository: Symbol.for("UserRepository"),

};
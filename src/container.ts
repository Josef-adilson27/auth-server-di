import { Server } from './server.js';
import { Container } from 'inversify';
import { TYPES } from './types.js';
import { RegisterService } from './services/authService/register.js';
import { LoginController } from './controllers/authController/login.js';
import { ProfileController } from './controllers/userController/Profile.js';
import { ProfileService } from './services/userService/ProfileService.js';
import { RegisterController } from './controllers/authController/register.js';
import { LogoutController } from './controllers/authController/logout.js';
import { NoteController } from './controllers/crud/NoteController.js';
import { NoteService } from './services/crud/NoteService.js';
import { LogoutService } from './services/authService/logout.js';
import { LoginService } from './services/authService/login.js';
import { IUserRepository, UserRepository } from './repositories/UserRepository.js'

const container = new Container();

//server
container.bind<Server>(TYPES.Server).to(Server).inSingletonScope();

//register
container.bind<RegisterService>(TYPES.RegisterService).to(RegisterService).inSingletonScope();
container.bind<RegisterController>(TYPES.RegisterController).to(RegisterController).inSingletonScope();

//login
container.bind<LoginController>(TYPES.LoginController).to(LoginController).inSingletonScope();
container.bind<LoginService>(TYPES.LoginService).to(LoginService).inSingletonScope();

//logout
container.bind<LogoutService>(TYPES.logoutService).to(LogoutService).inSingletonScope();
container.bind<LogoutController>(TYPES.logoutController).to(LogoutController).inSingletonScope();

//user
container.bind<ProfileController>(TYPES.ProfileController).to(ProfileController).inSingletonScope();
container.bind<ProfileService>(TYPES.ProfileService).to(ProfileService).inSingletonScope();

//CRUD
container.bind<NoteController>(TYPES.NoteController).to(NoteController).inSingletonScope()
container.bind<NoteService>(TYPES.NoteService).to(NoteService).inSingletonScope()

//repositories
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope()


//exporting controlllers
const loginController = container.get<LoginController>(TYPES.LoginController);
const profileController = container.get<ProfileController>(TYPES.ProfileController);
const reigsterController = container.get<RegisterController>(TYPES.RegisterController);
const logoutController = container.get<LogoutController>(TYPES.logoutController);
const noteController = container.get<NoteController>(TYPES.NoteController);

const server = container.get<Server>(TYPES.Server);

export {loginController, profileController, reigsterController, logoutController, noteController, server};
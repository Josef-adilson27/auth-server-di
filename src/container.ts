import { Server } from './server.js';
import { Container } from 'inversify';
import { TYPES } from './types.js';
import { AuthService } from './services/authService/AuthService.js';
import { LoginController } from './controllers/authController/login.js';
import { ProfileController } from './controllers/userController/Profile.js';
import { ProfileService } from './services/userService/ProfileService.js';
import { RegisterController } from './controllers/authController/register.js';
import { LogoutController } from './controllers/authController/logout.js';
import { NoteController } from './controllers/crud/NoteController.js';
import { NoteService } from './services/crud/NoteService.js';
import { LogoutService } from './services/authService/logout.js';

const container = new Container();

//server
container.bind<Server>(TYPES.Server).to(Server).inSingletonScope();

//auth
container.bind<AuthService>(TYPES.AuthService).to(AuthService).inSingletonScope();
container.bind<LoginController>(TYPES.LoginController).to(LoginController).inSingletonScope();
container.bind<RegisterController>(TYPES.RegisterController).to(RegisterController).inSingletonScope();

//user
container.bind<ProfileController>(TYPES.ProfileController).to(ProfileController).inSingletonScope();
container.bind<ProfileService>(TYPES.ProfileService).to(ProfileService).inSingletonScope();

//logout
container.bind<LogoutService>(TYPES.logoutService).to(LogoutService).inSingletonScope();
container.bind<LogoutController>(TYPES.logoutController).to(LogoutController).inSingletonScope();

//CRUD
container.bind<NoteController>(TYPES.NoteController).to(NoteController).inSingletonScope()
container.bind<NoteService>(TYPES.NoteService).to(NoteService).inSingletonScope()



//exporting controlllers
const loginController = container.get<LoginController>(TYPES.LoginController);
const profileController = container.get<ProfileController>(TYPES.ProfileController);
const reigsterController = container.get<RegisterController>(TYPES.RegisterController);
const logoutController = container.get<LogoutController>(TYPES.logoutController);
const noteController = container.get<NoteController>(TYPES.NoteController);
const server = container.get<Server>(TYPES.Server);

export {loginController, profileController, reigsterController, logoutController, noteController, server};
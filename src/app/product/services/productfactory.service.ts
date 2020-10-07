import { LoginService } from 'src/app/login/service/login.service';
import { ProductService } from './product.service';


export const productFactory = (loginService: LoginService) => {
  return new ProductService(loginService.role);
};



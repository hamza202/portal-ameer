import ApiService from "@/services/ApiService";
import JwtService from "@/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

export interface User {
  student:{
    id: number ,
    full_name: string,
    first_name: string,
    last_name: string,
    email: string,
    country,
    mobile,
    birthday,
    profile_photo,
    links:{
      facebook,
      twitter,
      linkedin,
      website
    }
  }
  token: string;
}

export interface UserAuthInfo {
  errors: unknown;
  user: User;
  isAuthenticated: boolean;
}

// @ts-ignore
@Module
export default
class AuthModule extends VuexModule implements UserAuthInfo {
  errors = {};
  user = {} as User;
  isAuthenticated = !!JwtService.getToken();

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors() {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    // this.errors = { ...error };
    this.errors = error;

  }

  @Mutation
  [Mutations.SET_AUTH](data) {
    const userData = data.data.data
    this.isAuthenticated = true;
    this.user = userData ;
    this.errors = {};
    JwtService.saveToken(data.token || this.user.token);
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user.data;
  }

  // @Mutation
  // [Mutations.SET_PASSWORD](password) {
  //   this.user.student = password;
  // }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as User;
    this.errors = [];
    JwtService.destroyToken();
  }

  @Action
  [Actions.LOGIN](credentials) {
    return ApiService.post("auth/login", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_AUTH, {data});
      })
      .catch(({ response }) => {
        console.log(response)
        this.context.commit(Mutations.SET_ERROR, response.data.message);
      });
  }

  @Action
  [Actions.LOGOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.REGISTER](credentials) {
    return ApiService.post("auth/register", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_AUTH, {data});
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }
  @Action
  [Actions.CHECK_USER]() {
    let token = JwtService.getToken()
    return ApiService.get("profile")
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, {data , token} );
        })
        .catch(({ response }) => {
          // this.context.commit(Mutations.SET_ERROR, response.data.message);
          this.context.commit(Mutations.PURGE_AUTH);
        });
  }
  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return ApiService.post("forgot_password", payload)
      .then(() => {
        this.context.commit(Mutations.SET_ERROR, {});
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.message);
      });
  }

  @Action
  [Actions.VERIFY_AUTH]() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      // ApiService.post("verify_token", payload)
      //   .then(({ data }) => {
      //     this.context.commit(Mutations.SET_AUTH, data);
      //   })
      //   .catch(({ response }) => {
      //     this.context.commit(Mutations.SET_ERROR, response.data.errors);
      //     this.context.commit(Mutations.PURGE_AUTH);
      //   });
    } else {
      this.context.commit(Mutations.PURGE_AUTH);
    }
  }
}

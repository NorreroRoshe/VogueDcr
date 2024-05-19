"use client"
import AuthService from '@/api/Auth/AuthService';
import { IConfirmReq, IGetUserDetailsReq, IPasswodForgotReq, IPasswordResetReq, IPutUserDetailsReq, IResendConfirmReq, ISingInReq, ISingUpReq } from '@/types/Auth/auth.dtos';
import { IAuthStore } from '@/types/Stores/IAuthStore';
import { makeAutoObservable } from 'mobx';

export class AuthStore implements IAuthStore {
  userId: string = "";
  id: string = "";
  name: string = "";
  email: string = "";
  phoneNumber: string = "";
  isAuth: boolean = false;
  isLoading: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  signOut() {
    this.userId = "";
    this.isAuth = false;
    if (typeof window !== 'undefined') {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }


  async signIn(data: ISingInReq) {
    this.isLoading = true;
    const response = await AuthService.signIn({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.userId = response.data.userId;
      this.isAuth = true;
    if (typeof window !== 'undefined') {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem("access_token_expires", response.data.access_token_expires);
    }
    }
    return response;
  }

  async signUp(data: ISingUpReq) {
    this.isLoading = true;
    const response = await AuthService.signUp({ data });

    if ('data' in response) {
        this.isLoading = false;
        this.userId = response.data.userId;
    }
    return response;
  }


  // Обработка успешного обновления токена
  async refreshToken() {
    this.isLoading = true;
    const response = await AuthService.refreshToken();

    if ('data' in response) {
    this.isLoading = false;
    this.userId = this.userId ? response.data.userId : "";
    this.isAuth = true;
    if (typeof window !== 'undefined') {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem("access_token_expires", response.data.access_token_expires);
    }
    }
    return response;
  }



  async emailConfirm(data: IConfirmReq) {
    this.isLoading = true;
    const response = await AuthService.emailConfirm({data});

    if ('data' in response) {
      this.isLoading = false;
    }
    return response;
  }



  async emailResendConfirm(data: IResendConfirmReq) {
    this.isLoading = true;
    const response = await AuthService.emailResendConfirm({data});

    if ('data' in response) {
      this.isLoading = false;
        this.userId = response.data.userId;
        this.isAuth = true;
    if (typeof window !== 'undefined') {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        localStorage.setItem("access_token_expires", response.data.access_token_expires);
    }
    }
    return response;
  }


  async passwordForgot(data: IPasswodForgotReq) {
    this.isLoading = true;
    const response = await AuthService.passwordForgot({data});

    if ('data' in response) {
      this.isLoading = false;
      this.userId = response.data.userId;
      this.isAuth = true;
    if (typeof window !== 'undefined') {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem("access_token_expires", response.data.access_token_expires);
    }
    }
    return response;
  }


  async passwordReset(data: IPasswordResetReq) {
    this.isLoading = true;
    const response = await AuthService.passwordReset({data});

    if ('data' in response) {
      this.isLoading = false;
      this.userId = response.data.userId;
      this.isAuth = true;
    if (typeof window !== 'undefined') {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem("access_token_expires", response.data.access_token_expires);
    }
    }
    return response;
  }

  async getUserDetails(data: IGetUserDetailsReq) {
    this.isLoading = true;
    const response = await AuthService.getUserDetails({data});

    if ('data' in response) {
      this.isLoading = false;
      this.id = response.data.id;
      this.name = response.data.name;
      this.email = response.data.email;
      this.phoneNumber = response.data.phoneNumber;
    }
    return response;

  }

  async putUserDetails(data: IPutUserDetailsReq) {
    this.isLoading = true;
    const response = await AuthService.putUserDetails({data});

    if ('data' in response) {
      this.isLoading = false;
    }
    return response;
  }
}

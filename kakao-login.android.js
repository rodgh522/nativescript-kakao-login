import { Common } from './kakao-login.common';
import { Application, Utils, setActivityCallbacks } from '@nativescript/core';

export class KakaoLogin extends Common {

  config = {};
  
  constructor() {
    super();
    this.config = {
      context: Utils.android.getApplicationContext(),
      activity: Application.android.foregroundActivity || Application.android.startActivity
    }
  }

  init() {
    const kakaoSdk = new com.nativescript.kakao_sdk.kakao.KakaoLogin();

    kakaoSdk.initKakao(this.config.context, 'cf8de16641f0b20e02c097655416ea04');

    kakaoSdk.login(this.config.activity);
  }

  greet() {
    console.log('greet!');
  }
}

export const kakao = new KakaoLogin();

class CustomFunc extends java.lang.Object {

  static loginCallbak(token, error) {
    console.log(token)
  }
}

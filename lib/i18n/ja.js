'use strict';

exports.__esModule = true;
// This file was automatically translated.
// Feel free to submit a PR if you find a more accurate translation.

exports.default = {
  error: {
    forgotPassword: {
      too_many_requests:
        'パスワード変更のリクエストが上限に達しました。時間をおいてやり直してください。',
      'lock.fallback':
        '申し訳ございません。何らかの理由によりパスワード変更の要求が受け付けられませんでした',
      enterprise_email:
        '電子メールのドメインは、エンタープライズIDプロバイダの一部です。パスワードをリセットするには、セキュリティ管理者にお問い合わせください。'
    },
    login: {
      blocked_user: 'ユーザーはブロックされています.',
      invalid_user_password: 'パスワードに誤りがあります',
      'lock.fallback':
        '申し訳ございません。何らかの理由によりログインの要求が受け付けられませんでした',
      'lock.invalid_code': '不正なコード',
      'lock.invalid_email_password': 'メールアドレスもしくはパスワードが間違っています',
      'lock.invalid_username_password': 'ユーザー名もしくはパスワードが間違っています',
      'lock.network': 'サーバとの通信に失敗しました。もう一度やり直してください。',
      'lock.popup_closed': 'ポップアップウィンドウが閉じられました。もう一度やり直してください。',
      'lock.unauthorized': '権限がありません。もう一度やり直してください。',
      'lock.mfa_registration_required':
        '多段階認証が必要ですが、デバイスが登録されていません。ご登録をお願いいたします。',
      'lock.mfa_invalid_code': 'コードが不正です。もう一度やり直してください。',
      password_change_required:
        '初めてログインする、またはパスワードが期限切れになったため、パスワードを更新する必要があります。',
      password_leaked:
        'アカウントはパスワードが別のウェブサイトで漏洩したためにブロックされました。ブロックを解除する方法についてはメールにて自動送信されます。',
      too_many_attempts: 'このアカウントは、短時間での複数回ログイン試行によりブロックされました。',
      session_missing:
        '認証リクエストを完了できませんでした。すべての開いているダイアログを閉じた後にもう一度お試しください。',
      'hrd.not_matching_email': 'ログインするには、企業の電子メールを使用してください。'
    },
    passwordless: {
      'bad.email': 'メールアドレスが不正です',
      'bad.phone_number': '電話番号が不正です',
      'lock.fallback': '申し訳ございません。エラーが発生しました。'
    },
    signUp: {
      invalid_password: 'パスワードが不正です。',
      'lock.fallback':
        '申し訳ございません。サインアップ時に何らかの理由によりエラーが発生しました。',
      password_dictionary_error: 'パスワードは一般的な文字列を避けてください。',
      password_no_user_info_error: 'ユーザーを含むパスワードは避けてください。',
      password_strength_error: 'パスワードが脆弱です。',
      user_exists: 'すでに使用されているユーザーです。',
      username_exists: 'すでに使用されているユーザーです。'
    }
  },
  success: {
    logIn: 'ログインに成功しました。',
    forgotPassword: 'パスワードをリセットするためのメールをお送りしました。',
    magicLink: '%sへログインするためのリンクが送信されました。',
    signUp: 'サインアップが完了しました。'
  },
  blankErrorHint: '空白にすることはできません',
  codeInputPlaceholder: 'コードを入力',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: '又は',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: '又は',
  emailInputPlaceholder: 'your@example.com',
  enterpriseLoginIntructions: '企業の資格情報でログインしてください。',
  enterpriseActiveLoginInstructions: '%s の資格情報を入力してください',
  failedLabel: '失敗しました。',
  forgotPasswordTitle: 'パスワードをリセットする',
  forgotPasswordAction: 'パスワードを忘れましたか？',
  forgotPasswordInstructions:
    'メールアドレスを入力してください。パスワードをリセットするためのメールをお送りします。',
  forgotPasswordSubmitLabel: 'メールを送信',
  invalidErrorHint: 'エラー',
  lastLoginInstructions: '最終ログイン',
  loginAtLabel: '%s ログイン',
  loginLabel: 'ログイン',
  loginSubmitLabel: 'ログイン',
  loginWithLabel: '%s ログイン',
  notYourAccountAction: 'これはあなたのアカウントではありませんか？',
  passwordInputPlaceholder: 'パスワード',
  passwordStrength: {
    containsAtLeast: '%d が含まれています:',
    identicalChars: '連続して％d個の同一の文字しか使用できません（例："％s "は使用できません）',
    nonEmpty: 'パスワードが必要です',
    numbers: '数字 (i.e. 0-9)',
    lengthAtLeast: '%d 文字以上',
    lowerCase: '小文字 (a-z)',
    shouldContain: '含まれるべき:',
    specialCharacters: '特殊文字 (e.g. !@#$%^&*)',
    upperCase: '大文字 (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'メールアドレスを入力するか<br/>またはアカウントを作成してください。',
  passwordlessEmailCodeInstructions: '％s へメールでコードが送信されました。',
  passwordlessEmailInstructions:
    'メールアドレスを入力してサインイン<br/>またはアカウントを作成してください。',
  passwordlessSMSAlternativeInstructions:
    'もしくは電話番号を入力してサインイン<br/>またはアカウントを作成してください。',
  passwordlessSMSCodeInstructions: '%s へSMSでコードが送信されました。',
  passwordlessSMSInstructions:
    '電話番号を入力してサインイン<br/>またはアカウントを作成してください。',
  phoneNumberInputPlaceholder: '電話番号',
  resendCodeAction: 'コードは受け取れましたか？',
  resendLabel: '再送する',
  resendingLabel: '再送中...',
  retryLabel: 'もう一度',
  sentLabel: '送る',
  signupTitle: 'サインアップ',
  signUpLabel: 'サインアップ',
  signUpSubmitLabel: 'サインアップ',
  signUpTerms: '',
  signUpWithLabel: '%s でサインアップ',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'シングルサインオンが有効になっています',
  submitLabel: '送信',
  unrecoverableError: 'エラーが発生しました。<br />サポートへご連絡ください。',
  usernameFormatErrorHint:
    '%d-%d文字、数字、および以下の文字を使用します： "_"、 "。"、 "+"、 " - "',
  usernameInputPlaceholder: 'ユーザー',
  usernameOrEmailInputPlaceholder: 'ユーザー/メールアドレス',
  title: 'Auth0',
  welcome: '%sへようこそ！',
  windowsAuthInstructions: '企業ネットワークから接続されています;',
  windowsAuthLabel: 'Windows認証',
  mfaInputPlaceholder: 'コード',
  mfaLoginTitle: '二段階認証',
  mfaLoginInstructions: 'スマートフォンアプリケーションで生成された確認コードを入力してください。',
  mfaSubmitLabel: 'ログイン',
  mfaCodeErrorHint: '%d 数字を使用してください',
  showPassword: 'ログインするには、企業の電子メールを使用してください。'
};

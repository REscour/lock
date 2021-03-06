'use strict';

exports.__esModule = true;
// This file was automatically translated.
// Feel free to submit a PR if you find a more accurate translation.

exports.default = {
  error: {
    forgotPassword: {
      too_many_requests:
        'Elérted a jelszóváltoztatási probálkozások engedélyezett számát. Kérlek, várj egy kicsit mielőtt újrapróbálnád!',
      'lock.fallback': 'Sajnáljuk, valami hiba történt a jelszóváltoztatás során.',
      enterprise_email:
        'Az e-mail domainje egy Enterprise azonosító szolgáltató része. A jelszó visszaállításához kérjük, olvassa el a biztonsági adminisztrátort.'
    },
    login: {
      blocked_user: 'A felhasználó nincsen engedélyezve.',
      invalid_user_password: 'Hibás bejelentkezés.',
      'lock.fallback': 'Sajnáljuk, valami hiba történt a bejelentkezés során.',
      'lock.invalid_code': 'Hibás PIN.',
      'lock.invalid_email_password': 'Hibás e-mail vagy jelszó.',
      'lock.invalid_username_password': 'Hibás felhasználónév vagy jelszó.',
      'lock.network':
        'A szerver nem elérhető. Kérlek, ellenőrizd az internetkapcsolatot, és próbáld újra.!',
      'lock.popup_closed': 'A felugró ablak be lett zárva. Próbáld újra!',
      'lock.unauthorized': 'Engedély megtagadva. Próbáld újra!',
      password_change_required:
        'A jelszavadat meg kell változtatnod, mert vagy most lépsz be először, vagy lejárt a jelszavad.',
      password_leaked:
        'Az azonosítót letiltottuk, mert a hozzá tartozó jelszó egy másik honlapon nyilvánosságra került. Küldtünk neked egy e-mailt az azonosító engedélyezésének menetéről.',
      too_many_attempts: 'Több gyakori bejelentkezés után az azonosítódat letiltottuk.',
      'lock.mfa_registration_required':
        'Többtényezős hitelesítés szükséges, de a készülék nem regisztrálták. Kérjük, regisztrálja azt, mielőtt.',
      'lock.mfa_invalid_code': 'Rossz kód. Kérlek próbáld újra.',
      session_missing:
        'Nem tudja teljesíteni a hitelesítési kérelmet. Kérjük, próbálja meg újra zárás után megnyitott párbeszédablakok',
      'hrd.not_matching_email': 'Kérjük, használja a vállalati e-mail jelentkezned.'
    },
    passwordless: {
      'bad.email': 'Érvénytelen e-mailcím',
      'bad.phone_number': 'Érvénytelen telefonszám',
      'lock.fallback': 'Sajnáljuk, valami hiba történt'
    },
    signUp: {
      invalid_password: 'Érvénytelen jelszó.',
      'lock.fallback': 'Sajnáljuk, a feliratkozás során valami hiba történt.',
      password_dictionary_error: 'Túl gyakori jelszó.',
      password_no_user_info_error: 'A jelszó a felhasználói adatokra támaszkodik.',
      password_strength_error: 'Túl gyenge jelszó.',
      user_exists: 'A felhasználó már létezik.',
      username_exists: 'A felhasználónév már foglalt.'
    }
  },
  success: {
    logIn: 'Köszönjük a bejelentkezésed',
    forgotPassword: 'Küldtünk neked egy e-mailt a jelszó visszaállításának menetéről.',
    magicLink: 'Küldtünk neked egy bejelentkezési linket<br />a %s honlaphoz.',
    signUp: 'Köszönjük, hogy feliratkoztál.'
  },
  blankErrorHint: 'Nem lehet üres',
  codeInputPlaceholder: 'PIN',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'vagy',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'vagy',
  emailInputPlaceholder: 'emailcim@example.com',
  enterpriseLoginIntructions: 'Bejelentkezés céges azonosítóval.',
  enterpriseActiveLoginInstructions: 'Kérlek, add meg a céges azonosítódat a %s honlapon.',
  failedLabel: 'Sikertelen!',
  forgotPasswordAction: 'Nem emlékszel a jelszavadra?',
  forgotPasswordInstructions:
    'Kérlek, add meg az e-mailcímedet! Küldünk neked egy e-mailt a jelszó helyreállításának menetéről.',
  forgotPasswordSubmitLabel: 'E-mail küldése',
  invalidErrorHint: 'Érvénytelen',
  lastLoginInstructions: 'Utolsó bejelentkezés',
  loginAtLabel: 'Bejelentkezés ideje: %s',
  loginLabel: 'Belépés',
  loginSubmitLabel: 'Belépés',
  loginWithLabel: 'Belépés %s-val',
  notYourAccountAction: 'Nem a te fiókod?',
  passwordInputPlaceholder: 'jelszavad',
  passwordStrength: {
    containsAtLeast: 'Legalább %d alkalommal tartalmazza a következő %d karaktert:',
    identicalChars:
      'Legfeljebb %d azonos karakter szerepelhet egy sorban (pl. "%s" nem engedélyezett)',
    nonEmpty: 'A jelszó nem lehet üres',
    numbers: 'Számok (0-9)',
    lengthAtLeast: 'Legalább %d hosszú',
    lowerCase: 'Kisbetűk (a-z)',
    shouldContain: 'Tartalmazzon:',
    specialCharacters: 'Különleges karakterek (e.g. !@#$%^&*)',
    upperCase: 'Nagybetűk (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Vagy, bejelentkezéshez vagy feliratkozáshoz<br/>add meg az e-mailcímed',
  passwordlessEmailCodeInstructions: 'A PIN-t e-mailben elküldük a %s címre.',
  passwordlessEmailInstructions: 'Bejelentkezéshez vagy feliratkozáshoz<br/>add meg az e-mailcímed',
  passwordlessSMSAlternativeInstructions:
    'Vagy, bejelentkezéshez vagy feliratkozáshoz<br/>add meg a telefonszámod',
  passwordlessSMSCodeInstructions: 'A PIN-t SMS-ben elküldtük a %s számra.',
  passwordlessSMSInstructions: 'Bejelentkezéshez vagy feliratkozáshoz<br/>add meg a telefonszámod',
  phoneNumberInputPlaceholder: 'telefonszámod',
  resendCodeAction: 'Nem kaptad meg a PIN-t?',
  resendLabel: 'Újraküldés',
  resendingLabel: 'Újraküldés...',
  retryLabel: 'Próbáld újra',
  sentLabel: 'Elküldve!',
  signUpLabel: 'Feliratkozás',
  signUpSubmitLabel: 'Feliratkozás',
  signUpTerms: '',
  signUpWithLabel: 'Feliratkozás %s-val',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Egyszeri bejelentkezés engedélyezve',
  submitLabel: 'Mehet',
  unrecoverableError:
    'Valaim hiba történt.<br />Kérlek, lépj kapcsolatba a műszaki ügyfélszolgálattal.',
  usernameFormatErrorHint:
    'Használj %d-%d betűket, számokat és a következő karaktereket: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'felhasználóneved',
  usernameOrEmailInputPlaceholder: 'felhasználónév/e-mail',
  title: 'Auth0',
  welcome: 'Üdvözöllek %s!',
  windowsAuthInstructions: 'A céged hálózatoddal kapcsolódsz&hellip;',
  windowsAuthLabel: 'Windows bejelentkezés',
  forgotPasswordTitle: 'Állítsd vissza a jelszavad',
  signupTitle: 'Regisztrálj',
  mfaInputPlaceholder: 'Kód',
  mfaLoginTitle: '2 kétlépcsős azonosítás',
  mfaLoginInstructions: 'Kérjük adja meg az ellenőrző kódot generált a mobil alkalmazás.',
  mfaSubmitLabel: 'Belépek',
  mfaCodeErrorHint: 'Használja %d számok',
  showPassword: 'Mutasd a jelszót'
};

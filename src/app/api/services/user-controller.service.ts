/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDTO } from '../models/user-dto';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly loginUsingGETPath = '/user/login';
  static readonly getUserByAuthUsingGETPath = '/user/profile';
  static readonly patchUserByAuthUsingPATCHPath = '/user/profile';
  static readonly registrationUsingPOSTPath = '/user/register';
  static readonly confirmRegistrationUsingGETPath = '/user/registrationConfirm';
  static readonly resendTokenUsingGETPath = '/user/resendToken';
  static readonly resetPasswordUsingPOSTPath = '/user/resetPassword';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UserControllerService.LoginUsingGETParams` containing the following parameters:
   *
   * - `principal`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  loginUsingGETResponse(params: UserControllerService.LoginUsingGETParams): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.LoginUsingGETParams` containing the following parameters:
   *
   * - `principal`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  loginUsingGET(params: UserControllerService.LoginUsingGETParams): __Observable<Array<string>> {
    return this.loginUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param params The `UserControllerService.GetUserByAuthUsingGETParams` containing the following parameters:
   *
   * - `principal`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  getUserByAuthUsingGETResponse(params: UserControllerService.GetUserByAuthUsingGETParams): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/profile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.GetUserByAuthUsingGETParams` containing the following parameters:
   *
   * - `principal`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  getUserByAuthUsingGET(params: UserControllerService.GetUserByAuthUsingGETParams): __Observable<UserDTO> {
    return this.getUserByAuthUsingGETResponse(params).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param params The `UserControllerService.PatchUserByAuthUsingPATCHParams` containing the following parameters:
   *
   * - `userDTO`: userDTO
   *
   * - `principal`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  patchUserByAuthUsingPATCHResponse(params: UserControllerService.PatchUserByAuthUsingPATCHParams): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userDTO != null) __params = __params.set('userDTO', params.userDTO.toString());
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/user/profile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.PatchUserByAuthUsingPATCHParams` containing the following parameters:
   *
   * - `userDTO`: userDTO
   *
   * - `principal`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  patchUserByAuthUsingPATCH(params: UserControllerService.PatchUserByAuthUsingPATCHParams): __Observable<UserDTO> {
    return this.patchUserByAuthUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param params The `UserControllerService.RegistrationUsingPOSTParams` containing the following parameters:
   *
   * - `userDTO`: userDTO
   *
   * - `userPrincipal.name`:
   *
   * - `secure`:
   *
   * - `remoteUser`:
   *
   * - `principal`:
   *
   * - `objectName`:
   *
   * - `nestedPath`:
   *
   * - `locale.variant`:
   *
   * - `locale.unicodeLocaleKeys`:
   *
   * - `locale.unicodeLocaleAttributes`:
   *
   * - `locale.script`:
   *
   * - `locale.language`:
   *
   * - `locale.displayVariant`:
   *
   * - `locale.displayScript`:
   *
   * - `locale.displayName`:
   *
   * - `locale.displayLanguage`:
   *
   * - `locale.displayCountry`:
   *
   * - `locale.country`:
   *
   * - `locale.ISO3Language`:
   *
   * - `locale.ISO3Country`:
   *
   * - `globalErrors[0].objectName`:
   *
   * - `globalErrors[0].defaultMessage`:
   *
   * - `globalErrors[0].codes`:
   *
   * - `globalErrors[0].code`:
   *
   * - `globalErrors[0].arguments`:
   *
   * - `globalErrorCount`:
   *
   * - `globalError.objectName`:
   *
   * - `globalError.defaultMessage`:
   *
   * - `globalError.codes`:
   *
   * - `globalError.code`:
   *
   * - `globalError.arguments`:
   *
   * - `fieldErrors[0].rejectedValue`:
   *
   * - `fieldErrors[0].objectName`:
   *
   * - `fieldErrors[0].field`:
   *
   * - `fieldErrors[0].defaultMessage`:
   *
   * - `fieldErrors[0].codes`:
   *
   * - `fieldErrors[0].code`:
   *
   * - `fieldErrors[0].bindingFailure`:
   *
   * - `fieldErrors[0].arguments`:
   *
   * - `fieldErrorCount`:
   *
   * - `fieldError.rejectedValue`:
   *
   * - `fieldError.objectName`:
   *
   * - `fieldError.field`:
   *
   * - `fieldError.defaultMessage`:
   *
   * - `fieldError.codes`:
   *
   * - `fieldError.code`:
   *
   * - `fieldError.bindingFailure`:
   *
   * - `fieldError.arguments`:
   *
   * - `errorCount`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `contextPath`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * - `allErrors[0].objectName`:
   *
   * - `allErrors[0].defaultMessage`:
   *
   * - `allErrors[0].codes`:
   *
   * - `allErrors[0].code`:
   *
   * - `allErrors[0].arguments`:
   *
   * @return OK
   */
  registrationUsingPOSTResponse(params: UserControllerService.RegistrationUsingPOSTParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.userDTO;
    if (params.userPrincipalName != null) __params = __params.set('userPrincipal.name', params.userPrincipalName.toString());
    if (params.secure != null) __params = __params.set('secure', params.secure.toString());
    if (params.remoteUser != null) __params = __params.set('remoteUser', params.remoteUser.toString());
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.objectName != null) __params = __params.set('objectName', params.objectName.toString());
    if (params.nestedPath != null) __params = __params.set('nestedPath', params.nestedPath.toString());
    if (params.localeVariant != null) __params = __params.set('locale.variant', params.localeVariant.toString());
    (params.localeUnicodeLocaleKeys || []).forEach(val => {if (val != null) __params = __params.append('locale.unicodeLocaleKeys', val.toString())});
    (params.localeUnicodeLocaleAttributes || []).forEach(val => {if (val != null) __params = __params.append('locale.unicodeLocaleAttributes', val.toString())});
    if (params.localeScript != null) __params = __params.set('locale.script', params.localeScript.toString());
    if (params.localeLanguage != null) __params = __params.set('locale.language', params.localeLanguage.toString());
    if (params.localeDisplayVariant != null) __params = __params.set('locale.displayVariant', params.localeDisplayVariant.toString());
    if (params.localeDisplayScript != null) __params = __params.set('locale.displayScript', params.localeDisplayScript.toString());
    if (params.localeDisplayName != null) __params = __params.set('locale.displayName', params.localeDisplayName.toString());
    if (params.localeDisplayLanguage != null) __params = __params.set('locale.displayLanguage', params.localeDisplayLanguage.toString());
    if (params.localeDisplayCountry != null) __params = __params.set('locale.displayCountry', params.localeDisplayCountry.toString());
    if (params.localeCountry != null) __params = __params.set('locale.country', params.localeCountry.toString());
    if (params.localeISO3Language != null) __params = __params.set('locale.ISO3Language', params.localeISO3Language.toString());
    if (params.localeISO3Country != null) __params = __params.set('locale.ISO3Country', params.localeISO3Country.toString());
    if (params.globalErrors0ObjectName != null) __params = __params.set('globalErrors[0].objectName', params.globalErrors0ObjectName.toString());
    if (params.globalErrors0DefaultMessage != null) __params = __params.set('globalErrors[0].defaultMessage', params.globalErrors0DefaultMessage.toString());
    (params.globalErrors0Codes || []).forEach(val => {if (val != null) __params = __params.append('globalErrors[0].codes', val.toString())});
    if (params.globalErrors0Code != null) __params = __params.set('globalErrors[0].code', params.globalErrors0Code.toString());
    (params.globalErrors0Arguments || []).forEach(val => {if (val != null) __params = __params.append('globalErrors[0].arguments', val.toString())});
    if (params.globalErrorCount != null) __params = __params.set('globalErrorCount', params.globalErrorCount.toString());
    if (params.globalErrorObjectName != null) __params = __params.set('globalError.objectName', params.globalErrorObjectName.toString());
    if (params.globalErrorDefaultMessage != null) __params = __params.set('globalError.defaultMessage', params.globalErrorDefaultMessage.toString());
    (params.globalErrorCodes || []).forEach(val => {if (val != null) __params = __params.append('globalError.codes', val.toString())});
    if (params.globalErrorCode != null) __params = __params.set('globalError.code', params.globalErrorCode.toString());
    (params.globalErrorArguments || []).forEach(val => {if (val != null) __params = __params.append('globalError.arguments', val.toString())});
    if (params.fieldErrors0RejectedValue != null) __params = __params.set('fieldErrors[0].rejectedValue', params.fieldErrors0RejectedValue.toString());
    if (params.fieldErrors0ObjectName != null) __params = __params.set('fieldErrors[0].objectName', params.fieldErrors0ObjectName.toString());
    if (params.fieldErrors0Field != null) __params = __params.set('fieldErrors[0].field', params.fieldErrors0Field.toString());
    if (params.fieldErrors0DefaultMessage != null) __params = __params.set('fieldErrors[0].defaultMessage', params.fieldErrors0DefaultMessage.toString());
    (params.fieldErrors0Codes || []).forEach(val => {if (val != null) __params = __params.append('fieldErrors[0].codes', val.toString())});
    if (params.fieldErrors0Code != null) __params = __params.set('fieldErrors[0].code', params.fieldErrors0Code.toString());
    if (params.fieldErrors0BindingFailure != null) __params = __params.set('fieldErrors[0].bindingFailure', params.fieldErrors0BindingFailure.toString());
    (params.fieldErrors0Arguments || []).forEach(val => {if (val != null) __params = __params.append('fieldErrors[0].arguments', val.toString())});
    if (params.fieldErrorCount != null) __params = __params.set('fieldErrorCount', params.fieldErrorCount.toString());
    if (params.fieldErrorRejectedValue != null) __params = __params.set('fieldError.rejectedValue', params.fieldErrorRejectedValue.toString());
    if (params.fieldErrorObjectName != null) __params = __params.set('fieldError.objectName', params.fieldErrorObjectName.toString());
    if (params.fieldErrorField != null) __params = __params.set('fieldError.field', params.fieldErrorField.toString());
    if (params.fieldErrorDefaultMessage != null) __params = __params.set('fieldError.defaultMessage', params.fieldErrorDefaultMessage.toString());
    (params.fieldErrorCodes || []).forEach(val => {if (val != null) __params = __params.append('fieldError.codes', val.toString())});
    if (params.fieldErrorCode != null) __params = __params.set('fieldError.code', params.fieldErrorCode.toString());
    if (params.fieldErrorBindingFailure != null) __params = __params.set('fieldError.bindingFailure', params.fieldErrorBindingFailure.toString());
    (params.fieldErrorArguments || []).forEach(val => {if (val != null) __params = __params.append('fieldError.arguments', val.toString())});
    if (params.errorCount != null) __params = __params.set('errorCount', params.errorCount.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.contextPath != null) __params = __params.set('contextPath', params.contextPath.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    if (params.allErrors0ObjectName != null) __params = __params.set('allErrors[0].objectName', params.allErrors0ObjectName.toString());
    if (params.allErrors0DefaultMessage != null) __params = __params.set('allErrors[0].defaultMessage', params.allErrors0DefaultMessage.toString());
    (params.allErrors0Codes || []).forEach(val => {if (val != null) __params = __params.append('allErrors[0].codes', val.toString())});
    if (params.allErrors0Code != null) __params = __params.set('allErrors[0].code', params.allErrors0Code.toString());
    (params.allErrors0Arguments || []).forEach(val => {if (val != null) __params = __params.append('allErrors[0].arguments', val.toString())});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.RegistrationUsingPOSTParams` containing the following parameters:
   *
   * - `userDTO`: userDTO
   *
   * - `userPrincipal.name`:
   *
   * - `secure`:
   *
   * - `remoteUser`:
   *
   * - `principal`:
   *
   * - `objectName`:
   *
   * - `nestedPath`:
   *
   * - `locale.variant`:
   *
   * - `locale.unicodeLocaleKeys`:
   *
   * - `locale.unicodeLocaleAttributes`:
   *
   * - `locale.script`:
   *
   * - `locale.language`:
   *
   * - `locale.displayVariant`:
   *
   * - `locale.displayScript`:
   *
   * - `locale.displayName`:
   *
   * - `locale.displayLanguage`:
   *
   * - `locale.displayCountry`:
   *
   * - `locale.country`:
   *
   * - `locale.ISO3Language`:
   *
   * - `locale.ISO3Country`:
   *
   * - `globalErrors[0].objectName`:
   *
   * - `globalErrors[0].defaultMessage`:
   *
   * - `globalErrors[0].codes`:
   *
   * - `globalErrors[0].code`:
   *
   * - `globalErrors[0].arguments`:
   *
   * - `globalErrorCount`:
   *
   * - `globalError.objectName`:
   *
   * - `globalError.defaultMessage`:
   *
   * - `globalError.codes`:
   *
   * - `globalError.code`:
   *
   * - `globalError.arguments`:
   *
   * - `fieldErrors[0].rejectedValue`:
   *
   * - `fieldErrors[0].objectName`:
   *
   * - `fieldErrors[0].field`:
   *
   * - `fieldErrors[0].defaultMessage`:
   *
   * - `fieldErrors[0].codes`:
   *
   * - `fieldErrors[0].code`:
   *
   * - `fieldErrors[0].bindingFailure`:
   *
   * - `fieldErrors[0].arguments`:
   *
   * - `fieldErrorCount`:
   *
   * - `fieldError.rejectedValue`:
   *
   * - `fieldError.objectName`:
   *
   * - `fieldError.field`:
   *
   * - `fieldError.defaultMessage`:
   *
   * - `fieldError.codes`:
   *
   * - `fieldError.code`:
   *
   * - `fieldError.bindingFailure`:
   *
   * - `fieldError.arguments`:
   *
   * - `errorCount`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `contextPath`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * - `allErrors[0].objectName`:
   *
   * - `allErrors[0].defaultMessage`:
   *
   * - `allErrors[0].codes`:
   *
   * - `allErrors[0].code`:
   *
   * - `allErrors[0].arguments`:
   *
   * @return OK
   */
  registrationUsingPOST(params: UserControllerService.RegistrationUsingPOSTParams): __Observable<string> {
    return this.registrationUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `UserControllerService.ConfirmRegistrationUsingGETParams` containing the following parameters:
   *
   * - `token`: token
   *
   * - `userPrincipal.name`:
   *
   * - `secure`:
   *
   * - `remoteUser`:
   *
   * - `locale.variant`:
   *
   * - `locale.unicodeLocaleKeys`:
   *
   * - `locale.unicodeLocaleAttributes`:
   *
   * - `locale.script`:
   *
   * - `locale.language`:
   *
   * - `locale.displayVariant`:
   *
   * - `locale.displayScript`:
   *
   * - `locale.displayName`:
   *
   * - `locale.displayLanguage`:
   *
   * - `locale.displayCountry`:
   *
   * - `locale.country`:
   *
   * - `locale.ISO3Language`:
   *
   * - `locale.ISO3Country`:
   *
   * - `contextPath`:
   *
   * @return OK
   */
  confirmRegistrationUsingGETResponse(params: UserControllerService.ConfirmRegistrationUsingGETParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.token != null) __params = __params.set('token', params.token.toString());
    if (params.userPrincipalName != null) __params = __params.set('userPrincipal.name', params.userPrincipalName.toString());
    if (params.secure != null) __params = __params.set('secure', params.secure.toString());
    if (params.remoteUser != null) __params = __params.set('remoteUser', params.remoteUser.toString());
    if (params.localeVariant != null) __params = __params.set('locale.variant', params.localeVariant.toString());
    (params.localeUnicodeLocaleKeys || []).forEach(val => {if (val != null) __params = __params.append('locale.unicodeLocaleKeys', val.toString())});
    (params.localeUnicodeLocaleAttributes || []).forEach(val => {if (val != null) __params = __params.append('locale.unicodeLocaleAttributes', val.toString())});
    if (params.localeScript != null) __params = __params.set('locale.script', params.localeScript.toString());
    if (params.localeLanguage != null) __params = __params.set('locale.language', params.localeLanguage.toString());
    if (params.localeDisplayVariant != null) __params = __params.set('locale.displayVariant', params.localeDisplayVariant.toString());
    if (params.localeDisplayScript != null) __params = __params.set('locale.displayScript', params.localeDisplayScript.toString());
    if (params.localeDisplayName != null) __params = __params.set('locale.displayName', params.localeDisplayName.toString());
    if (params.localeDisplayLanguage != null) __params = __params.set('locale.displayLanguage', params.localeDisplayLanguage.toString());
    if (params.localeDisplayCountry != null) __params = __params.set('locale.displayCountry', params.localeDisplayCountry.toString());
    if (params.localeCountry != null) __params = __params.set('locale.country', params.localeCountry.toString());
    if (params.localeISO3Language != null) __params = __params.set('locale.ISO3Language', params.localeISO3Language.toString());
    if (params.localeISO3Country != null) __params = __params.set('locale.ISO3Country', params.localeISO3Country.toString());
    if (params.contextPath != null) __params = __params.set('contextPath', params.contextPath.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/registrationConfirm`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.ConfirmRegistrationUsingGETParams` containing the following parameters:
   *
   * - `token`: token
   *
   * - `userPrincipal.name`:
   *
   * - `secure`:
   *
   * - `remoteUser`:
   *
   * - `locale.variant`:
   *
   * - `locale.unicodeLocaleKeys`:
   *
   * - `locale.unicodeLocaleAttributes`:
   *
   * - `locale.script`:
   *
   * - `locale.language`:
   *
   * - `locale.displayVariant`:
   *
   * - `locale.displayScript`:
   *
   * - `locale.displayName`:
   *
   * - `locale.displayLanguage`:
   *
   * - `locale.displayCountry`:
   *
   * - `locale.country`:
   *
   * - `locale.ISO3Language`:
   *
   * - `locale.ISO3Country`:
   *
   * - `contextPath`:
   *
   * @return OK
   */
  confirmRegistrationUsingGET(params: UserControllerService.ConfirmRegistrationUsingGETParams): __Observable<string> {
    return this.confirmRegistrationUsingGETResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `UserControllerService.ResendTokenUsingGETParams` containing the following parameters:
   *
   * - `userPrincipal.name`:
   *
   * - `secure`:
   *
   * - `remoteUser`:
   *
   * - `principal`:
   *
   * - `locale.variant`:
   *
   * - `locale.unicodeLocaleKeys`:
   *
   * - `locale.unicodeLocaleAttributes`:
   *
   * - `locale.script`:
   *
   * - `locale.language`:
   *
   * - `locale.displayVariant`:
   *
   * - `locale.displayScript`:
   *
   * - `locale.displayName`:
   *
   * - `locale.displayLanguage`:
   *
   * - `locale.displayCountry`:
   *
   * - `locale.country`:
   *
   * - `locale.ISO3Language`:
   *
   * - `locale.ISO3Country`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `contextPath`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  resendTokenUsingGETResponse(params: UserControllerService.ResendTokenUsingGETParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userPrincipalName != null) __params = __params.set('userPrincipal.name', params.userPrincipalName.toString());
    if (params.secure != null) __params = __params.set('secure', params.secure.toString());
    if (params.remoteUser != null) __params = __params.set('remoteUser', params.remoteUser.toString());
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.localeVariant != null) __params = __params.set('locale.variant', params.localeVariant.toString());
    (params.localeUnicodeLocaleKeys || []).forEach(val => {if (val != null) __params = __params.append('locale.unicodeLocaleKeys', val.toString())});
    (params.localeUnicodeLocaleAttributes || []).forEach(val => {if (val != null) __params = __params.append('locale.unicodeLocaleAttributes', val.toString())});
    if (params.localeScript != null) __params = __params.set('locale.script', params.localeScript.toString());
    if (params.localeLanguage != null) __params = __params.set('locale.language', params.localeLanguage.toString());
    if (params.localeDisplayVariant != null) __params = __params.set('locale.displayVariant', params.localeDisplayVariant.toString());
    if (params.localeDisplayScript != null) __params = __params.set('locale.displayScript', params.localeDisplayScript.toString());
    if (params.localeDisplayName != null) __params = __params.set('locale.displayName', params.localeDisplayName.toString());
    if (params.localeDisplayLanguage != null) __params = __params.set('locale.displayLanguage', params.localeDisplayLanguage.toString());
    if (params.localeDisplayCountry != null) __params = __params.set('locale.displayCountry', params.localeDisplayCountry.toString());
    if (params.localeCountry != null) __params = __params.set('locale.country', params.localeCountry.toString());
    if (params.localeISO3Language != null) __params = __params.set('locale.ISO3Language', params.localeISO3Language.toString());
    if (params.localeISO3Country != null) __params = __params.set('locale.ISO3Country', params.localeISO3Country.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.contextPath != null) __params = __params.set('contextPath', params.contextPath.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/resendToken`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.ResendTokenUsingGETParams` containing the following parameters:
   *
   * - `userPrincipal.name`:
   *
   * - `secure`:
   *
   * - `remoteUser`:
   *
   * - `principal`:
   *
   * - `locale.variant`:
   *
   * - `locale.unicodeLocaleKeys`:
   *
   * - `locale.unicodeLocaleAttributes`:
   *
   * - `locale.script`:
   *
   * - `locale.language`:
   *
   * - `locale.displayVariant`:
   *
   * - `locale.displayScript`:
   *
   * - `locale.displayName`:
   *
   * - `locale.displayLanguage`:
   *
   * - `locale.displayCountry`:
   *
   * - `locale.country`:
   *
   * - `locale.ISO3Language`:
   *
   * - `locale.ISO3Country`:
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `contextPath`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  resendTokenUsingGET(params: UserControllerService.ResendTokenUsingGETParams): __Observable<string> {
    return this.resendTokenUsingGETResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `UserControllerService.ResetPasswordUsingPOSTParams` containing the following parameters:
   *
   * - `userPrincipal.name`:
   *
   * - `secure`:
   *
   * - `remoteUser`:
   *
   * - `principal`:
   *
   * - `locale.variant`:
   *
   * - `locale.unicodeLocaleKeys`:
   *
   * - `locale.unicodeLocaleAttributes`:
   *
   * - `locale.script`:
   *
   * - `locale.language`:
   *
   * - `locale.displayVariant`:
   *
   * - `locale.displayScript`:
   *
   * - `locale.displayName`:
   *
   * - `locale.displayLanguage`:
   *
   * - `locale.displayCountry`:
   *
   * - `locale.country`:
   *
   * - `locale.ISO3Language`:
   *
   * - `locale.ISO3Country`:
   *
   * - `emailMap`: emailMap
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `contextPath`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  resetPasswordUsingPOSTResponse(params: UserControllerService.ResetPasswordUsingPOSTParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userPrincipalName != null) __params = __params.set('userPrincipal.name', params.userPrincipalName.toString());
    if (params.secure != null) __params = __params.set('secure', params.secure.toString());
    if (params.remoteUser != null) __params = __params.set('remoteUser', params.remoteUser.toString());
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.localeVariant != null) __params = __params.set('locale.variant', params.localeVariant.toString());
    (params.localeUnicodeLocaleKeys || []).forEach(val => {if (val != null) __params = __params.append('locale.unicodeLocaleKeys', val.toString())});
    (params.localeUnicodeLocaleAttributes || []).forEach(val => {if (val != null) __params = __params.append('locale.unicodeLocaleAttributes', val.toString())});
    if (params.localeScript != null) __params = __params.set('locale.script', params.localeScript.toString());
    if (params.localeLanguage != null) __params = __params.set('locale.language', params.localeLanguage.toString());
    if (params.localeDisplayVariant != null) __params = __params.set('locale.displayVariant', params.localeDisplayVariant.toString());
    if (params.localeDisplayScript != null) __params = __params.set('locale.displayScript', params.localeDisplayScript.toString());
    if (params.localeDisplayName != null) __params = __params.set('locale.displayName', params.localeDisplayName.toString());
    if (params.localeDisplayLanguage != null) __params = __params.set('locale.displayLanguage', params.localeDisplayLanguage.toString());
    if (params.localeDisplayCountry != null) __params = __params.set('locale.displayCountry', params.localeDisplayCountry.toString());
    if (params.localeCountry != null) __params = __params.set('locale.country', params.localeCountry.toString());
    if (params.localeISO3Language != null) __params = __params.set('locale.ISO3Language', params.localeISO3Language.toString());
    if (params.localeISO3Country != null) __params = __params.set('locale.ISO3Country', params.localeISO3Country.toString());
    __body = params.emailMap;
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.contextPath != null) __params = __params.set('contextPath', params.contextPath.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user/resetPassword`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `UserControllerService.ResetPasswordUsingPOSTParams` containing the following parameters:
   *
   * - `userPrincipal.name`:
   *
   * - `secure`:
   *
   * - `remoteUser`:
   *
   * - `principal`:
   *
   * - `locale.variant`:
   *
   * - `locale.unicodeLocaleKeys`:
   *
   * - `locale.unicodeLocaleAttributes`:
   *
   * - `locale.script`:
   *
   * - `locale.language`:
   *
   * - `locale.displayVariant`:
   *
   * - `locale.displayScript`:
   *
   * - `locale.displayName`:
   *
   * - `locale.displayLanguage`:
   *
   * - `locale.displayCountry`:
   *
   * - `locale.country`:
   *
   * - `locale.ISO3Language`:
   *
   * - `locale.ISO3Country`:
   *
   * - `emailMap`: emailMap
   *
   * - `details`:
   *
   * - `credentials`:
   *
   * - `contextPath`:
   *
   * - `authorities[0].authority`:
   *
   * - `authenticated`:
   *
   * @return OK
   */
  resetPasswordUsingPOST(params: UserControllerService.ResetPasswordUsingPOSTParams): __Observable<string> {
    return this.resetPasswordUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for loginUsingGET
   */
  export interface LoginUsingGETParams {
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for getUserByAuthUsingGET
   */
  export interface GetUserByAuthUsingGETParams {
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for patchUserByAuthUsingPATCH
   */
  export interface PatchUserByAuthUsingPATCHParams {

    /**
     * userDTO
     */
    userDTO: UserDTO;
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for registrationUsingPOST
   */
  export interface RegistrationUsingPOSTParams {

    /**
     * userDTO
     */
    userDTO: UserDTO;
    userPrincipalName?: string;
    secure?: boolean;
    remoteUser?: string;
    principal?: {};
    objectName?: string;
    nestedPath?: string;
    localeVariant?: string;
    localeUnicodeLocaleKeys?: Array<string>;
    localeUnicodeLocaleAttributes?: Array<string>;
    localeScript?: string;
    localeLanguage?: string;
    localeDisplayVariant?: string;
    localeDisplayScript?: string;
    localeDisplayName?: string;
    localeDisplayLanguage?: string;
    localeDisplayCountry?: string;
    localeCountry?: string;
    localeISO3Language?: string;
    localeISO3Country?: string;
    globalErrors0ObjectName?: string;
    globalErrors0DefaultMessage?: string;
    globalErrors0Codes?: Array<string>;
    globalErrors0Code?: string;
    globalErrors0Arguments?: Array<{}>;
    globalErrorCount?: number;
    globalErrorObjectName?: string;
    globalErrorDefaultMessage?: string;
    globalErrorCodes?: Array<string>;
    globalErrorCode?: string;
    globalErrorArguments?: Array<{}>;
    fieldErrors0RejectedValue?: {};
    fieldErrors0ObjectName?: string;
    fieldErrors0Field?: string;
    fieldErrors0DefaultMessage?: string;
    fieldErrors0Codes?: Array<string>;
    fieldErrors0Code?: string;
    fieldErrors0BindingFailure?: boolean;
    fieldErrors0Arguments?: Array<{}>;
    fieldErrorCount?: number;
    fieldErrorRejectedValue?: {};
    fieldErrorObjectName?: string;
    fieldErrorField?: string;
    fieldErrorDefaultMessage?: string;
    fieldErrorCodes?: Array<string>;
    fieldErrorCode?: string;
    fieldErrorBindingFailure?: boolean;
    fieldErrorArguments?: Array<{}>;
    errorCount?: number;
    details?: {};
    credentials?: {};
    contextPath?: string;
    authorities0Authority?: string;
    authenticated?: boolean;
    allErrors0ObjectName?: string;
    allErrors0DefaultMessage?: string;
    allErrors0Codes?: Array<string>;
    allErrors0Code?: string;
    allErrors0Arguments?: Array<{}>;
  }

  /**
   * Parameters for confirmRegistrationUsingGET
   */
  export interface ConfirmRegistrationUsingGETParams {

    /**
     * token
     */
    token: string;
    userPrincipalName?: string;
    secure?: boolean;
    remoteUser?: string;
    localeVariant?: string;
    localeUnicodeLocaleKeys?: Array<string>;
    localeUnicodeLocaleAttributes?: Array<string>;
    localeScript?: string;
    localeLanguage?: string;
    localeDisplayVariant?: string;
    localeDisplayScript?: string;
    localeDisplayName?: string;
    localeDisplayLanguage?: string;
    localeDisplayCountry?: string;
    localeCountry?: string;
    localeISO3Language?: string;
    localeISO3Country?: string;
    contextPath?: string;
  }

  /**
   * Parameters for resendTokenUsingGET
   */
  export interface ResendTokenUsingGETParams {
    userPrincipalName?: string;
    secure?: boolean;
    remoteUser?: string;
    principal?: {};
    localeVariant?: string;
    localeUnicodeLocaleKeys?: Array<string>;
    localeUnicodeLocaleAttributes?: Array<string>;
    localeScript?: string;
    localeLanguage?: string;
    localeDisplayVariant?: string;
    localeDisplayScript?: string;
    localeDisplayName?: string;
    localeDisplayLanguage?: string;
    localeDisplayCountry?: string;
    localeCountry?: string;
    localeISO3Language?: string;
    localeISO3Country?: string;
    details?: {};
    credentials?: {};
    contextPath?: string;
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for resetPasswordUsingPOST
   */
  export interface ResetPasswordUsingPOSTParams {
    userPrincipalName?: string;
    secure?: boolean;
    remoteUser?: string;
    principal?: {};
    localeVariant?: string;
    localeUnicodeLocaleKeys?: Array<string>;
    localeUnicodeLocaleAttributes?: Array<string>;
    localeScript?: string;
    localeLanguage?: string;
    localeDisplayVariant?: string;
    localeDisplayScript?: string;
    localeDisplayName?: string;
    localeDisplayLanguage?: string;
    localeDisplayCountry?: string;
    localeCountry?: string;
    localeISO3Language?: string;
    localeISO3Country?: string;

    /**
     * emailMap
     */
    emailMap?: {};
    details?: {};
    credentials?: {};
    contextPath?: string;
    authorities0Authority?: string;
    authenticated?: boolean;
  }
}

export { UserControllerService }

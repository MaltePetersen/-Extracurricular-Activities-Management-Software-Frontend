/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AfterSchoolCareDTO } from '../models/after-school-care-dto';
import { AttendanceInputDTO } from '../models/attendance-input-dto';
import { ChildDTO } from '../models/child-dto';
import { UserDTO } from '../models/user-dto';
import { IUserDTO } from '../models/iuser-dto';
import { SchoolDTO } from '../models/school-dto';

/**
 * Parent Controller
 */
@Injectable({
  providedIn: 'root',
})
class ParentControllerService extends __BaseService {
  static readonly getAfterSchoolCaresUsingGET1Path = '/api/parent/after_school_cares';
  static readonly getAfterSchoolCaresTypesUsingGETPath = '/api/parent/after_school_cares/types';
  static readonly addAttendanceUsingPOSTPath = '/api/parent/after_school_cares/{afterSchoolCareId}/attendance';
  static readonly getAfterSchoolCareUsingGET1Path = '/api/parent/after_school_cares/{id}';
  static readonly deleteAttendanceUsingDELETEPath = '/api/parent/attendance/{id}';
  static readonly isParentUsingGETPath = '/api/parent/authority';
  static readonly getBookedAfterSchoolCaresUsingGETPath = '/api/parent/booked_after_school_cares';
  static readonly createChildUsingPOSTPath = '/api/parent/child';
  static readonly getChildUsingGETPath = '/api/parent/child/{username}';
  static readonly deleteChildUsingDELETEPath = '/api/parent/child/{username}';
  static readonly updateChildUsingPATCHPath = '/api/parent/child/{username}';
  static readonly getChildsUsingGETPath = '/api/parent/children';
  static readonly getSchoolsUsingGET1Path = '/api/parent/schools';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ParentControllerService.GetAfterSchoolCaresUsingGET1Params` containing the following parameters:
   *
   * - `type`: type
   *
   * - `startDate`: startDate
   *
   * - `school`: school
   *
   * - `endDate`: endDate
   *
   * @return OK
   */
  getAfterSchoolCaresUsingGET1Response(params: ParentControllerService.GetAfterSchoolCaresUsingGET1Params): __Observable<__StrictHttpResponse<Array<AfterSchoolCareDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.startDate != null) __params = __params.set('startDate', params.startDate.toString());
    if (params.school != null) __params = __params.set('school', params.school.toString());
    if (params.endDate != null) __params = __params.set('endDate', params.endDate.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/parent/after_school_cares`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AfterSchoolCareDTO>>;
      })
    );
  }
  /**
   * @param params The `ParentControllerService.GetAfterSchoolCaresUsingGET1Params` containing the following parameters:
   *
   * - `type`: type
   *
   * - `startDate`: startDate
   *
   * - `school`: school
   *
   * - `endDate`: endDate
   *
   * @return OK
   */
  getAfterSchoolCaresUsingGET1(params: ParentControllerService.GetAfterSchoolCaresUsingGET1Params): __Observable<Array<AfterSchoolCareDTO>> {
    return this.getAfterSchoolCaresUsingGET1Response(params).pipe(
      __map(_r => _r.body as Array<AfterSchoolCareDTO>)
    );
  }

  /**
   * @return OK
   */
  getAfterSchoolCaresTypesUsingGETResponse(): __Observable<__StrictHttpResponse<{[key: string]: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/parent/after_school_cares/types`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: string}>;
      })
    );
  }
  /**
   * @return OK
   */
  getAfterSchoolCaresTypesUsingGET(): __Observable<{[key: string]: string}> {
    return this.getAfterSchoolCaresTypesUsingGETResponse().pipe(
      __map(_r => _r.body as {[key: string]: string})
    );
  }

  /**
   * @param params The `ParentControllerService.AddAttendanceUsingPOSTParams` containing the following parameters:
   *
   * - `attendanceInputDTO`: attendanceInputDTO
   *
   * - `afterSchoolCareId`: afterSchoolCareId
   *
   * @return Created
   */
  addAttendanceUsingPOSTResponse(params: ParentControllerService.AddAttendanceUsingPOSTParams): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.attendanceInputDTO;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/parent/after_school_cares/${params.afterSchoolCareId}/attendance`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AfterSchoolCareDTO>;
      })
    );
  }
  /**
   * @param params The `ParentControllerService.AddAttendanceUsingPOSTParams` containing the following parameters:
   *
   * - `attendanceInputDTO`: attendanceInputDTO
   *
   * - `afterSchoolCareId`: afterSchoolCareId
   *
   * @return Created
   */
  addAttendanceUsingPOST(params: ParentControllerService.AddAttendanceUsingPOSTParams): __Observable<AfterSchoolCareDTO> {
    return this.addAttendanceUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getAfterSchoolCareUsingGET1Response(id: number): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/parent/after_school_cares/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AfterSchoolCareDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getAfterSchoolCareUsingGET1(id: number): __Observable<AfterSchoolCareDTO> {
    return this.getAfterSchoolCareUsingGET1Response(id).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  deleteAttendanceUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/parent/attendance/${id}`,
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
   * @param id id
   * @return OK
   */
  deleteAttendanceUsingDELETE(id: number): __Observable<string> {
    return this.deleteAttendanceUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `ParentControllerService.IsParentUsingGETParams` containing the following parameters:
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
   */
  isParentUsingGETResponse(params: ParentControllerService.IsParentUsingGETParams): __Observable<__StrictHttpResponse<null>> {
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
      this.rootUrl + `/api/parent/authority`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ParentControllerService.IsParentUsingGETParams` containing the following parameters:
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
   */
  isParentUsingGET(params: ParentControllerService.IsParentUsingGETParams): __Observable<null> {
    return this.isParentUsingGETResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ParentControllerService.GetBookedAfterSchoolCaresUsingGETParams` containing the following parameters:
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
  getBookedAfterSchoolCaresUsingGETResponse(params: ParentControllerService.GetBookedAfterSchoolCaresUsingGETParams): __Observable<__StrictHttpResponse<Array<AfterSchoolCareDTO>>> {
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
      this.rootUrl + `/api/parent/booked_after_school_cares`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AfterSchoolCareDTO>>;
      })
    );
  }
  /**
   * @param params The `ParentControllerService.GetBookedAfterSchoolCaresUsingGETParams` containing the following parameters:
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
  getBookedAfterSchoolCaresUsingGET(params: ParentControllerService.GetBookedAfterSchoolCaresUsingGETParams): __Observable<Array<AfterSchoolCareDTO>> {
    return this.getBookedAfterSchoolCaresUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<AfterSchoolCareDTO>)
    );
  }

  /**
   * @param params The `ParentControllerService.CreateChildUsingPOSTParams` containing the following parameters:
   *
   * - `childDTO`: childDTO
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
   * @return Created
   */
  createChildUsingPOSTResponse(params: ParentControllerService.CreateChildUsingPOSTParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.childDTO;
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
      this.rootUrl + `/api/parent/child`,
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
   * @param params The `ParentControllerService.CreateChildUsingPOSTParams` containing the following parameters:
   *
   * - `childDTO`: childDTO
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
   * @return Created
   */
  createChildUsingPOST(params: ParentControllerService.CreateChildUsingPOSTParams): __Observable<string> {
    return this.createChildUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param username username
   * @return OK
   */
  getChildUsingGETResponse(username: string): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/parent/child/${username}`,
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
   * @param username username
   * @return OK
   */
  getChildUsingGET(username: string): __Observable<UserDTO> {
    return this.getChildUsingGETResponse(username).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param params The `ParentControllerService.DeleteChildUsingDELETEParams` containing the following parameters:
   *
   * - `username`: username
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
  deleteChildUsingDELETEResponse(params: ParentControllerService.DeleteChildUsingDELETEParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/parent/child/${params.username}`,
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
   * @param params The `ParentControllerService.DeleteChildUsingDELETEParams` containing the following parameters:
   *
   * - `username`: username
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
  deleteChildUsingDELETE(params: ParentControllerService.DeleteChildUsingDELETEParams): __Observable<string> {
    return this.deleteChildUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `ParentControllerService.UpdateChildUsingPATCHParams` containing the following parameters:
   *
   * - `username`: username
   *
   * - `update`: update
   *
   * @return OK
   */
  updateChildUsingPATCHResponse(params: ParentControllerService.UpdateChildUsingPATCHParams): __Observable<__StrictHttpResponse<IUserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.update;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/parent/child/${params.username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IUserDTO>;
      })
    );
  }
  /**
   * @param params The `ParentControllerService.UpdateChildUsingPATCHParams` containing the following parameters:
   *
   * - `username`: username
   *
   * - `update`: update
   *
   * @return OK
   */
  updateChildUsingPATCH(params: ParentControllerService.UpdateChildUsingPATCHParams): __Observable<IUserDTO> {
    return this.updateChildUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as IUserDTO)
    );
  }

  /**
   * @param params The `ParentControllerService.GetChildsUsingGETParams` containing the following parameters:
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
  getChildsUsingGETResponse(params: ParentControllerService.GetChildsUsingGETParams): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
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
      this.rootUrl + `/api/parent/children`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * @param params The `ParentControllerService.GetChildsUsingGETParams` containing the following parameters:
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
  getChildsUsingGET(params: ParentControllerService.GetChildsUsingGETParams): __Observable<Array<UserDTO>> {
    return this.getChildsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * @return OK
   */
  getSchoolsUsingGET1Response(): __Observable<__StrictHttpResponse<Array<SchoolDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/parent/schools`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SchoolDTO>>;
      })
    );
  }
  /**
   * @return OK
   */
  getSchoolsUsingGET1(): __Observable<Array<SchoolDTO>> {
    return this.getSchoolsUsingGET1Response().pipe(
      __map(_r => _r.body as Array<SchoolDTO>)
    );
  }
}

module ParentControllerService {

  /**
   * Parameters for getAfterSchoolCaresUsingGET1
   */
  export interface GetAfterSchoolCaresUsingGET1Params {

    /**
     * type
     */
    type?: number;

    /**
     * startDate
     */
    startDate?: string;

    /**
     * school
     */
    school?: number;

    /**
     * endDate
     */
    endDate?: string;
  }

  /**
   * Parameters for addAttendanceUsingPOST
   */
  export interface AddAttendanceUsingPOSTParams {

    /**
     * attendanceInputDTO
     */
    attendanceInputDTO: AttendanceInputDTO;

    /**
     * afterSchoolCareId
     */
    afterSchoolCareId: number;
  }

  /**
   * Parameters for isParentUsingGET
   */
  export interface IsParentUsingGETParams {
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for getBookedAfterSchoolCaresUsingGET
   */
  export interface GetBookedAfterSchoolCaresUsingGETParams {
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for createChildUsingPOST
   */
  export interface CreateChildUsingPOSTParams {

    /**
     * childDTO
     */
    childDTO: ChildDTO;
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
   * Parameters for deleteChildUsingDELETE
   */
  export interface DeleteChildUsingDELETEParams {

    /**
     * username
     */
    username: string;
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for updateChildUsingPATCH
   */
  export interface UpdateChildUsingPATCHParams {

    /**
     * username
     */
    username: string;

    /**
     * update
     */
    update: {[key: string]: string};
  }

  /**
   * Parameters for getChildsUsingGET
   */
  export interface GetChildsUsingGETParams {
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }
}

export { ParentControllerService }

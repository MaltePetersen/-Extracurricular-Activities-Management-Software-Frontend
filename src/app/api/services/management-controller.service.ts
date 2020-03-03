/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AfterSchoolCareDTO } from '../models/after-school-care-dto';
import { AttendanceDTO } from '../models/attendance-dto';
import { UserDTO } from '../models/user-dto';
import { SchoolDTO } from '../models/school-dto';
import { School } from '../models/school';

/**
 * Management Controller
 */
@Injectable({
  providedIn: 'root',
})
class ManagementControllerService extends __BaseService {
  static readonly getAllAfterSchoolCareServicesUsingGETPath = '/api/management/afterSchoolCare';
  static readonly addAfterSchoolCareUsingPOSTPath = '/api/management/afterSchoolCare';
  static readonly geAfterSchoolCareByIdUsingGETPath = '/api/management/afterSchoolCare/{id}';
  static readonly deleteAfterSchoolCareUsingDELETE1Path = '/api/management/afterSchoolCare/{id}';
  static readonly patchAfterSchoolCareUsingPATCHPath = '/api/management/afterSchoolCare/{id}';
  static readonly getAttendanceListByIdUsingGETPath = '/api/management/attendanceList/{id}';
  static readonly deleteAttendanceListByIdUsingDELETEPath = '/api/management/attendanceList/{id}';
  static readonly patchAttendanceListByIdUsingPATCHPath = '/api/management/attendanceList/{id}';
  static readonly getAllAttendanceListsUsingGETPath = '/api/management/attendanceLists';
  static readonly getAverageParticipantsListUsingGETPath = '/api/management/averageList';
  static readonly getAttendanceListUsingGETPath = '/api/management/list';
  static readonly allNotEnabledUserUsingGETPath = '/api/management/not_enabled_users';
  static readonly getNumberOfParticipantsUsingGETPath = '/api/management/number_of_participants';
  static readonly registerUsingPOSTPath = '/api/management/register';
  static readonly createSchoolUsingPOSTPath = '/api/management/school';
  static readonly getSchoolUsingGET1Path = '/api/management/school/{id}';
  static readonly deleteSchoolUsingDELETEPath = '/api/management/school/{id}';
  static readonly changeSchoolUsingPATCHPath = '/api/management/school/{id}';
  static readonly getSchoolsUsingGET1Path = '/api/management/schools';
  static readonly getAllUsersUsingGETPath = '/api/management/users';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllAfterSchoolCareServicesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AfterSchoolCareDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/afterSchoolCare`,
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
   * @return OK
   */
  getAllAfterSchoolCareServicesUsingGET(): __Observable<Array<AfterSchoolCareDTO>> {
    return this.getAllAfterSchoolCareServicesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AfterSchoolCareDTO>)
    );
  }

  /**
   * @param afterSchoolCareDTO afterSchoolCareDTO
   * @return OK
   */
  addAfterSchoolCareUsingPOSTResponse(afterSchoolCareDTO?: AfterSchoolCareDTO): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = afterSchoolCareDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/management/afterSchoolCare`,
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
   * @param afterSchoolCareDTO afterSchoolCareDTO
   * @return OK
   */
  addAfterSchoolCareUsingPOST(afterSchoolCareDTO?: AfterSchoolCareDTO): __Observable<string> {
    return this.addAfterSchoolCareUsingPOSTResponse(afterSchoolCareDTO).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  geAfterSchoolCareByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/afterSchoolCare/${id}`,
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
  geAfterSchoolCareByIdUsingGET(id: number): __Observable<AfterSchoolCareDTO> {
    return this.geAfterSchoolCareByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  deleteAfterSchoolCareUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/management/afterSchoolCare/${id}`,
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
  deleteAfterSchoolCareUsingDELETE1(id: number): __Observable<string> {
    return this.deleteAfterSchoolCareUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `ManagementControllerService.PatchAfterSchoolCareUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `afterSchoolCareDTO`: afterSchoolCareDTO
   *
   * @return OK
   */
  patchAfterSchoolCareUsingPATCHResponse(params: ManagementControllerService.PatchAfterSchoolCareUsingPATCHParams): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.afterSchoolCareDTO;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/management/afterSchoolCare/${params.id}`,
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
   * @param params The `ManagementControllerService.PatchAfterSchoolCareUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `afterSchoolCareDTO`: afterSchoolCareDTO
   *
   * @return OK
   */
  patchAfterSchoolCareUsingPATCH(params: ManagementControllerService.PatchAfterSchoolCareUsingPATCHParams): __Observable<AfterSchoolCareDTO> {
    return this.patchAfterSchoolCareUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getAttendanceListByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<AttendanceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/attendanceList/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttendanceDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getAttendanceListByIdUsingGET(id: number): __Observable<AttendanceDTO> {
    return this.getAttendanceListByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as AttendanceDTO)
    );
  }

  /**
   * @param params The `ManagementControllerService.DeleteAttendanceListByIdUsingDELETEParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `newAttendanceList`: newAttendanceList
   *
   * @return OK
   */
  deleteAttendanceListByIdUsingDELETEResponse(params: ManagementControllerService.DeleteAttendanceListByIdUsingDELETEParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.newAttendanceList;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/management/attendanceList/${params.id}`,
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
   * @param params The `ManagementControllerService.DeleteAttendanceListByIdUsingDELETEParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `newAttendanceList`: newAttendanceList
   *
   * @return OK
   */
  deleteAttendanceListByIdUsingDELETE(params: ManagementControllerService.DeleteAttendanceListByIdUsingDELETEParams): __Observable<string> {
    return this.deleteAttendanceListByIdUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `ManagementControllerService.PatchAttendanceListByIdUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `attendanceDTO`: attendanceDTO
   *
   * @return OK
   */
  patchAttendanceListByIdUsingPATCHResponse(params: ManagementControllerService.PatchAttendanceListByIdUsingPATCHParams): __Observable<__StrictHttpResponse<AttendanceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.attendanceDTO;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/management/attendanceList/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttendanceDTO>;
      })
    );
  }
  /**
   * @param params The `ManagementControllerService.PatchAttendanceListByIdUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `attendanceDTO`: attendanceDTO
   *
   * @return OK
   */
  patchAttendanceListByIdUsingPATCH(params: ManagementControllerService.PatchAttendanceListByIdUsingPATCHParams): __Observable<AttendanceDTO> {
    return this.patchAttendanceListByIdUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as AttendanceDTO)
    );
  }

  /**
   * @return OK
   */
  getAllAttendanceListsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AttendanceDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/attendanceLists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AttendanceDTO>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllAttendanceListsUsingGET(): __Observable<Array<AttendanceDTO>> {
    return this.getAllAttendanceListsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AttendanceDTO>)
    );
  }

  /**
   * @return OK
   */
  getAverageParticipantsListUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/averageList`,
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
   * @return OK
   */
  getAverageParticipantsListUsingGET(): __Observable<string> {
    return this.getAverageParticipantsListUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @return OK
   */
  getAttendanceListUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/list`,
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
   * @return OK
   */
  getAttendanceListUsingGET(): __Observable<string> {
    return this.getAttendanceListUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @return OK
   */
  allNotEnabledUserUsingGETResponse(): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/not_enabled_users`,
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
   * @return OK
   */
  allNotEnabledUserUsingGET(): __Observable<Array<UserDTO>> {
    return this.allNotEnabledUserUsingGETResponse().pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * @return OK
   */
  getNumberOfParticipantsUsingGETResponse(): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/number_of_participants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @return OK
   */
  getNumberOfParticipantsUsingGET(): __Observable<number> {
    return this.getNumberOfParticipantsUsingGETResponse().pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param params The `ManagementControllerService.RegisterUsingPOSTParams` containing the following parameters:
   *
   * - `userDTO`: userDTO
   *
   * - `principal`:
   *
   * - `objectName`:
   *
   * - `nestedPath`:
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
  registerUsingPOSTResponse(params: ManagementControllerService.RegisterUsingPOSTParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.userDTO;
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.objectName != null) __params = __params.set('objectName', params.objectName.toString());
    if (params.nestedPath != null) __params = __params.set('nestedPath', params.nestedPath.toString());
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
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    if (params.allErrors0ObjectName != null) __params = __params.set('allErrors[0].objectName', params.allErrors0ObjectName.toString());
    if (params.allErrors0DefaultMessage != null) __params = __params.set('allErrors[0].defaultMessage', params.allErrors0DefaultMessage.toString());
    (params.allErrors0Codes || []).forEach(val => {if (val != null) __params = __params.append('allErrors[0].codes', val.toString())});
    if (params.allErrors0Code != null) __params = __params.set('allErrors[0].code', params.allErrors0Code.toString());
    (params.allErrors0Arguments || []).forEach(val => {if (val != null) __params = __params.append('allErrors[0].arguments', val.toString())});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/management/register`,
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
   * @param params The `ManagementControllerService.RegisterUsingPOSTParams` containing the following parameters:
   *
   * - `userDTO`: userDTO
   *
   * - `principal`:
   *
   * - `objectName`:
   *
   * - `nestedPath`:
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
  registerUsingPOST(params: ManagementControllerService.RegisterUsingPOSTParams): __Observable<string> {
    return this.registerUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param newSchool newSchool
   * @return Created
   */
  createSchoolUsingPOSTResponse(newSchool: School): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newSchool;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/management/school`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolDTO>;
      })
    );
  }
  /**
   * @param newSchool newSchool
   * @return Created
   */
  createSchoolUsingPOST(newSchool: School): __Observable<SchoolDTO> {
    return this.createSchoolUsingPOSTResponse(newSchool).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getSchoolUsingGET1Response(id: number): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/school/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getSchoolUsingGET1(id: number): __Observable<SchoolDTO> {
    return this.getSchoolUsingGET1Response(id).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * @param id id
   */
  deleteSchoolUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/management/school/${id}`,
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
   * @param id id
   */
  deleteSchoolUsingDELETE(id: number): __Observable<null> {
    return this.deleteSchoolUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ManagementControllerService.ChangeSchoolUsingPATCHParams` containing the following parameters:
   *
   * - `newSchool`: newSchool
   *
   * - `id`: id
   *
   * @return OK
   */
  changeSchoolUsingPATCHResponse(params: ManagementControllerService.ChangeSchoolUsingPATCHParams): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.newSchool;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/management/school/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SchoolDTO>;
      })
    );
  }
  /**
   * @param params The `ManagementControllerService.ChangeSchoolUsingPATCHParams` containing the following parameters:
   *
   * - `newSchool`: newSchool
   *
   * - `id`: id
   *
   * @return OK
   */
  changeSchoolUsingPATCH(params: ManagementControllerService.ChangeSchoolUsingPATCHParams): __Observable<SchoolDTO> {
    return this.changeSchoolUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as SchoolDTO)
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
      this.rootUrl + `/api/management/schools`,
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

  /**
   * @param type type
   * @return OK
   */
  getAllUsersUsingGETResponse(type?: number): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (type != null) __params = __params.set('type', type.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/management/users`,
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
   * @param type type
   * @return OK
   */
  getAllUsersUsingGET(type?: number): __Observable<Array<UserDTO>> {
    return this.getAllUsersUsingGETResponse(type).pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }
}

module ManagementControllerService {

  /**
   * Parameters for patchAfterSchoolCareUsingPATCH
   */
  export interface PatchAfterSchoolCareUsingPATCHParams {

    /**
     * id
     */
    id: number;

    /**
     * afterSchoolCareDTO
     */
    afterSchoolCareDTO: AfterSchoolCareDTO;
  }

  /**
   * Parameters for deleteAttendanceListByIdUsingDELETE
   */
  export interface DeleteAttendanceListByIdUsingDELETEParams {

    /**
     * id
     */
    id: number;

    /**
     * newAttendanceList
     */
    newAttendanceList?: AttendanceDTO;
  }

  /**
   * Parameters for patchAttendanceListByIdUsingPATCH
   */
  export interface PatchAttendanceListByIdUsingPATCHParams {

    /**
     * id
     */
    id: number;

    /**
     * attendanceDTO
     */
    attendanceDTO: AttendanceDTO;
  }

  /**
   * Parameters for registerUsingPOST
   */
  export interface RegisterUsingPOSTParams {

    /**
     * userDTO
     */
    userDTO: UserDTO;
    principal?: {};
    objectName?: string;
    nestedPath?: string;
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
    authorities0Authority?: string;
    authenticated?: boolean;
    allErrors0ObjectName?: string;
    allErrors0DefaultMessage?: string;
    allErrors0Codes?: Array<string>;
    allErrors0Code?: string;
    allErrors0Arguments?: Array<{}>;
  }

  /**
   * Parameters for changeSchoolUsingPATCH
   */
  export interface ChangeSchoolUsingPATCHParams {

    /**
     * newSchool
     */
    newSchool: SchoolDTO;

    /**
     * id
     */
    id: number;
  }
}

export { ManagementControllerService }

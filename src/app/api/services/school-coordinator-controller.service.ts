/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AfterSchoolCareDTO } from '../models/after-school-care-dto';
import { ChildDTO } from '../models/child-dto';
import { SchoolDTO } from '../models/school-dto';
import { School } from '../models/school';

/**
 * School Coordinator Controller
 */
@Injectable({
  providedIn: 'root',
})
class SchoolCoordinatorControllerService extends __BaseService {
  static readonly getWorkingGroupByIdUsingGETPath = '/api/sc/ag';
  static readonly addAWorkingGroupUsingPOSTPath = '/api/sc/ag';
  static readonly removeWorkingGroupUsingDELETEPath = '/api/sc/ag';
  static readonly updateAgUsingPATCHPath = '/api/sc/ag';
  static readonly updateChildUsingPOSTPath = '/api/sc/ag/child';
  static readonly getMyWorkingGroupUsingGETPath = '/api/sc/ags';
  static readonly createSchoolUsingPOST2Path = '/api/sc/school';
  static readonly getSchoolUsingGET3Path = '/api/sc/school/{id}';
  static readonly deleteSchoolUsingDELETE2Path = '/api/sc/school/{id}';
  static readonly changeSchoolUsingPATCH2Path = '/api/sc/school/{id}';
  static readonly getSchoolsUsingGET3Path = '/api/sc/schools';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `SchoolCoordinatorControllerService.GetWorkingGroupByIdUsingGETParams` containing the following parameters:
   *
   * - `id`: id
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
  getWorkingGroupByIdUsingGETResponse(params: SchoolCoordinatorControllerService.GetWorkingGroupByIdUsingGETParams): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/sc/ag`,
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
   * @param params The `SchoolCoordinatorControllerService.GetWorkingGroupByIdUsingGETParams` containing the following parameters:
   *
   * - `id`: id
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
  getWorkingGroupByIdUsingGET(params: SchoolCoordinatorControllerService.GetWorkingGroupByIdUsingGETParams): __Observable<AfterSchoolCareDTO> {
    return this.getWorkingGroupByIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param afterSchoolCareDTO afterSchoolCareDTO
   * @return OK
   */
  addAWorkingGroupUsingPOSTResponse(afterSchoolCareDTO: AfterSchoolCareDTO): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = afterSchoolCareDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/sc/ag`,
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
   * @param afterSchoolCareDTO afterSchoolCareDTO
   * @return OK
   */
  addAWorkingGroupUsingPOST(afterSchoolCareDTO: AfterSchoolCareDTO): __Observable<AfterSchoolCareDTO> {
    return this.addAWorkingGroupUsingPOSTResponse(afterSchoolCareDTO).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param params The `SchoolCoordinatorControllerService.RemoveWorkingGroupUsingDELETEParams` containing the following parameters:
   *
   * - `id`: id
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
  removeWorkingGroupUsingDELETEResponse(params: SchoolCoordinatorControllerService.RemoveWorkingGroupUsingDELETEParams): __Observable<__StrictHttpResponse<string>> {
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
      this.rootUrl + `/api/sc/ag`,
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
   * @param params The `SchoolCoordinatorControllerService.RemoveWorkingGroupUsingDELETEParams` containing the following parameters:
   *
   * - `id`: id
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
  removeWorkingGroupUsingDELETE(params: SchoolCoordinatorControllerService.RemoveWorkingGroupUsingDELETEParams): __Observable<string> {
    return this.removeWorkingGroupUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `SchoolCoordinatorControllerService.UpdateAgUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `afterSchoolCareDTO`: afterSchoolCareDTO
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
  updateAgUsingPATCHResponse(params: SchoolCoordinatorControllerService.UpdateAgUsingPATCHParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.afterSchoolCareDTO;
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/sc/ag`,
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
   * @param params The `SchoolCoordinatorControllerService.UpdateAgUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `afterSchoolCareDTO`: afterSchoolCareDTO
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
  updateAgUsingPATCH(params: SchoolCoordinatorControllerService.UpdateAgUsingPATCHParams): __Observable<string> {
    return this.updateAgUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `SchoolCoordinatorControllerService.UpdateChildUsingPOSTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `childDTO`: childDTO
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
  updateChildUsingPOSTResponse(params: SchoolCoordinatorControllerService.UpdateChildUsingPOSTParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.childDTO;
    if (params.principal != null) __params = __params.set('principal', params.principal.toString());
    if (params.details != null) __params = __params.set('details', params.details.toString());
    if (params.credentials != null) __params = __params.set('credentials', params.credentials.toString());
    if (params.authorities0Authority != null) __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
    if (params.authenticated != null) __params = __params.set('authenticated', params.authenticated.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/sc/ag/child`,
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
   * @param params The `SchoolCoordinatorControllerService.UpdateChildUsingPOSTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `childDTO`: childDTO
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
  updateChildUsingPOST(params: SchoolCoordinatorControllerService.UpdateChildUsingPOSTParams): __Observable<string> {
    return this.updateChildUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `SchoolCoordinatorControllerService.GetMyWorkingGroupUsingGETParams` containing the following parameters:
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
  getMyWorkingGroupUsingGETResponse(params: SchoolCoordinatorControllerService.GetMyWorkingGroupUsingGETParams): __Observable<__StrictHttpResponse<Array<AfterSchoolCareDTO>>> {
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
      this.rootUrl + `/api/sc/ags`,
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
   * @param params The `SchoolCoordinatorControllerService.GetMyWorkingGroupUsingGETParams` containing the following parameters:
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
  getMyWorkingGroupUsingGET(params: SchoolCoordinatorControllerService.GetMyWorkingGroupUsingGETParams): __Observable<Array<AfterSchoolCareDTO>> {
    return this.getMyWorkingGroupUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<AfterSchoolCareDTO>)
    );
  }

  /**
   * @param newSchool newSchool
   * @return Created
   */
  createSchoolUsingPOST2Response(newSchool: School): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newSchool;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/sc/school`,
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
  createSchoolUsingPOST2(newSchool: School): __Observable<SchoolDTO> {
    return this.createSchoolUsingPOST2Response(newSchool).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getSchoolUsingGET3Response(id: number): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/sc/school/${id}`,
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
  getSchoolUsingGET3(id: number): __Observable<SchoolDTO> {
    return this.getSchoolUsingGET3Response(id).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * @param id id
   */
  deleteSchoolUsingDELETE2Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/sc/school/${id}`,
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
  deleteSchoolUsingDELETE2(id: number): __Observable<null> {
    return this.deleteSchoolUsingDELETE2Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `SchoolCoordinatorControllerService.ChangeSchoolUsingPATCH2Params` containing the following parameters:
   *
   * - `newSchool`: newSchool
   *
   * - `id`: id
   *
   * @return OK
   */
  changeSchoolUsingPATCH2Response(params: SchoolCoordinatorControllerService.ChangeSchoolUsingPATCH2Params): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.newSchool;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/sc/school/${params.id}`,
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
   * @param params The `SchoolCoordinatorControllerService.ChangeSchoolUsingPATCH2Params` containing the following parameters:
   *
   * - `newSchool`: newSchool
   *
   * - `id`: id
   *
   * @return OK
   */
  changeSchoolUsingPATCH2(params: SchoolCoordinatorControllerService.ChangeSchoolUsingPATCH2Params): __Observable<SchoolDTO> {
    return this.changeSchoolUsingPATCH2Response(params).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * @return OK
   */
  getSchoolsUsingGET3Response(): __Observable<__StrictHttpResponse<Array<SchoolDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/sc/schools`,
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
  getSchoolsUsingGET3(): __Observable<Array<SchoolDTO>> {
    return this.getSchoolsUsingGET3Response().pipe(
      __map(_r => _r.body as Array<SchoolDTO>)
    );
  }
}

module SchoolCoordinatorControllerService {

  /**
   * Parameters for getWorkingGroupByIdUsingGET
   */
  export interface GetWorkingGroupByIdUsingGETParams {

    /**
     * id
     */
    id: number;
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for removeWorkingGroupUsingDELETE
   */
  export interface RemoveWorkingGroupUsingDELETEParams {

    /**
     * id
     */
    id: number;
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for updateAgUsingPATCH
   */
  export interface UpdateAgUsingPATCHParams {

    /**
     * id
     */
    id: number;

    /**
     * afterSchoolCareDTO
     */
    afterSchoolCareDTO: AfterSchoolCareDTO;
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for updateChildUsingPOST
   */
  export interface UpdateChildUsingPOSTParams {

    /**
     * id
     */
    id: number;

    /**
     * childDTO
     */
    childDTO: ChildDTO;
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for getMyWorkingGroupUsingGET
   */
  export interface GetMyWorkingGroupUsingGETParams {
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }

  /**
   * Parameters for changeSchoolUsingPATCH2
   */
  export interface ChangeSchoolUsingPATCH2Params {

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

export { SchoolCoordinatorControllerService }

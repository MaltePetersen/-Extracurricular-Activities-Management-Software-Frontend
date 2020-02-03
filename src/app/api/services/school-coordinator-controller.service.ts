/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AfterSchoolCareDTO } from '../models/after-school-care-dto';

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
  static readonly getMyWorkingGroupUsingGETPath = '/api/sc/ags';

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
   * Parameters for getMyWorkingGroupUsingGET
   */
  export interface GetMyWorkingGroupUsingGETParams {
    principal?: {};
    details?: {};
    credentials?: {};
    authorities0Authority?: string;
    authenticated?: boolean;
  }
}

export { SchoolCoordinatorControllerService }

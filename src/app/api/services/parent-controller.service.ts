/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AfterSchoolCareDTO } from '../models/after-school-care-dto';
import { AfterSchoolCare } from '../models/after-school-care';
import { UserDTO } from '../models/user-dto';

/**
 * Parent Controller
 */
@Injectable({
  providedIn: 'root',
})
class ParentControllerService extends __BaseService {
  static readonly getAfterSchoolCaresUsingGET1Path = '/api/parent/after_school_cares';
  static readonly getAfterSchoolCareUsingGET1Path = '/api/parent/after_school_cares/{id}';
  static readonly isParentUsingGETPath = '/api/parent/authority';
  static readonly getBookedAfterSchoolCaresUsingGETPath = '/api/parent/booked_after_school_cares';
  static readonly createBookedAfterSchoolCareUsingPOSTPath = '/api/parent/booked_after_school_cares';
  static readonly deleteBookedAfterSchoolCareUsingDELETEPath = '/api/parent/booked_after_school_cares/{id}';
  static readonly changeBookedAfterSchoolCareUsingPATCHPath = '/api/parent/booked_after_school_cares/{id}';
  static readonly createChildUsingPOSTPath = '/api/parent/child';
  static readonly getChildUsingGETPath = '/api/parent/child/{id}';
  static readonly deleteChildUsingDELETEPath = '/api/parent/child/{id}';
  static readonly changeChildUsingPATCHPath = '/api/parent/child/{id}';
  static readonly getChildsUsingGETPath = '/api/parent/childs';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAfterSchoolCaresUsingGET1Response(): __Observable<__StrictHttpResponse<Array<AfterSchoolCareDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
   * @return OK
   */
  getAfterSchoolCaresUsingGET1(): __Observable<Array<AfterSchoolCareDTO>> {
    return this.getAfterSchoolCaresUsingGET1Response().pipe(
      __map(_r => _r.body as Array<AfterSchoolCareDTO>)
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
   * @return OK
   */
  getBookedAfterSchoolCaresUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AfterSchoolCareDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
   * @return OK
   */
  getBookedAfterSchoolCaresUsingGET(): __Observable<Array<AfterSchoolCareDTO>> {
    return this.getBookedAfterSchoolCaresUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AfterSchoolCareDTO>)
    );
  }

  /**
   * @param AfterSchoolCare AfterSchoolCare
   * @return Created
   */
  createBookedAfterSchoolCareUsingPOSTResponse(AfterSchoolCare: AfterSchoolCare): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AfterSchoolCare;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/parent/booked_after_school_cares`,
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
   * @param AfterSchoolCare AfterSchoolCare
   * @return Created
   */
  createBookedAfterSchoolCareUsingPOST(AfterSchoolCare: AfterSchoolCare): __Observable<string> {
    return this.createBookedAfterSchoolCareUsingPOSTResponse(AfterSchoolCare).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  deleteBookedAfterSchoolCareUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/parent/booked_after_school_cares/${id}`,
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
  deleteBookedAfterSchoolCareUsingDELETE(id: number): __Observable<string> {
    return this.deleteBookedAfterSchoolCareUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `ParentControllerService.ChangeBookedAfterSchoolCareUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `AfterSchoolCare`: AfterSchoolCare
   *
   * @return OK
   */
  changeBookedAfterSchoolCareUsingPATCHResponse(params: ParentControllerService.ChangeBookedAfterSchoolCareUsingPATCHParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.AfterSchoolCare;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/parent/booked_after_school_cares/${params.id}`,
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
   * @param params The `ParentControllerService.ChangeBookedAfterSchoolCareUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `AfterSchoolCare`: AfterSchoolCare
   *
   * @return OK
   */
  changeBookedAfterSchoolCareUsingPATCH(params: ParentControllerService.ChangeBookedAfterSchoolCareUsingPATCHParams): __Observable<string> {
    return this.changeBookedAfterSchoolCareUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param child child
   */
  createChildUsingPOSTResponse(child: UserDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = child;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/parent/child`,
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
   * @param child child
   */
  createChildUsingPOST(child: UserDTO): __Observable<null> {
    return this.createChildUsingPOSTResponse(child).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getChildUsingGETResponse(id: number): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/parent/child/${id}`,
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
   * @param id id
   * @return OK
   */
  getChildUsingGET(id: number): __Observable<UserDTO> {
    return this.getChildUsingGETResponse(id).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param id id
   */
  deleteChildUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/parent/child/${id}`,
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
  deleteChildUsingDELETE(id: number): __Observable<null> {
    return this.deleteChildUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ParentControllerService.ChangeChildUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `child`: child
   */
  changeChildUsingPATCHResponse(params: ParentControllerService.ChangeChildUsingPATCHParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.child;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/parent/child/${params.id}`,
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
   * @param params The `ParentControllerService.ChangeChildUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `child`: child
   */
  changeChildUsingPATCH(params: ParentControllerService.ChangeChildUsingPATCHParams): __Observable<null> {
    return this.changeChildUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return OK
   */
  getChildsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/parent/childs`,
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
  getChildsUsingGET(): __Observable<Array<UserDTO>> {
    return this.getChildsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }
}

module ParentControllerService {

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
   * Parameters for changeBookedAfterSchoolCareUsingPATCH
   */
  export interface ChangeBookedAfterSchoolCareUsingPATCHParams {

    /**
     * id
     */
    id: number;

    /**
     * AfterSchoolCare
     */
    AfterSchoolCare: AfterSchoolCare;
  }

  /**
   * Parameters for changeChildUsingPATCH
   */
  export interface ChangeChildUsingPATCHParams {

    /**
     * id
     */
    id: number;

    /**
     * child
     */
    child: UserDTO;
  }
}

export { ParentControllerService }

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
import { InvoiceDTO } from '../models/invoice-dto';
import { ISchool } from '../models/ischool';
import { School } from '../models/school';
import { SchoolDTO } from '../models/school-dto';

/**
 * Employee Controller
 */
@Injectable({
  providedIn: 'root',
})
class EmployeeControllerService extends __BaseService {
  static readonly getAfterSchoolCaresUsingGETPath = '/api/employee/after_school_cares';
  static readonly createAfterSchoolCareUsingPOSTPath = '/api/employee/after_school_cares';
  static readonly getAfterSchoolCareUsingGETPath = '/api/employee/after_school_cares/{id}';
  static readonly deleteAfterSchoolCareUsingDELETEPath = '/api/employee/after_school_cares/{id}';
  static readonly changeAfterSchoolCareUsingPATCHPath = '/api/employee/after_school_cares/{id}';
  static readonly createInvoiceUsingPOSTPath = '/api/employee/invoice';
  static readonly getInvoicesUsingGETPath = '/api/employee/invoice/{id}';
  static readonly deleteInvoiceUsingDELETEPath = '/api/employee/invoice/{id}';
  static readonly changeInvoiceUsingPATCHPath = '/api/employee/invoice/{id}';
  static readonly getInvoicesUsingGET1Path = '/api/employee/invoices';
  static readonly createSchoolUsingPOSTPath = '/api/employee/school';
  static readonly getSchoolUsingGETPath = '/api/employee/school/{id}';
  static readonly deleteSchoolUsingDELETEPath = '/api/employee/school/{id}';
  static readonly changeSchoolUsingPATCHPath = '/api/employee/school/{id}';
  static readonly getSchoolsUsingGETPath = '/api/employee/schools';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAfterSchoolCaresUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AfterSchoolCareDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/employee/after_school_cares`,
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
  getAfterSchoolCaresUsingGET(): __Observable<Array<AfterSchoolCareDTO>> {
    return this.getAfterSchoolCaresUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AfterSchoolCareDTO>)
    );
  }

  /**
   * @param newAfterSchoolCare newAfterSchoolCare
   * @return Created
   */
  createAfterSchoolCareUsingPOSTResponse(newAfterSchoolCare: AfterSchoolCare): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newAfterSchoolCare;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/employee/after_school_cares`,
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
   * @param newAfterSchoolCare newAfterSchoolCare
   * @return Created
   */
  createAfterSchoolCareUsingPOST(newAfterSchoolCare: AfterSchoolCare): __Observable<AfterSchoolCareDTO> {
    return this.createAfterSchoolCareUsingPOSTResponse(newAfterSchoolCare).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getAfterSchoolCareUsingGETResponse(id: number): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/employee/after_school_cares/${id}`,
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
  getAfterSchoolCareUsingGET(id: number): __Observable<AfterSchoolCareDTO> {
    return this.getAfterSchoolCareUsingGETResponse(id).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param id id
   */
  deleteAfterSchoolCareUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/employee/after_school_cares/${id}`,
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
  deleteAfterSchoolCareUsingDELETE(id: number): __Observable<null> {
    return this.deleteAfterSchoolCareUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmployeeControllerService.ChangeAfterSchoolCareUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `AfterSchoolCare`: AfterSchoolCare
   *
   * @return OK
   */
  changeAfterSchoolCareUsingPATCHResponse(params: EmployeeControllerService.ChangeAfterSchoolCareUsingPATCHParams): __Observable<__StrictHttpResponse<AfterSchoolCareDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.AfterSchoolCare;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/employee/after_school_cares/${params.id}`,
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
   * @param params The `EmployeeControllerService.ChangeAfterSchoolCareUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `AfterSchoolCare`: AfterSchoolCare
   *
   * @return OK
   */
  changeAfterSchoolCareUsingPATCH(params: EmployeeControllerService.ChangeAfterSchoolCareUsingPATCHParams): __Observable<AfterSchoolCareDTO> {
    return this.changeAfterSchoolCareUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as AfterSchoolCareDTO)
    );
  }

  /**
   * @param invoiceDTO invoiceDTO
   */
  createInvoiceUsingPOSTResponse(invoiceDTO: InvoiceDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = invoiceDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/employee/invoice`,
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
   * @param invoiceDTO invoiceDTO
   */
  createInvoiceUsingPOST(invoiceDTO: InvoiceDTO): __Observable<null> {
    return this.createInvoiceUsingPOSTResponse(invoiceDTO).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getInvoicesUsingGETResponse(id: number): __Observable<__StrictHttpResponse<InvoiceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/employee/invoice/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InvoiceDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getInvoicesUsingGET(id: number): __Observable<InvoiceDTO> {
    return this.getInvoicesUsingGETResponse(id).pipe(
      __map(_r => _r.body as InvoiceDTO)
    );
  }

  /**
   * @param id id
   */
  deleteInvoiceUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/employee/invoice/${id}`,
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
  deleteInvoiceUsingDELETE(id: number): __Observable<null> {
    return this.deleteInvoiceUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmployeeControllerService.ChangeInvoiceUsingPATCHParams` containing the following parameters:
   *
   * - `invoiceDTO`: invoiceDTO
   *
   * - `id`: id
   */
  changeInvoiceUsingPATCHResponse(params: EmployeeControllerService.ChangeInvoiceUsingPATCHParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.invoiceDTO;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/employee/invoice/${params.id}`,
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
   * @param params The `EmployeeControllerService.ChangeInvoiceUsingPATCHParams` containing the following parameters:
   *
   * - `invoiceDTO`: invoiceDTO
   *
   * - `id`: id
   */
  changeInvoiceUsingPATCH(params: EmployeeControllerService.ChangeInvoiceUsingPATCHParams): __Observable<null> {
    return this.changeInvoiceUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return OK
   */
  getInvoicesUsingGET1Response(): __Observable<__StrictHttpResponse<Array<InvoiceDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/employee/invoices`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<InvoiceDTO>>;
      })
    );
  }
  /**
   * @return OK
   */
  getInvoicesUsingGET1(): __Observable<Array<InvoiceDTO>> {
    return this.getInvoicesUsingGET1Response().pipe(
      __map(_r => _r.body as Array<InvoiceDTO>)
    );
  }

  /**
   * @param newSchool newSchool
   * @return Created
   */
  createSchoolUsingPOSTResponse(newSchool: School): __Observable<__StrictHttpResponse<ISchool>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newSchool;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/employee/school`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ISchool>;
      })
    );
  }
  /**
   * @param newSchool newSchool
   * @return Created
   */
  createSchoolUsingPOST(newSchool: School): __Observable<ISchool> {
    return this.createSchoolUsingPOSTResponse(newSchool).pipe(
      __map(_r => _r.body as ISchool)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getSchoolUsingGETResponse(id: number): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/employee/school/${id}`,
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
  getSchoolUsingGET(id: number): __Observable<SchoolDTO> {
    return this.getSchoolUsingGETResponse(id).pipe(
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
      this.rootUrl + `/api/employee/school/${id}`,
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
   * @param params The `EmployeeControllerService.ChangeSchoolUsingPATCHParams` containing the following parameters:
   *
   * - `newSchool`: newSchool
   *
   * - `id`: id
   *
   * @return OK
   */
  changeSchoolUsingPATCHResponse(params: EmployeeControllerService.ChangeSchoolUsingPATCHParams): __Observable<__StrictHttpResponse<SchoolDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.newSchool;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/employee/school/${params.id}`,
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
   * @param params The `EmployeeControllerService.ChangeSchoolUsingPATCHParams` containing the following parameters:
   *
   * - `newSchool`: newSchool
   *
   * - `id`: id
   *
   * @return OK
   */
  changeSchoolUsingPATCH(params: EmployeeControllerService.ChangeSchoolUsingPATCHParams): __Observable<SchoolDTO> {
    return this.changeSchoolUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as SchoolDTO)
    );
  }

  /**
   * @return OK
   */
  getSchoolsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<SchoolDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/employee/schools`,
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
  getSchoolsUsingGET(): __Observable<Array<SchoolDTO>> {
    return this.getSchoolsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<SchoolDTO>)
    );
  }
}

module EmployeeControllerService {

  /**
   * Parameters for changeAfterSchoolCareUsingPATCH
   */
  export interface ChangeAfterSchoolCareUsingPATCHParams {

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
   * Parameters for changeInvoiceUsingPATCH
   */
  export interface ChangeInvoiceUsingPATCHParams {

    /**
     * invoiceDTO
     */
    invoiceDTO: InvoiceDTO;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for changeSchoolUsingPATCH
   */
  export interface ChangeSchoolUsingPATCHParams {

    /**
     * newSchool
     */
    newSchool: School;

    /**
     * id
     */
    id: number;
  }
}

export { EmployeeControllerService }

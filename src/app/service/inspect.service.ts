import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInspectData } from '../types/DataInspect';
import { IReceiveBranch } from '../types/DataReceiveBranch';
import { IDeviceData } from '../types/DataDevice';
import { ITransactionData } from '../types/DataTransaction';
import { IDifferenceData } from '../types/DataDifferenceProcess';

@Injectable({
  providedIn: 'root',
})
export class InspectService {
  constructor(private http: HttpClient) {}

  getListInspect(): Observable<IInspectData> {
    return this.http.get<IInspectData>(
      `https://67b7dfb72bddacfb27103212.mockapi.io/api/test/inspect`
    );
  }

  getReceiveBranch(): Observable<IReceiveBranch> {
    return this.http.get<IReceiveBranch>(
      `https://67b7dfb72bddacfb27103212.mockapi.io/api/test/receive_branch`
    );
  }

  getListDevice(): Observable<IInspectData> {
    return this.http.get<IInspectData>(`http://localhost:3000/device`);
  }

  getDataTransactionbyOption(data: ITransactionData): Observable<IDifferenceData[]> {
    const {
      fromTransactionDate,
      toTransactionDate,
      transId,
      idCheck,
      status,
      card_number,
      standard_number,
      cn_received,
      idDevice,
      idTrace,
      idTicket,
    } = data;
    const params = new URLSearchParams();
  
    if (fromTransactionDate) params.append("fromTransactionDate", fromTransactionDate);
    if (toTransactionDate) params.append("toTransactionDate", toTransactionDate);
    if (transId) params.append("transID", transId);
    if (idCheck) params.append("idCheck", idCheck);
    if (status) params.append("status", status);
    if (card_number) params.append("card_number", card_number);
    if (standard_number) params.append("standard_number", standard_number);
    if (cn_received) params.append("branchReceiving", cn_received);
    if (idDevice) params.append("idDevice", idDevice);
    if (idTrace) params.append("idTrace", idTrace);
    if (idTicket) params.append("idTicket", idTicket);
  
    const queryString = params.toString();
  
    return this.http.get<IDifferenceData[]>(`http://localhost:3000/data?${queryString}`);
  }
  

  getAllDataTransaction(): Observable<IDifferenceData[]> {
    return this.http.get<IDifferenceData[]>(`http://localhost:3000/data`);
  }

  getTypeMoney() : Observable<IInspectData[]> {
    return this.http.get<IInspectData[]>(`http://localhost:3000/money`);
  }

  getReasonForInspection() : Observable<IInspectData[]> {
    return this.http.get<IInspectData[]>(`http://localhost:3000/reasonForInspection`);
  }

  getReceivingBranch() : Observable<IInspectData[]> {
    return this.http.get<IInspectData[]>(`http://localhost:3000/receivingBranch`);
  }
}

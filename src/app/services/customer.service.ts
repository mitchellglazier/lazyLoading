import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    // Faking this get request to a restAPI
    return this.http.get(
      "http://localhost:4200/assets/data.json"
    ) as Observable<Customer[]>;
  }

  // Normally I would have other requests here, ex. "get post update delete"
}

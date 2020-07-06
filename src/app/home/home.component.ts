import { Component, OnInit, OnDestroy } from "@angular/core";
import { CustomerService } from "../services/customer.service";
import { Customer } from "../models/customer";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  customers: Customer[];
  $customersSub: Subscription;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.$customersSub.unsubscribe();
  }

  showCustomers() {
    this.$customersSub = this.customerService
      .getCustomers()
      .subscribe(customers => {
        this.customers = customers;
      });
  }
}

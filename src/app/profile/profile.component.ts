import { Component, OnInit, OnDestroy } from "@angular/core";
import { Customer } from "../models/customer";
import { ActivatedRoute } from "@angular/router";
import { CustomerService } from "../services/customer.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit, OnDestroy {
  id;
  customer: Customer;
  $customerSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    // Normally this would be a singular get request using the id from the
    // route however for this exercise I am just looping through my data file for the object that I want.
    this.$customerSub = this.customerService
      .getCustomers()
      .subscribe(customers => {
        if (customers) {
          customers.map(customer => {
            if (customer.id === this.id) {
              this.customer = customer;
            }
          });
        }
      });
  }

  ngOnDestroy() {
    this.$customerSub.unsubscribe();
  }
}

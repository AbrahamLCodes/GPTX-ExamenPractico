import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public isLoading = this.spiner.isLoading$;

  constructor(
    private spiner: SpinnerService
  ) { }

  ngOnInit() {}
}

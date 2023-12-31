import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { EmployeeService } from "./employee.service";
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    // declarations: [AppComponent],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);

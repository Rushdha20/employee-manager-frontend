import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { EmployeeService } from "./employee.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    // declarations: [AppComponent],
    providers: [EmployeeService],
    // bootstrap: [AppComponent]
})
export class AppModule {
    ngDoBootstrap() {
        platformBrowserDynamic().bootstrapModule(AppModule);
    }
}
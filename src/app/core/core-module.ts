import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		PageNotFoundComponent,
	],
	providers: [
	],
	exports: [
		PageNotFoundComponent,
	]
})

export class CoreModule { }

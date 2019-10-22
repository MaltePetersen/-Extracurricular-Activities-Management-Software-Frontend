import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../guards/auth.guard";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    children: [
      {
        path: "veranstaltung-buchen",
        loadChildren:
          "../veranstaltung-buchen/veranstaltung-buchen.module#VeranstaltungBuchenPageModule",
        canActivate: [AuthGuard],
        data: {
          role: "ERZIEHUNGSBERECHTIGTE"
        }
      },
      {
        path: "veranstaltung-einsehen",
        loadChildren:
          "../veranstaltung-einsehen/veranstaltung-einsehen.module#VeranstaltungEinsehenPageModule"
      },
      {
        path: "kind-hinzufuegen",
        loadChildren:
          "../kind-hinzufuegen/kind-hinzufuegen.module#KindHinzufuegenPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}

import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
})
export class AddProduitsComponent implements OnInit {

  newProduit = new Produit();

  message :string;

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
  }

  addProduit() {
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message = "Produit "+ this.newProduit.nomProduit + " ajouté avec succés !";
    }



}

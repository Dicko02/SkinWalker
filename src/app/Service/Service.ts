import { Injectable } from "@angular/core";
import { Model } from "../Model/Model";


Injectable({
    providedIn: 'root'
})

export class Service{
    models : Model[] = [
        new Model(
            1,
            'Wendigo',
            'https://wallpapercave.com/wp/wp6569328.jpg',
            'Force surhumaine | Vitesse surhumaine | Agilité surhumaine | Invulnérabilité | Super sens améliorés | Griffes et crocs | Intelligence surhumaine | Furtivité | Mimétisme vocal | Infliction de maladies | Immortalité | Connaissance magique'
            ),

        new Model(
            2,
            'Lycanthrope',
            'https://cdn.pixabay.com/photo/2023/11/11/17/24/werewolf-8381571_960_720.jpg',
            'Force surhumaine | Vitesse surhumaine | Endurance surhumaine | Agilité surhumaine | Durabilité surhumaine | Sens surhumains | Détection de mensonge | Griffes et dents | Morsure et égratignure infectieuses | Empathie | Transfert de douleur | Transfert de mémoire | Télépathie | Facteur de guérison | Longévité | Eolas | Ansin'
            ).withLocation("coteaux fortement boisés faisant face à l'équateur mondial et affleurements rocheux avec de petites grottes"),

        new Model(
            3,
            'SCP-096',
            'https://tr.rbxcdn.com/c932dc7e56a66e6c6122da762428fe57/768/432/Image/Webp',
            'Tracking | force surhumaine | Endurance illimitée | Vitesse surhumaine | Durabilité surhumaine | Endurance surhumaine | Sens surhumains | Immortalité biologique | Os incassables | Auto-régénération | Perception extrasensorielle | Immunité à la douleur | Autosuffisance | Hyper saut | Manipulation de la gravité | Téléportation'
            ).withLocation("Fondation SCP")
    ]

    getService(): Model[]{
        return [...this.models];
    }
}
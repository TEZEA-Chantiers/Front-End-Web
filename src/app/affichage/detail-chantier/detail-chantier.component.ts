import {Component, Input, OnInit} from '@angular/core';
import {StatusType} from '../../shared/model/statusType';
import {ChantierGet} from '../../shared/model/chantierGet';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {Probleme} from '../../shared/model/probleme';
import {JourSemaineType} from '../../shared/model/jourSemaineType';
import {RapportChantierRegulier} from '../../shared/model/rapportChantierRegulier';
import {ActivatedRoute} from '@angular/router';
import {ChantierService} from '../../core/services/chantier.service';

@Component({
    selector: 'app-detail-chantier',
    templateUrl: './detail-chantier.component.html',
    styleUrls: ['./detail-chantier.component.css']
})
export class DetailChantierComponent implements OnInit {
    @Input() chantier: ChantierGet;

    constructor(
        private route: ActivatedRoute,
        private chantierService: ChantierService
    ) {
        /*const problems = new Set<Probleme>();
        problems.add(new Probleme('il fait froid', ['data:image/jpeg;base64,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']));
        const ouvriers = new Set<string>();
        ouvriers.add('Jean Paul').add('Berthe').add('Chomeur lambda');
        const jours = new Set<JourSemaineType>();
        jours.add(JourSemaineType.LUNDI).add(JourSemaineType.MARDI).add(JourSemaineType.MERCREDI);
        const rapport = new Set<RapportChantierRegulier>();
        rapport.add(new RapportChantierRegulier(new Date(), new Date(), new Date(), new Date(), StatusType.DEMARRE));
        this.chantier = new ChantierGet(
            1, new Site('piemontaise', 'Emmanuel', 'Emanuelle', '54 jean luc de la rue', 'coke@coca.com', 'mobile 1'),
            new Client('quarantan', 'corentin', '58 jean luc de la haie', 'lss@dd.com', 'aime les carottes'),
            problems,
            new Set(),
            '54 jean luc de la rue',
            ouvriers,
            'tournevis',
            new Date(),
            new Date(),
            5,
            'mobile 1',
            StatusType.DEMARRE,
            'réparation toiture',
            'berthe file un mauvais coton',
            'refaire la toiture d\'la chaumière',
            null,
            null,

            true,
            jours,
            new Date(),
            new Date(),
            rapport*/

            // TOUT CE QUI EST REGULARITE EST OPTIONNEL
            /* public joursRegularite ? : Set < JourSemaineType > ,
             public dateDebutRegularite ? : Date,
             public dateFinRegularite ? : Date,
             public rapportsRegulier ? : Set<RapportChantierRegulier>
        );*/
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.chantierService.getChantierById(id).subscribe(
            (res: ChantierGet) => this.chantier = res
        );
    }

    getStatus(status: StatusType): string {
        switch (status) {
            case 0:
                return 'Démarré';
            case 1:
                return 'En attente';
            case 2:
                return 'En cours';
            case 3:
                return 'Terminé';
        }
    }

    getJours(joursRegularite: Set<JourSemaineType>): string {
        const joursDeTravaux = [];
        for (const jour of joursRegularite) {
            switch (jour) {
                case JourSemaineType.LUNDI:
                    joursDeTravaux.concat('lundi');
                    break;
                case JourSemaineType.MARDI:
                    joursDeTravaux.concat('mardi');
                    break;
                case JourSemaineType.MERCREDI:
                    joursDeTravaux.concat('mercredi');
                    break;
                case JourSemaineType.JEUDI:
                    joursDeTravaux.concat('jeudi');
                    break;
                case JourSemaineType.VENDREDI:
                    joursDeTravaux.concat('vendredi');
                    break;
                case JourSemaineType.SAMEDI:
                    joursDeTravaux.concat('samedi');
                    break;
                case JourSemaineType.DIMANCHE:
                    joursDeTravaux.concat('dimanche');
                    break;
            }
        }
        return joursDeTravaux.join(', ');
    }
}
/* Modèle pour le chantier*/
export class DemandeDeChantier {
    constructor(public siteId: number,
                public clientId: number,
                public nombreEmployes: number,
                public material: string,
                public adresse: string,
                public regularite: string,
                public estimationTemps: number,
                public particularite: string,
                public description: string,
                public infoInterne: string) {
        /*
                this._site = site;
                this._client = client;
                this._employee = employee;
                this._material = material;
                this._adresse = adresse;
                this._regularite = regularite;
                this._estimationTemps = estimationTemps;
                this._particularite = particularite;
                this._description = description;
                this._infoInterne = infoInterne;
                */
    }

    /*
        private _id: number;
        private _site: number;
        private _client: number;
        private _employee: number;
        private _material: string;
        private _adresse: string;
        private _regularite: string;
        private _estimationTemps: number;
        private _particularite: string;
        private _description: string;
        private _infoInterne: string;

        get id(): number {
            return this._id;
        }

        set id(value: number) {
            this._id = value;
        }

        get site(): number {
            return this._site;
        }

        set site(value: number) {
            this._site = value;
        }

        get client(): number {
            return this._client;
        }

        set client(value: number) {
            this._client = value;
        }

        get employee(): number {
            return this._employee;
        }

        set employee(value: number) {
            this._employee = value;
        }

        get material(): string {
            return this._material;
        }

        set material(value: string) {
            this._material = value;
        }

        get adresse(): string {
            return this._adresse;
        }

        set adresse(value: string) {
            this._adresse = value;
        }

        get regularite(): string {
            return this._regularite;
        }

        set regularite(value: string) {
            this._regularite = value;
        }

        get estimationTemps(): number {
            return this._estimationTemps;
        }

        set estimationTemps(value: number) {
            this._estimationTemps = value;
        }

        get particularite(): string {
            return this._particularite;
        }

        set particularite(value: string) {
            this._particularite = value;
        }

        get description(): string {
            return this._description;
        }

        set description(value: string) {
            this._description = value;
        }

        get infoInterne(): string {
            return this._infoInterne;
        }

        set infoInterne(value: string) {
            this._infoInterne = value;
        }
        */
}

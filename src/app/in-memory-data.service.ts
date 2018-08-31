import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return {heroes};
        const sidekicks = [
            { id: 110, name: 't' },
            { id: 120, name: 'Nzfz' },
            { id: 130, name: 'Bombee' },
            { id: 140, name: 'Ceeeel' },
            { id: 150, name: 'Ma' },
            { id: 160, name: 'Rzzz' },
            { id: 170, name: 'Dzezfzz' },
            { id: 180, name: 'Dreezd' },
            { id: 190, name: 'Medza' },
            { id: 200, name: 'Tzd' }
        ];
        return {sidekicks};
    }
}

import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Protein } from 'src/proteins/entities/protein.entity';

export default class ProteinSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<void> {
        await dataSource.query('TRUNCATE "protein" RESTART IDENTITY;');

        const repository = dataSource.getRepository(Protein);
        await repository.insert([{
            id: 1,
            name: 'Chasu',
            description: 'A sliced flavourful pork meat with a selection of season vegetables.',
            imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg',
            imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
            price: 10
        },
        ]);
    }
}
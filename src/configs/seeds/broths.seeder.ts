import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Broth } from 'src/broths/entities/broth.entity';

export default class BrothSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<void> {
        await dataSource.query('TRUNCATE "broth" RESTART IDENTITY;');

        const repository = dataSource.getRepository(Broth);
        await repository.insert([{
            id: 1,
            name: 'Salt',
            description: 'Simple like the seawater, nothing more',
            imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
            imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
            price: 10
        }
        ]);
    }
}
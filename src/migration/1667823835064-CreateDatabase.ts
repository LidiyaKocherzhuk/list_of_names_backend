import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1667823835064 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase('test');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropDatabase('test');
    }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUser1769693956219 implements MigrationInterface {
    name = 'AddUser1769693956219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cats" ("id" SERIAL NOT NULL, "name" character varying, CONSTRAINT "PK_611e3c0a930b4ddc1541422864c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cats"`);
    }

}

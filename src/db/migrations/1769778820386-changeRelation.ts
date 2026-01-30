import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeRelation1769778820386 implements MigrationInterface {
    name = 'ChangeRelation1769778820386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP CONSTRAINT "FK_b75c4e5c0bc645d7d0b02258f8e"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cat" ADD CONSTRAINT "FK_b75c4e5c0bc645d7d0b02258f8e" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP CONSTRAINT "FK_b75c4e5c0bc645d7d0b02258f8e"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cat" ADD CONSTRAINT "FK_b75c4e5c0bc645d7d0b02258f8e" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}

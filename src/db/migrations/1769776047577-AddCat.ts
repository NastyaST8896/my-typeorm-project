import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCat1769776047577 implements MigrationInterface {
    name = 'AddCat1769776047577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."cat_color_enum" AS ENUM('black', 'white', 'orange')`);
        await queryRunner.query(`CREATE TABLE "cat" ("id" SERIAL NOT NULL, "name" character varying, "color" "public"."cat_color_enum" NOT NULL DEFAULT 'black', "ownerId" integer NOT NULL, CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cat" ADD CONSTRAINT "FK_b75c4e5c0bc645d7d0b02258f8e" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP CONSTRAINT "FK_b75c4e5c0bc645d7d0b02258f8e"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "cat"`);
        await queryRunner.query(`DROP TYPE "public"."cat_color_enum"`);
    }

}

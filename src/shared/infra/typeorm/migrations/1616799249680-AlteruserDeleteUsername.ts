import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";
/* eslint-disable */
export class AlteruserDeleteUsername1616799249680
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "username",
        type: "string",
      })
    );
  }
}

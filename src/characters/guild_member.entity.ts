import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ synchronize: false })
export class GuildMember extends BaseEntity
{
    @Column()
    guildid: number;

    @PrimaryColumn()
    guid: number;

    @Column()
    rank: number;

    @Column()
    pnote: string;

    @Column()
    offnote: string;
}

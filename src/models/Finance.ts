import { Column, Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 } from "uuid";
import User from './User';

@Entity("finances")
export default class Finance {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = v4();
        }
    }
}
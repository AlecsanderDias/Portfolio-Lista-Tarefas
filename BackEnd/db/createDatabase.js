export const createDatabase = `create table if not exists task(
    id serial primary key,
    description varchar(255),
    isDone boolean default false
);`;
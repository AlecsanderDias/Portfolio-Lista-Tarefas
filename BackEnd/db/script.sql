create table task(
    id serial primary key,
    description varchar(255),
    isDone boolean default false
);

insert into task(description)
values ('Primeiro item da lista'), 
('Segundo item da lista'),
('Terceiro item da lista'),
('Quarto item da lista'),
('Quinto item da lista'),
('Sexto item da lista');
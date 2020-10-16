/* 10-16 */

/* 유저 회원 정보 */
create table `user` (
  `id` integer auto_increment primary key,
  `email` varchar(50) unique,
  `password` varchar(255) not null,
  `userName` varchar(6) not null,
  `nickName` varchar(10) unique,
  `gender` char(2) not null,
  `phone` varchar(20) not null,
  `address1` varchar(255) not null,
  `address2` varchar(255),
  `lat` double,
  `lon` double,
  `birth` char(10) not null,
  `ratingAvg` float,
  `ratingCount` integer not null default 0,
  `alarm` boolean default false,
  `createdAt` timestamp not null default NOW()
);

/* 서비스 게시글 정보 */
create table `service` (
	`id` integer auto_increment primary key,
    `reqUserId` integer,
    `ansUserId` integer,
    `title` varchar(255) not null,
    `contents` text(65535) not null,
    `address1` varchar(255) not null,
	`address2` varchar(255),
    `lat` double,
	`lon` double,
    `price` integer not null,
    `progress` boolean default false,
    `createdAt` timestamp not null default NOW(),
    `startAt` timestamp not null default NOW(),
    `endAt` timestamp not null default NOW(),
    foreign key (`reqUserId`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (`ansUserId`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* 채팅방 정보 */
create table `room` (
	`id` integer auto_increment primary key,
    `createdAt` timestamp not null default NOW()
);

/* 메세지 정보 */
create table `message` (
	`id` integer auto_increment primary key,
    `text` text(65535) not null,
    `from` integer,
    `to` integer,
    `room` integer,
    `createdAt` timestamp not null default NOW(),
    foreign key (`from`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (`to`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (`room`) references `room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* 유저와 채팅방 연결 테이블 */
create table `useronroom` (
	`id` integer auto_increment primary key,
    `roomId` integer,
    `userId` integer,
    `serviceId` integer,
    `createdAt` timestamp not null default NOW(),
    foreign key (`roomId`) references `room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (`userId`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (`serviceId`) references `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* 유저 별점 정보 */
create table `rating` (
	`id` integer auto_increment primary key,
    `reqUserId` integer,
    `ansUserId` integer,
    `serviceId` integer,
    `rating` float,
    `review` varchar(255),
    `createdAt` timestamp not null default NOW(),
    foreign key (`reqUserId`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (`ansUserId`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (`serviceId`) references `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* 서비스 이미지 정보 */
create table `serviceimgfiles` (
	`id` integer auto_increment primary key,
    `serviceId` integer,
    `imglink` varchar(255) unique,
    `createdAt` timestamp not null default NOW(),
    foreign key (`serviceId`) references `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
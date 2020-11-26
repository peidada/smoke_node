/*
 Navicat MySQL Data Transfer
 Date: 26/11/2020 18:50:07 PM smokepei
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(20) NOT NULL DEFAULT '' COMMENT '用户名',
  `account` varchar(50) NOT NULL DEFAULT '' COMMENT '账户/手机号',
  `password` char(30) NOT NULL DEFAULT '' COMMENT '密码',
  `country` char(10) NOT NULL DEFAULT '' COMMENT '国家',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', 'smokepei', '13718195083', 'smoke0124.', 'CN');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

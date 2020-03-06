ALTER TABLE `customer_embed_widget`   
	ADD COLUMN `widget_name` VARCHAR(255) NULL AFTER `embed_id`,
	ADD COLUMN `widget_key` VARCHAR(255) NULL AFTER `embed_width`;

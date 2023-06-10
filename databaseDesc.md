## Tabel users

| Field         | Type         | Null | Key | Default | Extra |
| :-----------: | :-----------:| :--: | :--:| :-----: | :---: |
| id_users      | varchar(16)  | NO   | PRI | NULL    |       |
| nama          | varchar(100) | YES  |     | NULL    |       |
| golongan      | varchar(4)   | NO   |     | NULL    |       |
| jenis_kelamin | varchar(10)  | YES  |     | NULL    |       |
| tanggal_lahir | date         | NO   |     | NULL    |       |
| no_whatsapp   | bigint(28)   | NO   |     | NULL    |       |
| alamat        | varchar(100) | NO   |     | NULL    |       |
| email         | varchar(50)  | NO   |     | NULL    |       |
| password      | varchar(255) | YES  |     | NULL    |       |

## Tabel request_donor

| Field        | Type         | Null | Key | Default | Extra |
| :-----------:| :-----------:| :--: | :--:| :-----: | :---: |
| id_request   | bigint(15)   | NO   | PRI | NULL    |       |
| id_users     | varchar(16)  | NO   | MUL | NULL    |       |
| rumah_sakit  | varchar(50)  | NO   | MUL | NULL    |       |
| nama         | varchar(50)  | NO   |     | NULL    |       |
| umur         | int(3)       | NO   |     | NULL    |       |
| golongan     | varchar(4)   | NO   |     | NULL    |       |
| no_kamar     | varchar(20)  | NO   |     | NULL    |       |
| no_whatsapp  | bigint(28)   | NO   |     | NULL    |       |
| whatsapp_url | varchar(100) | NO   |     | NULL    |       |


## Tabel RS

| Field       | Type          | Null | Key | Default | Extra |
| :-----------:| :-----------:| :--: | :--:| :-----: | :---: |
| rumah_sakit | varchar(50)   | NO   | PRI | NULL    |       |
| photos      | varchar(1000) | NO   |     | NULL    |       |
| alamat      | varchar(500)  | NO   |     | NULL    |       |
| gmaps_link  | varchar(500)  | NO   |     | NULL    |       |



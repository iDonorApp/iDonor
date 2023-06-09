## API Documentation
<details>
  
  <summary>Register</summary>
  
  * #### URL : 
    * https://idonorapi-dot-idonorapp2023.et.r.appspot.com/register
  * #### Method : 
    * POST
  * #### Request Body :
    *  `nama` as string
    * `golongan` as string
    * `jenis_kelamin` as string
    * `no_whatsapp` as Int, can't be more than 14 digits and must be at least 11 characters
    * `alamat` as string
    * `email` as string
    * `password` as string

  * #### Response : 
    ```
    {
  
    "message": "Success Register",
    "data": {
        "email": "gmail@gmail.com",
        "password": "mypassword"
        }
    }
    ```
  
  
  </details>

<details>
  
<summary>Login</summary>

* #### URL : 
  * https://idonorapi-dot-idonorapp2023.et.r.appspot.com/login
* #### Method : 
  * POST
* #### Request Body : 
  * `email` as string
  * `password` as string
* #### Response : 
  ```
  {
    "message": "success",
    "login": {
        "nama": "Arif Kurniawan",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hIjoibmFtZSIsImlhdCI6MTY4NjAzMzEwMCwiZXhwIjoxNjg2MTE5NTAwfQ.n19KaWcnfwb5SNJbUuaf-pFOwlGhMTlzO0ZjERkWySU"
      }
  }
  ```

</details>
  
<details>
  
<summary>Home</summary>
  
* #### URL :
  * https://idonorapi-dot-idonorapp2023.et.r.appspot.com/home
* #### Method :
  * GET
* #### Response :
  ```
  {
      "message": "All Request",
      "data": [
          {
              "Rumah Sakit": "Primaya Hospital Bekasi Timur",
              "Dibutuhkan": 1,
              "alamat": "Jl. HM. Joyo Martono No.47, RT.003/RW.021, Margahayu, Kec. Bekasi Tim., Kota Bks",
              "Image URL": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AZose0nq--bCxBNBHEtuzClWMYz1yn1n0ZPI4LLjQ9B0hqauJ9UO_TxMnnlcqIcQ0dUe1rLm8zZmbNJqCeqwmtfdh5gPGsGtAuEmV5BK-vpBv0GtaNp7pG1QijcFHW2L37rFNRlb7Y8zj4jy64_gv_iraSStbHeofEI-pYG_7V2pmwZj0nwp"
          },
          {
              "Rumah Sakit": "Rumah Sakit Masmitra",
              "Dibutuhkan": 2,
              "alamat": "Jl. Raya Jati Makmur No.40, RT.001/RW.011, Jatimakmur, Kec. Pd. Gede, Kota Bks",
              "Image URL": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AZose0mze8F6kXVLTEqgaClLlPTAEtFyM-0qzJiVumSukl_uoZ1t26VvwAj5-KWsVGsW3Bts6Jiay41DDTGRlI4HcDjJyHIVPPeHv7008Ti8S4IaDrjHqtgpCUWThindAzaP1ut-WOTyvwjoZoxPk1QFqivXFLKhar7TPC32ItgkFS_uaBjB"
          },
          {
              "Rumah Sakit": "Rumah Sakit Umum Daerah Tasikmalaya",
              "Dibutuhkan": 1,
              "alamat": "Jl. Rumah Sakit No.33, Empangsari, Kec. Tawang, Kab. Tasikmalaya, Jawa Barat 46113",
              "Image URL": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AZose0mdlBhVfUUp41cyc4yRiDuQMcu8ozSxugBQ4_SsNw_BPGJMtSI4SZ-EzGrleDLKVb6zLwDeZAIryflCMIstxTPxYHib_cSRyuWeziwltN-ptCC1O8wcCZxwT8OvFNULiaUfWJldPyIGgunhY4To3Uvgv0NxZQwv5ybuK7TKYdXw5Vg"
          }
      ]
  }
  ```
</details>
<details>
<summary>Detail Home</summary>
  
* #### URL : 
  * https://idonorapi-dot-idonorapp2023.et.r.appspot.com/detailhome/:rumahsakit
* #### Method :
  * GET
* #### Response : 
  ```
  {
      "message": "Request Di Rumah Sakit Masmitra",
      "Gmaps URL": "https://maps.google.com/maps/place/?q=place_id:ChIJH9N6iEONaS4RHBywLDXTv7I",
      "data": [
          {
              "id": 6871459390,
              "rumah_sakit": "Rumah Sakit Masmitra",
              "nama": "Daniel Dajal",
              "umur": 13456,
              "golongan": "A",
              "no_kamar": "R-60-wc",
              "whatsapp_url": "https://api.whatsapp.com/send?phone=62822543142"
          },
          {
              "id": 7844585202,
              "rumah_sakit": "Rumah Sakit Masmitra",
              "nama": "Supri",
              "umur": 13456,
              "golongan": "A",
              "no_kamar": "R-60-wc",
              "whatsapp_url": "https://api.whatsapp.com/send?phone=62822543142"
          }
      ]
  }  
  ```
</details>

<details>
  <summary>Request Donor</summary>

  * #### URL : 
    * https://idonorapi-dot-idonorapp2023.et.r.appspot.com/reqdonor
  * #### Method : 
    * POST
  * #### Response : 
    ```
      {
        "message": "Success",
        "data": {
            "rumah_sakit": "Rumah Sakit Umum Daerah Tasikmalaya",
            "nama": "Brian",
            "umur": "20",
            "golongan": "A",
            "no_kamar": "B-80-YR",
            "no_whatsapp": "6282200001111"
        }
    }
    ```
</details>

<details>
  <summary>Request Aktif</summary>
  
  * #### URL :
    * https://idonorapi-dot-idonorapp2023.et.r.appspot.com/reqaktif
  * #### Method : 
    * GET
  * #### Response : 
    ```
    {
      "message": "Your Request",
      "data": [
          {
              "id_request": 466787424,
              "id_users": "9",
              "rumah_sakit": "Rumah Sakit Aceh Tamiang",
              "nama": "Brian Sigit44452",
              "umur": 20,
              "golongan": "A",
              "no_kamar": "B-80-YR",
              "no_whatsapp": "6282200001111",
              "whatsapp_url": "https://api.whatsapp.com/send?phone=6282200001111"
          },
          {
              "id_request": 3067690825,
              "id_users": "9",
              "rumah_sakit": "harapan ayah",
              "nama": "Brian Sigit44452",
              "umur": 20,
              "golongan": "A",
              "no_kamar": "B-80-YR",
              "no_whatsapp": "6282200001111",
              "whatsapp_url": "https://api.whatsapp.com/send?phone=6282200001111"
          },
          {
              "id_request": 9844691480,
              "id_users": "9",
              "rumah_sakit": "Rumah Sakit Umum Daerah Yogyakarta",
              "nama": "Brian Sigit44452",
              "umur": 20,
              "golongan": "A",
              "no_kamar": "B-80-YR",
              "no_whatsapp": "6282200001111",
              "whatsapp_url": "https://api.whatsapp.com/send?phone=6282200001111"
          }
      ]
  }
    ```
  </details>
  <details>
  
  <summary>Profile</summary>
  
  * #### URL :
    * https://idonorapi-dot-idonorapp2023.et.r.appspot.com/profile
  * #### Method : 
    * GET
  * #### Response : 
    ```
    {
    "message": "GET profile by id Success",
    "data": [
        {
            "id_users": "9369045468811756",
            "nama": "Sumoirop",
            "golongan": "C",
            "jenis_kelamin": "Laki-Laki",
            "tanggal_lahir": "2001-01-08T17:00:00.000Z",
            "no_whatsapp": 628283922290,
            "alamat": "Summarecon Bekasi",
            "email": "Summarecon@gmail.com"
        }
    ]
    }
    ```
  
  </details>

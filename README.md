## API Documentation
<details>
  
<summary>Home</summary></br>
  
* **URL** : </p>
  * /home </p>
* **Method** : </p>
  * GET </p>
* **Response** : </p>
</p>

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
  
* ### URL : 
  * /detailhome/:rumahsakit
* ### Method :
  * GET
* ### Response : 
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

  * ### URL : 
    * /reqdonor
  * ### Method : 
    * POST
  * ### Response : 
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

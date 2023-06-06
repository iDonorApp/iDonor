package com.dicoding.picodiploma.idonor.data.response

import com.google.gson.annotations.SerializedName

data class RequestAktif(

    @field:SerializedName("Your Request")
    val your_request: String,

    @field:SerializedName("data")
    val dataRequestAktif: List<ListDataRequestAktif>
)

data class ListDataRequestAktif(

    @field:SerializedName("id_request")
    val id_request: String,

    @field:SerializedName("id_users")
    val id_users: String,

    @field:SerializedName("rumah_sakit")
    val rumah_sakit: String,

    @field:SerializedName("nama")
    val nama: String,

    @field:SerializedName("umur")
    val umur: String,

    @field:SerializedName("golongan")
    val golongan: String,

    @field:SerializedName("no_kamar")
    val no_kamar: String,

    @field:SerializedName("no_whatsapp")
    val no_whatsapp: String,

    @field:SerializedName("whatsapp_url")
    val whatsapp_url: String
)

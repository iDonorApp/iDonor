package com.bangkit.capstone.idonor.data.response

import com.google.gson.annotations.SerializedName

data class ProfileResponse(

    @field:SerializedName("message")
    val message: String,

    @field:SerializedName("data")
    val data: DataProfile
)

data class DataProfile(

    @field:SerializedName("id_users")
    val id_users: String,

    @field:SerializedName("nama")
    val nama: String,

    @field:SerializedName("golongan")
    val golongan: String,

    @field:SerializedName("jenis_kelamin")
    val jenis_kelamin: String,

    @field:SerializedName("tanggal_lahir")
    val tanggal_lahir: String,

    @field:SerializedName("no_whatsapp")
    val no_whatsapp: String,

    @field:SerializedName("alamat")
    val alamat: String,

    @field:SerializedName("email")
    val email: String
)

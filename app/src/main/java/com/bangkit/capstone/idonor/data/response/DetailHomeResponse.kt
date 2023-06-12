package com.bangkit.capstone.idonor.data.response

import android.os.Parcelable
import com.google.gson.annotations.SerializedName
import kotlinx.parcelize.Parcelize

data class DetailHomeResponse(

    @field:SerializedName("message")
    val message: String,

    @field:SerializedName("Gmaps URL")
    val gmapsURL: String,

    @field:SerializedName("data")
    val data: List<ListDataDetail>
)

@Parcelize
data class ListDataDetail(

    @field:SerializedName("id_request")
    val id: String,

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

    @field:SerializedName("whatsapp_url")
    val whatsapp_url: String
) : Parcelable

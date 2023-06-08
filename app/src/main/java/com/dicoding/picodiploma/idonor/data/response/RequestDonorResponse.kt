package com.dicoding.picodiploma.idonor.data.response

import android.os.Parcelable
import com.google.gson.annotations.SerializedName
import kotlinx.parcelize.Parcelize

data class RequestDonorResponse(

    @field:SerializedName("message")
    val message: String,

    @field:SerializedName("data")
    val data: List<ListDataRequest>
)

@Parcelize
data class ListDataRequest(

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
    val no_whatsapp: String
) : Parcelable

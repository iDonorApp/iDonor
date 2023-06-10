package com.bangkit.capstone.idonor.data.response

import android.os.Parcelable
import com.google.gson.annotations.SerializedName
import kotlinx.parcelize.Parcelize

data class HomeResponse(

    @field:SerializedName("message")
    val message: String,

    @field:SerializedName("data")
    val data: List<ListDataHome>
)

@Parcelize
data class ListDataHome(

    @field:SerializedName("Rumah Sakit")
    val rumah_sakit: String,

    @field:SerializedName("Dibutuhkan")
    val dibutuhkan: String,

    @field:SerializedName("alamat")
    val alamat: String,

    @field:SerializedName("Image URL")
    val image_url: String
) : Parcelable

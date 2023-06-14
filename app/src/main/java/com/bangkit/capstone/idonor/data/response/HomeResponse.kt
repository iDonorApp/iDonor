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

    @field:SerializedName("rumah_sakit")
    val rumah_sakit: String,

    @field:SerializedName("gmaps")
    val gmapsURL: String,

    @field:SerializedName("dibutuhkan")
    val dibutuhkan: String,

    @field:SerializedName("alamat")
    val alamat: String,

    @field:SerializedName("imageUrl")
    val imageUrl: String
) : Parcelable

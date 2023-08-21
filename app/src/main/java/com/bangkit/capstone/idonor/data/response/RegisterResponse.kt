package com.bangkit.capstone.idonor.data.response

import com.google.gson.annotations.SerializedName

data class RegisterResponse(

    @field:SerializedName("message")
    val message: String,

    @field:SerializedName("data")
    val data: DataRegister
)

data class DataRegister(

    @field:SerializedName("email")
    val email: String,

    @field:SerializedName("password")
    val password: String
)
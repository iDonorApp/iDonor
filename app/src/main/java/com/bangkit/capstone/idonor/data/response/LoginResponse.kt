package com.bangkit.capstone.idonor.data.response

import com.google.gson.annotations.SerializedName

data class LoginResponse(

    @field:SerializedName("message")
    val message: String,

    @field:SerializedName("login")
    val login: Login? = null
)

data class Login(

    @field:SerializedName("nama")
    val nama: String,

    @field:SerializedName("token")
    val token: String
)

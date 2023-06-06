package com.dicoding.picodiploma.idonor.data.api

import com.dicoding.picodiploma.idonor.data.response.LoginResponse
import com.dicoding.picodiploma.idonor.data.response.RegisterResponse
import retrofit2.Call
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.GET
import retrofit2.http.POST

interface ApiService {

    @FormUrlEncoded
    @POST("resgister")
    fun registerUser(
        @Field("nama") nama: String,
        @Field("golongan") golongan: String,
        @Field("jenis_kelamin") jenis_kelamin: String,
        @Field("no_whatsapp") no_whatsapp: Int,
        @Field("alamat") alamat: String,
        @Field("email") email: String,
        @Field("password") password: String
    ): Call<RegisterResponse>

    @FormUrlEncoded
    @POST("login")
    fun loginUser(
        @Field("email") email: String,
        @Field("password") password: String
    ): Call<LoginResponse>
}
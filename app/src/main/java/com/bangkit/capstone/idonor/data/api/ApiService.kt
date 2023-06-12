package com.bangkit.capstone.idonor.data.api

import com.bangkit.capstone.idonor.data.response.*
import retrofit2.Call
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path

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
    
    @GET("home")
    fun getHomeList(

    ): Call<HomeResponse>

    @GET("detailhome/{rumah_sakit}")
    fun getDetailList(
        @Path("rumah_sakit") rumah_sakit: String
    ): Call<DetailHomeResponse>

    @FormUrlEncoded
    @POST("reqdonor")
    fun postReqDonor(

    ): Call<RequestDonorResponse>

    @FormUrlEncoded
    @POST("reqaktif/:id_users")
    fun postReqAktid(

    ): Call<RequestAktifResponse>

    @GET("profile/:id_users")
    fun getProfile(

    ): Call<ProfileResponse>
}
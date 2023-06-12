package com.bangkit.capstone.idonor.data.model

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.bangkit.capstone.idonor.data.api.ApiService
import com.bangkit.capstone.idonor.data.response.DetailHomeResponse
import com.bangkit.capstone.idonor.data.response.HomeResponse
import com.bangkit.capstone.idonor.data.response.RequestAktifResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class RsRepository private constructor(
    private val apiService: ApiService
) {

    private val _list = MutableLiveData<HomeResponse>()
    val list: LiveData<HomeResponse> = _list

    private val _listDetail = MutableLiveData<DetailHomeResponse>()
    val listDetail: LiveData<DetailHomeResponse> = _listDetail

    private val _requestAktif = MutableLiveData<RequestAktifResponse>()
    val requestAktif : LiveData<RequestAktifResponse> = _requestAktif

    private val _isLoading = MutableLiveData<Boolean>()
    val isLoading: LiveData<Boolean> = _isLoading

    private val _toastText = MutableLiveData<Event<String>>()
    val toastText: LiveData<Event<String>> = _toastText

    fun getListHome() {
        _isLoading.value = true
        val client = apiService.getHomeList()
        Log.d(TAG, "getListHome: Masuk")

        client.enqueue(object : Callback<HomeResponse> {
            override fun onResponse(call: Call<HomeResponse>, response: Response<HomeResponse>) {
                _isLoading.value = false
                if (response.isSuccessful && response.body() != null) {
                    Log.d(TAG, "onResponse: ${response.body()}")
                    _list.value = response.body()
                } else {
                    _toastText.value = Event(response.message().toString())
                    Log.e(TAG, "onFailure: ${response.message()}, ${response.body()?.message.toString()}")
                }
            }

            override fun onFailure(call: Call<HomeResponse>, t: Throwable) {
                _toastText.value = Event(t.message.toString())
                Log.e(TAG, "onFailure: ${t.message.toString()}")
            }
        })
    }

    fun getListDetail(rumahSakit: String) {
        _isLoading.value = true
        val client = apiService.getDetailList(rumahSakit)
        Log.d(TAG,"getListDetail: Masuk")

        client.enqueue(object : Callback<DetailHomeResponse> {
            override fun onResponse( call: Call<DetailHomeResponse>, response: Response<DetailHomeResponse>) {
                _isLoading.value = false
                if (response.isSuccessful && response.body() != null) {
                    Log.d(TAG, "onResponse: ${response.body()}")
                    _listDetail.value = response.body()
                } else {
                    _toastText.value = Event(response.message().toString())
                    Log.e(TAG, "onFailure: ${response.message()}, ${response.body()?.message.toString()}")
                }
            }

            override fun onFailure(call: Call<DetailHomeResponse>, t: Throwable) {
                _toastText.value = Event(t.message.toString())
                Log.e(TAG, "onFailure: ${t.message.toString()}")
            }

        })
    }

    fun postRequest(nama: String, no_kamar: String, golongan: String, umur: String) {

        _isLoading.value = true
    }

    companion object {
        private const val TAG = "StoryRepository"

        @Volatile
        private var instance: RsRepository? = null

        fun getInstance(
            apiService: ApiService
        ): RsRepository =
            instance ?: synchronized(this) {
                instance ?: RsRepository(apiService)
            }.also { instance = it }
    }
}
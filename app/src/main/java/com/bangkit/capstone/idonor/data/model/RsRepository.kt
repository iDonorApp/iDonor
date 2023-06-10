package com.bangkit.capstone.idonor.data.model

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.bangkit.capstone.idonor.data.api.ApiService
import com.bangkit.capstone.idonor.data.response.DetailHomeResponse
import com.bangkit.capstone.idonor.data.response.HomeResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class RsRepository private constructor(
    private val apiService: ApiService
) {

    private val _list = MutableLiveData<HomeResponse>()
    val list: LiveData<HomeResponse> = _list

    private val _list_detail = MutableLiveData<DetailHomeResponse>()
    val list_detail: LiveData<DetailHomeResponse> = _list_detail

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

    fun getListDetail() {
        _isLoading.value = true
        val client = apiService.getDetailList()
        Log.d(TAG,"getListDetail: Masuk")

        client.enqueue(object : Callback<DetailHomeResponse> {
            override fun onResponse( call: Call<DetailHomeResponse>, response: Response<DetailHomeResponse>) {
                _isLoading.value = false
                if (response.isSuccessful && response.body() != null) {
                    Log.d(TAG, "onResponse: ${response.body()}")
                    _list_detail.value = response.body()
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
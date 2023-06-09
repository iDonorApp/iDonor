package com.dicoding.picodiploma.idonor.ui.main

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.dicoding.picodiploma.idonor.data.model.Event
import com.dicoding.picodiploma.idonor.data.model.RsRepository
import com.dicoding.picodiploma.idonor.data.response.HomeResponse
import kotlinx.coroutines.launch

class BerandaViewModel(private val repository: RsRepository) : ViewModel() {

    val list: LiveData<HomeResponse> = repository.list
    val isLoading: LiveData<Boolean> = repository.isLoading
    val toastText: LiveData<Event<String>> = repository.toastText

    fun getListHome() {
        viewModelScope.launch {
            repository.getListHome()
        }
    }
}
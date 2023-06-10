package com.bangkit.capstone.idonor.ui.main

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.bangkit.capstone.idonor.data.model.Event
import com.bangkit.capstone.idonor.data.model.RsRepository
import com.bangkit.capstone.idonor.data.response.HomeResponse
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
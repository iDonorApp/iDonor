package com.bangkit.capstone.idonor.ui.main

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.CreationExtras
import com.bangkit.capstone.idonor.data.api.ApiConfig
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

    companion object {

        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel> create(
                modelClass: Class<T>,
                extras: CreationExtras
            ): T {
                return BerandaViewModel(
                    RsRepository.getInstance(ApiConfig.getApiService())
                ) as T
            }
        }
    }
}
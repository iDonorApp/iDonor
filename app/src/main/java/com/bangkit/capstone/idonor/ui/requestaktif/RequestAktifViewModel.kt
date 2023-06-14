package com.bangkit.capstone.idonor.ui.requestaktif

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.CreationExtras
import com.bangkit.capstone.idonor.data.api.ApiConfig
import com.bangkit.capstone.idonor.data.model.RsRepository
import com.bangkit.capstone.idonor.data.response.RequestAktifResponse
import kotlinx.coroutines.launch

class RequestAktifViewModel (private val repository: RsRepository) : ViewModel() {

    val list: LiveData<RequestAktifResponse> = repository.requestAktif

    fun getListRequest() {
        viewModelScope.launch {
            repository.getListRequestAktif()
        }
    }

    companion object {

        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel> create(
                modelClass: Class<T>,
                extras: CreationExtras
            ): T {
                return RequestAktifViewModel(
                    RsRepository.getInstance(ApiConfig.getApiService())
                ) as T
            }
        }
    }
}
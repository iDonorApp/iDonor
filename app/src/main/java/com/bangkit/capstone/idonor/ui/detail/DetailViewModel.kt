package com.bangkit.capstone.idonor.ui.detail

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.CreationExtras
import com.bangkit.capstone.idonor.data.api.ApiConfig
import com.bangkit.capstone.idonor.data.model.RsRepository
import com.bangkit.capstone.idonor.data.response.DetailHomeResponse
import kotlinx.coroutines.launch

class DetailViewModel(private val repository: RsRepository) : ViewModel() {

    val list: LiveData<DetailHomeResponse> = repository.listDetail

    fun getListDetail() {
        viewModelScope.launch {
            repository.getListDetail()
        }
    }

    companion object {

        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel> create(
                modelClass: Class<T>,
                extras: CreationExtras
            ): T {
                return DetailViewModel(
                    RsRepository.getInstance(ApiConfig.getApiService())
                ) as T
            }
        }
    }
}
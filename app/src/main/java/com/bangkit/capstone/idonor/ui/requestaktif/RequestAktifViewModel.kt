package com.bangkit.capstone.idonor.ui.requestaktif

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
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
}
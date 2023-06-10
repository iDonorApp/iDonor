package com.bangkit.capstone.idonor.data.model

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.bangkit.capstone.idonor.ui.main.BerandaViewModel

class ViewModelFactory(private val repository: RsRepository) : ViewModelProvider.NewInstanceFactory() {

    @Suppress("UNCHECKED_CAST")
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        return when {
            modelClass.isAssignableFrom(BerandaViewModel::class.java) -> {
                BerandaViewModel(repository) as T
            }
            else -> throw IllegalArgumentException("Unkown ViewModel class: " + modelClass.name)
        }
    }
}
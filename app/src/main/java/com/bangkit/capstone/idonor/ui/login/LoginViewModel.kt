package com.bangkit.capstone.idonor.ui.login

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.asLiveData
import androidx.lifecycle.viewModelScope
import com.bangkit.capstone.idonor.data.model.UserModel
import com.bangkit.capstone.idonor.data.model.UserPreferences
import kotlinx.coroutines.launch

class LoginViewModel(private val pref: UserPreferences) : ViewModel()  {

    fun getUser() : LiveData<UserModel> {
        return pref.getUser().asLiveData()
    }

    fun saveUser(user: UserModel) {
        viewModelScope.launch {
            pref.saveUser(user)
        }
    }

    fun logout() {
        viewModelScope.launch {
            pref.logout()
        }
    }
}
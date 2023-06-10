package com.bangkit.capstone.idonor.tools

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Hospital(
    val name: String,
    val description: String,
    val photo: String,
    val desc: String
): Parcelable

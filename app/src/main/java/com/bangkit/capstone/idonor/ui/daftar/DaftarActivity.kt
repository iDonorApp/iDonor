package com.bangkit.capstone.idonor.ui.daftar

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.RadioButton
import android.widget.Toast
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.bangkit.capstone.idonor.R
import com.bangkit.capstone.idonor.data.api.ApiConfig
import com.bangkit.capstone.idonor.data.model.Event
import com.bangkit.capstone.idonor.data.response.RegisterResponse
import com.bangkit.capstone.idonor.databinding.ActivityDaftarBinding
import com.bangkit.capstone.idonor.ui.login.LoginActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class DaftarActivity : AppCompatActivity() {

    private lateinit var binding: ActivityDaftarBinding

    private val _registerResponse = MutableLiveData<RegisterResponse>()
    val registerResponse: LiveData<RegisterResponse> = _registerResponse

    private val _toastText = MutableLiveData<Event<String>>()
    val toastText: LiveData<Event<String>> = _toastText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityDaftarBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportActionBar?.hide()

        binding.btnLoginRegister.setOnClickListener {
            val inputNama = binding.edDaftarNama.text.toString()
            val inputGoldar = binding.edDaftarGoldar.text.toString()
            val selectJekal = getSelectedJenkel()
            val inputWhatsapp = binding.edDaftarNoTelephone.text.toString()
            val inputAlamat = binding.edDaftarAlamat.text.toString()
            val inputEmail = binding.edDaftarEmail.text.toString()
            val inputPassword = binding.edDaftarBuatPassword.text.toString()

            buatAkun(inputNama, inputGoldar, selectJekal, inputWhatsapp, inputAlamat, inputEmail, inputPassword)
        }

        binding.tvMoveLogin.setOnClickListener {
            val intent = Intent(this , LoginActivity::class.java)
            startActivity(intent)
        }
    }

    private fun getSelectedJenkel(): String {
        val selectedRadioButtonId = binding.rgDaftarJenisKelamin.checkedRadioButtonId
        val selectedRadioButton = findViewById<RadioButton>(selectedRadioButtonId)
        return selectedRadioButton.text.toString()
    }

    private fun buatAkun(inputNama: String, inputGoldar: String, selectJekal: String, inputWhatsapp: String, inputAlamat: String, inputEmail: String, inputPassword: String) {
        showLoading(true)

        val client = ApiConfig.getApiService().registerUser(inputNama, inputGoldar, selectJekal, inputWhatsapp, inputAlamat, inputEmail, inputPassword)

        client.enqueue(object : Callback<RegisterResponse> {
            override fun onResponse(
                call: Call<RegisterResponse>,
                response: Response<RegisterResponse>
            ) {
                showLoading(false)
                val responseBody = response.body()
                Log.d(TAG, "onResponse: $responseBody")
                if (response.isSuccessful && response.body() != null) {
                    _registerResponse.value = response.body()
                    _toastText.value = Event(response.body()?.message.toString())
                } else {
                    _toastText.value = Event(response.message().toString())
                    Log.e(
                        TAG,
                        "onFailure: ${response.message()}, ${response.body()?.message.toString()}"
                    )
                }
            }

            override fun onFailure(call: Call<RegisterResponse>, t: Throwable) {
                showLoading(false)
                Log.e(TAG, "onFailure2:", t)
                Toast.makeText(this@DaftarActivity, "Error: ${t.message}", Toast.LENGTH_SHORT).show()
            }
        })
    }

    private fun showLoading(isLoading: Boolean) {
        if (isLoading) {
            binding.progressBar.visibility = View.VISIBLE
        } else {
            binding.progressBar.visibility = View.GONE
        }
    }

    companion object {
        private const val TAG = "Register Activity"
    }
}
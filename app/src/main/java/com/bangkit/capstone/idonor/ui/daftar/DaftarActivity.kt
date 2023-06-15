package com.bangkit.capstone.idonor.ui.daftar

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.Editable
import android.util.Log
import android.view.View
import android.widget.RadioButton
import android.widget.Toast
import com.bangkit.capstone.idonor.R
import com.bangkit.capstone.idonor.data.api.ApiConfig
import com.bangkit.capstone.idonor.data.response.RegisterResponse
import com.bangkit.capstone.idonor.databinding.ActivityDaftarBinding
import com.bangkit.capstone.idonor.ui.login.LoginActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class DaftarActivity : AppCompatActivity() {

    private lateinit var binding: ActivityDaftarBinding

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
                if (response.isSuccessful && responseBody?.message == "Register Sukses") {
                    Toast.makeText(this@DaftarActivity, getString(R.string.daftar_berhasil), Toast.LENGTH_SHORT).show()
                    val intent = Intent(this@DaftarActivity, LoginActivity::class.java)
                    startActivity(intent)
                } else {
                    Log.e(TAG, "onFailure1: ${response.message()}")
                    Toast.makeText(this@DaftarActivity, getString(R.string.daftar_gagal), Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<RegisterResponse>, t: Throwable) {
                showLoading(false)
                Log.e(TAG, "onFailure2: ${t.message}")
                Toast.makeText(this@DaftarActivity, getString(R.string.daftar_gagal), Toast.LENGTH_SHORT).show()
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
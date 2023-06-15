package com.bangkit.capstone.idonor.ui.login

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.Toast
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.preferencesDataStore
import androidx.lifecycle.ViewModelProvider
import com.bangkit.capstone.idonor.R
import com.bangkit.capstone.idonor.data.api.ApiConfig
import com.bangkit.capstone.idonor.data.model.UserModel
import com.bangkit.capstone.idonor.data.model.UserPreferences
import com.bangkit.capstone.idonor.data.model.ViewModelFactory
import com.bangkit.capstone.idonor.data.response.LoginResponse
import com.bangkit.capstone.idonor.databinding.ActivityLoginBinding
import com.bangkit.capstone.idonor.ui.daftar.DaftarActivity
import com.bangkit.capstone.idonor.ui.main.BerandaActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

private val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "settings")

class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding
    private lateinit var loginViewModel: LoginViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setUpView()
        setupViewModel()
        setupAction()
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.login_menu, menu)
        return super.onCreateOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {

            else -> super.onOptionsItemSelected(item)
        }
    }

    private fun setupAction() {
        binding.apply {
            binding.btnLogin.setOnClickListener {
                val inputEmail = binding.edLoginEmailUser.text.toString()
                val inputPassword = binding.edLoginPassword.text.toString()

                login(inputEmail, inputPassword)
            }
            btnLoginRegister.setOnClickListener {
                startActivity(Intent(this@LoginActivity, DaftarActivity::class.java))
            }
        }
    }

    private fun setUpView() {
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportActionBar?.apply {
            title = getString(R.string.login)
            setDisplayHomeAsUpEnabled(true)
        }
        supportActionBar?.hide()
    }

    private fun setupViewModel() {
        loginViewModel = ViewModelProvider(
            this,
            ViewModelFactory(UserPreferences.getInstance(dataStore))
        )[LoginViewModel::class.java]

        loginViewModel.getUser().observe(this) { user ->
            if (user.isLogin) {
                val intent = Intent(this, BerandaActivity::class.java)
                startActivity(intent)
                finish()
            }
        }
    }

    private fun login(inputEmail: String, inputPassword: String) {
        showLoading(true)

        val client = ApiConfig.getApiService().loginUser(inputEmail, inputPassword)

        client.enqueue(object : Callback<LoginResponse> {

            override fun onResponse(call: Call<LoginResponse>, response: Response<LoginResponse>) {
                showLoading(false)
                val responseBody = response.body()
                Log.d(TAG, "onResponse: $responseBody")
                if (response.isSuccessful && responseBody?.message == "Login Successful") {
                    loginViewModel.saveUser(UserModel(responseBody.login.token, true))
                    Toast.makeText(
                        this@LoginActivity,
                        getString(R.string.login_sukses),
                        Toast.LENGTH_SHORT
                    ).show()
                    val intent = Intent(this@LoginActivity, BerandaActivity::class.java)
                    startActivity(intent)
                } else {
                    Log.e(TAG, "onFailure1: ${response.message()}")
                    Toast.makeText(
                        this@LoginActivity,
                        getString(R.string.login_gagal),
                        Toast.LENGTH_SHORT
                    ).show()
                }
            }

            override fun onFailure(call: Call<LoginResponse>, t: Throwable) {
                showLoading(false)
                Log.e(TAG, "onFailure2: ${t.message}")
                Toast.makeText(
                    this@LoginActivity,
                    getString(R.string.login_gagal),
                    Toast.LENGTH_SHORT
                ).show()
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
        private const val TAG = "Main Activity"
    }
}
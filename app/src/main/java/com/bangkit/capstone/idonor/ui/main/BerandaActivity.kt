package com.bangkit.capstone.idonor.ui.main

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.activity.viewModels
import androidx.recyclerview.widget.LinearLayoutManager
import com.bangkit.capstone.idonor.data.model.ViewModelFactory
import com.bangkit.capstone.idonor.databinding.ActivityBerandaBinding

class BerandaActivity : AppCompatActivity() {

    private lateinit var binding: ActivityBerandaBinding
    private lateinit var factory: ViewModelFactory

    private val berandaViewModel: BerandaViewModel by viewModels { factory }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setUpAdapter()
        setUpView()
    }

    private fun setUpAdapter() {
        berandaViewModel.list.observe(this@BerandaActivity) { adapter ->
            if (adapter != null) {
                binding.rvHospital.adapter = ListBerandaAdapter(adapter.data)
            }
        }
    }

    private fun setUpView() {
        binding = ActivityBerandaBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.apply {
            rvHospital.setHasFixedSize(true)
            rvHospital.layoutManager = LinearLayoutManager(this@BerandaActivity)
            getListHome()
        }

        supportActionBar?.hide()
    }

    private fun getListHome() {
        berandaViewModel.getListHome()
    }
}
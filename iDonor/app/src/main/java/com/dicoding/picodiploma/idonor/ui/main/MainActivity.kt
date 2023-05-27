package com.dicoding.picodiploma.idonor.ui.main

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import androidx.viewbinding.ViewBinding
import com.dicoding.picodiploma.idonor.R
import com.dicoding.picodiploma.idonor.databinding.ActivityMainBinding
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        val view: ViewBinding = binding
        setContentView(view.root)

        val inflater = layoutInflater
        val view1 = inflater.inflate(R.layout.activity_beranda, null)
        binding.container.addView(view1)

        binding.bottomNav.setOnNavigationItemSelectedListener(onNavigationItemSelectedListener)
    }

    private val onNavigationItemSelectedListener =
        BottomNavigationView.OnNavigationItemSelectedListener { item ->
        when (item.itemId) {
            R.id.beranda -> {
                val inflater = LayoutInflater.from(this)
                val view = inflater.inflate(R.layout.activity_beranda, null)
                binding.container.removeAllViews()
                binding.container.addView(view)

                return@OnNavigationItemSelectedListener true
            }
            R.id.aktif -> {
                val inflater = LayoutInflater.from(this)
                val view = inflater.inflate(R.layout.activity_aktif, null)
                binding.container.removeAllViews()
                binding.container.addView(view)

                return@OnNavigationItemSelectedListener true
            }
            R.id.upload -> {
                val inflater = LayoutInflater.from(this)
                val view = inflater.inflate(R.layout.activity_upload, null)
                binding.container.removeAllViews()
                binding.container.addView(view)

                return@OnNavigationItemSelectedListener true
            }
            R.id.informasi -> {
                val inflater = LayoutInflater.from(this)
                val view = inflater.inflate(R.layout.activity_informasi, null)
                binding.container.removeAllViews()
                binding.container.addView(view)

                return@OnNavigationItemSelectedListener true
            }
            R.id.akun -> {
                val inflater = LayoutInflater.from(this)
                val view = inflater.inflate(R.layout.activity_akun, null)
                binding.container.removeAllViews()
                binding.container.addView(view)

                return@OnNavigationItemSelectedListener true
            }
        }
        false
    }
}
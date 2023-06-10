package com.bangkit.capstone.idonor.ui.detail

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.activity.viewModels
import androidx.recyclerview.widget.LinearLayoutManager
import com.bangkit.capstone.idonor.databinding.ActivityDetailBinding

class DetailActivity : AppCompatActivity() {

    private lateinit var binding: ActivityDetailBinding

    private val detailViewModel: DetailViewModel by viewModels { DetailViewModel.Factory }
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setUpAdapter()
        setUpView()
    }

    private fun setUpAdapter() {
        detailViewModel.list.observe(this@DetailActivity) { adapter ->
            if (adapter != null) {
                binding.rvDetail.adapter = DetailAdapter(adapter.data)
            }
        }
    }

    private fun setUpView() {
        binding = ActivityDetailBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.apply {
            rvDetail.setHasFixedSize(true)
            rvDetail.layoutManager = LinearLayoutManager(this@DetailActivity)
            getListDetail()
        }
    }

    private fun getListDetail() {
        detailViewModel.getListDetail()
    }
}
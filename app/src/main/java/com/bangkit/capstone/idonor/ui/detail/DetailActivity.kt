package com.bangkit.capstone.idonor.ui.detail

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.activity.viewModels
import androidx.recyclerview.widget.LinearLayoutManager
import com.bangkit.capstone.idonor.R
import com.bangkit.capstone.idonor.data.response.ListDataHome
import com.bangkit.capstone.idonor.databinding.ActivityDetailBinding
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions

class DetailActivity : AppCompatActivity() {

    private lateinit var binding: ActivityDetailBinding

    private val detailViewModel: DetailViewModel by viewModels { DetailViewModel.Factory }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setUpAdapter()
        setUpView()
        setUpData()
    }

    private fun setUpData() {
        val data = intent.getParcelableExtra<ListDataHome>(EXTRA_DATA) as ListDataHome
        binding.apply {
            tvNamaRs.text = data.rumah_sakit

            Glide.with(this@DetailActivity)
                .load(data.imageUrl)
                .fitCenter()
                .apply(
                    RequestOptions
                        .placeholderOf(R.drawable.ic_loading)
                        .error(R.drawable.ic_error)
                ).into(ivDetailFoto)
        }
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

    companion object {
        const val EXTRA_DATA = "extra_data"
    }
}
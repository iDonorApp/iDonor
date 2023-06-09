package com.dicoding.picodiploma.idonor.ui.main

import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.dicoding.picodiploma.idonor.R
import com.dicoding.picodiploma.idonor.data.response.ListDataHome
import com.dicoding.picodiploma.idonor.databinding.ListItemBerandaBinding

class ListBerandaAdapter(private val listBeranda: List<ListDataHome>): RecyclerView.Adapter<ListBerandaAdapter.ListViewHolder>() {

    inner class ListViewHolder(private val binding: ListItemBerandaBinding) : RecyclerView.ViewHolder(binding.root) {

        fun bind(beranda: ListDataHome) {

            binding.apply {
                tvItemNameRs.text = beranda.rumah_sakit
                tvItemAlamat.text = beranda.alamat
                tvItemDibutuhkan.text = beranda.dibutuhkan
                Glide.with(itemView.context)
                    .load(beranda.image_url)
                    .apply(
                        RequestOptions
                            .placeholderOf(R.drawable.ic_loading)
                            .error(R.drawable.ic_error)
                    ).into(ivItemPhoto)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ListViewHolder {
        TODO("Not yet implemented")
    }

    override fun getItemCount(): Int {
        TODO("Not yet implemented")
    }

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        TODO("Not yet implemented")
    }
}
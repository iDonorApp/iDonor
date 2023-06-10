package com.bangkit.capstone.idonor.ui.main

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.bangkit.capstone.idonor.R
import com.bangkit.capstone.idonor.data.response.ListDataHome
import com.bangkit.capstone.idonor.databinding.ListItemBerandaBinding

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
        val binding = ListItemBerandaBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ListViewHolder(binding)
    }

    override fun getItemCount(): Int = listBeranda.size

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        holder.bind(listBeranda[position])
    }
}
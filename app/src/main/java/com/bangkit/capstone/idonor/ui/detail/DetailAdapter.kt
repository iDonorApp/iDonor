package com.bangkit.capstone.idonor.ui.detail

import android.content.Intent
import android.net.Uri
import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.Toast
import androidx.core.content.ContextCompat.startActivity
import androidx.recyclerview.widget.RecyclerView
import com.bangkit.capstone.idonor.data.response.ListDataDetail
import com.bangkit.capstone.idonor.databinding.ListItemDetailBinding

class DetailAdapter(private val listDetail: List<ListDataDetail>): RecyclerView.Adapter<DetailAdapter.ListViewHolder>() {

    inner class ListViewHolder(private val binding: ListItemDetailBinding) : RecyclerView.ViewHolder(binding.root) {

        fun bind(detail: ListDataDetail) {

            binding.apply {
                tvDetailGoldar.text = detail.golongan
                tvItemAkunNama.text = detail.nama
                tvItemAkunNoKamarValue.text = detail.no_kamar
                tvItemAkunGoldarValue.text = detail.golongan
                tvItemAkunUmurValue.text = detail.umur
                btnWhatsapp.setOnClickListener {
                    val phoneNumber = detail.whatsapp_url
                    val intent = Intent(Intent.ACTION_VIEW, Uri.parse(phoneNumber))
                    itemView.context.startActivity(intent)
                }
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ListViewHolder {
        val binding = ListItemDetailBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ListViewHolder(binding)
    }

    override fun getItemCount(): Int = listDetail.size

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        holder.bind(listDetail[position])
    }
}
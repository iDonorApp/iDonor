package com.bangkit.capstone.idonor.ui.main

import android.app.Activity
import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.core.app.ActivityOptionsCompat
import androidx.core.util.Pair
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.bangkit.capstone.idonor.R
import com.bangkit.capstone.idonor.data.response.ListDataHome
import com.bangkit.capstone.idonor.databinding.ListItemBerandaBinding
import com.bangkit.capstone.idonor.ui.detail.DetailActivity
import com.bangkit.capstone.idonor.ui.detail.DetailActivity.Companion.EXTRA_DATA

class ListBerandaAdapter(private val listBeranda: List<ListDataHome>): RecyclerView.Adapter<ListBerandaAdapter.ListViewHolder>() {

    inner class ListViewHolder(private val binding: ListItemBerandaBinding) : RecyclerView.ViewHolder(binding.root) {

        fun bind(beranda: ListDataHome) {

            binding.apply {
                tvItemNameRs.text = beranda.rumah_sakit
                tvItemAlamat.text = beranda.alamat
                tvItemDibutuhkan.text = beranda.dibutuhkan
                Glide.with(itemView.context)
                    .load(beranda.imageUrl)
                    .apply(
                        RequestOptions
                            .placeholderOf(R.drawable.ic_loading)
                            .error(R.drawable.ic_error)
                    ).into(ivItemPhoto)

                itemView.setOnClickListener {
                    val intent = Intent(itemView.context, DetailActivity::class.java)
                    intent.putExtra(EXTRA_DATA, beranda)

                    val optionsCompat: ActivityOptionsCompat = ActivityOptionsCompat.makeSceneTransitionAnimation(
                        itemView.context as Activity,
                        Pair(ivItemPhoto, "beranda"),
                        Pair(tvItemNameRs, "rumah_sakit")
                    )
                    itemView.context.startActivity(intent, optionsCompat.toBundle())
                }
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
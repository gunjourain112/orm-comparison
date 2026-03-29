package com.jpa.jpa.domain.champion

import com.jpa.jpa.global.common.BaseEntity
import jakarta.persistence.*

@Entity
@Table(name = "tags")
class ChampionTag(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,

    @Column(nullable = false, unique = true, length = 30)
    var name: String,

    @ManyToMany(mappedBy = "tags")
    var champions: MutableList<Champion> = mutableListOf()
) : BaseEntity()

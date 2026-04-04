package com.jpa.jpa.domain.champion

import com.jpa.jpa.global.common.BaseEntity
import jakarta.persistence.*

@Entity
@Table(name = "champions")
class Champion(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,

    @Column(nullable = false, unique = true, length = 50)
    var name: String,

    @ManyToMany
    @JoinTable(
        name = "champion_tags",
        joinColumns = [JoinColumn(name = "champion_id")],
        inverseJoinColumns = [JoinColumn(name = "tag_id")]
    )
    var tags: MutableList<ChampionTag> = mutableListOf()
) : BaseEntity()

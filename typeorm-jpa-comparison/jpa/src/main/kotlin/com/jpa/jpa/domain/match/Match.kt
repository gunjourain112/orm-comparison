package com.jpa.jpa.domain.match

import com.jpa.jpa.global.common.BaseEntity
import jakarta.persistence.*

@Entity
@Table(name = "matches")
class Match(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,

    @Column(nullable = false, unique = true, length = 50)
    var matchId: String,

    @OneToMany(mappedBy = "match", cascade = [CascadeType.ALL])
    var participants: MutableList<MatchParticipant> = mutableListOf()
) : BaseEntity()

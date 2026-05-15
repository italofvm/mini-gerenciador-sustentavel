package com.sustentavel.minigerenciador.repositories;

import com.sustentavel.minigerenciador.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}

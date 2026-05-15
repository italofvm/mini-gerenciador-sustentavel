package com.sustentavel.minigerenciador.services;

import com.sustentavel.minigerenciador.models.Item;
import com.sustentavel.minigerenciador.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> listarTodos(){
        return itemRepository.findAll();
    }

    public Item salvar(Item item) {
        return itemRepository.save(item);
    }

}

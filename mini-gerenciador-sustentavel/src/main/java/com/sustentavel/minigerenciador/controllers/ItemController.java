package com.sustentavel.minigerenciador.controllers;

import com.sustentavel.minigerenciador.models.Item;
import com.sustentavel.minigerenciador.services.ItemService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/itens")
public class ItemController {


    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }


    @GetMapping
    public List<Item> listar(){
        return itemService.listarTodos();
    }

    @PostMapping
    public Item salvar(@RequestBody @Valid Item item) {
    return itemService.salvar(item);
    }
}

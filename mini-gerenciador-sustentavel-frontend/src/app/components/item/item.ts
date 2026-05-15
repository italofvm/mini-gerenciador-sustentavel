import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './item.html',
  styleUrls: ['./item.css'],
})
export class ItemComponent implements OnInit {
  public itens: Item[] = [];

  // Initial state pattern
  public novoItem: Item = this.resetItem();

  constructor(
    private readonly service: ItemService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.carregarItens();
  }

  private resetItem(): Item {
    return { nome: '', quantidade: 0, categoria: '' };
  }

  public carregarItens(): void {
    this.service.listar().subscribe({
      next: (data) => {
        this.itens = data;
        // Força a atualização da View (Manual Change Detection)
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching data:', err),
    });
  }

  public salvar(): void {
    if (!this.novoItem.nome) return;

    this.service.salvar(this.novoItem).subscribe({
      next: (itemSalvo) => {
        // Update list and UI
        this.itens = [...this.itens, itemSalvo];
        this.novoItem = this.resetItem();
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error saving item:', err),
    });
  }
}

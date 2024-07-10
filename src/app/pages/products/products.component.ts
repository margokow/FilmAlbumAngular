import { Component, OnInit} from '@angular/core';
import { ProductsListeComponent } from './products-liste/products-liste.component';
import Film from '../../models/film.model';
import Album from '../../models/album.model';
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsListeComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  films: Film[] = [];

  albums: Album[] = [];

  constructor(
    private filmService: FilmService,
    private albumService: AlbumService
  ){}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((filmsResponse) => {this.films = filmsResponse})
    this.albumService.getAlbums().subscribe((albumsResponse) => {this.albums = albumsResponse})
  }
}

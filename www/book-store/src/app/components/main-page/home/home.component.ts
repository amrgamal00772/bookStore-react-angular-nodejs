import { ApiService } from './../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "";
  // @Output() search = new EventEmitter <any>();
  // Title ="";
    maxPrice=500;
    minPrice=0;

  rating = 0;
  starCount = 5;
  originalBooks:any;
  searchedText="";
  ratingArr: boolean[] = [];
  constructor(private router: Router, private apiService: ApiService, private _cart: CartService) {

  }
  users: any;
  books: any;
  responseGet: Boolean = false
  items: any;
  pageOfItems: Array<any> = [];
  isPageLoaded: boolean = false;
  bookUpdated: boolean = false;

  ngOnInit(): void {
    // this.http.get('http://localhost:8080/api/users').subscribe(res=>{
    //   this.users = res
    //   this.responseGet = true
    //   console.log(res)
    // })

    const token = localStorage.token

    this.apiService.get('http://localhost:8080/api/books',
      { headers: { 'Authorization': `Bearer ${token}` } })
      .subscribe(res => {
        this.books = res;
        this.originalBooks=this.books;
        this.items = Array(3).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
        this.responseGet = true;
        this.ratingArr = Array(this.starCount).fill(false);
      })
  }

  getSearchText(text:any){
    this.searchedText = text
}
getMaxPrice(maxPrice:any){
  this.maxPrice = maxPrice
}
getMinPrice(minPrice:any){
  this.minPrice= minPrice;
}


  // }
  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
  //   stars(book: { rate: number; }){
  // this.rating=book.rate;
  //   }
  getCarruntRate(num: number) {

    return this.rating = num;
  }


  //*************** Start Of Pagination Function****************/



  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

addToCart(book:any){
  this._cart.toCart(book);
}
goToDetails(id:any){

  this.router.navigateByUrl(`/categories/book-details/${id}`)
}
}

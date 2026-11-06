const books=[
{title:'Data Architecture for Data Engineers',author:'کتاب تخصصی داده',price:'۴۹۰٬۰۰۰ تومان',cat:'science',cover:'c1'},
{title:'Python for Engineers and Scientists',author:'مهندسی و برنامه‌نویسی',price:'۳۹۰٬۰۰۰ تومان',cat:'programming',cover:'c2'},
{title:'SwiftUI Cookbook',author:'توسعه اپلیکیشن iOS',price:'۴۵۰٬۰۰۰ تومان',cat:'programming',cover:'c3'},
{title:'Programming Languages',author:'مفاهیم و پیاده‌سازی',price:'۳۸۰٬۰۰۰ تومان',cat:'programming',cover:'c4'},
{title:'Business Strategy',author:'مدیریت و کسب‌وکار',price:'۳۲۰٬۰۰۰ تومان',cat:'business',cover:'c5'},
{title:'The Design Book',author:'طراحی و خلاقیت',price:'۳۵۰٬۰۰۰ تومان',cat:'design',cover:'c6'}
];
let cart=0,category='';
function renderBooks(){
 const q=(document.getElementById('searchInput')?.value||'').trim().toLowerCase();
 const list=books.filter(b=>(!category||b.cat===category)&&(!q||(b.title+' '+b.author).toLowerCase().includes(q)));
 const grid=document.getElementById('bookGrid'); grid.innerHTML=list.map((b,i)=>`
 <article class="book-card">
   <div class="cover ${b.cover}">${b.title}</div>
   <div class="info"><h3>${b.title}</h3><div class="author">${b.author}</div>
   <div class="price"><span>${b.price}</span><button onclick="addCart()">افزودن</button></div></div>
 </article>`).join('');
 document.getElementById('emptyState').hidden=list.length>0;
}
function addCart(){cart++;document.getElementById('cartCount').textContent=cart;toast('کتاب به سبد خرید اضافه شد.')}
function toast(t){const x=document.getElementById('toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2200)}
function filterBooks(){renderBooks()}
function setCategory(c){category=c;renderBooks()}
function resetFilters(){category='';document.getElementById('searchInput').value='';renderBooks()}
function focusSearch(){document.getElementById('searchInput').focus();document.getElementById('searchInput').scrollIntoView({behavior:'smooth',block:'center'})}
function showCart(){toast(cart?`تعداد ${cart} کتاب در سبد خرید شماست.`:'سبد خرید خالی است.')}
renderBooks();

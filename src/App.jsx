import logo from './assets/logo.png';
import cart from './assets/cart.png';
import groceryman from './assets/grocery-image.png';

function App() {
  return (
    <div class="container min-h-screen bg-[url(/src/assets/Image.png)] bg-center bg-cover px-28 py-5 relative">
            <nav class="flex items-center">
                <img src={logo} alt="" class="w-40 cursor-pointer"/>
                <ul class="flex-1 text-center">
                    <li class="list-none inline-block px-5">
                        <a href="#" class="no-underline text-white px-2">Home</a>
                    </li>
                    <li class="list-none inline-block px-5">
                        <a href="#" class="no-underline text-white px-2">About</a>
                    </li>
                    <li class="list-none inline-block px-5">
                        <a href="#" class="no-underline text-white px-2">Features</a>
                    </li>
                    <li class="list-none inline-block px-5">
                        <a href="#" class="no-underline text-white px-2">Contact</a>
                    </li>                   
                </ul>
                <img src={cart} class="w-8 cursor-pointer"/>
            </nav>
            <div class="text-white mt-48 max-w-xl">
                <h1 class="text-6xl font-semibold leading-normal">Groceries<br/>Delivery in <span class="font-light">15 mins.</span></h1>
                <p>Grocify offers a wide range of products, inlcuding fresh products, meats, dairy, baked goods, and non-perishable items.</p>
                <div class="mt-10">
                    <a href="#" class="bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent">Order Now</a>
                    <a href="#">Download App <span class="text-lg inline-block rotate-90"></span></a>
                </div>
            </div>
            <img src={groceryman} alt="" class="w-full xl:w-2/5 xl:absolute bottom-0 right-20"/>
      </div>
  )
}

export default App

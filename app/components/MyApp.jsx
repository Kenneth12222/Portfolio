import React from 'react'
import Navbar from './Navbar'

function MyApp() {
    return (
        <div>

            <section className="bg-white dark:bg-gray-800">

                <Navbar />
                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                Easiest way to create your website
                            </h1>

                            <div className="mt-8 space-y-5">
                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Clean and Simple Layout</span>
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Just Copy Paste Codeing</span>
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Easy to Use</span>
                                </p>
                            </div>
                        </div>

                        <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                            <form className="flex flex-col lg:flex-row">
                                <input type="email" placeholder="Enter your email address" className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="button" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Join Us
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo" />
                    </div>
                </div>
            </section>


            <section className="container mx-auto py-12 flex items-center">
                <div className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                        <img src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us" className="w-full rounded-md" />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Us</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Our team at Create Studio consists of seasoned professionals with years of experience in software development. We specialize in delivering innovative solutions to complex challenges, leveraging cutting-edge technologies and industry best practices.
                            <br /><br />
                            With a proven track record of successful projects and satisfied clients, we pride ourselves on our commitment to excellence and customer satisfaction. Our mission is to exceed expectations and drive tangible results for our clients, helping them achieve their business goals.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Portfolio Item 1 */}
                        <div className="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
                            <img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 1" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project 1</h3>
                                <p className="text-gray-600 dark:text-gray-300">This project showcases our expertise in building robust web applications with modern technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante ut quam.</p>
                                <a href="#" className="text-blue-500 inline-block mt-4 hover:underline">View Project</a>
                            </div>
                        </div>
                        {/* Portfolio Item 2 */}
                        <div className="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
                            <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 2" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project 2</h3>
                                <p className="text-gray-600 dark:text-gray-300">Our team excels in crafting visually stunning user interfaces with seamless user experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante ut quam.</p>
                                <a href="#" className="text-blue-500 inline-block mt-4 hover:underline">View Project</a>
                            </div>
                        </div>
                        {/* Portfolio Item 3 */}
                        <div className="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
                            <img src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 3" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Project 3</h3>
                                <p className="text-gray-600 dark:text-gray-300">Our portfolio demonstrates our commitment to delivering high-quality solutions tailored to our clients' unique needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante ut quam.</p>
                                <a href="#" className="text-blue-500 inline-block mt-4 hover:underline">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div class="flex items-center justify-center p-12">

                <div class="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div class="mb-5">
                            <label
                                for="name"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="subject"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your subject"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="message"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <div class="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
  <h2 class="mb-5 text-center font-sans text-4xl sm:text-5xl font-bold">Frequently asked Questions</h2>
  <p class="mb-12 text-center text-lg text-gray-600">We have written down answers to some of the frequently asked questions. But, if you still have any queries, feel free to ping us on chat.</p>
  <ul class="space-y-4">
    <li class="text-left">
      <label for="accordion-1" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-1" checked />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Is there a free trial with Appsy?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-2" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-2" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-3" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-3" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-4" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet.?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li>
  </ul>
  <div class="mt-20 flex justify-center">
    <a class="inline-flex cursor-pointer rounded-lg bg-blue-500 py-3 px-5 text-lg text-white" href="#">Still have questions?</a>
  </div>
</div>

        </div>

    )
}

export default MyApp

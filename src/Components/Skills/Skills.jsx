import React from 'react'

function Skills() {
  return (
    <div >
      <section id="Skills" class="bg-black text-white p-10 rounded-lg opac shadow-lg mt-14 md:mx-20 bg-opacity-30">
  <h2 class="text-4xl font-bold mb-6 text-center">Skills</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div>
      <h3 class="text-xl font-semibold mb-4">Technical Skills</h3>
      <ul class="space-y-2">
        <li class="flex items-center">
          <span class="bg-blue-600 text-white px-3 py-1 rounded-md text-sm mr-3">React, JS, TS</span>
          Frontend Development
        </li>
        <li class="flex items-center">
          <span class="bg-red-600 text-white px-3 py-1 rounded-md text-sm mr-3">NestJS, PostgreSQL</span>
          Backend Development
        </li>
        <li class="flex items-center">
          <span class="bg-green-600 text-white px-3 py-1 rounded-md text-sm mr-3">Git, GitHub, Swagger</span>
          Tools
        </li>
        <li class="flex items-center">
          <span class="bg-purple-600 text-white px-3 py-1 rounded-md text-sm mr-3">CSS, Tailwind CSS</span>
          Styling and Layout
        </li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-xl font-semibold mb-4">Creative Skills</h3>
      <ul class="space-y-2">
        <li class="flex items-center">
          <span class="bg-yellow-600 text-white px-3 py-1 rounded-md text-sm mr-3">🎨</span>
          Drawing
        </li>
        <li class="flex items-center">
          <span class="bg-pink-600 text-white px-3 py-1 rounded-md text-sm mr-3">📸</span>
          Photography
        </li>
        <li class="flex items-center">
          <span class="bg-red-600 text-white px-3 py-1 rounded-md text-sm mr-3">📚</span>
          Novels
        </li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-xl font-semibold mb-4">Soft Skills</h3>
      <ul class="space-y-2">
        <li class="flex items-center">
          <span class="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm mr-3">✔️</span>
          Problem Solving
        </li>
        <li class="flex items-center">
          <span class="bg-teal-600 text-white px-3 py-1 rounded-md text-sm mr-3">✔️</span>
          Team Collaboration
        </li>
        <li class="flex items-center">
          <span class="bg-gray-600 text-white px-3 py-1 rounded-md text-sm mr-3">✔️</span>
          Communication
        </li>
      </ul>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills

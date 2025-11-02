import React from 'react';
import { BookOpen, Users, Trophy, Target, Lightbulb, Brain, Heart, Zap, ArrowUp, ArrowRight, Award, BarChart3, Smile, Share2, BookMarked, Users2 } from 'lucide-react';

interface TheoryPageProps {
  setCurrentPage?: (page: string) => void;
}

const TheoryPage: React.FC<TheoryPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">Apa itu Gamifikasi?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Mari kenali apa itu gamifikasi dan bagaimana cara kerjanya dalam pembelajaran
          </p>
        </div>

        {/* Definisi */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-cyan-100">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">Apa itu Gamifikasi?</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Gamifikasi adalah penerapan mekanisme desain game dalam konteks non-game, seperti pendidikan, untuk mendorong partisipasi dan semangat belajar. Istilah ini diperkenalkan oleh Nick Pelling pada tahun 2002 dan dalam pembelajaran diwujudkan melalui poin, lencana, atau papan peringkat.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-cyan-700 mb-3">Gamifikasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menambahkan unsur game pada kegiatan belajar yang sudah ada, misalnya memberi poin pada siswa yang menyelesaikan latihan Fiqh.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-700 mb-3">GBL (Game-Based Learning)</h3>
              <p className="text-gray-600 leading-relaxed">
                Menggunakan game secara langsung sebagai media belajar, misalnya game petualangan tentang hijrah Nabi Muhammad SAW untuk materi SKI.
              </p>
            </div>
          </div>
        </section>

        {/* Teori Dasar */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kenapa Gamifikasi Bisa Berhasil?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Brain className="h-5 w-5 text-blue-500 mr-2" />
                Kebutuhan Dasar Manusia
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manusia punya 3 kebutuhan dasar: <strong>kebebasan memilih</strong>, 
                <strong>merasa mampu</strong>, dan <strong>terhubung dengan orang lain</strong>. 
                Gamifikasi memenuhi semua ini dengan memberi pilihan, tantangan yang pas, dan interaksi dengan teman.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Heart className="h-5 w-5 text-green-500 mr-2" />
                Kondisi "Flow" atau Fokus Total
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ini adalah kondisi ketika kita sangat fokus dan menikmati apa yang sedang dikerjakan. 
                Gamifikasi membuat kondisi ini dengan memberikan tantangan yang pas - tidak terlalu mudah, 
                tidak terlalu sulit.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Zap className="h-5 w-5 text-purple-500 mr-2" />
                Sistem Reward dan Punishment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ketika kita melakukan sesuatu yang baik dan mendapat hadiah, kita akan mengulanginya lagi. 
                Gamifikasi pakai cara ini dengan memberikan <strong>poin, lencana, dan pujian</strong> 
                ketika siswa belajar dengan baik.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Lightbulb className="h-5 w-5 text-orange-500 mr-2" />
                Belajar dari Teman
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kita bisa belajar dengan melihat dan meniru teman. Gamifikasi pakai cara ini 
                dengan ranking dan kerja sama tim, jadi siswa bisa belajar dari temannya.
              </p>
            </div>
          </div>
        </section>

        {/* Elemen Gamifikasi */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Elemen-Elemen Gamifikasi</h2>

          <div className="space-y-4">
            {/* Point */}
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-6 flex items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-yellow-700">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
                  <Trophy className="h-10 w-10 text-yellow-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Poin: Umpan balik kuantitatif untuk menandai kemajuan dan prestasi siswa.</h3>
              </div>
            </div>

            {/* Badge */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-6 flex items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-orange-800">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
                  <Award className="h-10 w-10 text-orange-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Lencana: Simbol visual pencapaian yang memberi rasa bangga dan status.</h3>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 flex items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-red-800">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
                  <BarChart3 className="h-10 w-10 text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Papan Peringkat: Menumbuhkan kompetisi sehat melalui peringkat capaian siswa.</h3>
              </div>
            </div>

            {/* Level & Progress */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 flex items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-pink-800">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
                  <BarChart3 className="h-10 w-10 text-pink-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Level & Progres: Memberi struktur pembelajaran dan rasa kemajuan, sering divisualisasikan dengan progress bar.</h3>
              </div>
            </div>

            {/* Challenge & Mission */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 flex items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-purple-800">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
                  <Target className="h-10 w-10 text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Tantangan & Misi: Tugas khusus dengan imbalan yang memotivasi siswa.</h3>
              </div>
            </div>

            {/* Narration & Story */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 flex items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-indigo-800">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
                  <BookMarked className="h-10 w-10 text-indigo-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Narasi & Cerita: Membuat pembelajaran lebih menarik, emosional, dan mudah diingat.</h3>
              </div>
            </div>

            {/* Instant Feedback */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 flex items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-cyan-700">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
                  <Smile className="h-10 w-10 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Umpan Balik Instan: Respon cepat atas capaian siswa untuk mempercepat proses belajar.</h3>
              </div>
            </div>

            {/* Additional Elements */}
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-6 flex items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-dashed border-cyan-700">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
                  <Users2 className="h-10 w-10 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Elemen Tambahan: Avatar, mata uang virtual, kolaborasi tim, dan pilihan jalur belajar.</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Prinsip Desain */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tips Membuat Gamifikasi yang Berhasil</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-800 mb-2">1. Tujuan yang Jelas</h3>
                <p className="text-green-700 text-sm">Siswa harus tahu apa yang mau dicapai</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">2. Kasih Tahu Hasilnya Cepat</h3>
                <p className="text-blue-700 text-sm">Langsung beritahu siswa apakah jawabannya benar atau salah</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2">3. Tantangan Bertahap</h3>
                <p className="text-purple-700 text-sm">Mulai dari yang mudah, lalu semakin sulit sedikit demi sedikit</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-800 mb-2">4. Penghargaan Bermakna</h3>
                <p className="text-orange-700 text-sm">Hadiah yang diberikan harus yang disukai siswa</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-800 mb-2">5. Pilihan Siswa</h3>
                <p className="text-red-700 text-sm">Biarkan siswa memilih cara belajar yang mereka suka</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h3 className="font-semibold text-indigo-800 mb-2">6. Bermain Bersama</h3>
                <p className="text-indigo-700 text-sm">Buat siswa bisa berinteraksi dan bekerja sama</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Evidence */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bukti dari Penelitian</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Penelitian Besar-besaran</h3>
              <p className="text-gray-600 text-sm mb-2">
                Para peneliti menemukan bahwa gamifikasi memang bisa meningkatkan semangat belajar siswa, 
                tapi hasilnya tergantung bagaimana cara menggunakannya.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Hasil di Sekolah</h3>
              <p className="text-gray-600 text-sm mb-2">
                Penelitian menunjukkan bahwa gamifikasi bisa meningkatkan keaktifan siswa sampai 48% 
                dan nilai mereka bisa naik sampai 35%.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Efek Jangka Panjang</h3>
              <p className="text-gray-600 text-sm">
                Yang bagusnya, manfaat gamifikasi bisa bertahan lama kalau diterapkan dengan cara yang benar.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation and Back to Top */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 py-8 border-t border-cyan-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-end items-center">
            {setCurrentPage && (
              <button
                onClick={() => setCurrentPage('platforms')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center shadow-lg hover:shadow-cyan-500/50"
              >
                Selanjutnya: Aplikasi Game Belajar
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryPage;
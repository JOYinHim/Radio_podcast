import React, { useState } from 'react';
import { Search, Filter, BookOpen, Users, AlertCircle, Heart } from 'lucide-react';

const PodcastArchive = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // 1. 데이터 샘플 (인도네시아어 기반)
  const episodes = [
    {
      id: 1,
      title: "Cara Menghadapi Masalah Remaja di Era Digital",
      category: "Parenting",
      tags: ["Remaja", "Edukasi", "Internet"],
      date: "2024-03-15",
      summary: "디지털 시대의 청소년 문제를 어떻게 부모가 이해하고 접근해야 할지 다룹니다.",
      icon: <Users className="w-5 h-5 text-blue-500" />
    },
    {
      id: 2,
      title: "Membangun Komunikasi Sehat dengan Pasangan",
      category: "Keluarga",
      tags: ["Pasangan", "Komunikasi", "Pernikahan"],
      date: "2024-02-10",
      summary: "부부 관계의 핵심인 소통의 기술과 갈등 해결 방법을 심도 있게 분석합니다.",
      icon: <Heart className="w-5 h-5 text-red-500" />
    },
    {
      id: 3,
      title: "Bahaya Judi Online dan Dampaknya bagi Keluarga",
      category: "Social Issue",
      tags: ["Judi Online", "Krisis", "Keuangan"],
      date: "2024-01-05",
      summary: "최근 심각해진 온라인 도박 문제가 가정 경제와 심리에 미치는 영향을 경고합니다.",
      icon: <AlertCircle className="w-5 h-5 text-orange-500" />
    }
  ];

  const categories = ["All", "Keluarga", "Parenting", "Social Issue"];

  // 필터링 로직
  const filteredEpisodes = episodes.filter(ep => {
    const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ep.summary.includes(searchTerm);
    const matchesCategory = activeCategory === "All" || ep.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Podcast Archive</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            과거 라디오 방송을 통해 나누었던 삶의 지혜와 사회적 이슈들을 다시 정리했습니다. 
            필요한 도움을 검색을 통해 찾아보세요.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="주제나 키워드를 검색하세요..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${activeCategory === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Episode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map(ep => (
            <article key={ep.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">{ep.icon}</div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {ep.category}
                </span>
                <span className="text-xs text-gray-400 ml-auto">{ep.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 leading-tight text-gray-800">
                {ep.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {ep.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {ep.tags.map(tag => (
                  <span key={tag} className="text-[11px] bg-gray-100 text-gray-500 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                자세히 보기
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PodcastArchive;
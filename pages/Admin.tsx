
import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useSite } from '../contexts/SiteContext';
import { Users, Eye, FileText, MousePointer, Plus, Trash2, Search, Palette, Globe, Save, Upload, Image as ImageIcon, X, LayoutTemplate } from 'lucide-react';
import { BorderRadiusSize } from '../types';

// --- Dashboard Component ---
export const AdminDashboard: React.FC = () => {
  const { posts } = useSite();
  const totalViews = posts.reduce((acc, curr) => acc + curr.views, 0);

  const stats = [
    { label: '총 방문자 수', value: '12,450', change: '+12%', icon: <Users className="w-6 h-6 text-blue-600" /> },
    { label: '페이지 뷰', value: totalViews.toLocaleString(), change: '+5%', icon: <Eye className="w-6 h-6 text-green-600" /> },
    { label: '게시글 수', value: posts.length.toString(), change: '+2', icon: <FileText className="w-6 h-6 text-purple-600" /> },
    { label: '문의 접수', value: '8', change: '+8', icon: <MousePointer className="w-6 h-6 text-orange-600" /> },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-50 rounded-xl">{stat.icon}</div>
                <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded-full">{stat.change}</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

// --- Post Manager Component ---
export const AdminPosts: React.FC = () => {
  const { posts, deletePost, addPost } = useSite();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', category: '공지사항', author: '관리자', status: 'Published' as const });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title) return;
    addPost(newPost);
    setIsModalOpen(false);
    setNewPost({ title: '', category: '공지사항', author: '관리자', status: 'Published' });
  };

  return (
    <AdminLayout>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div>
             <h2 className="text-xl font-bold text-gray-900">게시글 관리</h2>
             <p className="text-sm text-gray-500">사이트의 공지사항 및 뉴스를 관리합니다.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors"
          >
            <Plus className="w-4 h-4" /> 게시글 작성
          </button>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">제목</th>
                <th className="px-6 py-4 font-medium">카테고리</th>
                <th className="px-6 py-4 font-medium">작성자</th>
                <th className="px-6 py-4 font-medium">날짜</th>
                <th className="px-6 py-4 font-medium">상태</th>
                <th className="px-6 py-4 font-medium">조회수</th>
                <th className="px-6 py-4 font-medium text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900 block">{post.title}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">{post.category}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{post.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.views.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => deletePost(post.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal code omitted for brevity but would match previous implementation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl">
            <h3 className="text-lg font-bold mb-4">새 게시글 작성</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
                  <input 
                    type="text" 
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg p-2" 
                  />
               </div>
               <div className="flex justify-end gap-3 mt-6">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">취소</button>
                  <button type="submit" className="px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-900">저장하기</button>
               </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

// --- Settings Manager Component ---
export const AdminSettings: React.FC = () => {
  const { config, updateConfig } = useSite();
  const [localConfig, setLocalConfig] = useState(config);

  const handleSave = () => {
    updateConfig(localConfig);
    alert('설정이 저장되었습니다.');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalConfig({ ...localConfig, logoUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const clearLogo = () => {
    setLocalConfig({ ...localConfig, logoUrl: null });
  };

  return (
    <AdminLayout>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Settings Form */}
        <div className="lg:col-span-2 space-y-6">
           {/* General Settings */}
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-blue-50 rounded-lg"><Globe className="w-5 h-5 text-brand-blue" /></div>
                 <h3 className="text-lg font-bold text-gray-900">기본 정보 & SEO</h3>
              </div>
              <div className="space-y-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">사이트 이름</label>
                    <input 
                       type="text" 
                       value={localConfig.siteName}
                       onChange={(e) => setLocalConfig({...localConfig, siteName: e.target.value})}
                       className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue outline-none" 
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">대표 이메일</label>
                    <input 
                       type="email" 
                       value={localConfig.contactEmail}
                       onChange={(e) => setLocalConfig({...localConfig, contactEmail: e.target.value})}
                       className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue outline-none" 
                    />
                 </div>
              </div>
           </div>

           {/* Design Settings */}
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-purple-50 rounded-lg"><Palette className="w-5 h-5 text-purple-600" /></div>
                 <h3 className="text-lg font-bold text-gray-900">디자인 커스터마이징</h3>
              </div>
              
              <div className="space-y-8">
                 {/* Border Radius Control */}
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                       <LayoutTemplate className="w-4 h-4" />
                       버튼 및 카드 스타일 (Border Radius)
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                       {[
                         { label: 'Square', value: 'rounded-none' },
                         { label: 'Small', value: 'rounded-md' },
                         { label: 'Large', value: 'rounded-xl' },
                         { label: 'Round', value: 'rounded-full' }
                       ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setLocalConfig({...localConfig, borderRadius: opt.value as BorderRadiusSize})}
                            className={`py-3 px-2 border rounded-lg text-sm transition-all ${
                                localConfig.borderRadius === opt.value 
                                ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold shadow-sm' 
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                          >
                             <div className={`w-8 h-8 bg-gray-200 mx-auto mb-2 ${opt.value === 'rounded-full' ? 'rounded-full' : opt.value}`}></div>
                             {opt.label}
                          </button>
                       ))}
                    </div>
                 </div>

                 {/* Logo Upload Section */}
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">로고 이미지</label>
                    <div className="flex items-start gap-6">
                       <div className="w-32 h-16 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden relative group">
                          {localConfig.logoUrl ? (
                            <>
                              <img src={localConfig.logoUrl} alt="Preview" className="w-full h-full object-contain p-2" />
                              <button 
                                onClick={clearLogo}
                                className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </>
                          ) : (
                            <ImageIcon className="w-6 h-6 text-gray-400" />
                          )}
                       </div>
                       <div className="flex-1">
                          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                             <Upload className="w-4 h-4" />
                             이미지 업로드
                             <input type="file" accept="image/png, image/jpeg, image/svg+xml" onChange={handleImageUpload} className="hidden" />
                          </label>
                          <p className="text-xs text-gray-400 mt-2">
                             배경이 투명한 PNG 파일을 권장합니다.
                          </p>
                       </div>
                    </div>
                 </div>

                 <div className="border-t border-gray-100 my-4"></div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">브랜드 컬러</label>
                    <div className="flex items-center gap-4">
                       <input 
                          type="color" 
                          value={localConfig.primaryColor}
                          onChange={(e) => setLocalConfig({...localConfig, primaryColor: e.target.value})}
                          className="w-12 h-12 rounded-lg cursor-pointer border-0 p-1 bg-white shadow-sm"
                       />
                       <div className="flex-1">
                          <input 
                             type="text" 
                             value={localConfig.primaryColor}
                             onChange={(e) => setLocalConfig({...localConfig, primaryColor: e.target.value})}
                             className="w-full border border-gray-300 rounded-lg p-3 font-mono uppercase" 
                          />
                       </div>
                    </div>
                 </div>

                 {/* Preview Section */}
                 <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-xs font-bold text-gray-500 mb-3 uppercase">Style Preview</p>
                    <div className="flex gap-3">
                       <button className={`px-4 py-2 text-white text-sm font-medium shadow-sm transition-colors ${localConfig.borderRadius}`} style={{ backgroundColor: localConfig.primaryColor }}>Primary Button</button>
                       <button className={`px-4 py-2 border bg-white text-sm font-medium ${localConfig.borderRadius}`} style={{ color: localConfig.primaryColor, borderColor: localConfig.primaryColor }}>Secondary</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Save Actions */}
        <div className="lg:col-span-1">
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
              <h3 className="font-bold text-gray-800 mb-2">설정 저장</h3>
              <p className="text-sm text-gray-500 mb-6">변경사항을 사이트에 즉시 반영합니다.</p>
              
              <button 
                 onClick={handleSave}
                 className={`w-full py-3 bg-gray-900 text-white font-bold shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 active:scale-95 ${localConfig.borderRadius}`}
              >
                 <Save className="w-4 h-4" /> 변경사항 저장
              </button>
              
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                 <a href="/" target="_blank" className="text-sm text-gray-500 hover:text-brand-blue hover:underline">
                    사이트 미리보기
                 </a>
              </div>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
};

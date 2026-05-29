import React, { useState } from "react";
import { Product } from "../types";
import { X, Upload, Plus, Trash2, Loader2, Save } from "lucide-react";
import { uploadImageToStorage } from "../utils/firebase";

interface AdminProductModalProps {
  product: Product | Partial<Product>;
  onClose: () => void;
  onSave: (product: any) => void;
  isNew?: boolean;
}

const AdminProductModal: React.FC<AdminProductModalProps> = ({
  product,
  onClose,
  onSave,
  isNew,
}) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    title: product.title || "",
    category: product.category || "",
    slug: product.slug || "",
    description: product.description || "",
    fullDescription: product.fullDescription || "",
    imageUrl: product.imageUrl || "",
    additionalImages: product.additionalImages || [],
    specs: product.specs || [],
    order: product.order || 0,
  });

  const [uploading, setUploading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "imageUrl" | "additionalImages",
    index?: number,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      try {
        const url = await uploadImageToStorage(file, "products/");
        if (field === "imageUrl") {
          setFormData({ ...formData, [field]: url });
        } else if (field === "additionalImages") {
          const newImages = [...(formData.additionalImages || [])];
          if (index !== undefined) {
            newImages[index] = url;
          } else {
            newImages.push(url);
          }
          setFormData({ ...formData, additionalImages: newImages });
        }
      } catch (err: any) {
        alert(`업로드 실패: ${err.message}`);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
          <h2 className="text-xl font-bold text-gray-900">
            {isNew ? "새 제품 등록" : "제품 상세 수정"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8 flex-1">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  대표 이미지 *
                </label>
                <div className="aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 relative flex items-center justify-center">
                  {uploading ? (
                    <div className="text-brand-blue flex flex-col items-center">
                      <Loader2 className="w-6 h-6 animate-spin" />
                    </div>
                  ) : formData.imageUrl ? (
                    <img
                      src={formData.imageUrl}
                      alt="대표"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400">이미지 없음</div>
                  )}
                  <label
                    className={`absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer group ${uploading ? "pointer-events-none" : ""}`}
                  >
                    <span className="bg-white/90 text-gray-900 px-3 py-1.5 rounded-lg font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <Upload className="w-4 h-4" /> 찾기
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, "imageUrl")}
                      disabled={uploading}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  추가 이미지 상세
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(formData.additionalImages || []).map((url, i) => (
                    <div
                      key={i}
                      className="aspect-square relative rounded-lg border border-gray-200 overflow-hidden group"
                    >
                      <img
                        src={url}
                        alt={`추가 ${i}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [
                            ...(formData.additionalImages || []),
                          ];
                          updated.splice(i, 1);
                          setFormData({
                            ...formData,
                            additionalImages: updated,
                          });
                        }}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-square flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 text-gray-400 hover:text-brand-blue hover:border-brand-blue cursor-pointer transition-colors bg-gray-50">
                    <Plus className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-medium">추가</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, "additionalImages")}
                      disabled={uploading}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  제품명 *
                </label>
                <input
                  required
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    카테고리
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Slug (URL 식별자) *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="예: auto-parts"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  짧은 요약 설명 (목록용) *
                </label>
                <textarea
                  required
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg p-3 resize-none"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  상세 설명 (상세페이지용)
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 resize-none"
                  value={formData.fullDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullDescription: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-bold text-gray-700">
                상세 스펙 / 정보
              </label>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    specs: [
                      ...(formData.specs || []),
                      { label: "", value: "" },
                    ],
                  })
                }
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg flex items-center font-bold"
              >
                <Plus className="w-3 h-3 mr-1" /> 스펙 추가
              </button>
            </div>
            <div className="space-y-2">
              {(formData.specs || []).length === 0 && (
                <div className="text-sm text-gray-400 text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                  등록된 정보가 없습니다. 스펙을 추가해보세요.
                </div>
              )}
              {(formData.specs || []).map((spec, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="항목 (예: 재질)"
                    className="w-1/3 border border-gray-300 rounded-lg p-2 text-sm"
                    value={spec.label}
                    onChange={(e) => {
                      const newSpecs = [...(formData.specs || [])];
                      newSpecs[i].label = e.target.value;
                      setFormData({ ...formData, specs: newSpecs });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="내용 (예: AL6061)"
                    className="flex-1 border border-gray-300 rounded-lg p-2 text-sm"
                    value={spec.value}
                    onChange={(e) => {
                      const newSpecs = [...(formData.specs || [])];
                      newSpecs[i].value = e.target.value;
                      setFormData({ ...formData, specs: newSpecs });
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newSpecs = [...(formData.specs || [])];
                      newSpecs.splice(i, 1);
                      setFormData({ ...formData, specs: newSpecs });
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 flex justify-end gap-3 sticky bottom-0 bg-white border-t border-gray-100 p-4 -mx-6 -mb-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={uploading}
              className="px-6 py-2.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-blue-900 transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> {isNew ? "등록하기" : "저장하기"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProductModal;
